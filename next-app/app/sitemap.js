export const dynamic = 'force-static';

import { SITE_URL } from '@/lib/site';
import { PAGE_META } from '@/lib/seo';

export default function sitemap() {
  const lastModified = new Date('2026-07-11');
  const slugs = Object.entries(PAGE_META)
    .filter(([, m]) => !m.noindex)
    .map(([slug]) => slug);
  // ensure homepage ('' -> '/') is present and first
  const urls = ['', ...slugs.filter((s) => s !== '')];
  return urls.map((slug) => ({
    url: slug ? `${SITE_URL}/${slug}/` : `${SITE_URL}/`,
    lastModified,
    changeFrequency: slug === '' ? 'weekly' : 'monthly',
    priority: slug === '' ? 1 : 0.7,
  }));
}
