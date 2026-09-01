/**
 * Generate next-app/out/.htaccess for Hostinger (LiteSpeed/Apache) static
 * hosting, replacing next.config redirects (ignored in static export):
 *  - serve index.html before any leftover index.php (old WordPress)
 *  - 301s for old WordPress URLs + old media-library image URLs
 *  - custom 404, long-cache for hashed/static assets
 */
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pageRedirects, wildcardRedirects, imageRedirects } from '../next-app/lib/redirects.mjs';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'next-app', 'out');
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

let h = `# SkyWings Aviation Academy — static Next.js export
# Prefer our static pages over any leftover CMS index files
DirectoryIndex index.html index.php

ErrorDocument 404 /404.html

# ── 301 redirects: old WordPress URLs ──
`;
for (const [from, to] of pageRedirects) {
  const dest = to === '/' ? '/' : `${to}/`;
  h += `RedirectMatch 301 ^${escRe(from)}/?$ ${dest}\n`;
}
h += `\n# Old media library URLs -> renamed assets\n`;
for (const [from, to] of imageRedirects) h += `RedirectMatch 301 ^${escRe(from)}$ ${to}\n`;
h += `\n# Archive/system prefixes\n`;
for (const [from, to] of wildcardRedirects) {
  const prefix = from.replace('/:s*', '/');
  const dest = to === '/' ? '/' : `${to}/`;
  h += `RedirectMatch 301 ^${escRe(prefix)}.* ${dest}\n`;
}
h += `
# ── noindex headers for private pages (belt + braces with the meta tag) ──
<IfModule mod_headers.c>
  SetEnvIf Request_URI "^/skywings-feedback-form" NOINDEX_PAGE
  SetEnvIf Request_URI "^/404" NOINDEX_PAGE
  Header set X-Robots-Tag "noindex, nofollow" env=NOINDEX_PAGE
</IfModule>

# ── Caching ──
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 10 minutes"
</IfModule>

# hashed Next.js build assets are immutable
<IfModule mod_headers.c>
  <FilesMatch "\\.(woff2|webp|png|jpe?g|svg)$">
    Header set Cache-Control "public, max-age=31536000"
  </FilesMatch>
</IfModule>
`;

writeFileSync(join(OUT, '.htaccess'), h);
console.log(`wrote out/.htaccess: ${pageRedirects.length} page + ${imageRedirects.length} image + ${wildcardRedirects.length} wildcard redirects`);
