/** Gzip text assets in out/ so the local audit server (-g) and any
    static host serving precompressed files match production compression. */
import fs from 'node:fs';
import zlib from 'node:zlib';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'next-app', 'out');
const EXT = new Set(['.html', '.css', '.js', '.svg', '.txt', '.xml', '.webmanifest', '.json', '.ico']);
let n = 0;
(function walk(dir) {
  for (const e of fs.readdirSync(dir)) {
    const p = join(dir, e);
    if (fs.statSync(p).isDirectory()) { walk(p); continue; }
    if (!EXT.has(extname(e))) continue;
    fs.writeFileSync(p + '.gz', zlib.gzipSync(fs.readFileSync(p), { level: 9 }));
    n++;
  }
})(OUT);
console.log('precompressed ' + n + ' files (.gz)');
