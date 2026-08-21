/** Generate the site-wide OpenGraph preview image (1200x630 webp). */
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
// source: the homepage OG photo from the original site (SkyFest 2024)
const src = join(__dirname, '..', 'dist', 'assets', 'images', 'skywings-skyfest-2024.jpg');
const outDir = join(__dirname, 'static');
mkdirSync(outDir, { recursive: true });

await sharp(src)
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .webp({ quality: 82 })
  .toFile(join(outDir, 'preview.webp'));
console.log('wrote _build/static/preview.webp (1200x630)');
