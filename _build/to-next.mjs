/**
 * Codegen: transform each verified dist/<slug>.html into a native Next.js
 * App Router page — a real .jsx component + co-located .css. Content is
 * derived from the already-correct dist output, so copy/SEO/JSON-LD match
 * exactly; only the mechanical HTML->JSX transform is automated here.
 *
 * Interactive forms are re-wired separately as client components.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const APP = join(ROOT, 'next-app', 'app');

// Pages handled by hand (keep those versions): interactive pages whose JSX is
// hand-finished with client islands (forms, blog grid, homepage news).
const SKIP = new Set([
  '404.html', 'privacy-policy.html',
  'index.html', 'articles-and-news.html', 'contact.html',
  'skywings-feedback-form.html', 'no1-aviation-institute-in-kerala.html',
  'airline-campus-interview-2026-cabin-crew-recruitment.html',
]);

const OG_PREVIEW = '/assets/opengraph/preview.webp';

/* ── attribute rename maps ── */
const ATTR = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', autocomplete: 'autoComplete',
  maxlength: 'maxLength', minlength: 'minLength', readonly: 'readOnly', colspan: 'colSpan',
  rowspan: 'rowSpan', contenteditable: 'contentEditable', spellcheck: 'spellCheck',
  novalidate: 'noValidate', inputmode: 'inputMode', enterkeyhint: 'enterKeyHint',
  crossorigin: 'crossOrigin', autofocus: 'autoFocus', autoplay: 'autoPlay',
  playsinline: 'playsInline', allowfullscreen: 'allowFullScreen', frameborder: 'frameBorder',
  referrerpolicy: 'referrerPolicy', srcset: 'srcSet', datetime: 'dateTime', accesskey: 'accessKey',
  // SVG
  'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap', 'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray', 'stroke-dashoffset': 'strokeDashoffset',
  'stroke-miterlimit': 'strokeMiterlimit', 'stroke-opacity': 'strokeOpacity',
  'fill-opacity': 'fillOpacity', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule',
  'clip-path': 'clipPath', 'stop-color': 'stopColor', 'stop-opacity': 'stopOpacity',
  'text-anchor': 'textAnchor', 'xlink:href': 'xlinkHref',
};
const VOID_EL = ['img', 'br', 'hr', 'input', 'meta', 'source', 'area', 'base', 'col', 'embed', 'link', 'param', 'track', 'wbr'];

function toCamel(prop) {
  prop = prop.trim();
  if (prop.startsWith('--')) return JSON.stringify(prop);
  let vendor = '';
  const m = prop.match(/^-(webkit|moz|ms|o)-/);
  if (m) { vendor = m[1] === 'ms' ? 'ms' : m[1].charAt(0).toUpperCase() + m[1].slice(1); prop = prop.slice(m[0].length); }
  const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  return vendor ? vendor + camel.charAt(0).toUpperCase() + camel.slice(1) : camel;
}

function styleToObj(css) {
  const decls = css.split(';').map((d) => d.trim()).filter(Boolean).map((d) => {
    const i = d.indexOf(':');
    if (i === -1) return null;
    const key = toCamel(d.slice(0, i));
    let val = d.slice(i + 1).trim()
      .replace(/'Sora'/g, 'var(--font-sora)')
      .replace(/'Instrument Sans'/g, 'var(--font-body)')
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'");
    return `${key}: '${val}'`;
  }).filter(Boolean);
  return `{{ ${decls.join(', ')} }}`;
}

function htmlToJsx(html) {
  // 1. remove comments
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  // 2. strip inline event handlers
  html = html.replace(/\son[a-zA-Z]+="[^"]*"/g, '').replace(/\son[a-zA-Z]+='[^']*'/g, '');
  // 3. drop xml:space / xmlns:xlink (not needed, awkward in JSX)
  html = html.replace(/\sxml:space="[^"]*"/g, '').replace(/\sxmlns:xlink="[^"]*"/g, '');
  // 4. escape stray braces in content BEFORE we introduce JSX braces
  html = html.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
  // 5. convert style="" -> style={{...}}
  html = html.replace(/style="([^"]*)"/g, (_, css) => `style=${styleToObj(css)}`);
  html = html.replace(/style='([^']*)'/g, (_, css) => `style=${styleToObj(css)}`);
  // 6. rename attributes
  for (const [from, to] of Object.entries(ATTR)) {
    html = html.replace(new RegExp(`(\\s)${from.replace(':', '\\:')}=`, 'g'), `$1${to}=`);
  }
  // 7. self-close void elements
  for (const el of VOID_EL) {
    html = html.replace(new RegExp(`<${el}(\\s[^>]*?)?\\s*/?>`, 'gi'), (m, attrs) => `<${el}${attrs || ''} />`);
  }
  return html.trim();
}

