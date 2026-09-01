export const dynamic = 'force-static';

import { execSync } from 'node:child_process';
import { join } from 'node:path';
import { SITE_URL } from '@/lib/site';
import { PAGE_META } from '@/lib/seo';

// lastmod from the git last-commit date of each page's source file,
// falling back to the build date for uncommitted/new pages.
function gitLastMod(slug) {
  const rel = slug ? `next-app/app/${slug}/page.jsx` : 'next-app/app/page.jsx';
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${rel}"`, {
      cwd: join(process.cwd(), '..'),
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (iso) return new Date(iso);
  } catch { /* not a git checkout (CI tarball etc.) */ }
  return new Date();
}

export default function sitemap() {
  const slugs = Object.entries(PAGE_META)
    .filter(([, m]) => !m.noindex)
    .map(([slug]) => slug);
  const urls = ['', ...slugs.filter((s) => s !== '')];
  return urls.map((slug) => ({
    url: slug ? `${SITE_URL}/${slug}/` : `${SITE_URL}/`,
    lastModified: gitLastMod(slug),
  }));
}
