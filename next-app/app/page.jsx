import { pageMetadata } from '@/lib/seo';
import PageGraph from '@/components/PageGraph';
import EnquiryForm from '@/components/EnquiryForm';
import HomeNews from '@/components/HomeNews';
import './page.css';

export const metadata = pageMetadata('');

export default function Page_home() {
  return (
    <>
      <PageGraph slug="" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\r\n  \"@context\": \"https://schema.org\",\r\n  \"@type\": [\"EducationalOrganization\",\"LocalBusiness\"],\r\n  \"name\": \"SkyWings Aviation Academy\",\r\n  \"alternateName\": [\"SkyWings Academy of Aviation & Logistics\",\"Best Aviation College in Kerala\",\"No.1 Aviation College Kerala\"],\r\n  \"description\": \"No.1 Premium Aviation College in Kerala offering BBA Aviation, MBA Aviation, Diploma in Cabin Crew, Airline & Airport Management, BBA Logistics, and Aviation & Hospitality courses with 100% placement assistance in Kochi and Mahe.\",\r\n  \"url\": \"https://skywingsacademy.com\",\r\n  \"telephone\": \"+919847163163\",\r\n  \"email\": \"info@skywingsacademy.com\",\r\n  \"priceRange\": \"₹₹\",\r\n  \"openingHours\": \"Mo-Sa 09:00-18:00\",\r\n  \"address\": [\r\n    {\r\n      \"@type\": \"PostalAddress\",\r\n      \"streetAddress\": \"Ernakulam Campus\",\r\n      \"addressLocality\": \"Kochi\",\r\n      \"addressRegion\": \"Kerala\",\r\n      \"postalCode\": \"682001\",\r\n      \"addressCountry\": \"IN\"\r\n    },\r\n    {\r\n      \"@type\": \"PostalAddress\",\r\n      \"streetAddress\": \"Mahe Campus\",\r\n      \"addressLocality\": \"Mahe\",\r\n      \"addressRegion\": \"Puducherry\",\r\n      \"postalCode\": \"673310\",\r\n      \"addressCountry\": \"IN\"\r\n    }\r\n  ],\r\n  \"geo\": {\r\n    \"@type\": \"GeoCoordinates\",\r\n    \"latitude\": \"9.9312\",\r\n    \"longitude\": \"76.2673\"\r\n  },\r\n  \"sameAs\": [\r\n    \"https://www.facebook.com/skywingsacademy\",\r\n    \"https://www.instagram.com/skywingsaviation\",\r\n    \"https://www.youtube.com/@skywingsacademy\",\r\n    \"https://www.linkedin.com/company/skywings-aviation-academy\"\r\n  ],\r\n  \"hasOfferCatalog\": {\r\n    \"@type\": \"OfferCatalog\",\r\n    \"name\": \"Aviation & Logistics Courses in Kerala\",\r\n    \"itemListElement\": [\r\n      { \"@type\": \"Course\", \"name\": \"BBA with Aviation, Airline & Airport Management\", \"provider\": { \"@type\": \"EducationalOrganization\", \"name\": \"SkyWings Aviation Academy\" }, \"timeRequired\": \"P3Y\", \"educationalLevel\": \"Undergraduate\", \"courseMode\": \"onsite\", \"description\": \"3-year UGC-recognised BBA degree in Airline and Airport Management offered at the best aviation college in Kerala.\" },\r\n      { \"@type\": \"Course\", \"name\": \"Diploma in Cabin Crew Management\", \"provider\": { \"@type\": \"EducationalOrganization\", \"name\": \"SkyWings Aviation Academy\" }, \"timeRequired\": \"P1Y\", \"educationalLevel\": \"Diploma\", \"courseMode\": \"onsite\" },\r\n      { \"@type\": \"Course\", \"name\": \"MBA with Aviation, Airline & Airport Management\", \"provider\": { \"@type\": \"EducationalOrganization\", \"name\": \"SkyWings Aviation Academy\" }, \"timeRequired\": \"P2Y\", \"educationalLevel\": \"Postgraduate\", \"courseMode\": \"onsite\" },\r\n      { \"@type\": \"Course\", \"name\": \"Diploma in Airline and Airport Management\", \"provider\": { \"@type\": \"EducationalOrganization\", \"name\": \"SkyWings Aviation Academy\" }, \"timeRequired\": \"P1Y\", \"educationalLevel\": \"Diploma\", \"courseMode\": \"onsite\" },\r\n      { \"@type\": \"Course\", \"name\": \"BBA in Logistics & Supply Chain Management\", \"provider\": { \"@type\": \"EducationalOrganization\", \"name\": \"SkyWings Aviation Academy\" }, \"timeRequired\": \"P3Y\", \"educationalLevel\": \"Undergraduate\", \"courseMode\": \"onsite\" },\r\n      { \"@type\": \"Course\", \"name\": \"Diploma in Aviation & Hospitality Management\", \"provider\": { \"@type\": \"EducationalOrganization\", \"name\": \"SkyWings Aviation Academy\" }, \"timeRequired\": \"P6M\", \"educationalLevel\": \"Diploma\", \"courseMode\": \"onsite\" }\r\n    ]\r\n  },\r\n  \"aggregateRating\": {\r\n    \"@type\": \"AggregateRating\",\r\n    \"ratingValue\": \"4.8\",\r\n    \"reviewCount\": \"250\",\r\n    \"bestRating\": \"5\"\r\n  }\r\n}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\r\n  \"@context\": \"https://schema.org\",\r\n  \"@type\": \"FAQPage\",\r\n  \"mainEntity\": [\r\n    { \"@type\": \"Question\", \"name\": \"Does SkyWings Academy provide hostel facilities?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"We assist outstation students in finding safe and affordable accommodation near our Kochi campus. Our admissions team will connect you with verified paying-guest options and student housing nearby.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"Can boys apply for Cabin Crew training?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Absolutely. Many airlines hire male Flight Stewards. Our Cabin Crew training programme is open to both male and female candidates who meet the eligibility criteria.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"Why is SkyWings located in Kochi?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Kochi is the aviation hub of Kerala, home to CIAL (Cochin International Airport Limited), one of India's busiest international airports. Being here gives our students direct access to internships and industry exposure that no other location in Kerala can offer.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"What are the fees for Aviation courses in Kerala?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Fees vary by course. Contact our admissions team at +91 9847 163 163 for a detailed fee structure and available scholarship options.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"Is NEET or JEE required for Aviation Management?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"No. Admission is based on 12th-grade marks and a personal interview at SkyWings. There are no competitive entrance exams required for any of our programmes.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"What documents are needed for admission?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"You will need your 10th and 12th mark sheets, a valid government ID proof (Aadhaar card), and recent passport-size photographs. For MBA applicants, a degree certificate from a recognised university is also required.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"Can I work in the Gulf after studying at SkyWings?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes. Our UGC-recognised degrees are highly valued in the Middle East for Ground Staff and Logistics roles. Many of our graduates are currently working in the UAE, Qatar, Saudi Arabia, and Bahrain.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"Does the college offer educational loan assistance?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes, we provide full documentation support to help students apply for educational bank loans.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"How do I apply for the 2026 batch?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"You can apply online at skywingsacademy.com or visit our Kochi campus directly. Call +91 9847 163 163 or WhatsApp +91 96056 64455.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"What makes SkyWings Premium?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Air-conditioned smart classrooms, trainers from international airlines, weekly grooming audits, a mock aircraft training environment, AI-integrated syllabus, and a luxury learning experience designed to match the standards of the global aviation industry.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"Which is the No.1 Premium Aviation College in Kerala?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"SkyWings Academy is widely recognised as the No.1 Premium Aviation College in Kerala due to its world-class curriculum, experienced trainers, superior grooming standards, CIAL internships, AI-integrated syllabus, and an unmatched placement track record.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"What is the qualification for BBA Aviation in Kerala?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"To join BBA Aviation, you need to have passed Plus Two (12th Grade) in any stream with a minimum pass percentage. No entrance exam is required; admission is merit-based with a personal interview.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"Does SkyWings Academy offer placement guarantee?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"We offer 100% Placement Assistance with mock interview training, grooming sessions, campus drive access, and direct referrals to our airline and airport recruitment partners.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"Is Cabin Crew training difficult?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"It is rigorous but designed for beginners, covering everything from grooming and communication to safety drills and emergency evacuation procedures.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"What is the salary after BBA Aviation in Kerala?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Starting salaries for BBA Aviation graduates typically range from ₹20,000 to ₹45,000 per month depending on the role and employer.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"Can I join Aviation if I am from a Commerce background?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes! Commerce students excel particularly in Airport Management, Airline Finance, and Logistics roles. Our programmes accept students from all streams.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"What is the duration of the Diploma in Airline and Airport Management?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"The Diploma in Airline and Airport Management is a 1-year full-time programme covering ground handling, terminal operations, check-in procedures, DGR, and customer service.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"Is there an age limit for Cabin Crew jobs?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Most airlines hire freshers between ages 18 and 27. At SkyWings, our Cabin Crew programme accepts applicants aged 17–25 who have passed 12th grade.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"Do I need to be fluent in English?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"English is the universal language of aviation. We include intensive Communicative English training in all our programmes, you do not need to be fluent before joining.\" } },\r\n    { \"@type\": \"Question\", \"name\": \"What is the difference between BBA Aviation and BBA Logistics?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"BBA Aviation focuses on Airport Operations, Passenger Handling, and Airline Management. BBA Logistics focuses on Air Cargo, Shipping, Warehousing, and Global Trade. Both are 3-year UGC-recognised degree programmes.\" } }\r\n  ]\r\n}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\r\n  \"@context\": \"https://schema.org\",\r\n  \"@type\": \"WebPage\",\r\n  \"name\": \"Best Aviation College in Kerala, SkyWings Academy\",\r\n  \"description\": \"SkyWings is Kerala's No.1 premium aviation college in Kochi and Mahe. Offering BBA Aviation, MBA, Cabin Crew, Diploma courses with 100% placement assistance.\",\r\n  \"url\": \"https://skywingsacademy.com\",\r\n  \"inLanguage\": \"en-IN\",\r\n  \"breadcrumb\": {\r\n    \"@type\": \"BreadcrumbList\",\r\n    \"itemListElement\": [\r\n      { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://skywingsacademy.com\" },\r\n      { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Aviation Courses Kerala\", \"item\": \"https://skywingsacademy.com/aviation-courses-in-kerala/\" }\r\n    ]\r\n  },\r\n  \"speakable\": {\r\n    \"@type\": \"SpeakableSpecification\",\r\n    \"xpath\": [\"/html/head/title\",\"/html/body//h1\",\"/html/body//h2[1]\"]\r\n  },\r\n  \"about\": {\r\n    \"@type\": \"EducationalOrganization\",\r\n    \"name\": \"SkyWings Aviation Academy\",\r\n    \"description\": \"Kerala's No.1 premium aviation college offering internationally recognised aviation programmes with 100% placement assistance.\"\r\n  },\r\n  \"mentions\": [\r\n    { \"@type\": \"City\", \"name\": \"Kochi\", \"containedInPlace\": { \"@type\": \"State\", \"name\": \"Kerala\" } },\r\n    { \"@type\": \"City\", \"name\": \"Mahe\", \"containedInPlace\": { \"@type\": \"State\", \"name\": \"Puducherry\" } }\r\n  ]\r\n}" }} />
