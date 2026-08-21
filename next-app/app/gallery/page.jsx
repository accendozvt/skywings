import { pageMetadata } from '@/lib/seo';
import './page.css';

export const metadata = pageMetadata('gallery');

export default function Page_gallery() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\r\n  \"@context\": \"https://schema.org\",\r\n  \"@type\": \"ImageGallery\",\r\n  \"name\": \"SkyWings Academy Gallery, Campus Life, Events & Placements\",\r\n  \"description\": \"Photo gallery of SkyWings Aviation Academy Kochi, campus life, grooming sessions, placement drives, events, and student life.\",\r\n  \"url\": \"https://skywingsacademy.com/gallery/\",\r\n  \"publisher\": {\r\n    \"@type\": \"EducationalOrganization\",\r\n    \"name\": \"SkyWings Academy of Aviation & Logistics\",\r\n    \"url\": \"https://skywingsacademy.com\"\r\n  },\r\n  \"breadcrumb\": {\r\n    \"@type\": \"BreadcrumbList\",\r\n    \"itemListElement\": [\r\n      { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://skywingsacademy.com\" },\r\n      { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Gallery\", \"item\": \"https://skywingsacademy.com/gallery/\" }\r\n    ]\r\n  }\r\n}" }} />
<div className="glr">


<section className="glr-hero">
  <div className="glr-wrap">
    <div className="glr-hero__inner">
      <div className="glr-eyebrow">Campus Life at SkyWings</div>
      <h1 className="glr-h1">Gallery, SkyWings Aviation Academy</h1>
      <p className="glr-hero__lead">A glimpse into life at Kerala's No.1 aviation college, campus events, grooming sessions, placement ceremonies, student activities, and more.</p>
    </div>
  </div>
</section>


<div className="glr-filters">
  <div className="glr-wrap">
    <div className="glr-filters-inner">
      <button className="glr-cat-btn active">All Photos <span className="glr-cat-btn__count" id="cnt-all">0</span></button>
      <button className="glr-cat-btn">Campus &amp; Classrooms <span className="glr-cat-btn__count" id="cnt-campus">0</span></button>
      <button className="glr-cat-btn">Events &amp; Ceremonies <span className="glr-cat-btn__count" id="cnt-events">0</span></button>
      <button className="glr-cat-btn">Placements <span className="glr-cat-btn__count" id="cnt-placements">0</span></button>
      <button className="glr-cat-btn">Grooming &amp; Training <span className="glr-cat-btn__count" id="cnt-grooming">0</span></button>
      <button className="glr-cat-btn">Student Life <span className="glr-cat-btn__count" id="cnt-students">0</span></button>
    </div>
  </div>
</div>


