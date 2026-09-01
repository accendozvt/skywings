import { pageMetadata } from '@/lib/seo';
import PageGraph from '@/components/PageGraph';
import './page.css';

export const metadata = pageMetadata('about-us');

export default function Page_about_us() {
  return (
    <>
      <PageGraph slug="about-us" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\r\n  \"@context\": \"https://schema.org\",\r\n  \"@type\": \"AboutPage\",\r\n  \"name\": \"About SkyWings Academy, Premier Institute for Aviation Courses in Kerala\",\r\n  \"description\": \"SkyWings Academy of Aviation & Logistics is Kerala's premier institute for aviation courses, with campuses in Kochi and Mahe. Over 2,000 alumni placed globally across airlines, airports, and logistics firms.\",\r\n  \"url\": \"https://skywingsacademy.com/about-us/\",\r\n  \"inLanguage\": \"en-IN\",\r\n  \"breadcrumb\": {\r\n    \"@type\": \"BreadcrumbList\",\r\n    \"itemListElement\": [\r\n      { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://skywingsacademy.com\" },\r\n      { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"About Us\", \"item\": \"https://skywingsacademy.com/about-us/\" }\r\n    ]\r\n  },\r\n  \"about\": {\r\n    \"@type\": \"EducationalOrganization\",\r\n    \"name\": \"SkyWings Academy of Aviation & Logistics\",\r\n    \"alternateName\": [\"SkyWings Aviation Academy\", \"Premier Institute for Aviation Courses in Kerala\", \"No.1 Aviation College Kerala\"],\r\n    \"description\": \"Founded by seasoned aviation professionals with 30+ years of experience, SkyWings Academy is Kerala's premier institute for aviation courses, offering BBA Aviation, MBA Aviation, Diploma in Cabin Crew, Airline & Airport Management, BBA Logistics, and Aviation & Hospitality programmes with 100% placement assistance.\",\r\n    \"url\": \"https://skywingsacademy.com\",\r\n    \"telephone\": \"+919847163163\",\r\n    \"email\": \"info@skywingsacademy.com\",\r\n    \"foundingDate\": \"2015\",\r\n    \"numberOfEmployees\": { \"@type\": \"QuantitativeValue\", \"value\": 50 },\r\n    \"address\": [\r\n      {\r\n        \"@type\": \"PostalAddress\",\r\n        \"streetAddress\": \"Pallissery Road, NH Bypass, Behind Starbucks Coffee\",\r\n        \"addressLocality\": \"Kochi\",\r\n        \"addressRegion\": \"Kerala\",\r\n        \"postalCode\": \"682032\",\r\n        \"addressCountry\": \"IN\"\r\n      },\r\n      {\r\n        \"@type\": \"PostalAddress\",\r\n        \"streetAddress\": \"Lalu's Business Park, Opp. Sreenarayana Guru College\",\r\n        \"addressLocality\": \"Mahe\",\r\n        \"addressRegion\": \"Puducherry\",\r\n        \"postalCode\": \"673310\",\r\n        \"addressCountry\": \"IN\"\r\n      }\r\n    ],\r\n    \"sameAs\": [\r\n      \"https://www.facebook.com/skywingsaviation/\",\r\n      \"https://www.instagram.com/skywings_aviation_college/\",\r\n      \"https://www.youtube.com/@Skywingsaviation\"\r\n    ],\r\n    \"aggregateRating\": {\r\n      \"@type\": \"AggregateRating\",\r\n      \"ratingValue\": \"4.8\",\r\n      \"reviewCount\": \"250\",\r\n      \"bestRating\": \"5\"\r\n    }\r\n  }\r\n}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\r\n  \"@context\": \"https://schema.org\",\r\n  \"@type\": \"FAQPage\",\r\n  \"mainEntity\": [\r\n    {\r\n      \"@type\": \"Question\",\r\n      \"name\": \"Which is the premier institute for aviation courses in Kerala?\",\r\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"SkyWings Academy of Aviation & Logistics in Kochi is widely recognised as the premier institute for aviation courses in Kerala, offering BBA Aviation, MBA Aviation, Cabin Crew Diploma, and Logistics degrees with 100% placement assistance.\" }\r\n    },\r\n    {\r\n      \"@type\": \"Question\",\r\n      \"name\": \"When was SkyWings Academy founded?\",\r\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"SkyWings Academy was founded by seasoned aviation professionals with over 30 years of combined industry experience, with a mission to bridge the gap between classroom education and airline recruitment standards.\" }\r\n    },\r\n    {\r\n      \"@type\": \"Question\",\r\n      \"name\": \"Where is SkyWings Academy located?\",\r\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"SkyWings Academy has two premium campuses, in Kochi (Ernakulam), Kerala, near Cochin International Airport (CIAL), and in Mahe, Puducherry. The Kochi campus provides direct access to CIAL internships.\" }\r\n    },\r\n    {\r\n      \"@type\": \"Question\",\r\n      \"name\": \"How many students has SkyWings placed?\",\r\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"SkyWings Academy has trained and placed over 2,000 aviation professionals globally, with alumni currently working in airlines, airports, and logistics firms across India, the UAE, Qatar, Saudi Arabia, and 15+ countries.\" }\r\n    }\r\n  ]\r\n}" }} />