<svg style={{ display: 'none' }}><defs>
  <symbol id="h-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></symbol>
  <symbol id="h-wa" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></symbol>
  <symbol id="h-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></symbol>
  <symbol id="h-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></symbol>
  <symbol id="h-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></symbol>
</defs></svg>

<div className="sw">


<section className="sw-hero">
  <div className="sw-hero__waves" aria-hidden="true">
    <svg className="sw-wave sw-wave--1" viewBox="0 0 2880 320" preserveAspectRatio="none">
      <path d="M0 160 Q 180 70 360 160 T 720 160 T 1080 160 T 1440 160 T 1800 160 T 2160 160 T 2520 160 T 2880 160" fill="none" stroke="rgba(192,165,98,0.30)" strokeWidth="2.5" />
    </svg>
    <svg className="sw-wave sw-wave--2" viewBox="0 0 2880 320" preserveAspectRatio="none">
      <path d="M0 170 Q 240 90 480 170 T 960 170 T 1440 170 T 1920 170 T 2400 170 T 2880 170" fill="none" stroke="rgba(44,53,71,0.45)" strokeWidth="2" />
    </svg>
    <svg className="sw-wave sw-wave--3" viewBox="0 0 2880 320" preserveAspectRatio="none">
      <path d="M0 150 Q 150 220 300 150 T 600 150 T 900 150 T 1200 150 T 1500 150 T 1800 150 T 2100 150 T 2400 150 T 2700 150 T 2880 150" fill="none" stroke="rgba(192,165,98,0.16)" strokeWidth="1.5" />
    </svg>
  </div>
  <div className="sw-hero__inner">
  <div className="sw-hero__left">
    <div className="sw-eyebrow sw-eyebrow--light">No.1 Premium Aviation College in Kerala</div>
    <h1 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(28px,4vw,56px)', fontWeight: '300', lineHeight: '1.1', letterSpacing: '-2px', color: '#fefcfb', margin: '0', padding: '0', display: 'block' }}>Your Gateway to a Global Career with the Best Aviation College in Kerala.</h1>
    <p className="sw-hero-kw-h3">No.1 Premium Aviation College in Kerala · Kochi &amp; Mahe Campuses</p>

    <div className="sw-hero__tags">
      <span className="sw-hero__tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg>
        AI-Integrated Syllabus
      </span>
      <span className="sw-hero__tag-sep"></span>
      <span className="sw-hero__tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/></svg>
        100% Placement Assistance
      </span>
      <span className="sw-hero__tag-sep"></span>
      <span className="sw-hero__tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2l6 6-1 3.5 3.5-1z"/></svg>
        Kochi &amp; Mahe Campuses
      </span>
    </div>

    <p className="sw-body" style={{ maxWidth: '100%', marginBottom: '36px', color: 'rgba(254,252,251,0.6)', lineHeight: '1.7' }}>SkyWings Aviation College is Kerala's No.1 premium aviation college, recognised for superior grooming standards, infrastructure, and 100% placement assistance. Your journey to the skies starts here.</p>

    <div className="sw-hero__cta">
      <a href="tel:+919847163163" className="sw-btn sw-btn--sky">
        <svg width="15" height="15"><use href="#h-phone"/></svg> Enquire Now
      </a>
      <a href="https://wa.me/919605664455" className="sw-btn sw-btn--wa" target="_blank" rel="noopener">
        <svg width="15" height="15"><use href="#h-wa"/></svg> WhatsApp Us
      </a>
      <a href="#courses" className="sw-btn sw-btn--ghost">Explore Courses</a>
    </div>
  </div>

  <div className="sw-hero__right">
    <img src="/assets/images/cabin-crew-training-students-kerala.png" alt="SkyWings Aviation Academy Students, Cabin Crew Training Kerala" style={{ width: '92%', height: 'auto', objectFit: 'contain' }} />
  </div>
  </div>
</section>


