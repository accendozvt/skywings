/**
 * Local preview server that mimics the production clean-URL rewrite
 * (the same rule as .htaccess / _redirects): /slug or /slug/ -> slug.html,
 * without exposing .html in the browser. http-server can't do this since
 * .htaccess/_redirects are host-specific, not generic static-file-server
 * features — this stands in for that so local testing is trustworthy.
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const PORT = process.env.PORT || 8799;

const MIME = {
  '.html': 'text/html', '.xml': 'application/xml', '.txt': 'text/plain',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp',
  '.svg': 'image/svg+xml', '.css': 'text/css', '.js': 'application/javascript',
  '.ico': 'image/x-icon',
};

async function fileExists(p) {
  try { const s = await stat(p); return s.isFile(); } catch { return false; }
}

createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  let path = url === '/' ? '/index.html' : url;
  let full = join(DIST, path);

  if (!(await fileExists(full))) {
    const trimmed = path.replace(/\/+$/, '');
    if (!extname(trimmed) && await fileExists(join(DIST, trimmed + '.html'))) {
      full = join(DIST, trimmed + '.html');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      const notFound = join(DIST, '404.html');
      res.end(await fileExists(notFound) ? await readFile(notFound) : '404 Not Found');
      return;
    }
  }

  const ext = extname(full);
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
  res.end(await readFile(full));
}).listen(PORT, () => console.log(`Preview (with clean-URL rewrite) at http://localhost:${PORT}`));