<div className="sw">

  
  <section className="sw-hero" aria-label="SkyWings Academy, Kerala's leading aviation institute">

    
    <div className="sw-hero__left">
      <div className="sw-hero__eyebrow">No. 1 Aviation Academy, Kochi, Kerala</div>
      <h1 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(36px,5.5vw,68px)', fontWeight: '300', lineHeight: '1.1', letterSpacing: '-1.5px', color: '#fefcfb', margin: '0', padding: '0', display: 'block' }}>Where Kerala's<br />Aviation Careers<br />Begin.</h1>
      <p style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: '13px', fontWeight: '400', color: 'rgba(192,165,98,0.75)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '14px', marginBottom: '0', lineHeight: '1.5', display: 'block' }}>Premier Institute for Aviation Courses in Kerala</p>
      <p className="sw-hero__lead">SkyWings Academy of Aviation &amp; Logistics is not simply a training institute, it is the launchpad from which over 2,000 aviation professionals have taken flight, building careers with the world's top airlines, airports, and logistics firms.</p>
      <div className="sw-hero__cta">
        <a href="#enquire" className="sw-btn sw-btn--sky">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
          Enquire Now
        </a>
        <a href="#courses" className="sw-btn sw-btn--ghost-light">
          Explore Courses
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
      <div className="sw-hero__stats">
        <div className="sw-hero__stat">
          <div className="sw-hero__stat-num">2,000+</div>
          <div className="sw-hero__stat-label">Professionals Placed</div>
        </div>
        <div className="sw-hero__stat">
          <div className="sw-hero__stat-num">30+</div>
          <div className="sw-hero__stat-label">Years Experience</div>
        </div>
        <div className="sw-hero__stat">
          <div className="sw-hero__stat-num">100+</div>
          <div className="sw-hero__stat-label">Corporate Clients</div>
        </div>
        <div className="sw-hero__stat">
          <div className="sw-hero__stat-num">10+</div>
          <div className="sw-hero__stat-label">Years in Kerala</div>
        </div>
      </div>
    </div>

    
    
    <div className="sw-hero__right">
      <img src="/assets/images/skywings-academy-students-kochi.png" alt="SkyWings Academy students Kochi" className="sw-hero__png" />
    </div>

  </section>

  
  <section className="sw-sec" id="about" aria-label="About SkyWings Academy">
    <div className="sw-wrap">
      <div className="sw-story">

        <div className="sw-story__image">
          
          <div className="sw-story__image-inner">
            <img src="/assets/images/professional-presentation-training-skywings.webp" alt="SkyWings Academy Kochi" />
          </div>
          <div className="sw-story__badge">
            <div className="sw-story__badge-num">#1</div>
            <div className="sw-story__badge-txt">Aviation College<br />in Kerala</div>
          </div>
        </div>

        <div className="sw-story__content">
          <div className="sw-eyebrow">Our Story</div>
          <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(26px,3.8vw,46px)', fontWeight: '300', lineHeight: '1.15', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>Built to be the Premier Institute for Aviation Courses in Kerala.</h2>
          <span className="sw-rule"></span>
          <p className="sw-body">SkyWings Academy was born from a single, powerful conviction: that talent in Kerala is immense, but opportunity is not always equally distributed. Our founders, seasoned aviation and safety professionals with over 30 years of combined experience, recognised a glaring gap between what colleges were teaching and what airlines were actually hiring for.</p>
          <p className="sw-body" style={{ marginTop: '16px' }}>They built SkyWings to close that gap. Not with empty promises, but with rigorous, industry-aligned training, real-world exposure at Cochin International Airport (CIAL), and a placement network forged through genuine industry relationships.</p>
          <p className="sw-body" style={{ marginTop: '16px' }}>Today, SkyWings Academy is recognised as the premier aviation college in Kerala, not because we say so, but because our alumni are living proof. A SkyWings graduate is a mark of quality.</p>
          <div style={{ marginTop: '36px' }}>
            <a href="#courses" className="sw-btn sw-btn--solid">
              View Our Courses
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  
  <section className="sw-sec sw-why" id="why" aria-label="Why choose SkyWings Academy">
    <div className="sw-wrap">

      <div className="sw-why-header">
        <div>
          <div className="sw-eyebrow" style={{ color: 'var(--sky)' }}>Why SkyWings</div>
          <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(26px,3.8vw,46px)', fontWeight: '300', lineHeight: '1.15', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>Why serious students choose Kerala's Premier Institute for Aviation Courses.</h2>
        </div>
        <div className="sw-why-header__right">
          <p className="sw-body">In a market flooded with general institutes, SkyWings Academy stands apart. Here is why thousands of students trust us with their careers.</p>
        </div>
      </div>

      <div className="sw-why-grid">

        <div className="sw-why-item">
          <div className="sw-why-item__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          </div>
          <h3 className="sw-h3">Industry-Built Curriculum</h3>
          <p className="sw-body--sm">Our syllabus is refreshed every year in line with IATA regulations, DGCA norms, and live airline recruitment standards, so you are never preparing for a market that no longer exists.</p>
        </div>

        <div className="sw-why-item">
          <div className="sw-why-item__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 2 17 2c-.7 0-1.5.3-2.1.9l-3.5 3.5L4 4l-1.2 1.2 6.2 5.5-2 2L5 11H3l-1.2 1.2L5 14l1.8 2.8L8 18l2.8 1.8 1.2 1.2 1-1.2v-2l-2-2 5.5 6.2L17.8 19.2z"/></svg>
          </div>
          <h3 className="sw-h3">100% Practical Training</h3>
          <p className="sw-body--sm">From mock cockpit familiarisation drills to real airport internships at CIAL, when you walk into your airline interview, you will have earned your confidence, not simulated it.</p>
        </div>

        <div className="sw-why-item">
          <div className="sw-why-item__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          </div>
          <h3 className="sw-h3">Faculty Who Lived the Industry</h3>
          <p className="sw-body--sm">Every trainer at SkyWings has worked in aviation, in India and internationally. When our trainer describes a high-pressure airline interview, they have been on both sides of that table.</p>
        </div>

        <div className="sw-why-item">
          <div className="sw-why-item__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <h3 className="sw-h3">Placement That Goes Beyond a Notice Board</h3>
          <p className="sw-body--sm">Our dedicated placement cell actively connects students with airlines, ground handling companies, and logistics firms across India and the Middle East through a network built over years of genuine relationships.</p>
        </div>

        <div className="sw-why-item">
          <div className="sw-why-item__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <h3 className="sw-h3">Where You Are Going, Not Where You Have Been</h3>
          <p className="sw-body--sm">Our guiding belief: it does not matter where one comes from, what matters is where one is going. SkyWings has transformed careers of students from small towns across Kerala, and first-generation aviation professionals.</p>
        </div>

        <div className="sw-why-item">
          <div className="sw-why-item__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <h3 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: '16px', fontWeight: '400', letterSpacing: '-0.2px', color: '#fefcfb', lineHeight: '1.35', margin: '0', padding: '0', display: 'block' }}>The Kochi Advantage, Premier Institute for Aviation Courses in Kerala</h3>
          <p className="sw-body--sm">Strategically located adjacent to CIAL, one of India's most awarded airports, our students get unparalleled access to real airport environments and a recruiting pipeline that no other aviation institute in Kerala can match.</p>
        </div>

      </div>
    </div>
  </section>

  
  <div className="sw-cta1" role="region" aria-label="Enquiry call to action">
    <div className="sw-wrap">
      <div className="sw-cta1__inner">
        <div className="sw-cta1__text">
          <h2 className="sw-h2">Your aviation career starts with one decision.</h2>
          <p>Join 2,000+ SkyWings alumni now working with airlines and airports across India and the Middle East.</p>
        </div>
        <div className="sw-cta1__actions">
          <a href="tel:+919847163163" className="sw-btn sw-btn--white">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
            Call Now
          </a>
          <a href="#courses" className="sw-btn sw-btn--ghost-light">View Courses</a>
        </div>
      </div>
    </div>
  </div>

  
  <section className="sw-sec" id="courses" aria-label="Aviation courses in Kerala, SkyWings">
    <div className="sw-wrap">

      <div className="sw-courses-head">
        <div>
          <div className="sw-eyebrow">Our Programmes</div>
          <h2 className="sw-h2">A programme for every aspiration.</h2>
        </div>
        <div className="sw-courses-head__right">
          <p>Whether you are a school leaver mapping your first career step or a working professional seeking advancement, SkyWings offers the right aviation course for your stage and your goal.</p>
        </div>
      </div>

      <div className="sw-course-list">

        <article className="sw-course">
          
          <div className="sw-course__img">
            <img src="/assets/images/skywings-smart-classroom-kochi.jpg" alt="SkyWings Academy aviation course Kochi" />
          </div>
          <div className="sw-course__body">
            <div className="sw-course__tag">3-Year Degree</div>
            <h3 className="sw-h3">BBA in Airline &amp; Airport Management</h3>
            <p className="sw-body--sm">A full undergraduate degree blending business administration with specialised knowledge of airline operations, airport management, and aviation regulations. Ideal for students aiming for leadership roles.</p>
            <a href="/bba-aviation/" className="sw-course__link">
              Enquire
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>

        <article className="sw-course">
          
          <div className="sw-course__img">
            <img src="/assets/images/aviation-management-training-kochi.jpg" alt="SkyWings Academy aviation course Kochi" />
          </div>
          <div className="sw-course__body">
            <div className="sw-course__tag">Postgraduate</div>
            <h3 className="sw-h3">MBA in Airline &amp; Airport Management</h3>
            <p className="sw-body--sm">An advanced postgraduate programme for those aspiring to executive positions within airlines, airports, and aviation consultancies. Builds strategic thinking alongside deep operational knowledge.</p>
            <a href="/mba-airline-and-airport-management/" className="sw-course__link">
              Enquire
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>

        <article className="sw-course">
          
          <div className="sw-course__img">
            <img src="/assets/images/cabin-crew-practical-training-skywings.jpg" alt="SkyWings Academy aviation course Kochi" />
          </div>
          <div className="sw-course__body">
            <div className="sw-course__tag">Most Popular</div>
            <h3 className="sw-h3">Diploma in Cabin Crew Management</h3>
            <p className="sw-body--sm">The most sought-after course at SkyWings. Prepares aspiring air hostesses and flight stewards for the demanding selection process of major airlines, grooming, service, safety, and interview technique.</p>
            <a href="/diploma-in-cabin-crew-management/" className="sw-course__link">
              Enquire
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>

        <article className="sw-course">
          
          <div className="sw-course__img">
            <img src="/assets/images/logistics-training-skywings-academy.jpg" alt="SkyWings Academy aviation course Kochi" />
          </div>
          <div className="sw-course__body">
            <div className="sw-course__tag">3-Year Degree</div>
            <h3 className="sw-h3">BBA in Logistics &amp; Supply Chain Management</h3>
            <p className="sw-body--sm">Positioned at the intersection of aviation and commerce, this programme prepares students for careers in freight management, supply chain coordination, and international trade logistics.</p>
            <a href="/diploma-in-airline-airport-management/" className="sw-course__link">
              Enquire
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>

        <article className="sw-course">
          
          <div className="sw-course__img">
            <img src="/assets/images/aviation-hospitality-training-skywings.jpg" alt="SkyWings Academy aviation course Kochi" />
          </div>
          <div className="sw-course__body">
            <div className="sw-course__tag">Fast-Track Diploma</div>
            <h3 className="sw-h3">Diploma in Aviation &amp; Hospitality</h3>
            <p className="sw-body--sm">A fast-track industry-ready certification for quick entry into the aviation and hospitality service sector, covering customer service, airport ground operations, and professional grooming.</p>
            <a href="/diploma-in-aviation-hospitality-management/" className="sw-course__link">
              Enquire
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>

        
        <div className="sw-course" style={{ background: 'var(--navy)', borderColor: 'transparent', justifyContent: 'center', padding: '40px 32px', textAlign: 'center', alignItems: 'center', gap: '0' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(192,165,98,0.6)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <h3 className="sw-h3" style={{ color: 'var(--cream)', marginBottom: '12px' }}>Not sure which course is right for you?</h3>
          <p className="sw-body--sm" style={{ color: 'rgba(254,252,251,0.45)', marginBottom: '28px' }}>Speak to our academic counsellor for free guidance on the right aviation course for your profile and goals.</p>
          <a href="tel:+919847163163" className="sw-btn sw-btn--sky">Get Free Counselling</a>
        </div>

      </div>
    </div>
  </section>

  
  <section className="sw-sec sw-numbers" aria-label="SkyWings legacy in numbers">
    <div className="sw-wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end', marginBottom: '0' }}>
        <div>
          <div className="sw-eyebrow" style={{ color: 'var(--sky)' }}>Our Legacy</div>
          <h2 className="sw-h2" style={{ color: 'var(--cream)' }}>Decades of excellence in aviation education.</h2>
        </div>
        <div>
          <p className="sw-body" style={{ color: 'rgba(254,252,251,0.38)' }}>At SkyWings, we do not hide behind vague claims. Here is what a decade of dedication to aviation education has produced.</p>
        </div>
      </div>
      <div className="sw-numbers__grid">
        <div className="sw-number-item">
          <div className="sw-number-item__num">30<span>+</span></div>
          <div className="sw-number-item__label">Years of combined leadership experience in aviation and high-risk operations</div>
        </div>
        <div className="sw-number-item">
          <div className="sw-number-item__num">2,000<span>+</span></div>
          <div className="sw-number-item__label">Aviation professionals trained and placed globally across India and the Middle East</div>
        </div>
        <div className="sw-number-item">
          <div className="sw-number-item__num">100<span>+</span></div>
          <div className="sw-number-item__label">Corporate clients who trust SkyWings for institutional training programmes</div>
        </div>
        <div className="sw-number-item">
          <div className="sw-number-item__num">10<span>+</span></div>
          <div className="sw-number-item__label">Years as Kerala's leading aviation college with consistent placement outcomes</div>
        </div>
      </div>
    </div>
  </section>

  
  <div className="sw-phonestrip" role="complementary" aria-label="Contact information">
    <div className="sw-phonestrip__text">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
      Free career guidance for all aviation courses in Kerala
    </div>
    <div className="sw-phonestrip__sep"></div>
    <a href="tel:+919847163163">+91 9847 163 163</a>
    <div className="sw-phonestrip__sep"></div>
    <a href="https://wa.me/919847163163" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      WhatsApp
    </a>
  </div>

  
  <section className="sw-sec sw-campus" id="campus" aria-label="SkyWings Academy campus and facilities">
    <div className="sw-wrap">

      <div style={{ marginBottom: '60px' }}>
        <div className="sw-eyebrow" style={{ color: 'var(--sky-text)' }}>Campus &amp; Facilities</div>
        <h2 className="sw-h2">Life at SkyWings Academy, Kochi.</h2>
        <span className="sw-rule"></span>
        <p className="sw-body" style={{ maxWidth: '520px' }}>Our modern campus is designed to simulate the professional environment our students are preparing to enter. This is not just a classroom, it is a rehearsal space for your career.</p>
      </div>

      <div className="sw-campus-grid">
        <div className="sw-campus-items">

          <div className="sw-campus-item">
            <div className="sw-campus-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <div>
              <h3 className="sw-h3">Smart Classrooms</h3>
              <p className="sw-body--sm">Fully air-conditioned and technology-enabled learning spaces designed for interactive, multimedia-driven instruction that replicates a professional corporate training environment.</p>
            </div>
          </div>

          <div className="sw-campus-item">
            <div className="sw-campus-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>
            </div>
            <div>
              <h3 className="sw-h3">Grooming Studio</h3>
              <p className="sw-body--sm">A dedicated studio for mastering professional presentation, because in aviation, how you carry yourself is as important as what you know. Trainers prepare you to the exacting standard airlines demand.</p>
            </div>
          </div>

          <div className="sw-campus-item">
            <div className="sw-campus-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            </div>
            <div>
              <h3 className="sw-h3">Mock Interview Suites</h3>
              <p className="sw-body--sm">Regular high-fidelity simulation sessions mirroring the pressure and format of actual airline and airport recruitment drives. By the time you face a real interview, you will have done it dozens of times.</p>
            </div>
          </div>

          <div className="sw-campus-item">
            <div className="sw-campus-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 2 17 2c-.7 0-1.5.3-2.1.9l-3.5 3.5L4 4l-1.2 1.2 6.2 5.5-2 2L5 11H3l-1.2 1.2L5 14l1.8 2.8L8 18l2.8 1.8 1.2 1.2 1-1.2v-2l-2-2 5.5 6.2L17.8 19.2z"/></svg>
            </div>
            <div>
              <h3 className="sw-h3">CIAL Airport Internship</h3>
              <p className="sw-body--sm">Our proximity to Cochin International Airport means students experience real airport operations first-hand, an advantage that sets SkyWings apart from every other aviation institute in Kerala.</p>
            </div>
          </div>

          <div className="sw-campus-item">
            <div className="sw-campus-item__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <div>
              <h3 className="sw-h3">Industry Guest Lectures</h3>
              <p className="sw-body--sm">Frequent sessions by active professionals from airlines, ground handling companies, and logistics firms, real insights that no textbook can provide.</p>
            </div>
          </div>

        </div>

        <div className="sw-campus-panel">
          <div className="sw-campus-panel__img">
            
            <img src="/assets/images/skywings-academy-campus-kochi.jpg" alt="SkyWings Academy campus Kochi" />
          </div>
          <div className="sw-campus-info">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <div>
              <div className="sw-campus-info__label">Location</div>
              <div className="sw-campus-info__value">Kochi, Kerala, adjacent to CIAL</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  
  <section className="sw-sec" aria-label="Who should enrol at SkyWings">
    <div className="sw-wrap">

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end', marginBottom: '0' }}>
        <div>
          <div className="sw-eyebrow">Is This For You?</div>
          <h2 className="sw-h2">Who should study at SkyWings?</h2>
        </div>
        <div>
          <p className="sw-body">SkyWings Academy welcomes students from all backgrounds who share one thing: the ambition to build a serious career in aviation.</p>
        </div>
      </div>

      <div className="sw-who-grid">
        <div className="sw-who-item">
          <div className="sw-who-item__num" aria-hidden="true">01</div>
          <p className="sw-body--sm"><strong>Class 12 graduates</strong> seeking a career-focused degree in aviation or airline management who want a head start before their peers.</p>
        </div>
        <div className="sw-who-item">
          <div className="sw-who-item__num" aria-hidden="true">02</div>
          <p className="sw-body--sm"><strong>Graduates</strong> who want a short diploma to qualify for cabin crew or airport ground staff roles quickly, without spending three more years in college.</p>
        </div>
        <div className="sw-who-item">
          <div className="sw-who-item__num" aria-hidden="true">03</div>
          <p className="sw-body--sm"><strong>Working professionals</strong> looking to pivot into aviation, logistics, or supply chain management with industry-recognised certification.</p>
        </div>
        <div className="sw-who-item">
          <div className="sw-who-item__num" aria-hidden="true">04</div>
          <p className="sw-body--sm"><strong>Students from across Kerala</strong>, Thiruvananthapuram, Kozhikode, Thrissur, Kottayam, who want the best aviation training in the state, in one place.</p>
        </div>
        <div className="sw-who-item">
          <div className="sw-who-item__num" aria-hidden="true">05</div>
          <p className="sw-body--sm"><strong>Students with modest academic records</strong> who have the drive to succeed and simply need the right platform, the right training, and the right guidance.</p>
        </div>
        <div className="sw-who-item">
          <div className="sw-who-item__num" aria-hidden="true">06</div>
          <p className="sw-body--sm"><strong>Aspiring cabin crew and air hostesses</strong> who want to be fully prepared in grooming, language, service, and safety before stepping into any airline interview.</p>
        </div>
      </div>

      <div style={{ marginTop: '48px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <a href="#enquire" className="sw-btn sw-btn--sky">Enquire Now</a>
        <a href="tel:+919847163163" className="sw-btn sw-btn--ghost">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
          Free Counselling Call
        </a>
      </div>

    </div>
  </section>

  
  <section className="sw-finalcta" id="enquire" aria-label="Enrol at SkyWings Academy">
    <div className="sw-finalcta__inner">
      <div className="sw-eyebrow" style={{ justifyContent: 'center' }}>Kerala's No. 1 Aviation Academy</div>
      <h2 className="sw-h2" style={{ color: 'var(--cream)', margin: '16px 0 20px', fontSize: 'clamp(28px,4vw,52px)' }}>Ready to take off?<br />Enrol at SkyWings today.</h2>
      <p>Every aviation career begins with a single decision. At SkyWings Academy of Aviation &amp; Logistics in Kochi, we are ready to be your co-pilot, from your very first classroom session to the day you receive your appointment letter.</p>
      <div className="sw-finalcta__actions">
        <a href="tel:+919847163163" className="sw-btn sw-btn--sky">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
          Call: +91 9847 163 163
        </a>
        <a href="https://wa.me/919847163163" className="sw-btn sw-btn--ghost-light" target="_blank" rel="noopener">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp Us
        </a>
      </div>
      <div className="sw-trust-row">
        <div className="sw-trust-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          No. 1 Aviation College in Kerala
        </div>
        <div className="sw-trust-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          100% Practical Training
        </div>
        <div className="sw-trust-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          CIAL Internship Exposure
        </div>
        <div className="sw-trust-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Placement Assistance
        </div>
        <div className="sw-trust-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Free Career Counselling
        </div>
      </div>
    </div>
  </section>

</div>
    </>
  );
}
