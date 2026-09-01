/** Postbuild HTML optimizer for the static export (out/):
 *  - strips the React/Next runtime (chunk scripts, RSC flight payload,
 *    script preloads) — behaviors ship as /js/site.js (vanilla, deferred)
 *  - strips the head image-preload storm; re-adds ONE preload for the
 *    page's LCP image (responsive, webp)
 *  - inlines the page's CSS (removes render-blocking stylesheets)
 *  - rewrites <img>: responsive webp srcset/sizes, lazy+async below the
 *    fold, fetchpriority=high on the LCP image
 *  - feedback page gets its Chart.js + form scripts back (next/script
 *    can't run without the runtime)
 */
import fs from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, '..', 'next-app', 'out');
const DIMS = JSON.parse(fs.readFileSync(join(HERE, 'image-dims.json'), 'utf8'));

const SIZES_DEFAULT = '(max-width: 767px) 94vw, (max-width: 1199px) 46vw, 640px';
const SIZES_HERO = '(max-width: 767px) 94vw, 640px';

const cssCache = new Map();
const readCss = (href) => {
  if (!cssCache.has(href)) cssCache.set(href, fs.readFileSync(join(OUT, href.split('?')[0]), 'utf8'));
  return cssCache.get(href);
};

function srcsetFor(file) {
  const d = DIMS[file];
  if (!d || !d.variants.length) return null;
  const base = file.replace(/\.(png|jpe?g|webp)$/i, '');
  const parts = d.variants.map((w) => `/assets/images/v/${base}.w${w}.webp ${w}w`);
  parts.push(`/assets/images/${file} ${d.w}w`);
  return parts.join(', ');
}

const pages = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir)) {
    const p = join(dir, e);
    if (fs.statSync(p).isDirectory()) { if (e !== '_next' && e !== 'assets' && e !== 'js') walk(p); }
    else if (e.endsWith('.html')) pages.push(p);
  }
})(OUT);

let totalSaved = 0;
for (const file of pages) {
  let html = fs.readFileSync(file, 'utf8');
  const before = html.length;
  const isFeedback = file.includes('skywings-feedback-form');

  /* 1. strip runtime scripts + flight payload + script preloads */
  html = html.replace(/<script src="\/_next\/[^"]*"[^>]*><\/script>/g, '');
  html = html.replace(/<script>\(?self\.__next_f[\s\S]*?<\/script>/g, '');
  html = html.replace(/<link rel="preload"[^>]*as="script"[^>]*\/>/g, '');
  html = html.replace(/<link rel="preload"[^>]*as="image"[^>]*\/>/g, '');

  /* 2. inline stylesheets (order preserved, single style tag at first link) */
  const links = [...html.matchAll(/<link rel="stylesheet" href="(\/_next\/static\/css\/[^"]+)"[^>]*\/>/g)];
  if (links.length) {
    const css = links.map((m) => readCss(m[1])).join('\n');
    html = html.replace(links[0][0], `<style>${css}</style>`);
    for (const m of links.slice(1)) html = html.replace(m[0], '');
  }

  /* 3. images: srcset + lazy; first content image = LCP */
  const mainIdx = html.indexOf('<main');
  let lcpDone = false;
  let lcpPreload = '';
  html = html.replace(/<img\b[^>]*\/?>(?!<\/picture>)/g, (tag, offset) => {
    const srcM = tag.match(/src="\/assets\/images\/([^"?]+)"/);
    if (!srcM) return tag;
    const fname = srcM[1];
    if (fname.startsWith('v/') || fname.endsWith('.svg')) return tag;
    const srcset = srcsetFor(fname);
    const inMain = offset > mainIdx && mainIdx !== -1;
    const isLogo = tag.includes('skywings-aviation-academy-logo');
    let out = tag;
    const isLcp = inMain && !lcpDone && !isLogo;
    if (srcset && !out.includes('srcset=')) {
      const sizes = isLcp ? SIZES_HERO : isLogo ? '180px' : SIZES_DEFAULT;
      out = out.replace('<img', `<img srcset="${srcset}" sizes="${sizes}"`);
    }
    // intrinsic dimensions prevent layout shift as lazy images stream in
    const d = DIMS[fname];
    if (d && !/\swidth=/.test(out)) out = out.replace('<img', `<img width="${d.w}" height="${d.h}"`);
    if (isLcp) {
      lcpDone = true;
      if (!out.includes('fetchpriority') && !out.includes('fetchPriority')) out = out.replace('<img', '<img fetchpriority="high"');
      out = out.replace(/\sloading="lazy"/, '');
      if (srcset) {
        const sizes = SIZES_HERO;
        lcpPreload = `<link rel="preload" as="image" imagesrcset="${srcset}" imagesizes="${sizes}"/>`;
      }
    } else if (inMain || tag.includes('swf-')) {
      if (!out.includes('loading=')) out = out.replace('<img', '<img loading="lazy"');
      if (!out.includes('decoding=')) out = out.replace('<img', '<img decoding="async"');
    }
    return out;
  });
  if (lcpPreload) html = html.replace('</head>', lcpPreload + '</head>');

  /* 4. behaviors */
  const scripts = isFeedback
    ? '<script defer src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script><script defer src="/js/feedback-form.js"></script><script defer src="/js/site.js"></script>'
    : '<script defer src="/js/site.js"></script>';
  html = html.replace('</body>', scripts + '</body>');

  fs.writeFileSync(file, html);
  totalSaved += before - html.length;
}

/* prune the now-unreferenced JS chunks from the deploy output (keep css+media for fonts) */
const chunks = join(OUT, '_next', 'static', 'chunks');
if (fs.existsSync(chunks)) fs.rmSync(chunks, { recursive: true, force: true });

console.log(`optimized ${pages.length} html files; ${Math.round(totalSaved / 1024)}KB of runtime/flight payload removed; chunks pruned`);
