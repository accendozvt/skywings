/** Phase 1 verification: every public page has exactly one of each core tag,
    and no two pages share a title, description or canonical. */
import fs from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'next-app', 'out');
const PRIVATE = new Set(['skywings-feedback-form', '404']);

const pages = [];
function walk(dir, rel = '') {
  for (const e of fs.readdirSync(dir)) {
    const p = join(dir, e);
    if (fs.statSync(p).isDirectory()) { if (e !== '_next' && e !== 'assets') walk(p, rel + '/' + e); }
    else if (e === 'index.html') pages.push({ slug: rel.replace(/^\//, '') || '(home)', file: p });
  }
}
walk(OUT);

const problems = [];
const seen = { title: new Map(), desc: new Map(), canonical: new Map() };
const count = (html, re) => (html.match(re) || []).length;

for (const { slug, file } of pages) {
  const html = fs.readFileSync(file, 'utf8');
  const isPrivate = PRIVATE.has(slug);
  const one = (name, re) => { const n = count(html, re); if (n !== 1) problems.push(`${slug}: ${name} count=${n}`); };

  one('charset', /<meta charSet="utf-8"\/?>/gi);
  one('viewport', /<meta name="viewport"/g);
  one('title', /<title>/g);
  one('description', /<meta name="description"/g);
  one('theme-color', /<meta name="theme-color"/g);
  if (!/<html lang="en"/.test(html)) problems.push(`${slug}: html lang missing`);
  const headIdx = html.indexOf('<head>');
  if (headIdx === -1 || !/^<head><meta charSet="utf-8"\/?>/i.test(html.slice(headIdx, headIdx + 40)))
    problems.push(`${slug}: charset is not first head element: ${html.slice(headIdx, headIdx + 70)}`);

  if (!isPrivate) {
    one('canonical', /<link rel="canonical"/g);
    if (!/name="robots" content="index, follow"/.test(html)) problems.push(`${slug}: robots meta wrong`);
    if (!/max-image-preview:large/.test(html)) problems.push(`${slug}: max-image-preview missing`);
    const t = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
    const d = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
    const c = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
    for (const [key, val] of [['title', t], ['desc', d], ['canonical', c]]) {
      if (!val) { problems.push(`${slug}: missing ${key}`); continue; }
      if (seen[key].has(val)) problems.push(`${slug}: DUPLICATE ${key} with ${seen[key].get(val)}: "${val.slice(0, 60)}"`);
      seen[key].set(val, slug);
    }
    if (t && t.length > 68) problems.push(`${slug}: title ${t.length} chars: "${t}"`);
    if (d && (d.length < 100 || d.length > 175)) problems.push(`${slug}: desc ${d.length} chars`);
    if (c && !c.startsWith('https://skywingsacademy.com/')) problems.push(`${slug}: canonical not absolute prod: ${c}`);
    if (c && !c.endsWith('/')) problems.push(`${slug}: canonical missing trailing slash: ${c}`);
  } else {
    if (!/noindex/.test(html)) problems.push(`${slug}: PRIVATE page missing noindex`);
  }
}

console.log(`checked ${pages.length} pages`);
console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'PHASE 1 VERIFIED ✓ (all tags present once, all titles/descriptions/canonicals unique)');
process.exit(problems.length ? 1 : 0);