<div className="sw-phonestrip">
  <div className="sw-phonestrip__text">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
    Free career counselling, speak to our admissions team today
  </div>
  <div className="sw-phonestrip__sep"></div>
  <a href="tel:+919847163163">+91 9847 163 163</a>
  <div className="sw-phonestrip__sep"></div>
  <a href="https://wa.me/919605664455" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
    <svg width="15" height="15"><use href="#h-wa"/></svg> WhatsApp
  </a>
</div>


<div className="sw-iconstrip">
  <div className="sw-iconstrip-inner">
    <div className="sw-iconstrip-item">
      <div className="sw-iconstrip-item__icon">
        <img src="/assets/images/expert-trainers-icon.svg" alt="Expert Trainers" />
      </div>
      <div>
        <div className="sw-iconstrip-item__title">Well Experienced Trainers from Aviation Industry</div>
        <div className="sw-iconstrip-item__body">Learn from trainers who have flown the world and managed international airports.</div>
      </div>
    </div>
    <div className="sw-iconstrip-item">
      <div className="sw-iconstrip-item__icon">
        <img src="/assets/images/best-aviation-college-icon.svg" alt="Best Aviation College" />
      </div>
      <div>
        <div className="sw-iconstrip-item__title">Considered the Best Aviation College in Kerala</div>
        <div className="sw-iconstrip-item__body">Recognised for superior grooming standards &amp; infrastructure.</div>
      </div>
    </div>
    <div className="sw-iconstrip-item">
      <div className="sw-iconstrip-item__icon">
        <img src="/assets/images/placement-assistance-icon.svg" alt="Placement Assistance" />
      </div>
      <div>
        <div className="sw-iconstrip-item__title">100% Placement Assistance all Students in Popular Airlines</div>
        <div className="sw-iconstrip-item__body">Tie-ups with major airports, airlines, and ground handling agencies.</div>
      </div>
    </div>
    <div className="sw-iconstrip-item">
      <div className="sw-iconstrip-item__icon">
        <img src="/assets/images/modern-campus-icon.svg" alt="Modern Campus" />
      </div>
      <div>
        <div className="sw-iconstrip-item__title">Modern Campus with Mock Aircraft and AI Training</div>
        <div className="sw-iconstrip-item__body">State-of-the-art classrooms in Kochi capable of training 250+ students.</div>
      </div>
    </div>
  </div>
</div>


<section className="sw-sec">
  <div className="sw-wrap">
    <div className="sw-split">
      <div className="sw-split__img">
        <img src="/assets/images/skywings-aviation-college-campus-kochi.webp" alt="SkyWings Aviation College Campus, Kochi" />
      </div>
      <div>
        <div className="sw-eyebrow">About SkyWings</div>
        <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>Wings of Confidence,<br />Skies of Opportunity.</h2>
        <span className="sw-rule"></span>
        <p className="sw-body">SkyWings Aviation, recognised as the Best Premium Aviation College in Kerala, is a premier professional training institute dedicated to preparing aspiring candidates for successful careers in the aviation industry. Our programmes are tailored to equip students for airline and airport interviews, ground staff roles, and cabin crew positions, ensuring they are industry-ready from day one.</p>
        <p className="sw-body" style={{ marginTop: '16px' }}>Our team of highly qualified trainers brings professional experience from leading airlines and airports across India and abroad. We bridge the gap between academic learning and real-world aviation operations.</p>
      </div>
    </div>

    <div className="sw-feature-row sw-feature-row--top" style={{ marginTop: '36px' }}>
          <div className="sw-feature-item">
            <div className="sw-feature-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <div className="sw-feature-item__title">UGC &amp; University Recognised</div>
              <p className="sw-body--sm" style={{ marginTop: '4px' }}>Earn legitimate university degrees from Pondicherry  University alongside industry certifications.</p>
            </div>
          </div>
          <div className="sw-feature-item">
            <div className="sw-feature-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div>
              <div className="sw-feature-item__title">Dual Campus, Kochi &amp; Mahe</div>
              <p className="sw-body--sm" style={{ marginTop: '4px' }}>Premium training facilities in two locations, making aviation education accessible across Kerala and Malabar.</p>
            </div>
          </div>
          <div className="sw-feature-item">
            <div className="sw-feature-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
            </div>
            <div>
              <div className="sw-feature-item__title">Global Alumni, 15+ Countries</div>
              <p className="sw-body--sm" style={{ marginTop: '4px' }}>Our graduates are placed in airlines and airports across the UAE, Qatar, UK, Singapore, and more.</p>
            </div>
          </div>
        </div>
  </div>
</section>


<div className="sw-wrap" style={{ paddingBottom: '0' }}>
  <div className="sw-stats">
    <div className="sw-stat-item">
      <div className="sw-stat-num">250<span>+</span></div>
      <div className="sw-stat-label">Students per batch</div>
    </div>
    <div className="sw-stat-item">
      <div className="sw-stat-num">100<span>%</span></div>
      <div className="sw-stat-label">Placement assistance</div>
    </div>
    <div className="sw-stat-item">
      <div className="sw-stat-num">15<span>+</span></div>
      <div className="sw-stat-label">Countries, alumni working</div>
    </div>
    <div className="sw-stat-item">
      <div className="sw-stat-num">2<span></span></div>
      <div className="sw-stat-label">Premium campuses</div>
    </div>
  </div>
</div>


