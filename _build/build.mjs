/**
 * SkyWings Academy — static site builder
 * - Wraps Elementor HTML fragments into full standalone HTML documents
 * - Injects header/footer, SEOPress metadata, canonical/OG/Twitter tags
 * - Rewrites internal links to clean extensionless URLs (/slug/)
 * - Rewrites images to local /assets/images/... and emits a download manifest
 * - Rebrands theme colors: navy/teal -> Shopify-inspired dark teal / lime (red kept as accent)
 * - Decodes Cloudflare email-protection links
 * - Generates blog article pages from WP REST JSON, static blog listing,
 *   sitemap.xml, robots.txt, 404 page
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SITE = 'https://skywingsacademy.com';

/* ─────────────────────────── BRAND COLOR MAP ───────────────────────────
   Old palette (navy/teal)          New palette (Shopify-inspired dark teal / lime)
*/
const HEX_MAP = [
  ['#0a1128', '#001f1f'], // ink        -> near-black teal
  ['#001f54', '#002d2d'], // navy       -> Shopify dark teal
  ['#034078', '#008060'], // mid        -> Shopify action green
  ['#1282a2', '#95bf47'], // sky accent -> lime
  ['#0e6d87', '#7ea83a'], // sky hover  -> deeper lime
  ['#0e1831', '#012727'], // dark navy panel -> dark teal panel
  ['#001845', '#013232'],
  ['#032652', '#004c41'],
  ['#045090', '#0a8f6c'],
  ['#f4f6f9', '#f0f5ef'], // cool off-white -> warm neutral off-white
  ['#f7f9fb', '#f4f8f2'],
  ['#f0f2f5', '#eaf2e8'],
  ['#fafcfd', '#f9fbf7'],
];
const RGB_MAP = [
  [[18, 130, 162], [149, 191, 71]],  // sky  -> lime
  [[0, 31, 84],    [0, 45, 45]],     // navy -> dark teal
  [[3, 64, 120],   [0, 128, 96]],    // mid  -> action green
  [[10, 17, 40],   [0, 31, 31]],     // ink
  [[14, 109, 135], [126, 168, 58]],  // sky hover
];

