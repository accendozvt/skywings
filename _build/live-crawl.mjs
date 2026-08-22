/**
 * Crawl the LIVE site: start at /, follow every internal link, verify every
 * page and every referenced asset (img src, link href, script src) responds.
 * Reports dead links, broken assets, and redirect anomalies.
 */
const BASE = 'https://skywingsacademy.com';
const seen = new Map();      // url -> status
const pageQueue = ['/'];
const assetSet = new Set();
const problems = [];
const externals = new Set();

const norm = (href, from) => {
  try {
    if (/^(mailto:|tel:|javascript:|#)/.test(href)) return null;
    const u = new URL(href, BASE + from);
    if (u.origin !== BASE) { externals.add(u.href.split('?')[0]); return null; }
    return u.pathname + (u.pathname.endsWith('/') || /\.[a-z0-9]+$/i.test(u.pathname) ? '' : '/');
  } catch { return null; }
};

async function status(path, method = 'HEAD') {
  try {
    const r = await fetch(BASE + path, { method, redirect: 'manual' });
    if ([301, 302, 308].includes(r.status)) {
      const loc = r.headers.get('location') || '';
      const target = loc.startsWith('http') ? new URL(loc).pathname : loc;
      const r2 = await fetch(BASE + target, { method, redirect: 'follow' });
      return { code: r.status, final: r2.status, redirectTo: target };
    }
    return { code: r.status };
  } catch (e) { return { code: 0, err: e.message }; }
}

while (pageQueue.length) {
  const path = pageQueue.shift();
  if (seen.has(path)) continue;
  seen.set(path, 'pending');
  let res;
  try { res = await fetch(BASE + path, { redirect: 'follow' }); }
  catch (e) { problems.push(`PAGE ${path}: fetch failed ${e.message}`); continue; }
  seen.set(path, res.status);
  if (res.status !== 200) { problems.push(`PAGE ${path}: HTTP ${res.status}`); continue; }
  const ct = res.headers.get('content-type') || '';
  if (!ct.includes('text/html')) continue;
  const html = await res.text();

  for (const m of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const p = norm(m[1], path);
    if (p && !seen.has(p) && !p.startsWith('/assets/') && !p.startsWith('/_next/')) pageQueue.push(p);
  }
  for (const m of html.matchAll(/<(?:img|script|link)\b[^>]*(?:src|href)="([^"]+)"/g)) {
    const p = norm(m[1], path);
    if (p && (p.startsWith('/assets/') || p.startsWith('/_next/') || /\.(png|jpe?g|webp|svg|css|js|ico|xml|txt)$/i.test(p))) assetSet.add(p);
  }
}

let assetOk = 0;
for (const a of assetSet) {
  const s = await status(a);
  if ((s.final ?? s.code) !== 200) problems.push(`ASSET ${a}: HTTP ${s.code}${s.err ? ' ' + s.err : ''}`);
  else assetOk++;
}

console.log(`pages crawled: ${seen.size}`);
console.log([...seen.entries()].map(([p, s]) => `  ${s} ${p}`).sort().join('\n'));
console.log(`assets checked: ${assetSet.size} (${assetOk} ok)`);
console.log(`external links (not checked): ${externals.size}`);
for (const e of [...externals].slice(0, 15)) console.log('  ext: ' + e);
console.log(problems.length ? `\nPROBLEMS (${problems.length}):\n` + problems.join('\n') : '\nNO LINK/ASSET PROBLEMS ✓');
