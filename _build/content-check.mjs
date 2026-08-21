/** Content check against the production server: each page has an <h1>,
    every local image/asset it references exists on disk, and key
    interactive sections rendered server-side (blog cards, homepage news). */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUB = join(ROOT, 'next-app', 'public');
const DIST = join(ROOT, 'dist');
const BASE = 'http://localhost:3200';

const files = readdirSync(DIST).filter((f) => f.endsWith('.html') && f !== '404.html');
const problems = [];
let assetsChecked = 0;

for (const f of files) {
  const slug = f === 'index.html' ? '' : f.replace(/\.html$/, '');
  const url = slug ? `${BASE}/${slug}/` : `${BASE}/`;
  const html = await (await fetch(url)).text();

  if (!/<h1[\s>]/.test(html)) problems.push(`${slug || '(home)'}: no <h1>`);

  // local asset references must exist in public/
  for (const m of html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)) {
    assetsChecked++;
    const p = join(PUB, decodeURIComponent(m[1]));
    if (!existsSync(p)) problems.push(`${slug || '(home)'}: missing asset ${m[1]}`);
  }
}

// interactive sections rendered server-side
const blog = await (await fetch(`${BASE}/articles-and-news/`)).text();
const blogCards = (blog.match(/blg-card__title/g) || []).length;
if (blogCards < 5) problems.push(`blog listing: only ${blogCards} cards rendered (expected 5)`);

const home = await (await fetch(`${BASE}/`)).text();
const newsCards = (home.match(/sw-blog-card__title/g) || []).length;
if (newsCards < 4) problems.push(`homepage news: only ${newsCards} cards (expected 4)`);
if (!home.includes('sw-enquiry-form')) problems.push('homepage: enquiry form missing');

console.log(`\nCONTENT CHECK: ${files.length} pages, ${assetsChecked} asset refs verified`);
console.log(`blog cards: ${blogCards}, homepage news cards: ${newsCards}`);
console.log(problems.length ? '\nPROBLEMS:\n' + problems.join('\n') : 'ALL CONTENT CHECKS PASSED ✓');
