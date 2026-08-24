/**
 * Build two fully browsable palette variants of the exported site by copying
 * next-app/out/ and rewriting color tokens in every .html/.css file.
 *   A "graphite-gold":  charcoal suit dark + antique-gold accent, green garnish
 *   B "slate-spruce":   slate dark + muted uniform-green accent, gold micro
 * Output: _palette-variants/<name>/ (serve locally to browse).
 */
import { cpSync, readdirSync, readFileSync, writeFileSync, rmSync, statSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'next-app', 'out');
const VAR = join(ROOT, '_palette-variants');

const VARIANTS = {
  'graphite-gold': {
    label: 'Graphite & Gold',
    hex: [
      ['#001f1f', '#15171b'], // ink -> near-black graphite
      ['#002d2d', '#22262c'], // header/hero -> charcoal (boys' suit)
      ['#008060', '#3d5a4e'], // gradient mid -> muted uniform spruce (garnish)
      ['#95bf47', '#c9a227'], // accent -> antique gold (wings badge)
      ['#7ea83a', '#a9871d'], // accent hover
      ['#012727', '#1b1e23'],
      ['#013232', '#20242a'],
      ['#004c41', '#2e3840'],
      ['#0a8f6c', '#46635a'],
      ['#f0f5ef', '#f5f4f0'], // off-whites -> warm neutral
      ['#f4f8f2', '#f7f6f2'],
      ['#eaf2e8', '#efeee9'],
      ['#f9fbf7', '#faf9f6'],
    ],
    rgb: [
      [[149, 191, 71], [201, 162, 39]],
      [[0, 45, 45], [34, 38, 44]],
      [[0, 128, 96], [61, 90, 78]],
      [[0, 31, 31], [21, 23, 27]],
      [[126, 168, 58], [169, 135, 29]],
    ],
    extraCss: '',
  },
  'slate-spruce': {
    label: 'Slate & Spruce',
    hex: [
      ['#001f1f', '#191c20'],
      ['#002d2d', '#262b31'], // slate charcoal
      ['#008060', '#3f4a54'], // gradients go blue-grey slate (no green)
      ['#95bf47', '#4e7266'], // accent -> muted uniform spruce green
      ['#7ea83a', '#3e5c52'],
      ['#012727', '#1e2126'],
      ['#013232', '#23272d'],
      ['#004c41', '#333d46'],
      ['#0a8f6c', '#5b8272'],
      ['#f0f5ef', '#f4f4f2'],
      ['#f4f8f2', '#f7f7f4'],
      ['#eaf2e8', '#eeeeea'],
      ['#f9fbf7', '#fafaf8'],
    ],
    rgb: [
      [[149, 191, 71], [78, 114, 102]],
      [[0, 45, 45], [38, 43, 49]],
      [[0, 128, 96], [63, 74, 84]],
      [[0, 31, 31], [25, 28, 32]],
      [[126, 168, 58], [62, 92, 82]],
    ],
    // spruce buttons need light text (gold variant keeps dark text)
    fixButtonText: true,
    extraCss: '',
  },
  'midnight-champagne': {
    label: 'Midnight & Champagne',
    hex: [
      ['#001f1f', '#0c0e13'], // ink -> midnight black
      ['#002d2d', '#141922'], // header/hero -> deep midnight navy-black
      ['#008060', '#2c3547'], // gradient mid -> deep blue-slate
      ['#95bf47', '#c0a562'], // accent -> champagne brass
      ['#7ea83a', '#a3894a'], // hover
      ['#012727', '#12151d'],
      ['#013232', '#171b25'],
      ['#004c41', '#252d3d'],
      ['#0a8f6c', '#4a5670'],
      ['#f0f5ef', '#f8f6f1'], // warm ivory
      ['#f4f8f2', '#faf8f4'],
      ['#eaf2e8', '#f2efe8'],
      ['#f9fbf7', '#fbfaf6'],
    ],
    rgb: [
      [[149, 191, 71], [192, 165, 98]],
      [[0, 45, 45], [20, 25, 34]],
      [[0, 128, 96], [44, 53, 71]],
      [[0, 31, 31], [12, 14, 19]],
      [[126, 168, 58], [163, 137, 74]],
    ],
    extraCss: '',
  },
  'burgundy-gold': {
    label: 'Burgundy & Gold',
    hex: [
      ['#001f1f', '#201013'], // ink -> near-black oxblood
      ['#002d2d', '#371b21'], // header/hero -> deep burgundy (rosette scarf)
      ['#008060', '#5d2c35'], // gradient mid -> maroon
      ['#95bf47', '#c9a227'], // accent -> antique gold (wings badge)
      ['#7ea83a', '#a9871d'],
      ['#012727', '#2a1418'],
      ['#013232', '#31181d'],
      ['#004c41', '#4a232b'],
      ['#0a8f6c', '#7a3a46'],
      ['#f0f5ef', '#f8f4f0'], // warm ivory with a blush of warmth
      ['#f4f8f2', '#faf7f3'],
      ['#eaf2e8', '#f3ece7'],
      ['#f9fbf7', '#fbf9f5'],
    ],
    rgb: [
      [[149, 191, 71], [201, 162, 39]],
      [[0, 45, 45], [55, 27, 33]],
      [[0, 128, 96], [93, 44, 53]],
      [[0, 31, 31], [32, 16, 19]],
      [[126, 168, 58], [169, 135, 29]],
    ],
    extraCss: '',
  },
};

