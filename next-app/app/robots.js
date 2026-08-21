export const dynamic = 'force-static';

import { SITE_URL } from '@/lib/site';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/skywings-feedback-form/', '/cdn-cgi/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