function recolor(html) {
  for (const [from, to] of HEX_MAP) {
    html = html.replace(new RegExp(from, 'gi'), to);
  }
  for (const [[r, g, b], [nr, ng, nb]] of RGB_MAP) {
    html = html.replace(
      new RegExp(`rgba?\\(\\s*${r}\\s*,\\s*${g}\\s*,\\s*${b}`, 'g'),
      (m) => m.replace(/\(.*/, '') + `(${nr},${ng},${nb}`
    );
  }
  // Lime buttons read better with dark ink text than white
  html = html.replace(
    /(background:\s*var\(--sky\);\s*color:\s*)var\(--white\)/gi,
    '$1var(--ink)'
  );
  return html;
}

/* ─────────────────────────── URL / SLUG MAPS ─────────────────────────── */
// source file -> output slug ('' = homepage)
const PAGES = {
  'index.html': '',
  'about-us.html': 'about-us',
  'contact.html': 'contact',
  'bba-aviation.html': 'bba-aviation',
  'diploma-in-cabin-crew-management.html': 'diploma-in-cabin-crew-management',
  'mba-airline-and-airport-management.html': 'mba-airline-and-airport-management',
  'diploma-in-airline-airport-management.html': 'diploma-in-airline-airport-management',
  'bba-logistics-supply-chain-management.html': 'bba-logistics-supply-chain-management',
  'diploma-in-aviation-hospitality-management.html': 'diploma-in-aviation-hospitality-management',
  'aviation-courses-in-kerala.html': 'aviation-courses-in-kerala',
  'articles-and-news.html': 'articles-and-news',
  'gallery.html': 'gallery',
  'kochi-campus.html': 'kochi-campus',
  'mahe-campus.html': 'mahe-campus',
  'no1-aviation-institute-in-kerala.html': 'no1-aviation-institute-in-kerala',
  'bba-aviation-colleges-in-kerala.html': 'bba-aviation-colleges-in-kerala',
  'airline-campus-interview-2026-cabin-crew-recruitment.html': 'airline-campus-interview-2026-cabin-crew-recruitment',
  'skywings-feedback-form.html': 'skywings-feedback-form',
  'privacy-policy.html': 'privacy-policy',
  'aviation-courses-in-kerala-guide-2026.html': 'aviation-courses-in-kerala-guide-2026',
};

// old WP paths -> new clean paths
const ALIAS = {
  '/about': '/about-us/',
  '/aviation-courses': '/aviation-courses-in-kerala/',
  '/courses': '/aviation-courses-in-kerala/',
  '/bba-airline-airport-management': '/bba-aviation/',
  '/blogs-articles-aviation-hospitality': '/articles-and-news/',
  '/blog': '/articles-and-news/',
  '/skywings-aviation-college-kochi-campus': '/kochi-campus/',
  '/skywings-aviation-college-mahe': '/mahe-campus/',
  '/aviation-courses-in-kerala-2': '/aviation-courses-in-kerala/',
};
const KNOWN_SLUGS = new Set(Object.values(PAGES).filter(Boolean));
['aviation-industry-outlook-2026', 'bba-with-aviation-vs-general-bba',
 'career-in-air-cargo-logistics-2026', 'high-paying-aviation-jobs-in-kerala-2026']
  .forEach(s => KNOWN_SLUGS.add(s));

const unknownLinks = new Set();

function mapPath(path) {
  // keep hash/query
  const m = path.match(/^([^#?]*)([#?].*)?$/);
  let p = m[1].replace(/\/+$/, '');
  const suffix = m[2] || '';
  if (p === '' || p === '/') return '/' + suffix;
  if (ALIAS[p]) return ALIAS[p] + suffix;
  // real root files (sitemap.xml, robots.txt, etc.) aren't slug pages
  if (/\.[a-z0-9]{2,4}$/i.test(p)) return p + suffix;
  const slug = p.replace(/^\//, '');
  if (!KNOWN_SLUGS.has(slug)) unknownLinks.add(p);
  return '/' + slug + '/' + suffix;
}

/* ─────────────────────────── SEO METADATA (from SEOPress export) ─────── */
const GENERIC_DESC = "SkyWings Aviation Academy — Kerala's premier aviation college in Kochi & Mahe offering BBA Aviation, MBA Aviation, Cabin Crew and Airport Management courses with 100% placement assistance.";
const META = {
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
  'contact': {
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
  'gallery': { title: 'Gallery | SkyWings Aviation Academy', desc: GENERIC_DESC },
  'articles-and-news': { title: 'Blogs & Articles - Aviation & Hospitality | SkyWings Aviation Academy', desc: 'Aviation career guides, industry news and student stories from SkyWings Aviation Academy, Kerala.' },
  'kochi-campus': { title: 'Skywings Aviation College - Kochi Campus | SkyWings Aviation Academy', desc: GENERIC_DESC },
  'mahe-campus': { title: 'Skywings Aviation College - Mahe Campus | SkyWings Aviation Academy', desc: GENERIC_DESC },
  'no1-aviation-institute-in-kerala': { title: 'No.1 Aviation Institute in Kerala | SkyWings Aviation Academy', desc: GENERIC_DESC },
  'bba-aviation-colleges-in-kerala': { title: 'BBA Aviation Colleges in Kerala | SkyWings Aviation Academy', desc: GENERIC_DESC },
  'privacy-policy': { title: 'Privacy Policy | SkyWings Aviation Academy', desc: GENERIC_DESC },
  'skywings-feedback-form': { title: 'SkyWings Feedback Form | SkyWings Aviation Academy', desc: 'Internal student feedback form for SkyWings Aviation Academy.', noindex: true },
};

/* ─────────────────────────── IMAGE HANDLING ─────────────────────────── */
// Descriptive SEO filenames (flat under /assets/images/). Keyed by the
// original wp-content/uploads path. Files not listed keep their (already
// descriptive) basename, sanitized.
const IMG_RENAME = {
  '2019/02/Untitled-1-1-e1740541043642.png': 'skywings-aviation-academy-logo.png',
  '2022/05/827da0_08dc6a84744b4e0f8dd0387368808ebc_mv2.webp': 'airline-recruitment-partner-1.webp',
  '2022/05/827da0_09b32ab65fb84033a9612026a98f3e0c_mv2.webp': 'airline-recruitment-partner-2.webp',
  '2022/05/827da0_1461ab3ab8394b7dbc0b026c83391726_mv2.webp': 'airline-recruitment-partner-3.webp',
  '2022/05/827da0_924c641370e244b1b1d43f5c2ee67a7b_mv2.webp': 'airline-recruitment-partner-4.webp',
  '2022/05/827da0_9866cde8af9f423e998626b77107d907_mv2.webp': 'airline-recruitment-partner-5.webp',
  '2022/05/827da0_e7d4e06cad84411fb32293692310cebc_mv2.webp': 'airline-recruitment-partner-6.webp',
  '2022/05/827da0_ef384940151b4986861af9979680f619_mv2.webp': 'airline-recruitment-partner-7.webp',
  '2022/05/827da0_fed55c07ed78468eb832cce4446ace80_mv2.webp': 'airline-recruitment-partner-8.webp',
  '2022/07/PAI00910-acopy-Copy.jpg': 'aviation-hospitality-training-skywings.jpg',
  '2022/07/PAI00924.jpg': 'airport-terminal-operations-training.jpg',
  '2022/07/PAI00978.jpg': 'logistics-training-skywings-academy.jpg',
  '2022/07/PAI01209.jpg': 'cabin-crew-practical-training-skywings.jpg',
  '2022/07/PAI01209-768x512.jpg': 'airport-management-course-kerala-students.jpg',
  '2022/07/PAI01272.jpg': 'aviation-management-training-kochi.jpg',
  '2022/07/PAI01337.jpg': 'skywings-smart-classroom-kochi.jpg',
  '2022/07/PAI01543.jpg': 'skywings-academy-campus-kochi.jpg',
  '2025/04/100placementpng.png': '100-percent-placement-badge.png',
  '2025/04/2022-04-10.jpg': 'skywings-inauguration-2022.jpg',
  '2025/04/2024-07-30.jpg': 'skywings-skyfest-2024.jpg',
  '2025/04/ADA05317.jpg': 'global-aviation-career-scope-skywings.jpg',
  '2025/04/ADA05353.jpg': 'premium-logistics-training-skywings.jpg',
  '2025/04/AJI00156.jpg': 'skywings-award-ceremony-kerala.jpg',
  '2025/04/AJI00248.jpg': 'skywings-aviation-students-event.jpg',
  '2025/04/ff.jpg': 'skywings-convocation-ceremony.jpg',
  '2025/04/fg.jpg': 'skywings-annual-event-kerala.jpg',
  '2025/04/gg.jpg': 'skywings-aviation-college-students.jpg',
  '2025/04/PAI07836-min.png': 'skywings-placed-students-airlines.png',
  '2025/04/PAI07914-min.png': 'skywings-academy-students-kochi.png',
  '2025/04/PAI08074-min-1443x1536.png': 'cabin-crew-training-students-kerala.png',
  '2025/04/pngwing.com_.png': 'admissions-open-2026-badge.png',
  '2025/04/unnbnamed.jpg': 'skywings-premium-campus-kochi.jpg',
  '2025/05/1.jpg.webp': 'skywings-placed-student-01.webp',
  '2025/05/2.jpg.webp': 'skywings-placed-student-02.webp',
  '2025/05/3.jpg.webp': 'skywings-placed-student-03.webp',
  '2025/05/4.jpg.webp': 'skywings-placed-student-04.webp',
  '2025/05/5.jpg.webp': 'skywings-placed-student-05.webp',
  '2025/05/6.jpg.webp': 'skywings-placed-student-06.webp',
  '2025/05/7.jpg.webp': 'skywings-placed-student-07.webp',
  '2025/05/8.jpg.webp': 'skywings-placed-student-08.webp',
  '2025/05/9.jpg.webp': 'skywings-placed-student-09.webp',
  '2025/05/10.jpg.webp': 'skywings-placed-student-10.webp',
  '2025/05/11.jpg.webp': 'skywings-placed-student-11.webp',
  '2025/05/12.jpg.webp': 'skywings-placed-student-12.webp',
  '2026/01/02.png': 'bba-logistics-career-scope.png',
  '2026/01/freepik__design-editorial-soft-studio-light-photography-hig__41438.png': 'professional-presentation-training-skywings.png',
  '2026/02/01.png': 'cabin-crew-student-skywings-kochi.png',
  '2026/02/02.png': 'aviation-student-skywings-kochi.png',
  '2026/02/04.png': 'bba-logistics-student-skywings.png',
  '2026/02/05.png': 'airline-airport-management-student-skywings.png',
  '2026/02/06.png': 'aviation-hospitality-student-skywings.png',
  '2026/02/06-copy.webp': 'skywings-aviation-college-campus-kochi.webp',
  '2026/03/homework.svg': 'modern-campus-icon.svg',
  '2026/03/placement-1.svg': 'placement-assistance-icon.svg',
  '2026/03/training-1.svg': 'expert-trainers-icon.svg',
  '2026/03/university-1.svg': 'best-aviation-college-icon.svg',
  '2026/03/no.1-premium-aviation-college-in-kerala-skywings-aviation-1.webp': 'no1-premium-aviation-college-kerala-1.webp',
  '2026/03/no.1-premium-aviation-college-in-kerala-skywings-aviation-1-300x200.webp': 'no1-premium-aviation-college-kerala-1-300x200.webp',
  '2026/03/no.1-premium-aviation-college-in-kerala-skywings-aviation-5.webp': 'no1-premium-aviation-college-kerala-5.webp',
  '2026/03/no.1-premium-aviation-college-in-kerala-skywings-aviation-5-300x200.webp': 'no1-premium-aviation-college-kerala-5-300x200.webp',
  '2026/05/layer-3.png': 'cabin-crew-recruitment-skywings-kochi.png',
};

const images = new Map();       // source url -> local path (site-absolute)
const uploadsPath = new Map();  // original uploads path -> local path (for redirects)
const UNSPLASH = 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80';

function localImage(srcUrl) {
  if (srcUrl.startsWith(UNSPLASH.slice(0, 60))) {
    const p = '/assets/images/cabin-crew-inflight-service-training.jpg';
    images.set(UNSPLASH, p);
    return p;
  }
  const m = srcUrl.match(/wp-content\/uploads\/(.+)$/);
  if (!m) return srcUrl;
  const name = IMG_RENAME[m[1]] ||
    m[1].split('/').pop().toLowerCase().replace(/\.(?=.*\.)/g, '-').replace(/[_\s]+/g, '-');
  const p = '/assets/images/' + name;
  images.set(srcUrl, p);
  uploadsPath.set(m[1], p);
  return p;
}

function rewriteImages(html) {
  html = html.replace(/https:\/\/skywingsacademy\.com\/wp-content\/uploads\/[^"'\s)<>]+/g, (u) => localImage(u));
  html = html.split(UNSPLASH.replace(/&/g, '&amp;')).join(localImage(UNSPLASH));
  html = html.split(UNSPLASH).join(localImage(UNSPLASH));
  return html;
}

/* ─────────────────────────── CF EMAIL DECODE ─────────────────────────── */
function cfDecode(hex) {
  const key = parseInt(hex.substr(0, 2), 16);
  let out = '';
  for (let i = 2; i < hex.length; i += 2) out += String.fromCharCode(parseInt(hex.substr(i, 2), 16) ^ key);
  return out;
}
function decodeEmails(html) {
  html = html.replace(/<span class="__cf_email__"[^>]*data-cfemail="([0-9a-f]+)"[^>]*>[\s\S]*?<\/span>/gi, (_, h) => cfDecode(h));
  html = html.replace(/\/cdn-cgi\/l\/email-protection#([0-9a-f]+)/gi, (_, h) => 'mailto:' + cfDecode(h));
  html = html.replace(/href="mailto:mailto:/g, 'href="mailto:');
  // drop Cloudflare's email-decode script — emails are decoded at build time
  html = html.replace(/<script[^>]*src="[^"]*cloudflare-static\/email-decode\.min\.js"[^>]*><\/script>/g, '');
  return html;
}

/* ─────────────────────────── LINK REWRITING ─────────────────────────── */
function rewriteHrefs(html) {
  return html.replace(/href="https:\/\/skywingsacademy\.com([^"]*)"/g, (_, path) => `href="${mapPath(path)}"`);
}
// inside JSON-LD keep absolute domain but fix moved paths + images
function transformJsonLd(block) {
  block = block.replace(/https:\/\/skywingsacademy\.com\/wp-content\/uploads\/[^"\s]+/g, (u) => SITE + localImage(u));
  block = block.replace(/"https:\/\/skywingsacademy\.com([^"]*)"/g, (m, path) => {
    if (path.startsWith('/assets/')) return m;
    return `"${SITE}${mapPath(path) === '/' ? '' : mapPath(path)}"`;
  });
  return block;
}

/* ─────────────────────────── FRAGMENT PIPELINE ─────────────────────── */
function stripFonts(frag) {
  return frag
    .replace(/^\s*<link rel="preconnect"[^>]*>\s*$/gim, '')
    .replace(/^\s*<link href="https:\/\/fonts\.googleapis\.com[^>]*>\s*$/gim, '');
}

function processFragment(frag) {
  frag = stripFonts(frag);
  // protect JSON-LD blocks
  const blocks = [];
  frag = frag.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, (m) => {
    blocks.push(transformJsonLd(m));
    return `@@JSONLD${blocks.length - 1}@@`;
  });
  frag = decodeEmails(frag);
  frag = rewriteImages(frag);
  frag = rewriteHrefs(frag);
  frag = frag.replace(/@@JSONLD(\d+)@@/g, (_, i) => blocks[+i]);
  return recolor(frag);
}

/* ─────────────────────────── FINAL POLISH PASSES ─────────────────────── */
// Em dashes read poorly in this brand voice: replace with comma per client.
function stripEmDashes(html) {
  return html
    .replace(/\s*(?:—|&mdash;|&#8212;)\s*/g, ', ')
    .replace(/,\s*,/g, ',');
}

// Guarantee every <img> has descriptive alt text. Missing/empty alts get
// one derived from the (now descriptive) filename.
function altFromSrc(src) {
  const base = (src.split('/').pop() || '').replace(/\.[a-z]{2,4}(\.webp)?$/i, '').replace(/-\d+x\d+$/, '');
  const words = base.replace(/[-_.]+/g, ' ').trim();
  if (!words) return 'SkyWings Aviation Academy';
  return (words.charAt(0).toUpperCase() + words.slice(1)).replace(/\bskywings\b/gi, 'SkyWings');
}
function fixAlts(html) {
  return html.replace(/<img\b[^>]*>/g, (tag) => {
    const srcM = tag.match(/src="([^"]*)"/);
    if (!srcM) return tag;
    const altM = tag.match(/alt="([^"]*)"/);
    if (altM && altM[1].trim()) return tag;
    const alt = altFromSrc(srcM[1]);
    if (altM) return tag.replace(/alt="[^"]*"/, `alt="${alt}"`);
    return tag.replace(/<img\b/, `<img alt="${alt}"`);
  });
}

/* ─────────────────────────── PAGE TEMPLATE ─────────────────────────── */
const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Instrument+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">`;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

const OG_DEFAULT = '/assets/opengraph/preview.webp';

function wrapPage(slug, meta, bodyContent, header, footer) {
  const url = SITE + (slug ? `/${slug}/` : '/');
  const ogType = meta.article ? 'article' : 'website';
  const robots = meta.noindex ? 'noindex, nofollow' : 'index, follow';
  // page-specific image first (article featured / home photo), site-wide
  // preview second; crawlers prefer the first og:image
  const imgs = [...new Set([meta.ogImg, OG_DEFAULT].filter(Boolean))];
  const ogImg = imgs.map(i => `\n  <meta property="og:image" content="${SITE}${i}">`).join('')
    + (imgs[0] === OG_DEFAULT ? `\n  <meta property="og:image:width" content="1200">\n  <meta property="og:image:height" content="630">` : '');
  const twImg = `\n  <meta name="twitter:image" content="${SITE}${imgs[0]}">`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(meta.title)}</title>
  <meta name="description" content="${esc(meta.desc)}">
  <link rel="canonical" href="${url}">
  <meta name="robots" content="${robots}">
  <meta property="og:type" content="${ogType}">
  <meta property="og:site_name" content="SkyWings Aviation Academy">
  <meta property="og:locale" content="en_IN">
  <meta property="og:title" content="${esc(meta.title)}">
  <meta property="og:description" content="${esc(meta.desc)}">
  <meta property="og:url" content="${url}">${ogImg}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(meta.title)}">
  <meta name="twitter:description" content="${esc(meta.desc)}">${twImg}
  <meta name="theme-color" content="#002d2d">
  <link rel="icon" type="image/png" href="/assets/images/skywings-aviation-academy-logo.png">
  ${FONTS}
  <style>html{scroll-behavior:smooth}body{margin:0;background:#fff}main{display:block;padding-top:104px}@media (max-width:640px){main{padding-top:104px}}</style>
</head>
<body>
${header}
<main id="main">
${bodyContent}
</main>
${footer}
</body>
</html>
`;
}

/* ─────────────────────────── ARTICLE TEMPLATE ─────────────────────── */
// authored in the ORIGINAL palette; recolor() rebrands it with everything else
// WP FluentForms need admin-ajax + nonces — impossible on a static site.
// Swap embedded forms for an equivalent enquiry CTA (authored in the old
// palette; recolor() rebrands it along with everything else).
const ENQUIRE_CTA = `<aside style="border:1px solid rgba(0,31,84,0.12);border-radius:16px;padding:32px 28px;background:#f4f6f9;text-align:center;margin:40px 0;">
  <p style="font-family:'Sora',sans-serif;font-size:17px;color:#001f54;margin:0 0 6px;">Have questions about your aviation career?</p>
  <p style="font-size:14px;color:rgba(0,31,84,0.6);margin:0 0 20px;">Talk to our admissions team — free career counselling for 2026 batches.</p>
  <a href="tel:+919847163163" style="display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:500;text-decoration:none;padding:12px 24px;border-radius:100px;background:#1282a2;color:#0a1128;margin:4px;">Call +91 9847 163 163</a>
  <a href="https://skywingsacademy.com/contact/" style="display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:500;text-decoration:none;padding:12px 24px;border-radius:100px;background:#001f54;color:#fefcfb;margin:4px;">Enquire Online</a>
</aside>`;

function cleanElementorContent(html) {
  html = html.replace(/<img[^>]*plugins\/elementor\/assets\/images\/placeholder\.png[^>]*\/?>/g, '');
  html = html.replace(/<form[^>]*id="fluentform[\s\S]*?<\/form>/gi, '@@ENQUIRE_CTA@@');
  html = html.replace(/<script[\s\S]*?<\/script>/g, '');
  html = html.replace(/<div[^>]*>/g, '').replace(/<\/div>/g, '');
  html = html.replace(/\s+data-[a-zA-Z0-9_-]+="[^"]*"/g, '');
  html = html.replace(/\s+class="[^"]*"/g, '');
  html = html.replace(/<h1(\s[^>]*)?>/g, '<h2>').replace(/<\/h1>/g, '</h2>');
  html = html.replace(/<style[\s\S]*?<\/style>/g, '');
  html = html.replace(/\n{3,}/g, '\n\n');
  html = html.replace(/@@ENQUIRE_CTA@@/g, ENQUIRE_CTA);
  return html.trim();
}

const ARTICLE_CSS = `<style>
:root{--ink:#0a1128;--navy:#001f54;--mid:#034078;--sky:#1282a2;--cream:#fefcfb;--offwhite:#f4f6f9;--white:#ffffff;--navy-line:rgba(0,31,84,0.09);--text-body:rgba(0,31,84,0.65);--trans:0.3s cubic-bezier(0.4,0,0.2,1);}
.art *{box-sizing:border-box;margin:0;padding:0;}
.art{font-family:'Instrument Sans',sans-serif;color:var(--navy);background:var(--white);-webkit-font-smoothing:antialiased;width:100%;overflow-x:hidden;}
.art-hero{background:linear-gradient(135deg,var(--ink) 0%,var(--navy) 55%,var(--mid) 100%);padding:88px 0 72px;position:relative;overflow:hidden;}
.art-hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,rgba(254,252,251,0.04) 1px,transparent 1px);background-size:28px 28px;pointer-events:none;}
.art-wrap{max-width:820px;margin:0 auto;padding:0 32px;position:relative;z-index:2;}
.art-eyebrow{display:inline-flex;align-items:center;gap:10px;font-family:'Sora',sans-serif;font-size:11px;font-weight:500;letter-spacing:2.5px;text-transform:uppercase;color:var(--sky);margin-bottom:18px;}
.art-eyebrow::before{content:'';display:block;width:20px;height:1px;background:var(--sky);}
.art-hero h1{font-family:'Sora',sans-serif;font-size:clamp(28px,4vw,48px);font-weight:300;line-height:1.15;letter-spacing:-1px;color:var(--cream);margin-bottom:18px;}
.art-hero__lead{font-size:16px;font-weight:300;line-height:1.8;color:rgba(254,252,251,0.55);}
.art-body{padding:64px 0 80px;}
.art-body .art-wrap>*+*{margin-top:20px;}
.art-body h2{font-family:'Sora',sans-serif;font-size:clamp(22px,2.6vw,32px);font-weight:400;line-height:1.25;letter-spacing:-0.6px;color:var(--navy);margin-top:44px;}
.art-body h3{font-family:'Sora',sans-serif;font-size:19px;font-weight:500;line-height:1.35;color:var(--navy);margin-top:36px;}
.art-body h4{font-family:'Sora',sans-serif;font-size:16px;font-weight:500;color:var(--navy);margin-top:28px;}
.art-body p,.art-body li{font-size:15.5px;font-weight:300;line-height:1.85;color:var(--text-body);}
.art-body ul,.art-body ol{padding-left:22px;}
.art-body li+li{margin-top:8px;}
.art-body a{color:var(--sky);text-decoration:none;border-bottom:1px solid rgba(18,130,162,0.3);transition:var(--trans);}
.art-body a:hover{color:#0e6d87;border-color:#0e6d87;}
.art-body img{max-width:100%;height:auto;border-radius:16px;display:block;margin:32px auto;}
.art-body figure{margin:32px 0;}
.art-body figcaption{font-size:12.5px;color:rgba(0,31,84,0.4);text-align:center;margin-top:10px;}
.art-body table{width:100%;border-collapse:collapse;margin:28px 0;font-size:14px;}
.art-body table th{font-family:'Sora',sans-serif;font-weight:500;text-align:left;background:var(--navy);color:var(--cream);padding:12px 16px;}
.art-body table td{padding:12px 16px;border:1px solid var(--navy-line);color:var(--text-body);font-weight:300;vertical-align:top;}
.art-body table tr:nth-child(even) td{background:var(--offwhite);}
.art-body blockquote{border-left:3px solid var(--sky);padding:8px 0 8px 20px;font-style:italic;color:var(--text-body);margin:28px 0;}
.art-cta{background:var(--navy);padding:56px 0;text-align:center;}
.art-cta h2{font-family:'Sora',sans-serif;font-size:clamp(20px,2.6vw,30px);font-weight:300;color:var(--cream);letter-spacing:-0.5px;margin-bottom:10px;}
.art-cta p{font-size:14px;font-weight:300;color:rgba(254,252,251,0.5);margin-bottom:28px;}
.art-cta__btns{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;}
.art-btn{display:inline-flex;align-items:center;gap:8px;font-family:'Instrument Sans',sans-serif;font-size:13.5px;font-weight:500;text-decoration:none;padding:12px 24px;border-radius:100px;transition:var(--trans);white-space:nowrap;}
.art-btn--sky{background:var(--sky);color:var(--white);}
.art-btn--sky:hover{background:#0e6d87;transform:translateY(-1px);box-shadow:0 8px 24px rgba(18,130,162,0.35);}
.art-btn--ghost{background:transparent;color:rgba(255,255,255,0.75);border:1px solid rgba(255,255,255,0.2);}
.art-btn--ghost:hover{color:var(--white);border-color:rgba(255,255,255,0.5);}
@media (max-width:640px){.art-wrap{padding:0 20px;}.art-hero{padding:64px 0 52px;}.art-body{padding:44px 0 60px;}}
</style>`;

function articleFragment(post, meta) {
  const dateStr = new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  let featured = '';
  try { featured = post._embedded['wp:featuredmedia'][0].source_url; } catch { /* none */ }
  const content = cleanElementorContent(post.content.rendered);
  const title = post.title.rendered;
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title.replace(/&#0?38;/g, '&').replace(/&amp;/g, '&'),
    description: meta.desc,
    datePublished: post.date,
    dateModified: post.modified || post.date,
    author: { '@type': 'Organization', name: 'SkyWings Aviation Academy' },
    publisher: { '@type': 'Organization', name: 'SkyWings Aviation Academy', url: SITE },
    mainEntityOfPage: `${SITE}/${post.slug}/`,
    ...(featured ? { image: featured } : {}),
  };
  return `<!-- SkyWings Academy | Blog Article: ${post.slug} -->
<script type="application/ld+json">
${JSON.stringify(ld, null, 2)}
</script>

${ARTICLE_CSS}

<div class="art">
  <div class="art-hero">
    <div class="art-wrap">
      <span class="art-eyebrow">Blog · ${dateStr}</span>
      <h1>${title}</h1>
      <p class="art-hero__lead">${meta.desc}</p>
    </div>
  </div>
  <div class="art-body">
    <div class="art-wrap">
${featured ? `      <img src="${featured}" alt="${esc(title.replace(/<[^>]+>/g, ''))}" loading="eager">\n` : ''}${content}
    </div>
  </div>
  <div class="art-cta">
    <div class="art-wrap">
      <h2>Ready to start your aviation career?</h2>
      <p>Free counselling · 2026 admissions open · Kochi &amp; Mahe campuses</p>
      <div class="art-cta__btns">
        <a href="tel:+919847163163" class="art-btn art-btn--sky">Call: +91 9847 163 163</a>
        <a href="https://skywingsacademy.com/aviation-courses/" class="art-btn art-btn--ghost">View Courses</a>
      </div>
    </div>
  </div>
</div>`;
}

/* ─────────────────────────── STATIC BLOG LISTING ─────────────────────── */
function staticPostsArray() {
  const posts = [];
  for (const f of readdirSync(join(__dirname, 'posts'))) {
    const j = JSON.parse(readFileSync(join(__dirname, 'posts', f), 'utf8').replace(/^﻿/, ''));
    let img = '';
    try { img = localImage(j._embedded['wp:featuredmedia'][0].source_url); } catch { img = '/assets/images/2022/07/PAI01337.jpg'; }
    posts.push({
      title: { rendered: j.title.rendered },
      excerpt: { rendered: j.excerpt.rendered.replace(/<[^>]+>/g, ' ').trim() },
      link: `/${j.slug}/`,
      date: j.date,
      _embedded: { 'wp:featuredmedia': [{ source_url: img }] },
    });
  }
  // local guide article (not a WP post)
  posts.push({
    title: { rendered: 'Aviation Courses in Kerala 2026 — The Complete Guide' },
    excerpt: { rendered: 'Every aviation course in Kerala compared: BBA Aviation, MBA Aviation, Cabin Crew Diploma, Airline Management & Logistics. Fees, eligibility, careers and placements.' },
    link: '/aviation-courses-in-kerala-guide-2026/',
    date: '2026-02-01T09:00:00',
    _embedded: { 'wp:featuredmedia': [{ source_url: localImage('https://skywingsacademy.com/wp-content/uploads/2025/04/2024-07-30.jpg') }] },
  });
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return posts;
}

function staticizeBlogListing(frag) {
  const posts = JSON.stringify(staticPostsArray());
  // internal links should not open a new tab
  frag = frag.replace(' target="_blank" rel="noopener" class="blg-card__link"', ' class="blg-card__link"');
  // replace the initial REST fetch with the static array
  frag = frag.replace(/\/\/ Initial fetch[\s\S]*?\)\(\);/,
`// Static post data (site is fully static — no WP REST API)
(function(){
  allPosts = ${posts};
  document.getElementById('blg-grid').innerHTML = renderPosts(allPosts);
  var lm = document.getElementById('blg-loadmore');
  if (lm) lm.style.display = 'none';
})();`);
  // neutralize loadMore's REST call if invoked
  frag = frag.replace(/function loadMore\(\) \{[\s\S]*?\n\}/,
`function loadMore() {
  var btn = document.getElementById('blg-loadmore');
  if (btn) { btn.textContent = 'All posts loaded'; btn.disabled = true; }
}`);
  return frag;
}

/* ─────────────────────────── BUILD ─────────────────────────── */
mkdirSync(DIST, { recursive: true });

const headerFrag = processFragment(readFileSync(join(ROOT, 'header.html'), 'utf8'));
const footerFrag = processFragment(readFileSync(join(ROOT, 'footer.html'), 'utf8'));

const builtSlugs = [];

// Flat output: dist/about-us.html, dist/contact.html, etc. — matching the
// original source filenames exactly. Clean URLs (e.g. /about-us/) are
// served via .htaccess / _redirects rewrites, not directory nesting.
function emit(slug, html) {
  html = stripEmDashes(fixAlts(html));
  const filename = slug ? `${slug}.html` : 'index.html';
  writeFileSync(join(DIST, filename), html, 'utf8');
  builtSlugs.push(slug);
}

// homepage "News & Articles" section also fetched from the WP REST API —
// feed it the same static post data (latest 4) instead
function staticizeHomeNews(frag) {
  const posts4 = JSON.stringify(staticPostsArray().slice(0, 4));
  frag = frag.replace(
    /fetch\('https:\/\/skywingsacademy\.com\/wp-json\/wp\/v2\/posts\?per_page=4[^']*'\)\s*\.then\(function\(r\) \{ return r\.json\(\); \}\)/,
    `Promise.resolve(${posts4})`
  );
  frag = frag.replace(`'" target="_blank" rel="noopener" class="sw-blog-card__link"`, `'" class="sw-blog-card__link"`);
  frag = frag.replace(`+'" target="_blank" rel="noopener" class="sw-blog-card__link">`, `+'" class="sw-blog-card__link">`);
  return frag;
}

// 1. regular pages
for (const [file, slug] of Object.entries(PAGES)) {
  let frag = readFileSync(join(ROOT, file), 'utf8');
  if (!frag.trim()) { console.log(`SKIP empty: ${file}`); continue; }
  if (file === 'articles-and-news.html') frag = staticizeBlogListing(frag);
  if (file === 'index.html') frag = staticizeHomeNews(frag);
  frag = processFragment(frag);
  const meta = META[slug] || { title: `${slug} | SkyWings Aviation Academy`, desc: GENERIC_DESC };
  emit(slug, wrapPage(slug, meta, frag, headerFrag, footerFrag));
}

// 2. blog articles from WP JSON
for (const f of readdirSync(join(__dirname, 'posts'))) {
  const post = JSON.parse(readFileSync(join(__dirname, 'posts', f), 'utf8').replace(/^﻿/, ''));
  const meta = META[post.slug];
  const frag = processFragment(articleFragment(post, meta));
  emit(post.slug, wrapPage(post.slug, { ...meta, article: true, ogImg: images.get(post._embedded?.['wp:featuredmedia']?.[0]?.source_url) }, frag, headerFrag, footerFrag));
}

// 3. 404 page
emit('404', wrapPage('404', { title: 'Page Not Found | SkyWings Aviation Academy', desc: GENERIC_DESC, noindex: true }, recolor(`
<div style="font-family:'Instrument Sans',sans-serif;background:linear-gradient(135deg,#0a1128 0%,#001f54 60%,#034078 100%);min-height:60vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:80px 24px;">
  <div>
    <div style="font-family:'Sora',sans-serif;font-size:72px;font-weight:300;color:#1282a2;line-height:1;">404</div>
    <div style="font-family:'Sora',sans-serif;font-size:22px;font-weight:300;color:#fefcfb;margin:16px 0 8px;">This page has flown elsewhere.</div>
    <p style="font-size:14px;font-weight:300;color:rgba(254,252,251,0.55);margin:0 0 28px;">The page you're looking for doesn't exist or has moved.</p>
    <a href="/" style="display:inline-flex;font-size:13.5px;font-weight:500;text-decoration:none;padding:12px 26px;border-radius:100px;background:#1282a2;color:#fff;">Back to Homepage</a>
  </div>
</div>`), headerFrag, footerFrag));
// emit() already writes this flat as dist/404.html

// 4. sitemap + robots (noindexed/private pages excluded and disallowed)
const NOINDEX_SLUGS = ['404', 'skywings-feedback-form'];
const today = '2026-07-11';
const publicSlugs = builtSlugs.filter(s => !NOINDEX_SLUGS.includes(s));
const sitemapUrls = publicSlugs.map(s => `  <url><loc>${SITE}${s ? `/${s}/` : '/'}</loc><lastmod>${today}</lastmod></url>`).join('\n');
writeFileSync(join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`);
writeFileSync(join(DIST, 'robots.txt'), `User-agent: *
Disallow: /404/
Disallow: /404.html
Disallow: /skywings-feedback-form/
Disallow: /skywings-feedback-form.html
Disallow: /cdn-cgi/
Allow: /

Sitemap: ${SITE}/sitemap.xml
`);

// 5. llms.txt: context for AI crawlers
writeFileSync(join(DIST, 'llms.txt'), `# SkyWings Aviation Academy

> SkyWings Aviation Academy (skywingsacademy.com) is a premium aviation college in Kerala, India, with campuses in Kochi (Ernakulam) and Mahe (Puducherry). Operating since 2012, it offers UGC-recognised degree and diploma programmes in aviation, airline and airport management, cabin crew training, logistics and hospitality, with IATA-aligned, AI-integrated syllabi and 100% placement assistance. Kochi campus is close to Cochin International Airport (CIAL), giving students internships and industry exposure. Alumni work with airlines and airports in India and the Gulf (UAE, Qatar, Saudi Arabia, Bahrain).

## Courses
- [BBA Aviation, Airline & Airport Management](${SITE}/bba-aviation/): 3-year UGC-recognised undergraduate degree for airport and airline management careers.
- [MBA, Airline & Airport Management](${SITE}/mba-airline-and-airport-management/): 2-year postgraduate degree for senior aviation management roles.
- [Diploma in Cabin Crew Operations](${SITE}/diploma-in-cabin-crew-management/): 1-year training in grooming, safety and in-flight service; open to male and female candidates.
- [Diploma in Airline & Airport Management](${SITE}/diploma-in-airline-airport-management/): 1-year fast-track diploma with IATA training for airport ground staff roles.
- [BBA Logistics & Supply Chain Management](${SITE}/bba-logistics-supply-chain-management/): 3-year UGC degree for air cargo, shipping and logistics careers.
- [Diploma in Aviation & Hospitality Management](${SITE}/diploma-in-aviation-hospitality-management/): 6-month diploma combining aviation with luxury hospitality.
- [All courses compared](${SITE}/aviation-courses-in-kerala/): fees, eligibility and intake dates.

## Key pages
- [About the academy](${SITE}/about-us/)
- [Kochi campus](${SITE}/kochi-campus/): Pallissery Road, NH bypass, behind Starbucks, Kochi 682032
- [Mahe campus](${SITE}/mahe-campus/): Lalu's Business Park, opposite Sreenarayana Guru College, Mahe
- [Contact and admissions](${SITE}/contact/): phone +91 9847 163 163, WhatsApp +91 9605 66 44 55, email info@skywingsacademy.com
- [Gallery](${SITE}/gallery/)
- [Blog and career guides](${SITE}/articles-and-news/)

## Articles
- [Aviation Courses in Kerala 2026, Complete Guide](${SITE}/aviation-courses-in-kerala-guide-2026/)
- [High Paying Aviation Jobs in Kerala 2026](${SITE}/high-paying-aviation-jobs-in-kerala-2026/)
- [Aviation Industry Outlook 2026](${SITE}/aviation-industry-outlook-2026/)
- [BBA with Aviation vs General BBA](${SITE}/bba-with-aviation-vs-general-bba/)
- [Career in Air Cargo & Logistics 2026](${SITE}/career-in-air-cargo-logistics-2026/)

## Admissions facts
- No entrance exam (no NEET/JEE); admission is based on 12th-grade marks and a personal interview.
- Documents: 10th and 12th mark sheets, government ID (Aadhaar), passport-size photos; degree certificate for MBA.
- Educational loan documentation support and accommodation assistance for outstation students.
- Admissions open for 2026 batches at both campuses.
`);

// 6. 301 redirects for old WordPress URLs (Apache .htaccess + Netlify/CF _redirects)
const PAGE_REDIRECTS = [
  ['/about', '/about-us/'],
  ['/aviation-courses', '/aviation-courses-in-kerala/'],
  ['/courses', '/aviation-courses-in-kerala/'],
  ['/bba-airline-airport-management', '/bba-aviation/'],
  ['/blogs-articles-aviation-hospitality', '/articles-and-news/'],
  ['/skywings-aviation-college-kochi-campus', '/kochi-campus/'],
  ['/skywings-aviation-college-mahe', '/mahe-campus/'],
  ['/aviation-courses-in-kerala-2', '/aviation-courses-in-kerala/'],
  ['/enquire-now', '/contact/'],
  ['/home-copy', '/'],
  ['/uncategorized', '/articles-and-news/'],
  ['/design-branding', '/articles-and-news/'],
  ['/business', '/articles-and-news/'],
  ['/blog', '/articles-and-news/'],
];
const WILDCARD_REDIRECTS = [   // [pattern-prefix, target]
  ['/tag/', '/articles-and-news/'],
  ['/category/', '/articles-and-news/'],
  ['/type/', '/articles-and-news/'],
  ['/elementor-hf/', '/'],
  ['/author/', '/articles-and-news/'],
];
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

let htaccess = `# SkyWings Aviation Academy: static site
ErrorDocument 404 /404.html

RewriteEngine On
RewriteBase /

# 301 redirects from old WordPress URLs (SEO preservation)
`;
for (const [from, to] of PAGE_REDIRECTS) htaccess += `RedirectMatch 301 ^${escRe(from)}/?$ ${to}\n`;
for (const [from, to] of WILDCARD_REDIRECTS) htaccess += `RedirectMatch 301 ^${escRe(from)}.* ${to}\n`;
htaccess += `\n# Old media library URLs -> renamed local assets\n`;
for (const [up, local] of [...uploadsPath.entries()].sort()) htaccess += `RedirectMatch 301 ^/wp-content/uploads/${escRe(up)}$ ${local}\n`;
htaccess += `RedirectMatch 301 ^/wp-content/.* /\nRedirectMatch 301 ^/wp-admin/.* /\nRedirectMatch 301 ^/wp-json/.* /articles-and-news/\n`;
htaccess += `
# Clean URLs: every page is a flat <slug>.html file (about-us.html, etc.)
# but visitors and search engines see /about-us/ with no .html exposed.
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{DOCUMENT_ROOT}/$1.html -f
RewriteRule ^([^/]+)/?$ $1.html [L]
`;
writeFileSync(join(DIST, '.htaccess'), htaccess);

let redirects = `# Netlify / Cloudflare Pages redirects (same rules as .htaccess)\n`;
for (const [from, to] of PAGE_REDIRECTS) redirects += `${from} ${to} 301\n${from}/ ${to} 301\n`;
for (const [from, to] of WILDCARD_REDIRECTS) redirects += `${from}* ${to} 301\n`;
for (const [up, local] of [...uploadsPath.entries()].sort()) redirects += `/wp-content/uploads/${up} ${local} 301\n`;
redirects += `/wp-content/* / 301\n/wp-admin/* / 301\n/wp-json/* /articles-and-news/ 301\n`;
redirects += `\n# Clean URLs: flat <slug>.html files served at /<slug>/ (no .html exposed)\n`;
for (const s of builtSlugs.filter(Boolean)) redirects += `/${s} /${s}.html 200\n/${s}/ /${s}.html 200\n`;
writeFileSync(join(DIST, '_redirects'), redirects);

// 7. static extras (opengraph preview image etc.)
const staticDir = join(__dirname, 'static');
if (existsSync(join(staticDir, 'preview.webp'))) {
  mkdirSync(join(DIST, 'assets', 'opengraph'), { recursive: true });
  writeFileSync(join(DIST, 'assets', 'opengraph', 'preview.webp'), readFileSync(join(staticDir, 'preview.webp')));
} else {
  console.warn('WARN: _build/static/preview.webp missing; og:image will 404');
}

// 5. image manifest for the downloader
const manifest = [...images.entries()].map(([src, dest]) => `${src}\t${dest}`).join('\n');
writeFileSync(join(__dirname, 'images-manifest.tsv'), manifest, 'utf8');

console.log(`Built ${builtSlugs.length} pages -> dist/`);
console.log(`Images to download: ${images.size} (see _build/images-manifest.tsv)`);
if (unknownLinks.size) console.log('Unknown internal link targets:\n  ' + [...unknownLinks].join('\n  '));
