/** Headless screenshots of the four palette variant homepages via system Chrome. */
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', '_palette-variants', 'shots');
mkdirSync(OUT, { recursive: true });

const VARIANTS = [
  ['graphite-gold', 8801],
  ['slate-spruce', 8802],
  ['midnight-champagne', 8803],
  ['burgundy-gold', 8804],
];

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'],
});

for (const [name, port] of VARIANTS) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle2', timeout: 45000 });
  await page.addStyleTag({ content: '*,*::before,*::after{animation-play-state:paused!important;transition:none!important} [style*="position:fixed"][style*="bottom:18px"]{display:none!important}' });
  await new Promise((r) => setTimeout(r, 700));
  // hero shot
  await page.screenshot({ path: join(OUT, `${name}-hero.png`) });
  // mid-page shot (courses/sections)
  await page.evaluate(() => window.scrollTo(0, 2400));
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: join(OUT, `${name}-mid.png`) });
  await page.close();
  console.log(`${name}: hero + mid captured`);
}

await browser.close();
console.log('DONE -> _palette-variants/shots/');
