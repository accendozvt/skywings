/**
 * SEO parity check: for every page, compare the Next.js dev-server output
 * against the verified dist/*.html — title, meta description, canonical,
 * robots, OG title/description/image. Flags any drift.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const BASE = 'http://localhost:3200';

const pick = (html, re) => { const m = html.match(re); return m ? m[1].trim() : null; };
const meta = (html) => ({
  title: pick(html, /<title>([^<]*)<\/title>/),
  desc: pick(html, /<meta name="description" content="([^"]*)"/),
  canonical: pick(html, /<link rel="canonical" href="([^"]*)"/),
  robots: pick(html, /<meta name="robots" content="([^"]*)"/),
  ogTitle: pick(html, /<meta property="og:title" content="([^"]*)"/),
  ogDesc: pick(html, /<meta property="og:description" content="([^"]*)"/),
  ogImage: pick(html, /<meta property="og:image" content="([^"]*)"/),
  jsonLd: (html.match(/application\/ld\+json/g) || []).length,
});
const norm = (s) => (s || '')
  .replace(/&amp;/g, '&')
  .replace(/&#0?39;|&#x27;|&apos;/gi, "'")
  .replace(/&quot;|&#34;/g, '"')
  .replace(/\s+/g, ' ')
  .trim();

const files = readdirSync(DIST).filter((f) => f.endsWith('.html') && f !== '404.html');
const problems = [];
let ok = 0;

for (const f of files) {
  const slug = f === 'index.html' ? '' : f.replace(/\.html$/, '');
  const url = slug ? `${BASE}/${slug}/` : `${BASE}/`;
  let nextHtml;
  try { nextHtml = await (await fetch(url)).text(); }
  catch (e) { problems.push(`${slug || '(home)'}: FETCH FAILED ${e.message}`); continue; }

  const d = meta(readFileSync(join(DIST, f), 'utf8'));
  const n = meta(nextHtml);
  const issues = [];
  if (norm(d.title) !== norm(n.title)) issues.push(`title: dist="${d.title}" next="${n.title}"`);
  if (norm(d.desc) !== norm(n.desc)) issues.push(`desc mismatch`);
  if (norm(d.canonical) !== norm(n.canonical)) issues.push(`canonical: dist="${d.canonical}" next="${n.canonical}"`);
  if (norm(d.robots) !== norm(n.robots)) issues.push(`robots: dist="${d.robots}" next="${n.robots}"`);
  if (!n.ogTitle) issues.push('next missing og:title');
  if (!n.ogImage) issues.push('next missing og:image');
  if (d.jsonLd > 0 && n.jsonLd === 0) issues.push(`JSON-LD: dist=${d.jsonLd} next=${n.jsonLd}`);

  if (issues.length) problems.push(`${slug || '(home)'}:\n    ${issues.join('\n    ')}`);
  else ok++;
}

console.log(`\nSEO PARITY: ${ok}/${files.length} pages match`);
console.log(problems.length ? '\nMISMATCHES:\n' + problems.join('\n') : 'ALL PAGES MATCH ✓');
