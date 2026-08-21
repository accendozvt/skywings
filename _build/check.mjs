/** Crawl dist/: verify every internal href/src resolves to a real file. */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

function* htmlFiles(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) yield* htmlFiles(p);
    else if (e.endsWith('.html')) yield p;
  }
}

const problems = [];
let pages = 0, links = 0, assets = 0;

for (const file of htmlFiles(DIST)) {
  pages++;
  const html = readFileSync(file, 'utf8');
  const rel = file.slice(DIST.length);

  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const u = m[1];
    if (/^(https?:|mailto:|tel:|#|javascript:|data:)/.test(u)) continue;
    if (/YOUR-|\+ ?(img|p\.link) ?\+/.test(u)) continue; // comment examples / JS templates
    const path = u.split('#')[0].split('?')[0];
    if (!path) continue;
    if (path.startsWith('/assets/')) {
      assets++;
      if (!existsSync(join(DIST, decodeURIComponent(path)))) problems.push(`${rel}: missing asset ${u}`);
    } else {
      links++;
      // flat-file convention: /slug or /slug/ -> slug.html ; / -> index.html ;
      // paths already carrying a real extension (sitemap.xml, etc.) as-is
      const trimmed = path.replace(/\/+$/, '');
      const target = trimmed === ''
        ? join(DIST, 'index.html')
        : /\.[a-z0-9]{2,4}$/i.test(trimmed)
          ? join(DIST, trimmed)
          : join(DIST, trimmed + '.html');
      if (!existsSync(target)) problems.push(`${rel}: dead link ${u}`);
    }
  }
  // sanity: every page has full meta set
  if (!/<title>[^<]+<\/title>/.test(html)) problems.push(`${rel}: missing <title>`);
  if (!/<meta name="description"/.test(html)) problems.push(`${rel}: missing meta description`);
  if (!/<link rel="canonical"/.test(html)) problems.push(`${rel}: missing canonical`);
  if (!/<meta charset=/.test(html)) problems.push(`${rel}: missing charset`);
  if (!/<meta name="viewport"/.test(html)) problems.push(`${rel}: missing viewport`);
  for (const t of ['og:type', 'og:title', 'og:description', 'og:url', 'og:image']) {
    if (!html.includes(`property="${t}"`)) problems.push(`${rel}: missing ${t}`);
  }
  for (const t of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
    if (!html.includes(`name="${t}"`)) problems.push(`${rel}: missing ${t}`);
  }
  // no em dashes anywhere in output
  if (/—|&mdash;|&#8212;/.test(html)) problems.push(`${rel}: em dash remains`);
  // every img has non-empty alt
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    if (tag.includes("' +") || tag.includes("'+")) continue; // JS template
    const alt = tag.match(/alt="([^"]*)"/);
    if (!alt || !alt[1].trim()) problems.push(`${rel}: img missing alt: ${tag.slice(0, 80)}`);
  }
  // sanity: no old palette remains
  for (const c of ['#001f54', '#1282a2', '#034078', '#0a1128', '#0e6d87', 'rgba(18,130,162', 'rgba(0,31,84']) {
    if (html.toLowerCase().includes(c.toLowerCase())) { problems.push(`${rel}: old brand color ${c}`); break; }
  }
}

// required root files
for (const f of ['sitemap.xml', 'robots.txt', 'llms.txt', '.htaccess', '_redirects', '404.html', join('assets', 'opengraph', 'preview.webp')]) {
  if (!existsSync(join(DIST, f))) problems.push(`missing root file: ${f}`);
}
// noindexed pages excluded from sitemap, present in robots disallow
const sitemap = readFileSync(join(DIST, 'sitemap.xml'), 'utf8');
const robots = readFileSync(join(DIST, 'robots.txt'), 'utf8');
for (const s of ['skywings-feedback-form', '404']) {
  if (sitemap.includes(`/${s}/`)) problems.push(`sitemap contains noindexed page ${s}`);
  if (!robots.includes(`Disallow: /${s}/`)) problems.push(`robots.txt missing disallow for ${s}`);
}

console.log(`pages=${pages} internalLinks=${links} assetRefs=${assets}`);
console.log(problems.length ? problems.join('\n') : 'ALL CHECKS PASSED');
