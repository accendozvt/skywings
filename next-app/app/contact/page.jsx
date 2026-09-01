import { pageMetadata } from '@/lib/seo';
import PageGraph from '@/components/PageGraph';
import ContactFormBehavior from '@/components/ContactFormBehavior';
import './page.css';

export const metadata = pageMetadata('contact');

export default function Page_contact() {
  return (
    <>
      <PageGraph slug="contact" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\r\n  \"@context\": \"https://schema.org\",\r\n  \"@type\": \"ContactPage\",\r\n  \"name\": \"Contact SkyWings Academy, Aviation College Kochi & Mahe\",\r\n  \"description\": \"Contact SkyWings Academy, Kerala's No.1 aviation college. Reach us at our Kochi or Mahe campus for admissions, course enquiries, and free career counselling.\",\r\n  \"url\": \"https://skywingsacademy.com/contact/\",\r\n  \"inLanguage\": \"en-IN\",\r\n  \"breadcrumb\": {\r\n    \"@type\": \"BreadcrumbList\",\r\n    \"itemListElement\": [\r\n      { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://skywingsacademy.com\" },\r\n      { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Contact Us\", \"item\": \"https://skywingsacademy.com/contact/\" }\r\n    ]\r\n  },\r\n  \"mainEntity\": {\r\n    \"@type\": \"EducationalOrganization\",\r\n    \"name\": \"SkyWings Academy of Aviation & Logistics\",\r\n    \"url\": \"https://skywingsacademy.com\",\r\n    \"telephone\": \"+919847163163\",\r\n    \"email\": \"info@skywingsacademy.com\",\r\n    \"openingHours\": \"Mo-Sa 09:00-18:00\",\r\n    \"address\": [\r\n      {\r\n        \"@type\": \"PostalAddress\",\r\n        \"name\": \"Kochi Campus\",\r\n        \"streetAddress\": \"Pallissery Road, NH Bypass, Behind Starbucks Coffee\",\r\n        \"addressLocality\": \"Kochi\",\r\n        \"addressRegion\": \"Kerala\",\r\n        \"postalCode\": \"682032\",\r\n        \"addressCountry\": \"IN\"\r\n      },\r\n      {\r\n        \"@type\": \"PostalAddress\",\r\n        \"name\": \"Mahe Campus\",\r\n        \"streetAddress\": \"Lalu's Business Park, Opp. Sreenarayana Guru College\",\r\n        \"addressLocality\": \"Mahe\",\r\n        \"addressRegion\": \"Puducherry\",\r\n        \"postalCode\": \"673310\",\r\n        \"addressCountry\": \"IN\"\r\n      }\r\n    ],\r\n    \"geo\": {\r\n      \"@type\": \"GeoCoordinates\",\r\n      \"latitude\": \"9.9312\",\r\n      \"longitude\": \"76.2673\"\r\n    },\r\n    \"sameAs\": [\r\n      \"https://www.facebook.com/skywingsaviation/\",\r\n      \"https://www.instagram.com/skywings_aviation_college/\",\r\n      \"https://www.youtube.com/@Skywingsaviation\"\r\n    ],\r\n    \"aggregateRating\": {\r\n      \"@type\": \"AggregateRating\",\r\n      \"ratingValue\": \"4.8\",\r\n      \"reviewCount\": \"250\",\r\n      \"bestRating\": \"5\"\r\n    }\r\n  }\r\n}" }} />