<section className="sw-sec--off" id="courses">
  <div className="sw-wrap">
    <div style={{ textAlign: 'center' }}>
      <div className="sw-eyebrow sw-eyebrow--c">Our Programmes</div>
      <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>Premium Aviation &amp; Logistics Courses</h2>
      <h3 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: '13px', fontWeight: '400', color: 'var(--text-light)', letterSpacing: '1.2px', textTransform: 'uppercase', margin: '12px 0 20px' }}>Best Aviation College in Kerala · BBA · MBA · Cabin Crew · Logistics</h3>
      <span className="sw-rule" style={{ margin: '0 auto 24px' }}></span>
      <p className="sw-body" style={{ maxWidth: '580px', margin: '0 auto' }}>As Kerala's premier aviation college, we offer a range of undergraduate, postgraduate, and diploma courses designed for the modern aviation industry.</p>
    </div>

    <div className="sw-course-grid">

      
      <div className="sw-course-card">
        <div className="sw-course-card__body">
          <span className="sw-course-card__badge">3 Years · UG Degree</span>
          <p className="sw-course-card__sub">The Top Choice For BBA Aviation In Kerala</p>
          <h3 className="sw-course-card__title">BBA with Aviation</h3>
          <p className="sw-course-card__desc">Our 3-year <strong style={{ color: 'var(--cream)', fontWeight: '500' }}>BBA with Aviation (Airline &amp; Airport Management)</strong> is the flagship course for students after Plus Two. Unlike generic management degrees, this program blends business administration with specialized aviation operations training.</p>
          <ul className="sw-course-card__bullets">
            <li><strong>Why Join Us:</strong> As the <strong>No.1 Premium Aviation College in Kerala</strong>, we provide an industry-embedded curriculum that includes airport internships and guest lectures from industry veterans. This ensures you graduate not just with a degree, but with the practical skills top airlines demand.</li>
            <li><strong>Career Scope:</strong> Airport Manager, Duty Manager, Ground Staff Supervisor, Airline Operations Executive, Guest Relations Officer (GRO).</li>
            <li><strong>Focus Areas:</strong> Airport Operations &amp; Safety, Aviation Law, Passenger Handling, Airline Marketing, Organizational Behavior.</li>
          </ul>
          <div className="sw-course-card__footer">
            <a href="tel:+919847163163" className="sw-btn sw-btn--sky" style={{ padding: '11px 22px', fontSize: '13px' }}>Enquire Now</a>
            <a href="/bba-aviation/" className="sw-course-card__link">
              View More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>

      
      <div className="sw-course-card">
        <div className="sw-course-card__body">
          <span className="sw-course-card__badge">1 Year · Diploma</span>
          <p className="sw-course-card__sub">Premier Cabin Crew Training In Kochi</p>
          <h3 className="sw-course-card__title">Diploma in Cabin Crew Management</h3>
          <p className="sw-course-card__desc">Our <strong style={{ color: 'var(--cream)', fontWeight: '500' }}>Diploma in Cabin Crew Management</strong> is rated as the top <strong style={{ color: 'var(--cream)', fontWeight: '500' }}>Cabin Crew training</strong> program in Kerala. We focus on grooming, safety procedures, in-flight services, and communication skills to help you crack interviews with international airlines.</p>
          <ul className="sw-course-card__bullets">
            <li><strong>Why Join Us:</strong> We don't just teach theory; we build careers. Our training includes rigorous grooming sessions, mock interviews, and personality development workshops that give you the "Sky Wings Edge" over other candidates.</li>
            <li><strong>Career Scope:</strong> Air Hostess / Flight Steward, In-flight Service Manager, Premium Ground Staff, Airline Hospitality Executive.</li>
            <li><strong>Focus Areas:</strong> Professional Grooming, In-flight Safety &amp; First Aid, Passenger Psychology, Communication Skills, Emergency Evacuation Drills.</li>
          </ul>
          <div className="sw-course-card__footer">
            <a href="tel:+919847163163" className="sw-btn sw-btn--sky" style={{ padding: '11px 22px', fontSize: '13px' }}>Enquire Now</a>
            <a href="/diploma-in-cabin-crew-management/" className="sw-course-card__link">
              View More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>

      
      <div className="sw-course-card">
        <div className="sw-course-card__body">
          <span className="sw-course-card__badge">2 Years · PG Degree</span>
          <p className="sw-course-card__sub">Advanced Leadership For Aviation Professionals</p>
          <h3 className="sw-course-card__title">MBA With Aviation</h3>
          <p className="sw-course-card__desc">Take your career to the executive level with our 2-year MBA program. Designed for graduates, this course focuses on aviation law, airport planning, and international trends, making us a preferred destination for advanced studies.</p>
          <ul className="sw-course-card__bullets">
            <li><strong>Why Join Us:</strong> This program is tailored for those who want to move beyond operational roles into decision-making positions. It is the perfect launchpad for a global career in aviation consultancy or senior airport management.</li>
            <li><strong>Career Scope:</strong> Airport Director, Aviation Consultant, Airline Station Manager, Regulatory Officer, Corporate Aviation Manager.</li>
            <li><strong>Focus Areas:</strong> Strategic Airport Planning, Aviation Law &amp; Regulatory Frameworks, Airline Finance, Global Aviation Trends, Human Resource Management.</li>
          </ul>
          <div className="sw-course-card__footer">
            <a href="tel:+919847163163" className="sw-btn sw-btn--sky" style={{ padding: '11px 22px', fontSize: '13px' }}>Enquire Now</a>
            <a href="/mba-airline-and-airport-management/" className="sw-course-card__link">
              View More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>

      
      <div className="sw-course-card">
        <div className="sw-course-card__body">
          <span className="sw-course-card__badge">1 Year · Diploma</span>
          <p className="sw-course-card__sub">Fast-Track Your Career In 1 Year</p>
          <h3 className="sw-course-card__title">Diploma in Airline &amp; Airport Management</h3>
          <p className="sw-course-card__desc">A comprehensive 1-year program covering the A-Z of ground handling and airport operations. Ideal for graduates looking for quick entry into the industry.</p>
          <ul className="sw-course-card__bullets">
            <li><strong>Why Join Us:</strong> Get "Job Ready" in just 12 months. This diploma is designed for speed and efficiency, focusing heavily on the practical skills required to clear ground staff interviews at Indian and International airports.</li>
            <li><strong>Career Scope:</strong> Ground Staff, Check-in Agent, Ramp Coordinator, Cargo Handler, Customer Service Executive (CSE).</li>
            <li><strong>Focus Areas:</strong> Ground Handling Operations, Check-in Procedures (DCS), Dangerous Goods Regulations (DGR), Airport Ramp Safety, Customer Service Excellence.</li>
          </ul>
          <div className="sw-course-card__footer">
            <a href="tel:+919847163163" className="sw-btn sw-btn--sky" style={{ padding: '11px 22px', fontSize: '13px' }}>Enquire Now</a>
            <a href="/diploma-in-airline-airport-management/" className="sw-course-card__link">
              View More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>

      
      <div className="sw-course-card">
        <div className="sw-course-card__body">
          <span className="sw-course-card__badge">3 Years · UG Degree</span>
          <p className="sw-course-card__sub">Mastering Global Trade And Cargo</p>
          <h3 className="sw-course-card__title">BBA in Logistics &amp; Supply Chain Management</h3>
          <p className="sw-course-card__desc">Aviation isn't just about passengers. Our <strong style={{ color: 'var(--cream)', fontWeight: '500' }}>BBA in Logistics</strong> prepares you for high-paying roles in Air Cargo, Supply Chain, and Warehousing, a booming sector in Kerala and the Middle East.</p>
          <ul className="sw-course-card__bullets">
            <li><strong>Why Join Us:</strong> With the rapid growth of e-commerce and global trade, Logistics is a recession-proof career. We offer specialized training in Air Cargo protocols that general logistics colleges in Kerala often miss.</li>
            <li><strong>Career Scope:</strong> Supply Chain Manager, Logistics Coordinator, Warehouse Supervisor, Import/Export Manager, Procurement Specialist.</li>
            <li><strong>Focus Areas:</strong> Supply Chain Strategy, Inventory Management, International Trade Laws, Warehousing Technology, Air Cargo Operations.</li>
          </ul>
          <div className="sw-course-card__footer">
            <a href="tel:+919847163163" className="sw-btn sw-btn--sky" style={{ padding: '11px 22px', fontSize: '13px' }}>Enquire Now</a>
            <a href="/bba-logistics-supply-chain-management/" className="sw-course-card__link">
              View More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>

      
      <div className="sw-course-card">
        <div className="sw-course-card__body">
          <span className="sw-course-card__badge">6 Months · Diploma</span>
          <p className="sw-course-card__sub">6-Month Fast-Track Aviation Diploma Course</p>
          <h3 className="sw-course-card__title">Diploma in Aviation &amp; Hospitality Management</h3>
          <p className="sw-course-card__desc">Perfect for those who want to enter the service sector quickly. This course blends aviation knowledge with 5-star hospitality standards.</p>
          <ul className="sw-course-card__bullets">
            <li><strong>Why Join Us:</strong> Double your career opportunities. By combining Aviation and Hospitality, you become eligible for roles in both airports and luxury hotels. It is the fastest route to a professional salary.</li>
            <li><strong>Career Scope:</strong> Airline Guest Service Associate, Hotel Front Office Executive, Travel Desk Manager, VIP Lounge Executive, Cruise Line Staff.</li>
            <li><strong>Focus Areas:</strong> Hospitality Management, Front Office Operations, Aviation Soft Skills, Travel Management, Guest Relationship Management.</li>
          </ul>
          <div className="sw-course-card__footer">
            <a href="tel:+919847163163" className="sw-btn sw-btn--sky" style={{ padding: '11px 22px', fontSize: '13px' }}>Enquire Now</a>
            <a href="/diploma-in-aviation-hospitality-management/" className="sw-course-card__link">
              View More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<div className="sw-iconstrip sw-iconstrip--mobile">
  <div className="sw-iconstrip-inner">
    <div className="sw-iconstrip-item">
      <div className="sw-iconstrip-item__icon">
        <img src="/assets/images/expert-trainers-icon.svg" alt="Expert Trainers" />
      </div>
      <div>
        <div className="sw-iconstrip-item__title">Well Experienced Trainers from Aviation Industry</div>
        <div className="sw-iconstrip-item__body">Learn from trainers who have flown the world and managed international airports.</div>
      </div>
    </div>
    <div className="sw-iconstrip-item">
      <div className="sw-iconstrip-item__icon">
        <img src="/assets/images/best-aviation-college-icon.svg" alt="Best Aviation College" />
      </div>
      <div>
        <div className="sw-iconstrip-item__title">Considered the Best Aviation College in Kerala</div>
        <div className="sw-iconstrip-item__body">Recognised for superior grooming standards &amp; infrastructure.</div>
      </div>
    </div>
    <div className="sw-iconstrip-item">
      <div className="sw-iconstrip-item__icon">
        <img src="/assets/images/placement-assistance-icon.svg" alt="Placement Assistance" />
      </div>
      <div>
        <div className="sw-iconstrip-item__title">100% Placement Assistance all Students in Popular Airlines</div>
        <div className="sw-iconstrip-item__body">Tie-ups with major airports, airlines, and ground handling agencies.</div>
      </div>
    </div>
    <div className="sw-iconstrip-item">
      <div className="sw-iconstrip-item__icon">
        <img src="/assets/images/modern-campus-icon.svg" alt="Modern Campus" />
      </div>
      <div>
        <div className="sw-iconstrip-item__title">Modern Campus with Mock Aircraft and AI Training</div>
        <div className="sw-iconstrip-item__body">State-of-the-art classrooms in Kochi capable of training 250+ students.</div>
      </div>
    </div>
  </div>
