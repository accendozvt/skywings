'use client';

import { useState } from 'react';
import { CONTACT } from '@/lib/site';

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const name = f.sw_name.value.trim();
    const phone = f.sw_phone.value.trim();
    const email = f.sw_email.value.trim();
    const course = f.sw_course.value;
    const campus = f.sw_campus.value;
    const message = f.sw_message.value.trim();

    const wa =
      '🎓 *New Enquiry — SkyWings Academy*\n\n' +
      `*Name:* ${name}\n*Phone:* ${phone}\n` +
      (email ? `*Email:* ${email}\n` : '') +
      `*Course:* ${course}\n` +
      (campus ? `*Campus:* ${campus}\n` : '') +
      (message ? `*Message:* ${message}` : '');

    setSent(true);
    window.open(`${CONTACT.whatsappHref}?text=${encodeURIComponent(wa)}`, '_blank', 'noopener');
  }

  return (
    <div className="sw-contact-form-wrap">
      <h3 style={{ fontFamily: 'var(--font-sora)', fontSize: '22px', fontWeight: 400, color: 'var(--navy)', marginBottom: '8px' }}>Send Us an Enquiry</h3>
      <p style={{ fontSize: '13.5px', fontWeight: 300, color: 'var(--text-light)', marginBottom: '28px', lineHeight: 1.6 }}>
        We&apos;ll get back to you within 24 hours. Fields marked * are required.
      </p>

      <div id="sw-success" className={`sw-form-success${sent ? ' visible' : ''}`}>
        ✓ Your enquiry has been sent! Our admissions team will contact you shortly.
      </div>

      <form className="sw-form" id="sw-enquiry-form" onSubmit={onSubmit}>
        <div className="sw-form-row">
          <div className="sw-form-group">
            <label className="sw-form-label" htmlFor="sw-name">Full Name *</label>
            <input className="sw-form-input" type="text" id="sw-name" name="sw_name" placeholder="Eg. Arjun Nair" required autoComplete="name" />
          </div>
          <div className="sw-form-group">
            <label className="sw-form-label" htmlFor="sw-phone">Phone Number *</label>
            <input className="sw-form-input" type="tel" id="sw-phone" name="sw_phone" placeholder="+91 98XX XXX XXX" required autoComplete="tel" />
          </div>
        </div>

        <div className="sw-form-row">
          <div className="sw-form-group">
            <label className="sw-form-label" htmlFor="sw-email">Email Address</label>
            <input className="sw-form-input" type="email" id="sw-email" name="sw_email" placeholder="you@email.com" autoComplete="email" />
          </div>
          <div className="sw-form-group">
            <label className="sw-form-label" htmlFor="sw-course">Course Interested In *</label>
            <select className="sw-form-input sw-form-select" id="sw-course" name="sw_course" required defaultValue="">
              <option value="" disabled>Choose course…</option>
              <option>BBA Aviation, Airline &amp; Airport Management</option>
              <option>Diploma in Cabin Crew Management</option>
              <option>MBA Aviation, Airline &amp; Airport Management</option>
              <option>Diploma in Airline &amp; Airport Management</option>
              <option>BBA Logistics &amp; Supply Chain Management</option>
              <option>Diploma in Aviation &amp; Hospitality Management</option>
              <option>Not sure, need counselling</option>
            </select>
          </div>
        </div>

        <div className="sw-form-row">
          <div className="sw-form-group">
            <label className="sw-form-label" htmlFor="sw-qualification">Highest Qualification</label>
            <select className="sw-form-input sw-form-select" id="sw-qualification" name="sw_qualification" defaultValue="">
              <option value="" disabled>Qualification…</option>
              <option>Currently in 12th Grade (Plus Two)</option>
              <option>Completed 12th Grade</option>
              <option>Graduate (Bachelor&apos;s Degree)</option>
              <option>Post Graduate</option>
            </select>
          </div>
          <div className="sw-form-group">
            <label className="sw-form-label" htmlFor="sw-campus">Preferred Campus</label>
            <select className="sw-form-input sw-form-select" id="sw-campus" name="sw_campus" defaultValue="">
              <option value="" disabled>Campus…</option>
              <option>Kochi</option>
              <option>Mahe</option>
              <option>No preference</option>
            </select>
          </div>
        </div>

        <div className="sw-form-group">
          <label className="sw-form-label" htmlFor="sw-message">Your Message (Optional)</label>
          <textarea className="sw-form-input" id="sw-message" name="sw_message" rows="4" placeholder="Any specific questions about the course, fees, or intake dates…"></textarea>
        </div>

        <button type="submit" className="sw-form-submit" id="sw-submit-btn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
          Send Enquiry
        </button>
      </form>
    </div>
  );
}
