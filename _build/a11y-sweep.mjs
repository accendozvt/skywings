process.on('unhandledRejection',(e)=>console.log('UNHANDLED:',String(e).slice(0,80)));
import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import fs from 'node:fs';

const PAGES=['','about-us','contact','aviation-courses-in-kerala','bba-aviation','diploma-in-cabin-crew-management','mba-airline-and-airport-management','diploma-in-airline-airport-management','bba-logistics-supply-chain-management','diploma-in-aviation-hospitality-management','articles-and-news','gallery','kochi-campus','mahe-campus','no1-aviation-institute-in-kerala','bba-aviation-colleges-in-kerala','airline-campus-interview-2026-cabin-crew-recruitment','privacy-policy','aviation-courses-in-kerala-guide-2026','aviation-industry-outlook-2026','bba-with-aviation-vs-general-bba','career-in-air-cargo-logistics-2026','high-paying-aviation-jobs-in-kerala-2026'];

let chrome = null;
async function freshChrome() {
  try { if (chrome) await chrome.kill(); } catch {}
  chrome = await launch({ chromePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', chromeFlags: ['--headless=new', '--no-sandbox'] });
}
await freshChrome();

const rows = [];
for (const slug of PAGES) {
  const url = 'http://localhost:8900/' + (slug ? slug + '/' : '');
  let lhr = null;
  for (let attempt = 0; attempt < 2 && !lhr; attempt++) {
    try {
      const r = await lighthouse(url, { port: chrome.port, onlyCategories: ['accessibility'], logLevel: 'error' });
      lhr = r.lhr;
    } catch (e) { console.log('retrying', slug, e.message.slice(0, 50)); await freshChrome(); }
  }
  if (!lhr) { console.log((slug || '(home)'), 'FAILED'); continue; }
  const score = Math.round(lhr.categories.accessibility.score * 100);
  for (const ref of lhr.categories.accessibility.auditRefs.filter((x) => x.weight > 0)) {
    const au = lhr.audits[ref.id];
    if (au.score !== null && au.score < 1) for (const i of (au.details?.items || [])) {
      rows.push({ page: slug || '(home)', audit: ref.id, sel: (i.node?.selector || '').slice(0, 100), snip: (i.node?.snippet || '').slice(0, 110), expl: (i.node?.explanation || '').slice(0, 170) });
    }
  }
  console.log((slug || '(home)').padEnd(45), 'A' + score);
  fs.writeFileSync('a11y-sweep.json', JSON.stringify(rows, null, 1));
}
fs.writeFileSync('a11y-sweep.json', JSON.stringify(rows, null, 1));
console.log('total fail items:', rows.length);
try { await chrome.kill(); } catch {}
