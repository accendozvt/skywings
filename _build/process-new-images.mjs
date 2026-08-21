/**
 * Process the manually generated uniform images (new-images/NN.png) into the
 * live asset slots in next-app/public/assets/images:
 *  - cutout PNGs keep their alpha, resized
 *  - scene targets converted to jpg/webp/png per the live filename
 *  - 300x200 thumbnails cut from the four blog featured images
 *  - OG preview (1200x630) regenerated from the campus group shot (27)
 * P32 (placed student) is intentionally HELD until all 12 arrive.
 */
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'new-images');
const OUT = join(ROOT, 'next-app', 'public', 'assets', 'images');
const OG = join(ROOT, 'next-app', 'public', 'assets', 'opengraph');

// source number -> [target filename, kind]
// kind: 'cutout' (alpha png), 'photo' (flat, ext decides codec), 'thumbed' (webp + 300x200 variant)
const MAP = {
  '01': ['cabin-crew-training-students-kerala.png', 'cutout'],
  '02': ['skywings-placed-students-airlines.png', 'cutout'],
  '03': ['skywings-academy-students-kochi.png', 'cutout'],
  '04': ['cabin-crew-student-skywings-kochi.png', 'cutout'],
  '05': ['aviation-student-skywings-kochi.png', 'cutout'],
  '06': ['bba-logistics-student-skywings.png', 'cutout'],
  '07': ['airline-airport-management-student-skywings.png', 'cutout'],
  '08': ['aviation-hospitality-student-skywings.png', 'cutout'],
  '09': ['cabin-crew-recruitment-skywings-kochi.png', 'cutout'],
  '10': ['skywings-smart-classroom-kochi.jpg', 'photo'],
  '11': ['skywings-academy-campus-kochi.jpg', 'photo'],
  '12': ['skywings-aviation-college-campus-kochi.webp', 'photo'],
  '13': ['aviation-management-training-kochi.jpg', 'photo'],
  '14': ['airport-terminal-operations-training.jpg', 'photo'],
  '15': ['logistics-training-skywings-academy.jpg', 'photo'],
  '16': ['cabin-crew-practical-training-skywings.jpg', 'photo'],
  '17': ['airport-management-course-kerala-students.jpg', 'photo'],
  '18': ['aviation-hospitality-training-skywings.jpg', 'photo'],
  '19': ['global-aviation-career-scope-skywings.jpg', 'photo'],
  '20': ['premium-logistics-training-skywings.jpg', 'photo'],
  '21': ['cabin-crew-inflight-service-training.jpg', 'photo'],
  '22': ['professional-presentation-training-skywings.png', 'photo'],
  '23': ['bba-logistics-career-scope.png', 'photo'],
  '24': ['bba-aviation-colleges-in-kerala-1.webp', 'photo'],
  '25': ['bba-aviation-colleges-in-kerala-3.webp', 'photo'],
  '26': ['bba-aviation-colleges-in-kerala-4.webp', 'thumbed'],
  '27': ['bba-aviation-colleges-in-kerala-8.webp', 'photo'],
  '28': ['best-aviation-college-in-kerala-2.webp', 'photo'],
  '29': ['best-aviation-college-in-kerala-3.webp', 'thumbed'],
  '30': ['no1-premium-aviation-college-kerala-1.webp', 'thumbed'],
  '31': ['no1-premium-aviation-college-kerala-5.webp', 'thumbed'],
  // '32' held: skywings-placed-student-* needs all 12 before swapping the strip
};

mkdirSync(OUT, { recursive: true });
mkdirSync(OG, { recursive: true });

const report = [];

for (const [num, [target, kind]] of Object.entries(MAP)) {
  const src = join(SRC, `${num}.png`);
  const dest = join(OUT, target);
  const ext = extname(target);

  let img = sharp(src);
  const meta = await img.metadata();

  if (kind === 'cutout') {
    // keep alpha; cap the long side at 1600
    img = img.resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true });
    await img.png({ compressionLevel: 9, palette: false }).toFile(dest);
  } else {
    // flat photo; cap width at 1600 (or height for portraits)
    img = img.resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).flatten({ background: '#ffffff' });
    if (ext === '.jpg') await img.jpeg({ quality: 80, progressive: true, mozjpeg: true }).toFile(dest);
    else if (ext === '.webp') await img.webp({ quality: 80 }).toFile(dest);
    else await img.png({ compressionLevel: 9 }).toFile(dest);
  }

  if (kind === 'thumbed') {
    const thumbName = target.replace(/\.webp$/, '-300x200.webp');
    await sharp(src).resize(300, 200, { fit: 'cover', position: 'attention' }).webp({ quality: 78 }).toFile(join(OUT, thumbName));
    report.push(`${num}.png -> ${thumbName} (300x200)`);
  }

  const outMeta = await sharp(dest).metadata();
  report.push(`${num}.png (${meta.width}x${meta.height}) -> ${target} (${outMeta.width}x${outMeta.height})`);
}

// OG preview from the campus group shot (27): 1200x630
await sharp(join(SRC, '27.png')).resize(1200, 630, { fit: 'cover', position: 'attention' }).webp({ quality: 82 }).toFile(join(OG, 'preview.webp'));
report.push(`27.png -> opengraph/preview.webp (1200x630)`);

console.log(report.join('\n'));
console.log(`\nProcessed ${Object.keys(MAP).length} images + 4 thumbnails + OG preview. Held: 32.png (placed-student strip needs all 12).`);