function* files(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) yield* files(p);
    else yield p;
  }
}

function switcher(active) {
  const link = (href, label, on) =>
    `<a href="${href}" style="padding:8px 16px;border-radius:100px;text-decoration:none;font:600 12.5px system-ui;${on ? 'background:#fff;color:#111;' : 'color:rgba(255,255,255,0.85);'}">${label}</a>`;
  return `<div style="position:fixed;bottom:18px;left:50%;transform:translateX(-50%);z-index:99999;display:flex;gap:4px;align-items:center;background:rgba(17,17,17,0.92);padding:5px;border-radius:100px;box-shadow:0 10px 34px rgba(0,0,0,0.4);flex-wrap:wrap;justify-content:center;max-width:96vw;">
  <span style="color:rgba(255,255,255,0.45);font:600 10.5px system-ui;letter-spacing:1.5px;text-transform:uppercase;padding:0 8px 0 14px;">Palette</span>
  ${link('https://skywingsacademy.com/', 'Live', false)}
  ${link('http://localhost:8801/', 'Graphite & Gold', active === 'graphite-gold')}
  ${link('http://localhost:8802/', 'Slate & Spruce', active === 'slate-spruce')}
  ${link('http://localhost:8803/', 'Midnight & Champagne', active === 'midnight-champagne')}
  ${link('http://localhost:8804/', 'Burgundy & Gold', active === 'burgundy-gold')}
</div></body>`;
}

rmSync(VAR, { recursive: true, force: true });

for (const [name, v] of Object.entries(VARIANTS)) {
  const dest = join(VAR, name);
  cpSync(OUT, dest, { recursive: true });
  let changed = 0;
  for (const f of files(dest)) {
    const ext = extname(f);
    if (!['.html', '.css'].includes(ext)) continue;
    let t = readFileSync(f, 'utf8');
    const before = t;
    for (const [from, to] of v.hex) t = t.replaceAll(from, to).replaceAll(from.toUpperCase(), to);
    for (const [[r, g, b], [nr, ng, nb]] of v.rgb) {
      t = t.replace(new RegExp(`rgba?\\(\\s*${r}\\s*,\\s*${g}\\s*,\\s*${b}`, 'g'), (m) => m.replace(/\(.*/, '') + `(${nr},${ng},${nb}`);
    }
    if (v.fixButtonText) {
      // spruce accent buttons: dark-ink text -> white
      t = t.replace(/(background:\s*var\(--sky\);?\s*color:\s*)var\(--ink\)/g, '$1#ffffff');
      t = t.replace(/(background:\s*#4e7266;?\s*color:\s*)#191c20/g, '$1#ffffff');
    }
    if (ext === '.html') t = t.replace('</body>', switcher(name));
    if (t !== before) { writeFileSync(f, t); changed++; }
  }
  console.log(`${name}: ${changed} files recolored -> _palette-variants/${name}/`);
}