<div className="glr-body" id="glr-body">
  <div className="glr-wrap">

    
    <div className="glr-section" data-cat="campus" id="sec-campus">
      <div className="glr-section-head">
        <h2>Campus &amp; Classrooms</h2>
        <div className="glr-section-line"></div>
        <div className="glr-section-count">8 photos</div>
      </div>
      <div className="glr-grid glr-grid--wide">
        <div className="glr-item" data-src="/assets/images/skywings-smart-classroom-kochi.jpg" data-caption="SkyWings Academy, Smart Classroom, Kochi">
          <img src="/assets/images/skywings-smart-classroom-kochi.jpg" alt="SkyWings Academy Smart Classroom Kochi" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Smart Classroom, Kochi Campus</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/aviation-management-training-kochi.jpg" data-caption="Training session in progress, SkyWings Kochi">
          <img src="/assets/images/aviation-management-training-kochi.jpg" alt="SkyWings Academy Aviation Training Kochi" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Aviation Training Session</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/cabin-crew-practical-training-skywings.jpg" data-caption="Practical training at SkyWings Academy">
          <img src="/assets/images/cabin-crew-practical-training-skywings.jpg" alt="Practical training SkyWings Academy" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Practical Training Lab</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/logistics-training-skywings-academy.jpg" data-caption="Logistics and cargo training">
          <img src="/assets/images/logistics-training-skywings-academy.jpg" alt="SkyWings Academy Logistics Training" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Logistics Training Module</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-academy-campus-kochi.jpg" data-caption="Campus facility at SkyWings Kochi">
          <img src="/assets/images/skywings-academy-campus-kochi.jpg" alt="SkyWings Campus Kochi" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Campus Facility, Kochi</div></div>
        </div>
        
        <div className="glr-item">
          <div className="glr-placeholder">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Add Campus Photo</span>
          </div>
        </div>
        <div className="glr-item">
          <div className="glr-placeholder">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Add Campus Photo</span>
          </div>
        </div>
        <div className="glr-item">
          <div className="glr-placeholder">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Add Campus Photo</span>
          </div>
        </div>
      </div>
    </div>

    
    <div className="glr-section" data-cat="events" id="sec-events">
      <div className="glr-section-head">
        <h2>Events &amp; Ceremonies</h2>
        <div className="glr-section-line"></div>
        <div className="glr-section-count">8 photos</div>
      </div>
      <div className="glr-grid">
        <div className="glr-item" data-src="/assets/images/skywings-annual-event-kerala.jpg" data-caption="SkyWings Academy annual event">
          <img src="/assets/images/skywings-annual-event-kerala.jpg" alt="SkyWings Academy Annual Event Kerala" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Annual Function 2025</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-convocation-ceremony.jpg" data-caption="Convocation ceremony SkyWings">
          <img src="/assets/images/skywings-convocation-ceremony.jpg" alt="SkyWings Academy Convocation Ceremony" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Convocation Ceremony</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-aviation-students-event.jpg" data-caption="SkyWings Academy event, students">
          <img src="/assets/images/skywings-aviation-students-event.jpg" alt="SkyWings Aviation Students Event" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Student Cultural Event</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-award-ceremony-kerala.jpg" data-caption="Award ceremony at SkyWings Academy">
          <img src="/assets/images/skywings-award-ceremony-kerala.jpg" alt="SkyWings Award Ceremony Kerala" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Awards &amp; Recognition</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-skyfest-2024.jpg" data-caption="SkyFest 2024, SkyWings Academy">
          <img src="/assets/images/skywings-skyfest-2024.jpg" alt="SkyWings SkyFest 2024" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">SkyFest 2024</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-inauguration-2022.jpg" data-caption="SkyWings Academy inauguration 2022">
          <img src="/assets/images/skywings-inauguration-2022.jpg" alt="SkyWings Inauguration 2022" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Inauguration 2022</div></div>
        </div>
        <div className="glr-item">
          <div className="glr-placeholder">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Add Event Photo</span>
          </div>
        </div>
        <div className="glr-item">
          <div className="glr-placeholder">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Add Event Photo</span>
          </div>
        </div>
      </div>
    </div>

    
    <div className="glr-section" data-cat="placements" id="sec-placements">
      <div className="glr-section-head">
        <h2>Placements &amp; Campus Drives</h2>
        <div className="glr-section-line"></div>
        <div className="glr-section-count">12 photos</div>
      </div>
      <div className="glr-grid">
        <div className="glr-item" data-src="/assets/images/skywings-placed-student-01.webp" data-caption="Placed student, SkyWings Academy">
          <img src="/assets/images/skywings-placed-student-01.webp" alt="Placed student SkyWings Academy Kerala" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Placement 2025</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-placed-student-02.webp" data-caption="SkyWings placement success">
          <img src="/assets/images/skywings-placed-student-02.webp" alt="SkyWings placement success" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Placement Success</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-placed-student-03.webp" data-caption="Airline placement, SkyWings">
          <img src="/assets/images/skywings-placed-student-03.webp" alt="Airline placement SkyWings Kerala" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Airline Placement</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-placed-student-04.webp" data-caption="SkyWings student placed in airline">
          <img src="/assets/images/skywings-placed-student-04.webp" alt="SkyWings student placed" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Student Placement</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-placed-student-05.webp" data-caption="Placement drive SkyWings Academy">
          <img src="/assets/images/skywings-placed-student-05.webp" alt="Placement drive SkyWings" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Campus Drive</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-placed-student-06.webp" data-caption="SkyWings placement 2025">
          <img src="/assets/images/skywings-placed-student-06.webp" alt="SkyWings placement 2025" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Placement 2025</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-placed-student-07.webp" data-caption="SkyWings placed students Kerala">
          <img src="/assets/images/skywings-placed-student-07.webp" alt="SkyWings placed students" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Batch Placements</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-placed-student-08.webp" data-caption="Aviation placement SkyWings">
          <img src="/assets/images/skywings-placed-student-08.webp" alt="Aviation placement SkyWings" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Aviation Placement</div></div>
        </div>
        
        <div className="glr-item">
          <div className="glr-placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Add Placement Photo</span></div>
        </div>
        <div className="glr-item">
          <div className="glr-placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Add Placement Photo</span></div>
        </div>
        <div className="glr-item">
          <div className="glr-placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Add Placement Photo</span></div>
        </div>
        <div className="glr-item">
          <div className="glr-placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Add Placement Photo</span></div>
        </div>
      </div>
    </div>

    
    <div className="glr-section" data-cat="grooming" id="sec-grooming">
      <div className="glr-section-head">
        <h2>Grooming &amp; Professional Training</h2>
        <div className="glr-section-line"></div>
        <div className="glr-section-count">6 photos</div>
      </div>
      <div className="glr-grid glr-grid--3">
        <div className="glr-item" data-src="/assets/images/bba-aviation-colleges-in-kerala-1.webp" data-caption="Grooming and personality development training">
          <img src="/assets/images/bba-aviation-colleges-in-kerala-1.webp" alt="SkyWings grooming training Kerala" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Grooming &amp; Personality Training</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/professional-presentation-training-skywings.webp" data-caption="Professional presentation at SkyWings">
          <img src="/assets/images/professional-presentation-training-skywings.webp" alt="SkyWings professional presentation training" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Professional Presentation</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-aviation-college-campus-kochi.webp" data-caption="SkyWings Academy student training">
          <img src="/assets/images/skywings-aviation-college-campus-kochi.webp" alt="SkyWings Academy student training" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Student Training Session</div></div>
        </div>
        <div className="glr-item"><div className="glr-placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Add Grooming Photo</span></div></div>
        <div className="glr-item"><div className="glr-placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Add Grooming Photo</span></div></div>
        <div className="glr-item"><div className="glr-placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Add Grooming Photo</span></div></div>
      </div>
    </div>

    
    <div className="glr-section" data-cat="students" id="sec-students">
      <div className="glr-section-head">
        <h2>Student Life at SkyWings</h2>
        <div className="glr-section-line"></div>
        <div className="glr-section-count">8 photos</div>
      </div>
      <div className="glr-grid">
        <div className="glr-item" data-src="/assets/images/skywings-premium-campus-kochi.jpg" data-caption="SkyWings Academy premium campus">
          <img src="/assets/images/skywings-premium-campus-kochi.jpg" alt="SkyWings Premium Campus Kochi" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Premium Campus Life</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-aviation-college-students.jpg" data-caption="SkyWings aviation students">
          <img src="/assets/images/skywings-aviation-college-students.jpg" alt="SkyWings Aviation College Students" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Aviation Students</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-placed-student-09.webp" data-caption="SkyWings student activities">
          <img src="/assets/images/skywings-placed-student-09.webp" alt="SkyWings student activities" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Student Activities</div></div>
        </div>
        <div className="glr-item" data-src="/assets/images/skywings-placed-student-10.webp" data-caption="Life at SkyWings Academy">
          <img src="/assets/images/skywings-placed-student-10.webp" alt="Life at SkyWings Academy" loading="lazy" />
          <div className="glr-item__overlay"><div className="glr-item__caption">Life at SkyWings</div></div>
        </div>
        <div className="glr-item"><div className="glr-placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Add Student Photo</span></div></div>
        <div className="glr-item"><div className="glr-placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Add Student Photo</span></div></div>
        <div className="glr-item"><div className="glr-placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Add Student Photo</span></div></div>
        <div className="glr-item"><div className="glr-placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Add Student Photo</span></div></div>
      </div>
    </div>

  </div>
</div>


<div className="glr-lightbox" id="glr-lightbox">
  <button className="glr-lightbox__close">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  </button>
  <button className="glr-lightbox__nav glr-lightbox__prev">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
  </button>
  <img className="glr-lightbox__img" id="glr-lightbox-img" src="" alt="SkyWings Aviation Academy" />
  <button className="glr-lightbox__nav glr-lightbox__next">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  </button>
  <div className="glr-lightbox__caption" id="glr-lightbox-caption"></div>
</div>


<div className="glr-cta">
  <div className="glr-wrap">
    <h2>See yourself here, join SkyWings 2026 batch</h2>
    <p>2026 admissions open · Kochi &amp; Mahe campuses · Free career counselling available</p>
    <div className="glr-cta__btns">
      <a href="tel:+919847163163" className="glr-btn glr-btn--solid">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
        Call: +91 9847 163 163
      </a>
      <a href="/aviation-courses-in-kerala/" className="glr-btn glr-btn--ghost">View Courses</a>
    </div>
  </div>
</div>

</div>
    </>
  );
}