<div className="swc">

  
  <section className="swc-hero">
    <div className="swc-wrap">
      <div className="swc-hero__inner">

        <div className="swc-hero__left">
          <div className="swc-eyebrow">Get in Touch</div>
          <h1 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(32px,4.5vw,60px)', fontWeight: '300', lineHeight: '1.08', letterSpacing: '-2px', color: '#fefcfb', margin: '0', padding: '0', display: 'block' }}>Contact SkyWings Aviation Academy</h1>
          <p style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: '13px', fontWeight: '400', color: 'rgba(254,252,251,0.4)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '14px', marginBottom: '0', lineHeight: '1.5', display: 'block' }}>Aviation College, Kochi &amp; Mahe, Kerala</p>
          <p className="swc-hero__sub">Whether you're curious about our courses, admissions, or campus life, our team is ready to help. Reach out and we'll respond within 24 hours.</p>

          <div className="swc-hero__quick">
            <a href="tel:+919847163163" className="swc-quick-link">
              <div className="swc-quick-link__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              </div>
              <div className="swc-quick-link__text">
                <div className="swc-quick-link__label">Call Us</div>
                <div className="swc-quick-link__value">+91 9847 163 163</div>
              </div>
              <div className="swc-quick-link__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg></div>
            </a>
            <a href="https://wa.me/919847163163" className="swc-quick-link" target="_blank" rel="noopener">
              <div className="swc-quick-link__icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div className="swc-quick-link__text">
                <div className="swc-quick-link__label">WhatsApp</div>
                <div className="swc-quick-link__value">Chat with Admissions</div>
              </div>
              <div className="swc-quick-link__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg></div>
            </a>
            <a href="mailto:info@skywingsacademy.com" className="swc-quick-link">
              <div className="swc-quick-link__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div className="swc-quick-link__text">
                <div className="swc-quick-link__label">Email</div>
                <div className="swc-quick-link__value">info@skywingsacademy.com</div>
              </div>
              <div className="swc-quick-link__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg></div>
            </a>
          </div>
        </div>

        <div className="swc-hero__right">
          <div className="swc-campus-card">
            <div className="swc-campus-card__dot"></div>
            <div>
              <div className="swc-campus-card__name">Kochi Campus</div>
              <div className="swc-campus-card__addr">Pallissery Road, NH Bypass,<br />Behind Starbucks Coffee,<br />Kochi, Kerala 682032</div>
              <a href="https://maps.google.com" className="swc-campus-card__map" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Get Directions
              </a>
            </div>
          </div>
          <div className="swc-campus-card">
            <div className="swc-campus-card__dot"></div>
            <div>
              <div className="swc-campus-card__name">Mahe Campus</div>
              <div className="swc-campus-card__addr">Lalu's Business Park,<br />Opp. Sreenarayana Guru College,<br />Mahe, Puducherry</div>
              <a href="https://maps.google.com" className="swc-campus-card__map" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  
  <section className="swc-form-section" id="enquiry">
    <div className="swc-wrap">
      <div className="swc-form-grid">

        
        <div className="swc-form-info">
          <div className="swc-form-info__inner">
            <div className="swc-info-eyebrow">Admissions Open</div>
            <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: '16px', fontWeight: '400', color: '#141922', lineHeight: '1.35', margin: '0', padding: '0', display: 'block', color: '#fefcfb' }}>Send us an enquiry, Contact SkyWings Aviation Academy</h2>
            <div className="swc-info-sub">Fill out the form and our admissions counsellor will get back to you within 24 hours.</div>

            <div className="swc-info-items">
              <div className="swc-info-item">
                <div className="swc-info-item__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                </div>
                <div className="swc-info-item__body">
                  <div className="swc-info-item__label">Phone</div>
                  <div className="swc-info-item__val"><a href="tel:+919847163163">+91 9847 163 163</a></div>
                </div>
              </div>
              <div className="swc-info-item">
                <div className="swc-info-item__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="swc-info-item__body">
                  <div className="swc-info-item__label">Email</div>
                  <div className="swc-info-item__val"><a href="mailto:info@skywingsacademy.com">info@skywingsacademy.com</a></div>
                </div>
              </div>
              <div className="swc-info-item">
                <div className="swc-info-item__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="swc-info-item__body">
                  <div className="swc-info-item__label">Kochi Campus</div>
                  <div className="swc-info-item__val">Pallissery Road, NH Bypass,<br />Behind Starbucks, Kochi 682032</div>
                </div>
              </div>
              <div className="swc-info-item">
                <div className="swc-info-item__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="swc-info-item__body">
                  <div className="swc-info-item__label">Mahe Campus</div>
                  <div className="swc-info-item__val">Lalu's Business Park,<br />Opp. SNG College, Mahe</div>
                </div>
              </div>
            </div>

            <div className="swc-info-social">
              <a href="https://www.facebook.com/skywingsaviation/" className="swc-info-social__link" target="_blank" rel="noopener" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/skywings_aviation_college/" className="swc-info-social__link" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.youtube.com/@Skywingsaviation" className="swc-info-social__link" target="_blank" rel="noopener" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://share.google/IetFcKV1yV9FnrdPQ" className="swc-info-social__link" target="_blank" rel="noopener" aria-label="Google Reviews">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </a>
            </div>
          </div>
        </div>

        
        <div className="swc-form-panel">
          <h3 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: '16px', fontWeight: '400', color: '#141922', lineHeight: '1.35', margin: '0', padding: '0', display: 'block' }}>Enquiry Form, Contact SkyWings Aviation Academy</h3>
          <div className="swc-form-sub">Tell us about yourself and we'll get back to you with all the information you need.</div>

          <div id="swc-form-wrap">
            <div className="swc-form" id="swcEnquiryForm">
              <div className="swc-form-row">
                <div className="swc-form-group">
                  <label className="swc-label" htmlFor="swc-name">Full Name *</label>
                  <input className="swc-input" type="text" id="swc-name" name="name" placeholder="Your full name" required />
                </div>
                <div className="swc-form-group">
                  <label className="swc-label" htmlFor="swc-phone">Phone Number *</label>
                  <input className="swc-input" type="tel" id="swc-phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>
              <div className="swc-form-row">
                <div className="swc-form-group">
                  <label className="swc-label" htmlFor="swc-email">Email Address</label>
                  <input className="swc-input" type="email" id="swc-email" name="email" placeholder="your@email.com" />
                </div>
                <div className="swc-form-group">
                  <label className="swc-label" htmlFor="swc-city">City / State</label>
                  <input className="swc-input" type="text" id="swc-city" name="city" placeholder="Where are you from?" />
                </div>
              </div>
              <div className="swc-form-row">
                <div className="swc-form-group">
                  <label className="swc-label" htmlFor="swc-course">Course Interest *</label>
                  <select className="swc-input swc-select" id="swc-course" name="course" required>
                    <option value="" disabled selected>Choose course…</option>
                    <option value="bba-aviation">BBA Aviation, Airline &amp; Airport Management</option>
                    <option value="cabin-crew">Diploma in Cabin Crew Management</option>
                    <option value="mba-aviation">MBA Aviation, Airline &amp; Airport Management</option>
                    <option value="diploma-airline">Diploma in Airline &amp; Airport Management</option>
                    <option value="bba-logistics">BBA Logistics &amp; Supply Chain Management</option>
                    <option value="aviation-hospitality">Diploma in Aviation &amp; Hospitality</option>
                    <option value="unsure">Not sure yet, need guidance</option>
                  </select>
                </div>
                <div className="swc-form-group">
                  <label className="swc-label" htmlFor="swc-campus">Preferred Campus</label>
                  <select className="swc-input swc-select" id="swc-campus" name="campus">
                    <option value="" disabled selected>Campus…</option>
                    <option value="kochi">Kochi (Ernakulam)</option>
                    <option value="mahe">Mahe (Puducherry)</option>
                    <option value="either">Either campus is fine</option>
                  </select>
                </div>
              </div>
              <div className="swc-form-group">
                <label className="swc-label" htmlFor="swc-message">Message</label>
                <textarea className="swc-input" id="swc-message" name="message" placeholder="Any questions or anything specific you'd like to know?"></textarea>
              </div>
              <div className="swc-form-submit">
                <p className="swc-form-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Your details are safe. We never share your information.
                </p>
                <button type="button" className="swc-btn swc-btn--sky" id="swcSubmitBtn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Enquiry
                </button>
              </div>
            </div>
          </div>

          
          <div className="swc-success" id="swcSuccess">
            <div className="swc-success__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div className="swc-success__title">Enquiry sent!</div>
            <div className="swc-success__sub">Thank you. Our admissions team will reach out within 24 hours. We've also opened WhatsApp for a quicker response.</div>
            <a href="https://wa.me/919847163163" className="swc-btn swc-btn--wa" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Continue on WhatsApp
            </a>
          </div>

        </div>

      </div>
    </div>
  </section>

  
  <section className="swc-maps">
    <div className="swc-wrap">
      <div className="swc-section-head">
        <h2 style={{ fontFamily: 'var(--font-sora),sans-serif', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-0.8px', color: '#141922', margin: '0', padding: '0', display: 'block' }}>Contact SkyWings Aviation Academy, Find Our Campuses</h2>
        <p className="swc-section-sub">Two campuses across Kerala &amp; Puducherry, find the one closest to you.</p>
      </div>
      <div className="swc-maps-grid">
        <div className="swc-map-card">
          <div className="swc-map-card__header">
            <div className="swc-map-card__dot"></div>
            <div className="swc-map-card__info">
              <div className="swc-map-card__name">Kochi Campus</div>
              <div className="swc-map-card__addr">Pallissery Road, NH Bypass, Behind Starbucks, Kochi 682032</div>
            </div>
          </div>
          <iframe className="swc-map-frame"
            data-src="https://maps.google.com/maps?q=SkyWings+Aviation+Academy+Kochi&output=embed&z=15"
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="SkyWings Kochi Campus Map">
          </iframe>
        </div>
        <div className="swc-map-card">
          <div className="swc-map-card__header">
            <div className="swc-map-card__dot"></div>
            <div className="swc-map-card__info">
              <div className="swc-map-card__name">Mahe Campus</div>
              <div className="swc-map-card__addr">Lalu's Business Park, Opp. Sreenarayana Guru College, Mahe</div>
            </div>
          </div>
          <iframe className="swc-map-frame"
            data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.0!2d75.534!3d11.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQyJzAwLjAiTiA3NcKwMzInMDIuNCJF!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin"
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="SkyWings Mahe Campus Map">
          </iframe>
        </div>
      </div>
    </div>
  </section>

  

</div>
      <ContactFormBehavior />
    </>
  );
}
