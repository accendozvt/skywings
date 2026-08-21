import { SITE_URL, SITE_NAME } from './site';

const OG_DEFAULT = '/assets/opengraph/preview.webp';
const GENERIC_DESC =
  "SkyWings Aviation Academy, Kerala's premier aviation college in Kochi & Mahe offering BBA Aviation, MBA Aviation, Cabin Crew and Airport Management courses with 100% placement assistance.";

// Per-page SEO from the SEOPress export. `article: true` -> og:type=article.
// `noindex: true` -> excluded from indexing, sitemap and robots.
export const PAGE_META = {
  '': {
    title: 'No.1 Premium Aviation College in Kerala | Skywings Academy',
    desc: 'SkyWings Aviation is one of the No.1 Premium Aviation College in Kerala, providing BBA Aviation, Diploma in Airline & Airport Management, Diploma in Cabin Crew.',
  },
  'aviation-courses-in-kerala': {
    title: 'Premium Aviation Courses in Kerala | Skywings Aviation',
    desc: 'Launch your career with premium Aviation Courses in Kerala at Skywings Aviation. We offer AI-integrated BBA & Diploma programs with 100% placement assistance.',
  },
  'bba-aviation': {
    title: 'BBA Aviation in Kerala | SkyWings Aviation College',
    desc: "Kerala's No.1 BBA Aviation college. 3-year Airline & Airport Management at SkyWings Kochi & Mahe. AI syllabus · IATA training · 100% placement.",
  },
  'diploma-in-cabin-crew-management': {
    title: 'Diploma in Cabin Crew Operations - Kerala | SkyWings Aviation',
    desc: "Kerala's No.1 Diploma in Cabin Crew. 1-year training in grooming, safety & in-flight service at SkyWings Academy Kochi. 100% placement assistance.",
  },
  'diploma-in-airline-airport-management': {
    title: 'Airport Management Courses in Kerala | Diploma - SkyWings',
    desc: "Enroll in Kerala's No.1 Airport Management Courses at SkyWings Academy, Kochi & Mahe. 1-year Diploma with IATA training and AI-integrated syllabus.",
  },
  'diploma-in-aviation-hospitality-management': {
    title: 'Hospitality Management Course in Kerala | SkyWings Aviation',
    desc: '6-month Hospitality Management Course at SkyWings Kerala. Aviation + luxury hospitality training with 100% placement in airport lounges & hotels.',
  },
  'about-us': {
    title: 'Premier Institute for Aviation Courses in Kerala | SkyWings',
    desc: 'Premier institute for aviation courses in Kerala. SkyWings Academy, Kochi - BBA, MBA, Cabin Crew & Diploma with 100% placement assistance. Enquire now.',
  },
  contact: {
    title: 'Contact SkyWings Aviation Academy | Kochi & Mahe Campus',
    desc: "Contact SkyWings Aviation Academy - Kerala's No.1 aviation college. Visit our Kochi or Mahe campus, call +91 9847 163 163 for free career counselling.",
  },
  'airline-campus-interview-2026-cabin-crew-recruitment': {
    title: 'Airline Campus Interview 2026 - Cabin Crew Recruitment at SkyWings Academy',
    desc: 'A leading airline is conducting a campus recruitment drive at SkyWings Academy, Kochi. Cabin Crew Recruitment. 2 rounds - online screening + final interview. Limited slots. Register now: 9605 66 44 55.',
  },
  'career-in-air-cargo-logistics-2026': {
    title: 'Career in Air Cargo & Logistics 2026',
    desc: 'E-commerce giants like Amazon & Flipkart rely on Air Cargo. Discover high-paying careers in Aviation and Ground Handling in Kochi.',
    article: true,
  },
  'aviation-industry-outlook-2026': {
    title: 'Aviation Industry Outlook 2026',
    desc: 'With new airlines like Al Hind Air launching and 163 airports now operational, 2026 is the golden year for aviation industry.',
    article: true,
  },
  'bba-with-aviation-vs-general-bba': {
    title: 'BBA with Aviation vs General BBA',
    desc: 'Confused between a normal BBA and BBA with Aviation? We compare the syllabus, salary (₹4L vs ₹2.5L), and job scope in Kerala to help you decide.',
    article: true,
  },
  'high-paying-aviation-jobs-in-kerala-2026': {
    title: 'High Paying Aviation Jobs in Kerala 2026',
    desc: 'Thinking about Aviation Jobs? Discover high-paying career paths in Airport Management, Logistics, and Operations in Kerala and India.',
    article: true,
  },
  'aviation-courses-in-kerala-guide-2026': {
    title: 'Aviation Courses in Kerala 2026 - Complete Guide | SkyWings Academy',
    desc: 'Complete guide to aviation courses in Kerala. BBA Aviation, MBA Aviation, Cabin Crew Diploma, Airline Management & Logistics courses at SkyWings Academy Kochi & Mahe. Fees, eligibility, careers, and placements.',
    article: true,
  },
  'bba-logistics-supply-chain-management': { title: 'BBA - Logistics & Supply Chain Management | SkyWings Aviation Academy', desc: GENERIC_DESC },
  'mba-airline-and-airport-management': { title: 'MBA - Airline & Airport Management | SkyWings Aviation Academy', desc: GENERIC_DESC },
  gallery: { title: 'Gallery | SkyWings Aviation Academy', desc: GENERIC_DESC },
  'articles-and-news': { title: 'Blogs & Articles - Aviation & Hospitality | SkyWings Aviation Academy', desc: 'Aviation career guides, industry news and student stories from SkyWings Aviation Academy, Kerala.' },
  'kochi-campus': { title: 'Skywings Aviation College - Kochi Campus | SkyWings Aviation Academy', desc: GENERIC_DESC },
  'mahe-campus': { title: 'Skywings Aviation College - Mahe Campus | SkyWings Aviation Academy', desc: GENERIC_DESC },
  'no1-aviation-institute-in-kerala': { title: 'No.1 Aviation Institute in Kerala | SkyWings Aviation Academy', desc: GENERIC_DESC },
  'bba-aviation-colleges-in-kerala': { title: 'BBA Aviation Colleges in Kerala | SkyWings Aviation Academy', desc: GENERIC_DESC },
  'privacy-policy': { title: 'Privacy Policy | SkyWings Aviation Academy', desc: GENERIC_DESC },
  'skywings-feedback-form': { title: 'SkyWings Feedback Form | SkyWings Aviation Academy', desc: 'Internal student feedback form for SkyWings Aviation Academy.', noindex: true },
};

/**
 * Build a Next.js Metadata object for a given page slug ('' = homepage).
 * Optionally override the OG image (e.g. a blog article's featured image).
 */
export function pageMetadata(slug, { ogImage } = {}) {
  const m = PAGE_META[slug] || { title: `${SITE_NAME}`, desc: GENERIC_DESC };
  const path = slug ? `/${slug}/` : '/';
  const images = [...new Set([ogImage, OG_DEFAULT].filter(Boolean))];

  return {
    title: m.title,
    description: m.desc,
    alternates: { canonical: path },
    robots: m.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: m.article ? 'article' : 'website',
      siteName: SITE_NAME,
      locale: 'en_IN',
      title: m.title,
      description: m.desc,
      url: path,
      images: images.map((url) => ({ url })),
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.desc,
      images: [images[0]],
    },
  };
}

export { GENERIC_DESC, OG_DEFAULT };
