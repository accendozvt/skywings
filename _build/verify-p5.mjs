/** Phase 5 verification: h1 count, heading order, img alts, favicon set,
    manifest, skip link, landmarks, no generic link text. */
import fs from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const APP = join(dirname(fileURLToPath(import.meta.url)), '..', 'next-app');
const OUT = join(APP, 'out');
const problems = [];

const pages = [];
(function walk(dir, rel = '') {
  for (const e of fs.readdirSync(dir)) {
    const p = join(dir, e);
    if (fs.statSync(p).isDirectory()) { if (e !== '_next' && e !== 'assets') walk(p, rel + '/' + e); }
    else if (e === 'index.html') pages.push({ slug: rel.replace(/^\//, '') || '(home)', file: p });
  }
})(OUT);

for (const { slug, file } of pages) {
  const html = fs.readFileSync(file, 'utf8');
  const main = (html.match(/<main[^>]*>([\s\S]*)<\/main>/) || [, html])[1];
  // one h1
  const h1s = (main.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1 && slug !== '404') problems.push(`${slug}: ${h1s} h1s`);
  // heading order
  const seq = [...main.matchAll(/<h([1-6])[\s>]/g)].map((m) => +m[1]);
  let prev = 0;
  seq.forEach((l, i) => { if (prev > 0 && l > prev + 1) problems.push(`${slug}: heading skip h${prev}->h${l} (pos ${i})`); prev = l; });
  // img alts
  for (const m of main.matchAll(/<img\b[^>]*>/g)) {
    const t = m[0];
    if (t.includes("'+") || t.includes("' +")) continue;
    const alt = t.match(/alt="([^"]*)"/);
    const src = (t.match(/src="([^"]*)"/) || [])[1] || '';
    if (src.startsWith('data:')) continue;
    if (!alt) problems.push(`${slug}: img without alt: ${t.slice(0, 60)}`);
  }
  // generic link text
  for (const m of main.matchAll(/<a\b[^>]*>((?:(?!<\/a>)[\s\S]){0,150}?)<\/a>/g)) {
    const tag = m[0];
    const text = m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (/^(learn more|read more|click here|view details|know more|read article)\s*→?$/i.test(text) && !/aria-label/.test(tag))
      problems.push(`${slug}: generic link "${text}" without aria-label`);
  }
  // landmarks + skip link
  if (!/<header/.test(html)) problems.push(`${slug}: no <header>`);
  if (!/<main/.test(html)) problems.push(`${slug}: no <main>`);
  if (!/<footer/.test(html)) problems.push(`${slug}: no <footer>`);
  if (!/skip-link/.test(html)) problems.push(`${slug}: no skip link`);
  if (!/<nav[^>]*aria-label/.test(html)) problems.push(`${slug}: nav without aria-label`);
}

// favicons + manifest in output
for (const f of ['favicon.ico', 'favicon.svg', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png', 'manifest.webmanifest']) {
  if (!fs.existsSync(join(OUT, f))) problems.push(`missing /${f}`);
}
const home = fs.readFileSync(join(OUT, 'index.html'), 'utf8');
for (const need of ['rel="icon" href="/favicon.ico"', 'href="/favicon.svg"', 'rel="apple-touch-icon"', 'rel="manifest"']) {
  if (!home.includes(need)) problems.push(`home head missing: ${need}`);
}
const mf = JSON.parse(fs.readFileSync(join(OUT, 'manifest.webmanifest'), 'utf8'));
for (const k of ['name', 'short_name', 'icons', 'theme_color', 'background_color', 'display', 'start_url']) {
  if (!mf[k]) problems.push(`manifest missing ${k}`);
}

console.log(`checked ${pages.length} pages`);
console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'PHASE 5 VERIFIED ✓');
process.exit(problems.length ? 1 : 0);
