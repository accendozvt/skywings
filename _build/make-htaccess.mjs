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

# ── Canonical host: force HTTPS and non-www in a single 301 ──
RewriteEngine On
RewriteCond %{HTTPS} !=on [OR]
RewriteCond %{HTTP_HOST} ^www\\. [NC]
RewriteRule ^(.*)$ https://skywingsacademy.com/$1 [R=301,L]

# ── Security headers ──
<IfModule mod_headers.c>
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()"
  Header always set Content-Security-Policy "default-src 'self'; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; frame-src https://www.google.com https://maps.google.com; connect-src 'self' https://script.google.com; object-src 'none'; base-uri 'self'; frame-ancestors 'self'"
</IfModule>

# ── 301 redirects: old WordPress URLs ──
`;
for (const [from, to] of pageRedirects) {
  const dest = to === '/' ? '/' : `${to}/`;
  h += `RedirectMatch 301 ^${escRe(from)}/?$ ${dest}\n`;
}
h += `\n# Leftover static-template files still on the server -> real pages\n`;
const templateRedirects = [
  ['about.html', '/about-us/'], ['contact.html', '/contact/'],
  ['privacy.html', '/privacy-policy/'], ['academics.html', '/aviation-courses-in-kerala/'],
  ['admissions.html', '/contact/'], ['faculty-staff.html', '/about-us/'],
  ['alumni.html', '/about-us/'], ['campus-facilities.html', '/kochi-campus/'],
  ['students-life.html', '/gallery/'], ['events.html', '/gallery/'],
  ['event-details.html', '/gallery/'], ['news.html', '/articles-and-news/'],
  ['news-details.html', '/articles-and-news/'], ['terms-of-service.html', '/'],
  ['starter-page.html', '/'],
];
for (const [from, to] of templateRedirects) h += `RedirectMatch 301 ^/${escRe(from)}$ ${to}\n`;

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

# ── Compression ──
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css application/javascript application/json application/xml image/svg+xml
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
