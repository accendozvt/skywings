import { pageRedirects, wildcardRedirects, imageRedirects } from './lib/redirects.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
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
