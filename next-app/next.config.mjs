import { pageRedirects, wildcardRedirects, imageRedirects } from './lib/redirects.mjs';

// Static export for shared hosting (Hostinger public_html). Redirects/headers
// below are ignored in export mode — _build/make-htaccess.mjs generates the
// .htaccess equivalent from the same data. Unset EXPORT to run as a Node app.
const isExport = process.env.EXPORT !== '0';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isExport ? { output: 'export' } : {}),
  images: { unoptimized: true },
  reactStrictMode: true,
  // Keep trailing slashes so canonical URLs match what Google already indexed
  // (e.g. https://skywingsacademy.com/about-us/).
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,

  async redirects() {
    const perm = (source, destination) => ({ source, destination, permanent: true });
    return [
      // Exact page slugs from the old WordPress site
      ...pageRedirects.map(([s, d]) => perm(s, d)),
      // Old media-library image URLs -> renamed local assets (must precede the
      // /wp-content/:s* catch-all below, which is why image rules come first)
      ...imageRedirects.map(([s, d]) => perm(s, d)),
      // Archive/system path prefixes
      ...wildcardRedirects.map(([s, d]) => perm(s, d)),
    ];
  },

  async headers() {
    return [
      {
        // Long-cache immutable static assets
        source: '/assets/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
