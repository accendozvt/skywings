import { pageMetadata } from '@/lib/seo';
import PageGraph from '@/components/PageGraph';
import { CONTACT } from '@/lib/site';
import '@/components/legal.css';

export const metadata = pageMetadata('privacy-policy');

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageGraph slug="privacy-policy" />
    <div className="legal">
      <div className="legal-hero">
        <div className="legal-wrap">
          <h1>Privacy Policy</h1>
          <p>Effective Date: 01 January 2025</p>
        </div>
      </div>
      <div className="legal-body">
        <div className="legal-wrap">
          <p>
            At Skywings Academy of Aviation &amp; Logistics, we are committed to protecting the privacy and personal
            information of our website visitors, students, and applicants. This Privacy Policy explains how we collect,
            use, and safeguard your information when you visit or interact with our website: skywingsacademy.com.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following personal information when you visit our site, fill out forms, or contact us:</p>
          <ul>
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Educational Qualifications</li>
            <li>Location</li>
            <li>Course Interest</li>
            <li>Any other details voluntarily provided through our forms or contact options</li>
          </ul>
          <p>
            We also collect non-personal data such as IP address, browser type, device used, pages visited, and duration
            of visit for analytics and improvement purposes.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to your inquiries or application requests</li>
            <li>Process admissions or course-related communication</li>
            <li>Send updates, notifications, and promotional content (only with consent)</li>
            <li>Improve our website performance and user experience</li>
            <li>Conduct internal analysis for marketing and course development</li>
          </ul>

          <h2>3. How We Protect Your Information</h2>
          <p>
            We implement industry-standard security measures to protect your personal data from unauthorized access,
            alteration, disclosure, or destruction. This includes secure servers, SSL encryption, and limited access to
            your data.
          </p>

          <h2>4. Sharing of Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. Information may be shared only with
            trusted partners or service providers who assist us in operating our website or delivering services, under
            confidentiality agreements.
          </p>

          <h2>5. Cookies &amp; Tracking Technologies</h2>
          <p>
            Our website may use cookies and tracking tools (like Google Analytics) to enhance your browsing experience.
            These tools help us understand user behavior and improve content relevance. You can disable cookies in your
            browser settings if you prefer not to allow this.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of
            those websites and encourage you to read their privacy policies separately.
          </p>

          <h2>7. Your Consent</h2>
          <p>
            By using our website, you consent to the terms outlined in this Privacy Policy. If you submit any form or
            contact information, you agree to be contacted by Skywings Academy regarding courses, admission, or
            promotional offers.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            Skywings Academy may update this policy at any time. Any changes will be posted on this page with a revised
            effective date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to request data deletion or correction, please
            contact:
          </p>
          <p>
            Email: <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            <br />
            Phone: <a href="tel:+919605664455">+91 9605 66 44 55</a> | <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            <br />
            Website: skywingsacademy.com
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
