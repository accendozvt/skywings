export const dynamic = 'force-static';

import { SITE_URL } from '@/lib/site';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/static/'],
        disallow: ['/skywings-feedback-form/', '/404/', '/cdn-cgi/', '/_next/'],
      },
      // AI crawlers: explicitly allowed (marketing site; owner-approved)
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'anthropic-ai', 'PerplexityBot', 'Google-Extended', 'CCBot'],
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
