/** Phase 2 verification: full OG/Twitter set on every public page, absolute
    image URLs that resolve to real files in the build output. */
import fs from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'next-app', 'out');
const PRIVATE = new Set(['skywings-feedback-form', '404']);

const pages = [];
(function walk(dir, rel = '') {
  for (const e of fs.readdirSync(dir)) {
    const p = join(dir, e);
    if (fs.statSync(p).isDirectory()) { if (e !== '_next' && e !== 'assets') walk(p, rel + '/' + e); }
    else if (e === 'index.html') pages.push({ slug: rel.replace(/^\//, '') || '(home)', file: p });
  }
})(OUT);

const NEED_OG = ['og:type', 'og:site_name', 'og:locale', 'og:url', 'og:title', 'og:description', 'og:image', 'og:image:width', 'og:image:height', 'og:image:alt', 'og:image:type'];
const NEED_TW = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image', 'twitter:image:alt'];
const problems = [];
let sample = '';

for (const { slug, file } of pages) {
  if (PRIVATE.has(slug)) continue;
  const html = fs.readFileSync(file, 'utf8');
  for (const t of NEED_OG) if (!html.includes(`property="${t}"`)) problems.push(`${slug}: missing ${t}`);
  for (const t of NEED_TW) if (!html.includes(`name="${t}"`)) problems.push(`${slug}: missing ${t}`);
  // image URLs absolute + resolve on disk
  for (const m of html.matchAll(/property="og:image" content="([^"]+)"|name="twitter:image" content="([^"]+)"/g)) {
    const u = m[1] || m[2];
    if (!u.startsWith('https://skywingsacademy.com/')) { problems.push(`${slug}: og image not absolute: ${u}`); continue; }
    const local = join(OUT, u.replace('https://skywingsacademy.com', '').split('?')[0]);
    if (!fs.existsSync(local)) problems.push(`${slug}: og image 404 in build: ${u}`);
  }
  if (slug === '(home)') {
    sample = [...html.matchAll(/<meta (?:property|name)="((?:og|twitter):[^"]*)" content="([^"]{0,90})"/g)]
      .map((m) => `  ${m[1]} = ${m[2]}`).join('\n');
  }
}

console.log('HOME OG/TWITTER BLOCK:\n' + sample + '\n');
console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : `PHASE 2 VERIFIED ✓ (${pages.length - 2} public pages, all OG/Twitter tags, absolute resolving image URLs)`);
process.exit(problems.length ? 1 : 0);
