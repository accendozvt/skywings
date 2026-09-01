/** Phase 3 verification: sitemap XML valid + complete, robots consistency,
    llms files, noindex + no-OG on private pages. */
import fs from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'next-app', 'out');
const problems = [];

// sitemap
const sm = fs.readFileSync(join(OUT, 'sitemap.xml'), 'utf8');
if (!sm.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) problems.push('sitemap: missing xml decl');
if (!sm.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) problems.push('sitemap: missing namespace');
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const lastmods = [...sm.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
if (urls.length !== 23) problems.push(`sitemap: ${urls.length} urls (expected 23)`);
if (lastmods.length !== urls.length) problems.push('sitemap: lastmod missing on some urls');
if (sm.includes('<priority>') || sm.includes('<changefreq>')) problems.push('sitemap: contains priority/changefreq');
const uniqueDates = new Set(lastmods.map((d) => d.slice(0, 10)));
for (const u of urls) {
  if (!u.startsWith('https://skywingsacademy.com/')) problems.push('sitemap: non-canonical url ' + u);
  if (u.includes('?')) problems.push('sitemap: query url ' + u);
  if (/skywings-feedback-form|\/404\//.test(u)) problems.push('sitemap: PRIVATE url ' + u);
  const local = join(OUT, u.replace('https://skywingsacademy.com', ''), 'index.html');
  if (!fs.existsSync(local)) problems.push('sitemap: url has no build output ' + u);
}

// robots
const rb = fs.readFileSync(join(OUT, 'robots.txt'), 'utf8');
for (const need of ['Sitemap: https://skywingsacademy.com/sitemap.xml', 'GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'CCBot', 'Disallow: /skywings-feedback-form/']) {
  if (!rb.includes(need)) problems.push('robots.txt missing: ' + need);
}
const disallows = [...rb.matchAll(/Disallow: (\S+)/g)].map((m) => m[1]);
for (const u of urls) {
  const path = u.replace('https://skywingsacademy.com', '');
  if (disallows.some((d) => d !== '/' && path.startsWith(d))) problems.push(`sitemap url blocked by robots: ${path}`);
}

// llms
for (const f of ['llms.txt', 'llms-full.txt']) {
  if (!fs.existsSync(join(OUT, f))) { problems.push('missing ' + f); continue; }
  const c = fs.readFileSync(join(OUT, f), 'utf8');
  if (/lorem|TODO|your company|coming soon/i.test(c)) problems.push(f + ': placeholder text');
  if (c.length < 1000) problems.push(f + ': suspiciously short');
}

// private pages
for (const s of ['skywings-feedback-form']) {
  const h = fs.readFileSync(join(OUT, s, 'index.html'), 'utf8');
  if (!/noindex/.test(h)) problems.push(s + ': missing noindex meta');
  if (/property="og:/.test(h)) problems.push(s + ': still has OG tags');
}
const h404 = fs.readFileSync(join(OUT, '404.html'), 'utf8');
if (!/noindex/.test(h404)) problems.push('404: missing noindex');

// htaccess header rule
const ht = fs.readFileSync(join(OUT, '.htaccess'), 'utf8');
if (!/X-Robots-Tag "noindex, nofollow"/.test(ht)) problems.push('.htaccess: missing X-Robots-Tag rule');

console.log(`sitemap: ${urls.length} urls, ${uniqueDates.size} distinct lastmod dates (git-derived: ${uniqueDates.size > 1})`);
console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'PHASE 3 VERIFIED ✓');
process.exit(problems.length ? 1 : 0);
