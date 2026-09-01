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
    title: 'Airline Campus Interview 2026 - Cabin Crew | SkyWings',
    desc: 'A leading airline is conducting a cabin crew campus recruitment drive at SkyWings Academy Kochi. Two rounds, limited slots. Register now: 9605 66 44 55.',
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
    title: 'Aviation Courses in Kerala 2026: Complete Guide | SkyWings',
    desc: 'The complete 2026 guide to aviation courses in Kerala: BBA Aviation, MBA, Cabin Crew Diploma and Logistics at SkyWings Kochi & Mahe, with fees and careers.',
    article: true,
  },
  'bba-logistics-supply-chain-management': {
    title: 'BBA Logistics & Supply Chain Management | SkyWings',
    desc: '3-year UGC-recognised BBA in Logistics & Supply Chain Management at SkyWings Kochi. Air cargo, warehousing and global trade careers with 100% placement support.',
  },
  'mba-airline-and-airport-management': {
    title: 'MBA Airline & Airport Management in Kerala | SkyWings',
    desc: '2-year MBA in Airline & Airport Management at SkyWings Kochi & Mahe. Aviation leadership, airport operations and airline strategy with 100% placement assistance.',
  },
  gallery: {
    title: 'Campus & Placement Gallery | SkyWings Aviation Academy',
    desc: 'Photo gallery of SkyWings Aviation Academy: Kochi campus life, cabin crew training, placement celebrations, convocations and student events in Kerala.',
  },
  'articles-and-news': {
    title: 'Aviation Blog & Career Guides Kerala | SkyWings Academy',
    desc: 'Aviation career guides, industry news and student stories for aspiring cabin crew, airport managers and logistics professionals, from SkyWings Academy Kerala.',
  },
  'kochi-campus': {
    title: 'Kochi Campus - Aviation College Ernakulam | SkyWings',
    desc: 'SkyWings Aviation College Kochi campus on NH Bypass, Ernakulam: smart classrooms, mock cabin training and easy access to Cochin International Airport (CIAL).',
  },
  'mahe-campus': {
    title: 'Mahe Campus - Aviation College Puducherry | SkyWings',
    desc: "SkyWings Aviation College Mahe campus at Lalu's Business Park, Puducherry: aviation and logistics programmes with modern facilities and placement support.",
  },
  'no1-aviation-institute-in-kerala': {
    title: 'No.1 Aviation Institute in Kerala | SkyWings Academy',
    desc: 'Why SkyWings is rated the No.1 aviation institute in Kerala: premium campus, airline-experienced trainers, weekly grooming audits and placed students worldwide.',
  },
  'bba-aviation-colleges-in-kerala': {
    title: 'BBA Aviation Colleges in Kerala Compared | SkyWings',
    desc: 'Comparing BBA Aviation colleges in Kerala? See how SkyWings Academy Kochi leads on syllabus, IATA training, CIAL internships and placement outcomes.',
  },
  'privacy-policy': {
    title: 'Privacy Policy | SkyWings Aviation Academy',
    desc: 'How Skywings Academy of Aviation & Logistics collects, uses and protects your personal information across skywingsacademy.com enquiries and admissions.',
  },
  'skywings-feedback-form': { title: 'SkyWings Feedback Form | SkyWings Aviation Academy', desc: 'Internal student feedback form for SkyWings Aviation Academy.', noindex: true },
};

const OG_ALT = 'SkyWings Aviation Academy students in uniform at the Kochi campus';
const OG_FALLBACK_JPG = '/assets/opengraph/preview.jpg';

/**
 * Build a Next.js Metadata object for a given page slug ('' = homepage).
 * Optionally override the OG image (e.g. a blog article's featured image).
 */
export function pageMetadata(slug, { ogImage } = {}) {
  const m = PAGE_META[slug] || { title: `${SITE_NAME}`, desc: GENERIC_DESC };
  const path = slug ? `/${slug}/` : '/';

  // Page-specific featured image first (articles), then the site preview
  // (webp + jpeg fallback for platforms that reject webp).
  const images = [];
  if (ogImage && ogImage !== OG_DEFAULT) {
    images.push({ url: ogImage, width: 1600, height: 1073, alt: m.title, type: 'image/webp' });
  }
  images.push({ url: OG_DEFAULT, width: 1200, height: 630, alt: OG_ALT, type: 'image/webp' });
  images.push({ url: OG_FALLBACK_JPG, width: 1200, height: 630, alt: OG_ALT, type: 'image/jpeg' });

  return {
    title: m.title,
    description: m.desc,
    alternates: { canonical: path },
    robots: m.noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
        },
    openGraph: {
      type: m.article ? 'article' : 'website',
      siteName: SITE_NAME,
      locale: 'en_IN',
      title: m.title,
      description: m.desc,
      url: path,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.desc,
      images: [{ url: images[0].url, alt: images[0].alt }],
    },
  };
}

export { GENERIC_DESC, OG_DEFAULT };
