/**
 * Permanently apply the "Midnight & Champagne" palette to the Next.js source:
 * all page/component CSS + JSX inline colors. WhatsApp green, alert reds,
 * ambers and Google logo colors are untouched.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'next-app');

const HEX_MAP = [
  ['#001f1f', '#0c0e13'], // ink -> midnight black
  ['#002d2d', '#141922'], // header/hero/footer -> deep midnight navy
  ['#008060', '#2c3547'], // mid/gradients -> deep blue-slate
  ['#95bf47', '#c0a562'], // accent -> champagne brass
  ['#7ea83a', '#a3894a'], // accent hover
  ['#012727', '#12151d'], // dark panels
  ['#013232', '#171b25'],
  ['#004c41', '#252d3d'],
  ['#0a8f6c', '#4a5670'],
  ['#f0f5ef', '#f8f6f1'], // off-whites -> warm ivory
  ['#f4f8f2', '#faf8f4'],
  ['#eaf2e8', '#f2efe8'],
  ['#f9fbf7', '#fbfaf6'],
];
const RGB_MAP = [
  [[149, 191, 71], [192, 165, 98]],
  [[0, 45, 45], [20, 25, 34]],
  [[0, 128, 96], [44, 53, 71]],
  [[0, 31, 31], [12, 14, 19]],
  [[126, 168, 58], [163, 137, 74]],
];

function recolor(s) {
  for (const [from, to] of HEX_MAP) s = s.replaceAll(from, to).replaceAll(from.toUpperCase(), to);
  for (const [[r, g, b], [nr, ng, nb]] of RGB_MAP) {
    s = s.replace(new RegExp(`rgba?\\(\\s*${r}\\s*,\\s*${g}\\s*,\\s*${b}`, 'g'),
      (m) => m.slice(0, m.indexOf('(')) + `(${nr},${ng},${nb}`);
  }
  return s;
}

const EXTS = new Set(['.css', '.jsx', '.js', '.mjs']);
const SKIP_DIRS = new Set(['node_modules', '.next', 'out', 'public']);
let changed = 0, scanned = 0;

function walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) { if (!SKIP_DIRS.has(e)) walk(p); continue; }
    if (!EXTS.has(extname(e))) continue;
    scanned++;
    const before = readFileSync(p, 'utf8');
    const after = recolor(before);
    if (after !== before) { writeFileSync(p, after); changed++; console.log('  recolored ' + p.slice(ROOT.length + 1)); }
  }
}

walk(join(ROOT, 'app'));
walk(join(ROOT, 'components'));
walk(join(ROOT, 'lib'));
console.log(`\n${changed}/${scanned} files recolored to Midnight & Champagne`);