function extractOgImage(head) {
  const imgs = [...head.matchAll(/<meta property="og:image" content="([^"]+)"/g)].map((m) => m[1]);
  for (const u of imgs) {
    const path = u.replace(/^https?:\/\/[^/]+/, '');
    if (path !== OG_PREVIEW) return path; // page-specific featured image
  }
  return null;
}

function convert(file) {
  const slug = file === 'index.html' ? '' : file.replace(/\.html$/, '');
  const raw = readFileSync(join(DIST, file), 'utf8');

  const head = raw.slice(0, raw.indexOf('</head>'));
  const ogImage = extractOgImage(head);

  let main = raw.match(/<main id="main">([\s\S]*?)<\/main>/);
  main = main ? main[1] : '';

  // strip the homepage's inline mobile widget (now a layout component)
  main = main.replace(/<div class="skywings-mobile-widget"[\s\S]*?<\/div>\s*(?=<style>|<script|$)/g, '');

  // extract <style> blocks -> page css
  const styles = [];
  main = main.replace(/<style>([\s\S]*?)<\/style>/g, (_, css) => { styles.push(css); return ''; });
  let css = styles.join('\n')
    .replace(/'Sora',\s*sans-serif/g, 'var(--font-sora)')
    .replace(/'Instrument Sans',\s*sans-serif/g, 'var(--font-body)')
    .replace(/'Sora'/g, 'var(--font-sora)')
    .replace(/'Instrument Sans'/g, 'var(--font-body)')
    // `overflow-x: hidden` forces the browser to compute `overflow-y: auto`,
    // which flashes a stray vertical scrollbar during scroll-reveal animations.
    // `overflow-x: clip` prevents horizontal overflow without that side effect.
    .replace(/overflow-x:\s*hidden/g, 'overflow-x: clip');

  // extract JSON-LD scripts
  const jsonld = [];
  main = main.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (_, j) => { jsonld.push(j.trim()); return ''; });

  // drop any remaining scripts (behavior re-added as client islands)
  const droppedScripts = [];
  main = main.replace(/<script[\s\S]*?<\/script>/g, (m) => { droppedScripts.push(m); return ''; });
  // some source fragments end with a truncated/unclosed <script> — strip to end
  main = main.replace(/<script[\s\S]*$/i, (m) => { droppedScripts.push(m); return ''; });

  let jsx = htmlToJsx(main);
  // Fix hand-authored trailing imbalance: browsers tolerate extra </div>, JSX won't
  const opens = (jsx.match(/<div(\s|>)/g) || []).length;
  let extra = (jsx.match(/<\/div>/g) || []).length - opens;
  while (extra > 0) { jsx = jsx.replace(/\s*<\/div>\s*$/, ''); extra--; }

  // component name
  const comp = 'Page_' + (slug || 'home').replace(/[^a-zA-Z0-9]/g, '_');
  const metaArg = ogImage ? `'${slug}', { ogImage: '${ogImage}' }` : `'${slug}'`;

  const jsonldTags = jsonld.map((j, i) =>
    `      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(j)} }} />`
  ).join('\n');

  const out = `import { pageMetadata } from '@/lib/seo';
import './page.css';

export const metadata = pageMetadata(${metaArg});

export default function ${comp}() {
  return (
    <>
${jsonldTags}
${jsx}
    </>
  );
}
`;

  const dir = slug ? join(APP, slug) : APP;
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'page.jsx'), out, 'utf8');
  writeFileSync(join(dir, 'page.css'), css, 'utf8');

  return { slug: slug || '(home)', styleKB: (css.length / 1024).toFixed(1), scripts: droppedScripts.length, jsonld: jsonld.length, ogImage };
}

const files = readdirSync(DIST).filter((f) => f.endsWith('.html') && !SKIP.has(f));
const report = [];
for (const f of files) {
  try { report.push(convert(f)); }
  catch (e) { console.error(`FAIL ${f}: ${e.message}`); }
}
console.table(report);
console.log(`\nConverted ${report.length} pages. Pages with dropped scripts (need interactivity review):`);
console.log(report.filter((r) => r.scripts > 0).map((r) => `  ${r.slug} (${r.scripts})`).join('\n') || '  none');