</div>


<section className="sw-sec">
  <div className="sw-wrap">
    <div style={{ textAlign: 'center' }}>
      <div className="sw-eyebrow sw-eyebrow--c">Why Choose Skywings, No.1 Premium Aviation College In Kerala?</div>
      <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>World-Class Infrastructure &amp; Facilities<span className="sw-h2-kw">No.1 Premium Aviation College in Kerala</span></h2>
      <span className="sw-rule" style={{ margin: '20px auto' }}></span>
      <p className="sw-body" style={{ maxWidth: '660px', margin: '0 auto', color: 'var(--text-muted)' }}>To train the best, you need the best facilities. Sky Wings Academy boasts a state-of-the-art campus designed to simulate a real airport environment, ensuring our status as the No.1 Premium Aviation College in Kerala.</p>
    </div>

    <div className="sw-infra-grid" style={{ marginTop: '64px' }}>

      
      <div className="sw-infra-card">
        <div className="sw-infra-icon">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            
            <path d="M8 36 Q18 28 32 28 Q46 28 56 22"/>
            
            <path d="M56 22 Q60 20 58 26 L32 34"/>
            
            <path d="M24 30 L14 44 L28 38"/>
            
            <path d="M10 35 L6 28 L14 32"/>
            
            <path d="M36 29 Q40 26 44 28 Q40 32 36 31 Z"/>
            
            <circle cx="40" cy="26" r="1.2" fill="currentColor" stroke="none"/>
            <circle cx="45" cy="24" r="1.2" fill="currentColor" stroke="none"/>
            <circle cx="50" cy="23" r="1.2" fill="currentColor" stroke="none"/>
          </svg>
        </div>
        <h3 className="sw-infra-card__title">Turn Your Dreams to Reality</h3>
        <p className="sw-infra-card__body">We give you hands-on experience in the Aviation &amp; Logistics industry through technology that will put you at the forefront of the industry.</p>
      </div>

      
      <div className="sw-infra-card">
        <div className="sw-infra-icon">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            
            <polygon points="32,10 58,24 32,38 6,24" strokeLinejoin="round"/>
            
            <path d="M6 24 L6 24"/>
            
            <path d="M16 28 L16 44 Q16 50 32 52 Q48 50 48 44 L48 28"/>
            
            <line x1="58" y1="24" x2="58" y2="38"/>
            
            <circle cx="58" cy="40" r="2.5" fill="currentColor" stroke="none"/>
          </svg>
        </div>
        <h3 className="sw-infra-card__title">Well-Crafted Courses</h3>
        <p className="sw-infra-card__body">Our tailor-made courses are a perfect fit for every student's needs. We believe in providing personal education in a public environment.</p>
      </div>

      
      <div className="sw-infra-card">
        <div className="sw-infra-icon">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            
            <rect x="6" y="8" width="52" height="30" rx="3"/>
            
            <line x1="14" y1="18" x2="36" y2="18"/>
            <line x1="14" y1="24" x2="30" y2="24"/>
            <line x1="14" y1="30" x2="40" y2="30"/>
            
            <circle cx="44" cy="18" r="2.5" fill="currentColor" stroke="none"/>
            
            <line x1="22" y1="38" x2="18" y2="50"/>
            <line x1="42" y1="38" x2="46" y2="50"/>
            <line x1="32" y1="38" x2="32" y2="50"/>
            
            <circle cx="18" cy="57" r="3"/>
            <circle cx="32" cy="57" r="3"/>
            <circle cx="46" cy="57" r="3"/>
          </svg>
        </div>
        <h3 className="sw-infra-card__title">Well Facilitated Classrooms</h3>
        <p className="sw-infra-card__body">Our modern training can accommodate up to 250 students. We use a consultative teaching approach to grow your skills quickly.</p>
      </div>

      
      <div className="sw-infra-card">
        <div className="sw-infra-icon">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            
            <rect x="12" y="8" width="40" height="48" rx="4"/>
            
            <rect x="24" y="4" width="16" height="10" rx="3"/>
            
            <circle cx="32" cy="26" r="8"/>
            
            <line x1="20" y1="40" x2="44" y2="40"/>
            <line x1="24" y1="46" x2="40" y2="46"/>
            
            <circle cx="46" cy="50" r="7" fill="currentColor" stroke="none"/>
            <polyline points="42,50 45,53 50,47" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <h3 className="sw-infra-card__title">Practical Training</h3>
        <p className="sw-infra-card__body">Practical trainings are a driving force in helping our students apply their knowledge to various sectors of the service industry.</p>
      </div>

    </div>
  </div>
</section>


<div className="sw-midcta">
  <div className="sw-wrap">
    <div className="sw-midcta__inner">
      <div className="sw-midcta__text">
        <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(22px,3vw,36px)', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>Enrol Now for 2026 Batch</h2>
        <p>Seats are limited. Secure your place at Kerala's No.1 premium aviation college today.</p>
      </div>
      <div className="sw-midcta__actions">
        <a href="tel:+919847163163" className="sw-btn sw-btn--solid">
          <svg width="15" height="15"><use href="#h-phone"/></svg> Call: +91 9847 163 163
        </a>
        <a href="https://wa.me/919605664455" className="sw-btn sw-btn--wa" target="_blank" rel="noopener">
          <svg width="15" height="15"><use href="#h-wa"/></svg> Apply on WhatsApp
        </a>
      </div>
    </div>
  </div>
</div>


