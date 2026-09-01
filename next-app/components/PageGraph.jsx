import { SITE_URL, SITE_NAME } from '@/lib/site';
import { PAGE_META } from '@/lib/seo';

/* One @graph per page: WebSite + WebPage, BreadcrumbList where the page's
   legacy JSON-LD doesn't already carry one, and Course on course pages.
   All values come from real page metadata/content — nothing invented. */

const LEGACY_BREADCRUMB = new Set([
  '', 'about-us', 'articles-and-news', 'aviation-courses-in-kerala-guide-2026',
  'bba-aviation-colleges-in-kerala', 'contact', 'gallery', 'kochi-campus', 'mahe-campus',
]);

// slug -> [parentSlug, parentName] for two-level breadcrumbs
const PARENT = {
  'bba-aviation': ['aviation-courses-in-kerala', 'Aviation Courses in Kerala'],
  'diploma-in-cabin-crew-management': ['aviation-courses-in-kerala', 'Aviation Courses in Kerala'],
  'mba-airline-and-airport-management': ['aviation-courses-in-kerala', 'Aviation Courses in Kerala'],
  'diploma-in-airline-airport-management': ['aviation-courses-in-kerala', 'Aviation Courses in Kerala'],
  'bba-logistics-supply-chain-management': ['aviation-courses-in-kerala', 'Aviation Courses in Kerala'],
  'diploma-in-aviation-hospitality-management': ['aviation-courses-in-kerala', 'Aviation Courses in Kerala'],
  'aviation-industry-outlook-2026': ['articles-and-news', 'Aviation Blog & News'],
  'bba-with-aviation-vs-general-bba': ['articles-and-news', 'Aviation Blog & News'],
  'career-in-air-cargo-logistics-2026': ['articles-and-news', 'Aviation Blog & News'],
  'high-paying-aviation-jobs-in-kerala-2026': ['articles-and-news', 'Aviation Blog & News'],
};

// real course facts (mirrors the home page OfferCatalog)
const COURSE_LD = {
  'bba-aviation': { name: 'BBA Aviation (Airline and Airport Management)', timeRequired: 'P3Y', educationalLevel: 'Undergraduate' },
  'diploma-in-cabin-crew-management': { name: 'Diploma in Cabin Crew Management', timeRequired: 'P1Y', educationalLevel: 'Diploma' },
  'mba-airline-and-airport-management': { name: 'MBA Airline and Airport Management', timeRequired: 'P2Y', educationalLevel: 'Postgraduate' },
  'diploma-in-airline-airport-management': { name: 'Diploma in Airline and Airport Management', timeRequired: 'P1Y', educationalLevel: 'Diploma' },
  'bba-logistics-supply-chain-management': { name: 'BBA in Logistics and Supply Chain Management', timeRequired: 'P3Y', educationalLevel: 'Undergraduate' },
  'diploma-in-aviation-hospitality-management': { name: 'Diploma in Aviation and Hospitality Management', timeRequired: 'P6M', educationalLevel: 'Diploma' },
};

export default function PageGraph({ slug }) {
  const m = PAGE_META[slug];
  if (!m || m.noindex) return null;
  const url = slug ? `${SITE_URL}/${slug}/` : `${SITE_URL}/`;

  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      inLanguage: 'en-IN',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: m.title,
      description: m.desc,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'en-IN',
    },
  ];

  if (slug && !LEGACY_BREADCRUMB.has(slug)) {
    const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }];
    const parent = PARENT[slug];
    if (parent) items.push({ '@type': 'ListItem', position: 2, name: parent[1], item: `${SITE_URL}/${parent[0]}/` });
    items.push({ '@type': 'ListItem', position: items.length + 1, name: m.title.split('|')[0].trim(), item: url });
    graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: items });
  }

  if (COURSE_LD[slug]) {
    graph.push({
      '@type': 'Course',
      '@id': `${url}#course`,
      name: COURSE_LD[slug].name,
      description: m.desc,
      url,
      provider: { '@id': `${SITE_URL}/#organization` },
      timeRequired: COURSE_LD[slug].timeRequired,
      educationalLevel: COURSE_LD[slug].educationalLevel,
      courseMode: 'onsite',
      inLanguage: 'en-IN',
    });
  }

  const ld = { '@context': 'https://schema.org', '@graph': graph };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />;
}
