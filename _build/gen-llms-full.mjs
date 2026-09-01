/** Generate out/llms-full.txt: full plain-text of every public page with
    "## <Page title>" headers (site is well under 50 pages). Runs postbuild. */
import fs from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, '..', 'next-app', 'out');
const PRIVATE = new Set(['skywings-feedback-form', '404']);

const pages = [];
(function walk(dir, rel = '') {
  for (const e of fs.readdirSync(dir)) {
    const p = join(dir, e);
    if (fs.statSync(p).isDirectory()) { if (e !== '_next' && e !== 'assets') walk(p, rel + '/' + e); }
    else if (e === 'index.html') pages.push({ slug: rel.replace(/^\//, ''), file: p });
  }
})(OUT);
pages.sort((a, b) => (a.slug === '' ? -1 : b.slug === '' ? 1 : a.slug.localeCompare(b.slug)));

const text = (html) => html
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ')
  .trim();

let doc = '# SkyWings Aviation Academy — full site content\n';
for (const { slug, file } of pages) {
  if (PRIVATE.has(slug)) continue;
  const html = fs.readFileSync(file, 'utf8');
  const title = (html.match(/<title>([^<]*)<\/title>/) || [, slug])[1];
  const main = (html.match(/<main[^>]*>([\s\S]*?)<\/main>/) || [, html])[1];
  doc += `\n## ${title}\nURL: https://skywingsacademy.com/${slug ? slug + '/' : ''}\n\n${text(main)}\n`;
}
fs.writeFileSync(join(OUT, 'llms-full.txt'), doc);
console.log(`llms-full.txt: ${pages.length - 2} pages, ${Math.round(doc.length / 1024)}KB`);