<section className="sw-sec">
  <div className="sw-wrap">
    <div className="sw-placement-grid">
      <div className="sw-placement-img">
        <img src="/assets/images/skywings-placed-students-airlines.png" alt="SkyWings Placement, Students placed in airlines" />
      </div>
      <div>
        <div className="sw-eyebrow">Placement Assistance</div>
        <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>100% Placement Assistance for Every Student.</h2>
        <span className="sw-rule"></span>
        <p className="sw-body">Our corporate placement tie-ups ensure every student who completes their course is connected with the right opportunity, from domestic airlines to international carriers and logistics companies.</p>

        <div className="sw-placement-list">
          <div className="sw-placement-item">
            <div className="sw-placement-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div>
              <div className="sw-placement-item__text">Campus Interviews</div>
              <div className="sw-placement-item__sub">Employers come exclusively to our academy for direct hiring drives.</div>
            </div>
          </div>
          <div className="sw-placement-item">
            <div className="sw-placement-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div>
              <div className="sw-placement-item__text">Mock Interviews &amp; Grooming Audits</div>
              <div className="sw-placement-item__sub">Simulation of real airline interviews with personal styling sessions.</div>
            </div>
          </div>
          <div className="sw-placement-item">
            <div className="sw-placement-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div>
              <div className="sw-placement-item__text">Tie-ups with Airlines, Airports &amp; Hotels</div>
              <div className="sw-placement-item__sub">International &amp; domestic airlines, ground handling agencies, and luxury hospitality groups.</div>
            </div>
          </div>
          <div className="sw-placement-item">
            <div className="sw-placement-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div>
              <div className="sw-placement-item__text">CIAL Airport Internships</div>
              <div className="sw-placement-item__sub">Hands-on airport internship experience at Cochin International Airport.</div>
            </div>
          </div>
          <div className="sw-placement-item">
            <div className="sw-placement-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div>
              <div className="sw-placement-item__text">Global Alumni Network, 15+ Countries</div>
              <div className="sw-placement-item__sub">Our graduates are working across the Middle East, Europe, and South-East Asia.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<div style={{ background: 'var(--offwhite)', padding: '0 0 80px' }}>
  <div className="sw-scroller-wrap">
  <div className="sw-carousel-outer">
    <div className="sw-carousel-track">
      
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-01.webp" alt="Placed student" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-09.webp" alt="Placed student" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-02.webp" alt="Placed student" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-03.webp" alt="Placed student" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-05.webp" alt="Placed student" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-07.webp" alt="Placed student" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-08.webp" alt="Placed student" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-12.webp" alt="Placed student" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-10.webp" alt="Placed student" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-11.webp" alt="Placed student" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-04.webp" alt="Placed student, SkyWings Kerala" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-06.webp" alt="Placed student, SkyWings Kerala" /></div>
      
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-01.webp" alt="Placed student, SkyWings Kerala" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-09.webp" alt="Placed student, SkyWings Kerala" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-02.webp" alt="Placed student, SkyWings Kerala" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-03.webp" alt="Placed student, SkyWings Kerala" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-05.webp" alt="Placed student, SkyWings Kerala" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-07.webp" alt="Placed student, SkyWings Kerala" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-08.webp" alt="Placed student, SkyWings Kerala" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-12.webp" alt="Placed student, SkyWings Kerala" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-10.webp" alt="Placed student, SkyWings Kerala" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-11.webp" alt="Placed student, SkyWings Kerala" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-04.webp" alt="Placed student, SkyWings Kerala" /></div>
      <div className="sw-carousel-item"><img src="/assets/images/skywings-placed-student-06.webp" alt="Placed student, SkyWings Kerala" /></div>
    </div>
  </div>
  </div>
</div>


<section className="sw-sec--off">
  <div className="sw-wrap">
    <div style={{ textAlign: 'center' }}>
      <div className="sw-eyebrow sw-eyebrow--c">How to Join</div>
      <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>Admission Process for 2026</h2>
      <span className="sw-rule" style={{ margin: '20px auto' }}></span>
      <p className="sw-body" style={{ maxWidth: '540px', margin: '0 auto' }}>Securing a seat is a competitive but straightforward process. We follow a merit-based selection system to ensure quality.</p>
    </div>
    <div className="sw-steps">
      <div className="sw-step">
        <div className="sw-step__num" aria-hidden="true">01</div>
        <h3 className="sw-step__title">Online Registration</h3>
        <p className="sw-body--sm" style={{ marginTop: '8px' }}>Fill out the application form at skywingsacademy.com or walk into our Kochi or Mahe campus.</p>
      </div>
      <div className="sw-step">
        <div className="sw-step__num" aria-hidden="true">02</div>
        <h3 className="sw-step__title">Free Counselling Session</h3>
        <p className="sw-body--sm" style={{ marginTop: '8px' }}>Attend a free career counselling session with our admissions experts to choose the right programme.</p>
      </div>
      <div className="sw-step">
        <div className="sw-step__num" aria-hidden="true">03</div>
        <h3 className="sw-step__title">Personal Interview</h3>
        <p className="sw-body--sm" style={{ marginTop: '8px' }}>A basic assessment of your communication skills and aptitude, no entrance exams required.</p>
      </div>
      <div className="sw-step">
        <div className="sw-step__num" aria-hidden="true">04</div>
        <h3 className="sw-step__title">Confirm Your Seat</h3>
        <p className="sw-body--sm" style={{ marginTop: '8px' }}>Pay the fees and receive your student ID to officially join the No.1 aviation college in Kerala.</p>
      </div>
    </div>
  </div>
</section>


<section className="sw-sec">
  <div className="sw-wrap">
    <div className="sw-apart-split">
      <div className="sw-apart-left">
        <div className="sw-eyebrow">Specialized Programs For Every Career Path</div>
        <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>What Sets Us Apart?</h2>
        <span className="sw-rule"></span>
        <ul className="sw-apart-list">
          <li><strong>Industry-Embedded Curriculum:</strong> Unlike standard colleges, our syllabus is updated annually to match the changing trends of airlines like Indigo, Air India, and Emirates.</li>
          <li><strong>Dual Certification:</strong> Get your BBA Aviation degree along with specialized IATA-based diplomas, doubling your employability.</li>
          <li><strong>Grooming Excellence:</strong> We are the only Cabin Crew training center in Kochi that conducts weekly "Grooming Audits" to ensure you look like an aviation professional from Day 1.</li>
          <li><strong>Global Alumni Network:</strong> Our students are working in 15+ countries, proving why we are the best aviation college in Kerala for international placements.</li>
        </ul>
        <p className="sw-body" style={{ marginTop: '28px', color: 'var(--text-muted)' }}>Airlines and Airport operations are the very dynamic business fields in the fast moving world today. Millions of passengers are travelling from one destination to the other, through thousands of flights every day, touching hundreds of airports worldwide. We at Skywings Academy aim to train and prepare these young managers through our exclusive management programmes.</p>
      </div>
      <div className="sw-apart-right">
        <img src="/assets/images/bba-aviation-colleges-in-kerala-8.webp" alt="SkyWings Academy Students, No.1 Aviation College Kerala" />
      </div>
    </div>
  </div>
</section>


<section className="sw-sec">
  <div className="sw-wrap">
    <div style={{ textAlign: 'center' }}>
      <div className="sw-eyebrow sw-eyebrow--c">Our Partnerships</div>
      <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>Our Recruitment Partners</h2>
      <span className="sw-rule" style={{ margin: '20px auto' }}></span>
      <p className="sw-body" style={{ maxWidth: '560px', margin: '0 auto' }}>When you join SkyWings, you join a network connected to leading airlines, airports, ground handling agencies, and luxury hospitality groups across the world.</p>
    </div>
    <div className="sw-partners-grid">
      <div className="sw-partner-item"><img src="/assets/images/airline-recruitment-partner-8.webp" alt="Recruitment Partner" /></div>
      <div className="sw-partner-item"><img src="/assets/images/airline-recruitment-partner-2.webp" alt="Recruitment Partner" /></div>
      <div className="sw-partner-item"><img src="/assets/images/airline-recruitment-partner-5.webp" alt="Recruitment Partner" /></div>
      <div className="sw-partner-item"><img src="/assets/images/airline-recruitment-partner-4.webp" alt="Recruitment Partner" /></div>
      <div className="sw-partner-item"><img src="/assets/images/airline-recruitment-partner-3.webp" alt="Recruitment Partner" /></div>
      <div className="sw-partner-item"><img src="/assets/images/airline-recruitment-partner-6.webp" alt="Recruitment Partner" /></div>
      <div className="sw-partner-item"><img src="/assets/images/airline-recruitment-partner-1.webp" alt="Recruitment Partner" /></div>
      <div className="sw-partner-item"><img src="/assets/images/airline-recruitment-partner-7.webp" alt="Recruitment Partner" /></div>
    </div>
  </div>
