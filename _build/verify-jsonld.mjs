/** Phase 4 verification: every JSON-LD block parses; every public page has
    WebSite+WebPage; breadcrumbs everywhere (inner), exactly one per page;
    Course on course pages; BlogPosting on articles; Organization sitewide. */
import fs from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'next-app', 'out');
const PRIVATE = new Set(['skywings-feedback-form', '404']);
const COURSES = new Set(['bba-aviation', 'diploma-in-cabin-crew-management', 'mba-airline-and-airport-management', 'diploma-in-airline-airport-management', 'bba-logistics-supply-chain-management', 'diploma-in-aviation-hospitality-management']);
const ARTICLES = new Set(['aviation-industry-outlook-2026', 'bba-with-aviation-vs-general-bba', 'career-in-air-cargo-logistics-2026', 'high-paying-aviation-jobs-in-kerala-2026']);

const pages = [];
(function walk(dir, rel = '') {
  for (const e of fs.readdirSync(dir)) {
    const p = join(dir, e);
    if (fs.statSync(p).isDirectory()) { if (e !== '_next' && e !== 'assets') walk(p, rel + '/' + e); }
    else if (e === 'index.html') pages.push({ slug: rel.replace(/^\//, ''), file: p });
  }
})(OUT);

const problems = [];
const typesOf = (node, acc) => {
  if (Array.isArray(node)) { node.forEach((n) => typesOf(n, acc)); return acc; }
  if (node && typeof node === 'object') {
    if (node['@type']) [].concat(node['@type']).forEach((t) => acc.add(t));
    Object.values(node).forEach((v) => typesOf(v, acc));
  }
  return acc;
};

for (const { slug, file } of pages) {
  if (PRIVATE.has(slug)) continue;
  const html = fs.readFileSync(file, 'utf8');
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const types = new Set();
  let breadcrumbCount = 0;
  for (const [, raw] of blocks) {
    try {
      const data = JSON.parse(raw);
      typesOf(data, types);
      const countBc = (n) => Array.isArray(n) ? n.reduce((a, x) => a + countBc(x), 0)
        : n && typeof n === 'object'
          ? ([].concat(n['@type'] || []).includes('BreadcrumbList') ? 1 : 0) + Object.values(n).reduce((a, x) => a + countBc(x), 0)
          : 0;
      breadcrumbCount += countBc(data);
    } catch (e) { problems.push(`${slug || '(home)'}: JSON-LD parse error: ${e.message.slice(0, 60)}`); }
  }
  const name = slug || '(home)';
  for (const need of ['WebSite', 'WebPage']) if (!types.has(need)) problems.push(`${name}: missing ${need}`);
  if (!types.has('EducationalOrganization')) problems.push(`${name}: missing Organization`);
  if (slug && breadcrumbCount === 0) problems.push(`${name}: no BreadcrumbList`);
  if (breadcrumbCount > 1) problems.push(`${name}: ${breadcrumbCount} BreadcrumbLists (want 1)`);
  if (COURSES.has(slug) && !types.has('Course')) problems.push(`${name}: missing Course`);
  if (ARTICLES.has(slug) && !types.has('BlogPosting')) problems.push(`${name}: missing BlogPosting`);
}

console.log(`checked ${pages.length - 2} public pages`);
console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'PHASE 4 VERIFIED ✓ (all JSON-LD parses; WebSite/WebPage/Org everywhere; single breadcrumb per inner page; Course + BlogPosting where applicable)');
process.exit(problems.length ? 1 : 0);
