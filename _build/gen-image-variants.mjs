/** Generate responsive WebP variants (480/768/1080/1440w) for every raster
    in public/assets/images, plus a dimensions manifest for the HTML
    optimizer. Variants land in public/assets/images/v/ so next build copies
    them into out/ automatically. Skips re-encoding when up to date. */
import fs from 'node:fs';
import { join, dirname, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const HERE = dirname(fileURLToPath(import.meta.url));
const IMG = join(HERE, '..', 'next-app', 'public', 'assets', 'images');
const VDIR = join(IMG, 'v');
fs.mkdirSync(VDIR, { recursive: true });

const WIDTHS = [480, 768, 1080, 1440];
const dims = {};
let made = 0, kept = 0;

for (const f of fs.readdirSync(IMG)) {
  const ext = extname(f).toLowerCase();
  if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) continue;
  const src = join(IMG, f);
  const meta = await sharp(src).metadata();
  const base = basename(f).replace(/\.(png|jpe?g|webp)$/i, '');
  const widths = WIDTHS.filter((w) => w < meta.width);
  dims[f] = { w: meta.width, h: meta.height, variants: widths };
  for (const w of widths) {
    const out = join(VDIR, `${base}.w${w}.webp`);
    if (fs.existsSync(out) && fs.statSync(out).mtimeMs > fs.statSync(src).mtimeMs) { kept++; continue; }
    await sharp(src).resize({ width: w }).webp({ quality: 78 }).toFile(out);
    made++;
  }
}

fs.writeFileSync(join(HERE, 'image-dims.json'), JSON.stringify(dims, null, 1));
console.log(`variants: ${made} generated, ${kept} up-to-date; dims for ${Object.keys(dims).length} images`);