</section>


<section className="sw-sec--off">
  <div className="sw-wrap">
    <div style={{ textAlign: 'center' }}>
      <div className="sw-eyebrow sw-eyebrow--c">Kerala's Aviation Outlook 2026</div>
      <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>Why Now is the Best Time to Study Aviation in Kerala<span className="sw-h2-kw">No.1 Premium Aviation College in Kerala · 2026 Admissions Open</span></h2>
      <span className="sw-rule" style={{ margin: '20px auto' }}></span>
      <p className="sw-body" style={{ maxWidth: '580px', margin: '0 auto' }}>The aviation sector in Kerala is witnessing a historic boom. With new airlines launching and airports expanding, the demand for skilled professionals has never been higher.</p>
    </div>
    <div className="sw-outlook-grid">
      <div className="sw-outlook-item">
        <div className="sw-outlook-item__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2l6 6-1 3.5 3.5-1z"/></svg>
        </div>
        <h3 className="sw-outlook-item__title">Jobs in Kochi, Kannur &amp; Calicut</h3>
        <p className="sw-body">New airports and expanded terminals mean thousands of new jobs for Ground Staff, Airport Managers, and Logistics Coordinators right here in our state. The launch of Al Hind Air and the expansion of CIAL are creating an unprecedented surge in local demand.</p>
      </div>
      <div className="sw-outlook-item">
        <div className="sw-outlook-item__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
        </div>
        <h3 className="sw-outlook-item__title">Gateway to Middle East Careers</h3>
        <p className="sw-body">Graduates from a reputed BBA Aviation college in Kerala are highly preferred in the UAE, Qatar, and Saudi Arabia due to the strong trade links between the regions. Our UGC-recognised degrees are fully valid for Gulf employment and international migration.</p>
      </div>
    </div>
  </div>
</section>


<section className="sw-sec--off">
  <div className="sw-wrap">
    <div className="sw-split sw-split--rev">
      <div className="sw-split__img">
        <img src="/assets/images/bba-aviation-colleges-in-kerala-1.webp" alt="SkyWings Personality Development and Soft Skills Training, Kochi" />
      </div>
      <div>
        <div className="sw-eyebrow">Soft Skills &amp; Personality Development</div>
        <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>In Aviation, Your Personality is Your CV.</h2>
        <span className="sw-rule"></span>
        <p className="sw-body">At SkyWings, we focus heavily on soft skills to transform you into a global professional. Airlines don't just hire qualifications, they hire presence, communication, and confidence.</p>

        <div className="sw-feature-row sw-feature-row--stack" style={{ marginTop: '32px' }}>
          <div className="sw-feature-item">
            <div className="sw-feature-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            </div>
            <div>
              <div className="sw-feature-item__title">Communicative English Training</div>
              <p className="sw-body--sm" style={{ marginTop: '4px' }}>We offer intensive English language training to ensure you can communicate effectively with passengers from all over the world, a non-negotiable skill for Cabin Crew and Airport Management roles.</p>
            </div>
          </div>
          <div className="sw-feature-item">
            <div className="sw-feature-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/></svg>
            </div>
            <div>
              <div className="sw-feature-item__title">Airline Interview Preparation</div>
              <p className="sw-body--sm" style={{ marginTop: '4px' }}>From "Tell me about yourself" to handling stress interviews, we conduct mock sessions that simulate the real pressure of airline recruitment drives, so you walk in with confidence.</p>
            </div>
          </div>
          <div className="sw-feature-item">
            <div className="sw-feature-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div>
              <div className="sw-feature-item__title">Personality Development Workshops</div>
              <p className="sw-body--sm" style={{ marginTop: '4px' }}>Weekly grooming audits, posture training, diction coaching, and personal styling sessions ensure you look and present yourself as an aviation professional from Day 1.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="sw-sec">
  <div className="sw-wrap">
    <div style={{ textAlign: 'center' }}>
      <div className="sw-eyebrow sw-eyebrow--c">Common Questions</div>
      <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>Frequently Asked Questions</h2>
      <p className="sw-body" style={{ textAlign: 'center', color: 'var(--text-light)', maxWidth: '500px', margin: '12px auto 0' }}>Everything you need to know about Aviation Courses at SkyWings Academy, Kerala</p>
    </div>

    <div className="sw-faq-grid">

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          Does SkyWings Academy provide hostel facilities?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">We assist outstation students in finding safe and affordable accommodation near our Kochi campus. Our admissions team will connect you with verified paying-guest options and student housing nearby.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          Can boys apply for Cabin Crew training?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">Absolutely. Many airlines hire male Flight Stewards. Our Cabin Crew training programme is open to both male and female candidates who meet the eligibility criteria.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          Why is SkyWings located in Kochi?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">Kochi is the aviation hub of Kerala, home to CIAL (Cochin International Airport Limited), one of India's busiest international airports. Being here gives our students direct access to internships and industry exposure that no other location in Kerala can offer.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          What are the fees for Aviation courses in Kerala?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">Fees vary by course and programme level. Please contact our admissions team directly at +91 9847 163 163 or WhatsApp +91 96056 64455 for a detailed fee structure and available scholarship options.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          Is NEET or JEE required for Aviation Management?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">No. Admission is based on your 12th-grade marks and a personal interview at SkyWings. There are no competitive entrance exams required for any of our Aviation, Logistics, or Hospitality programmes.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          What documents are needed for admission?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">You will need your 10th and 12th mark sheets, a valid government ID proof (Aadhaar card), and recent passport-size photographs. For MBA applicants, a degree certificate from a recognised university is also required.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          Can I work in the Gulf after studying at SkyWings?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">Yes. Our UGC-recognised degrees are highly valued in the Middle East, particularly the UAE, Qatar, and Saudi Arabia, for Ground Staff and Logistics roles. Many of our alumni are currently working across the Gulf region.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          Does the college offer educational loan assistance?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">Yes, we provide full documentation support to help students apply for educational bank loans. Our admissions team will guide you through the process to ensure a smooth and stress-free application.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          How do I apply for the 2026 batch?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">You can apply online at skywingsacademy.com or visit our Kochi campus directly. Our admissions team is available via phone (+91 9847 163 163) and WhatsApp (+91 96056 64455) to assist you at every step.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          What makes SkyWings "Premium"?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">Air-conditioned smart classrooms, trainers from international airlines, weekly grooming audits, a mock aircraft training environment, AI-integrated syllabus, and a luxury learning experience designed to match the standards of the global aviation industry.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          Which is the No.1 Premium Aviation College in Kerala?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">SkyWings Academy is widely recognised as the No.1 Premium Aviation College in Kerala due to its world-class curriculum, experienced trainers, superior grooming standards, CIAL internships, AI-integrated syllabus, and an unmatched placement track record.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          What is the qualification for BBA Aviation in Kerala?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">To join BBA Aviation, you need to have passed Plus Two (12th Grade) in any stream, Science, Commerce, or Humanities, with a minimum pass percentage. No entrance exam is required; admission is merit-based with a personal interview.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          Does SkyWings Academy offer placement guarantee?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">We offer 100% Placement Assistance, not a guarantee in the legal sense, but a commitment that every student receives mock interview training, grooming sessions, campus drive access, and direct referrals to our airline and airport recruitment partners.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          Is Cabin Crew training difficult?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">It is rigorous but designed for beginners. Our programme covers everything from grooming and communication to safety drills and emergency evacuation procedures. Students who commit to the training emerge confident, interview-ready, and airline-standard.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          What is the salary after BBA Aviation in Kerala?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">Starting salaries for BBA Aviation graduates typically range from ₹20,000 to ₹45,000 per month depending on the role and employer. Airport managers and airline operations executives with experience can earn significantly higher.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          Can I join Aviation if I am from a Commerce background?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">Yes! Commerce students excel particularly in Airport Management, Airline Finance, and Logistics roles. Our BBA and MBA Aviation programmes are designed to accept students from all streams, Science, Commerce, and Humanities.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          What is the duration of the Diploma in Airline and Airport Management?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">The Diploma in Airline and Airport Management is a 1-year full-time programme. It covers ground handling, terminal operations, check-in procedures (DCS), dangerous goods regulations (DGR), and customer service excellence.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          Is there an age limit for Cabin Crew jobs?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">Most airlines hire freshers between the ages of 18 and 27 for cabin crew positions. At SkyWings, our Diploma in Cabin Crew Management accepts applicants who have passed 12th grade and are aged 17–25 at the time of joining.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          Do I need to be fluent in English?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">English is the universal language of aviation. However, you do not need to be fluent before joining SkyWings, our intensive Communicative English training is included in all our programmes to bring every student to airline-standard proficiency.</div>
      </details>

      <details className="sw-faq-item">
        <summary className="sw-faq-summary">
          What is the difference between BBA Aviation and BBA Logistics?
          <span className="sw-faq-arrow"><svg width="12" height="12"><use href="#h-chev"/></svg></span>
        </summary>
        <div className="sw-faq-answer">BBA Aviation (Airline &amp; Airport Management) focuses on Airport Operations, Passenger Handling, and Airline Management. BBA Logistics &amp; Supply Chain Management focuses on Air Cargo, Shipping, Warehousing, and Global Trade. Both are 3-year UGC-recognised degree programmes.</div>
      </details>

    </div>
  </div>
