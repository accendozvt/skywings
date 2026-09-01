/**
 * Lighthouse runner: every public page × mobile + desktop.
 * Usage: node lh-run.mjs <outDirName>   (e.g. baseline | final)
 * Serves nothing itself — expects the static export on http://localhost:8900.
 * Saves per-run LHR JSON to ../seo-audit/<outDirName>/ and a scores.json summary.
 */
import fs from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import desktopConfig from 'lighthouse/core/config/desktop-config.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const RUN = process.argv[2] || 'baseline';
const OUT = join(ROOT, 'seo-audit', RUN);
fs.mkdirSync(OUT, { recursive: true });

const BASE = 'http://localhost:8900';
const PAGES = [
  '', 'about-us', 'contact', 'aviation-courses-in-kerala',
  'bba-aviation', 'diploma-in-cabin-crew-management', 'mba-airline-and-airport-management',
  'diploma-in-airline-airport-management', 'bba-logistics-supply-chain-management',
  'diploma-in-aviation-hospitality-management', 'articles-and-news', 'gallery',
  'kochi-campus', 'mahe-campus', 'no1-aviation-institute-in-kerala',
  'bba-aviation-colleges-in-kerala', 'airline-campus-interview-2026-cabin-crew-recruitment',
  'privacy-policy', 'aviation-courses-in-kerala-guide-2026', 'aviation-industry-outlook-2026',
  'bba-with-aviation-vs-general-bba', 'career-in-air-cargo-logistics-2026',
  'high-paying-aviation-jobs-in-kerala-2026',
];
const CATS = ['performance', 'accessibility', 'best-practices', 'seo'];

const chrome = await launch({
  chromePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu'],
});

const scores = [];
const t0 = Date.now();
for (const slug of PAGES) {
  const url = slug ? `${BASE}/${slug}/` : `${BASE}/`;
  for (const preset of ['mobile', 'desktop']) {
    const opts = { port: chrome.port, output: 'json', onlyCategories: CATS, logLevel: 'error' };
    const config = preset === 'desktop' ? desktopConfig : undefined;
    try {
      const result = await lighthouse(url, opts, config);
      const lhr = result.lhr;
      const row = { page: slug || '(home)', preset };
      for (const c of CATS) row[c] = Math.round((lhr.categories[c]?.score ?? 0) * 100);
      scores.push(row);
      fs.writeFileSync(join(OUT, `${slug || 'home'}-${preset}.json`), result.report);
      console.log(`[${Math.round((Date.now() - t0) / 1000)}s] ${row.page} ${preset}: P${row.performance} A${row.accessibility} BP${row['best-practices']} SEO${row.seo}`);
    } catch (e) {
      scores.push({ page: slug || '(home)', preset, error: e.message.slice(0, 80) });
      console.log(`FAIL ${slug} ${preset}: ${e.message.slice(0, 80)}`);
    }
  }
}
await chrome.kill();
fs.writeFileSync(join(OUT, 'scores.json'), JSON.stringify(scores, null, 2));
console.log('\nDONE -> seo-audit/' + RUN + '/scores.json');