</section>


<section className="sw-sec--off" id="contact">
  <div className="sw-wrap">
    <div style={{ textAlign: 'center' }}>
      <div className="sw-eyebrow sw-eyebrow--c" style={{ justifyContent: 'center' }}>Get in Touch</div>
      <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>Enquire About Admissions</h2>
      <p className="sw-body" style={{ textAlign: 'center', color: 'var(--text-light)', maxWidth: '500px', margin: '12px auto 0' }}>Our admissions team will call you back within 24 hours with the right guidance.</p>
    </div>

    <div className="sw-contact-grid">

      
      <div className="sw-contact-map">
        
        <div className="sw-contact-map__globe">
          <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            
            <defs>
              <pattern id="dot-map" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="rgba(192,165,98,0.6)"/>
              </pattern>
            </defs>
            
            <rect width="1000" height="500" fill="url(#dot-map)"/>
            
            <rect x="0" y="0" width="1000" height="500" fill="#0c0e13" opacity="0.55"/>
            
            
            <ellipse cx="490" cy="180" rx="80" ry="70" fill="rgba(192,165,98,0.08)" stroke="rgba(192,165,98,0.2)" strokeWidth="1"/>
            <ellipse cx="500" cy="310" rx="70" ry="90" fill="rgba(192,165,98,0.06)" stroke="rgba(192,165,98,0.15)" strokeWidth="1"/>
            
            <ellipse cx="680" cy="190" rx="130" ry="80" fill="rgba(192,165,98,0.08)" stroke="rgba(192,165,98,0.2)" strokeWidth="1"/>
            
            <ellipse cx="240" cy="220" rx="100" ry="110" fill="rgba(192,165,98,0.06)" stroke="rgba(192,165,98,0.15)" strokeWidth="1"/>
            
            <ellipse cx="780" cy="340" rx="60" ry="40" fill="rgba(192,165,98,0.07)" stroke="rgba(192,165,98,0.15)" strokeWidth="1"/>
            
            <path d="M670 230 Q 580 120 490 180" fill="none" stroke="rgba(192,165,98,0.5)" strokeWidth="1" strokeDasharray="4 4"/>
            <path d="M670 230 Q 750 280 780 340" fill="none" stroke="rgba(192,165,98,0.5)" strokeWidth="1" strokeDasharray="4 4"/>
            <path d="M670 230 Q 540 180 240 200" fill="none" stroke="rgba(192,165,98,0.4)" strokeWidth="1" strokeDasharray="4 4"/>
            <path d="M670 230 Q 670 120 490 160" fill="none" stroke="rgba(192,165,98,0.3)" strokeWidth="1" strokeDasharray="4 4"/>
            
            <circle cx="670" cy="230" r="6" fill="var(--sky)" opacity="0.9"/>
            <circle cx="670" cy="230" r="14" fill="rgba(192,165,98,0.25)" stroke="rgba(192,165,98,0.5)" strokeWidth="1"/>
            
            <circle cx="490" cy="178" r="4" fill="rgba(192,165,98,0.7)"/>
            <circle cx="250" cy="200" r="4" fill="rgba(192,165,98,0.7)"/>
            <circle cx="780" cy="340" r="4" fill="rgba(192,165,98,0.7)"/>
            <circle cx="610" cy="150" r="4" fill="rgba(192,165,98,0.7)"/>
            <circle cx="720" cy="180" r="4" fill="rgba(192,165,98,0.7)"/>
          </svg>
        </div>

        <div className="sw-contact-map__content">
          <div className="sw-eyebrow sw-eyebrow--light" style={{ color: 'var(--sky)' }}>SkyWings Academy</div>
          <h3 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: '24px', fontWeight: '300', color: 'var(--cream)', lineHeight: '1.35', marginTop: '12px' }}>Our graduates are working in <br /><strong style={{ fontWeight: '500', color: 'var(--sky)' }}>15+ countries</strong> worldwide.</h3>
          <p style={{ fontSize: '14px', fontWeight: '300', color: 'rgba(254,252,251,0.45)', marginTop: '14px', lineHeight: '1.75' }}>UAE · Qatar · Saudi Arabia · Bahrain · Kuwait · Oman · UK · Germany · Singapore · Malaysia · Maldives · Thailand · USA &amp; more.</p>
        </div>

        <div className="sw-contact-map__dots">
          <div className="sw-contact-map__dot">
            <div className="sw-contact-map__dot-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
            </div>
            <div className="sw-contact-map__dot-text">
              <strong>Call Us</strong>+91 9847 163 163
            </div>
          </div>
          <div className="sw-contact-map__dot">
            <div className="sw-contact-map__dot-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <div className="sw-contact-map__dot-text">
              <strong>WhatsApp</strong>+91 9847 163 163
            </div>
          </div>
          <div className="sw-contact-map__dot">
            <div className="sw-contact-map__dot-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div className="sw-contact-map__dot-text">
              <strong>Email</strong><a href="mailto:info@skywingsacademy.com" style={{ color: 'var(--sky)', textDecoration: 'none' }}>info@skywingsacademy.com</a>
            </div>
          </div>
          <div className="sw-contact-map__dot">
            <div className="sw-contact-map__dot-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="sw-contact-map__dot-text">
              <strong>Campuses</strong>Kochi &amp; Mahe
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm />

    </div>
  </div>
</section>




<section className="sw-sec--off" id="news">
  <div className="sw-wrap">
    <div style={{ textAlign: 'center' }}>
      <div className="sw-eyebrow sw-eyebrow--c">Join The Leaders In Aviation Education</div>
      <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>News &amp; Articles</h2>
      <span className="sw-rule" style={{ margin: '20px auto' }}></span>
    </div>
    <div className="sw-blog-scroller">
      <HomeNews />
    </div>
  </div>
</section>










</div>
    </>
  );
}
