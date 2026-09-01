'use client';

import { useEffect } from 'react';

/* Attaches enquiry behavior to the server-rendered contact form: validates,
   opens WhatsApp with the enquiry, and reveals the success panel. */
export default function ContactFormBehavior() {
  useEffect(() => {
    const btn = document.getElementById('swcSubmitBtn');
    if (!btn) return;
    const g = (id) => document.getElementById(id);

    function submit() {
      const name = g('swc-name')?.value.trim() || '';
      const phone = g('swc-phone')?.value.trim() || '';
      const course = g('swc-course')?.value || '';
      if (!name) return g('swc-name')?.focus();
      if (!phone) return g('swc-phone')?.focus();
      if (!course) return g('swc-course')?.focus();

      const email = g('swc-email')?.value.trim() || '';
      const city = g('swc-city')?.value.trim() || '';
      const campus = g('swc-campus')?.value || '';
      const message = g('swc-message')?.value.trim() || '';

      const msg =
        '*New Enquiry: SkyWings Academy*\n\n' +
        `*Name:* ${name}\n*Phone:* ${phone}\n` +
        (email ? `*Email:* ${email}\n` : '') +
        (city ? `*City:* ${city}\n` : '') +
        `*Course:* ${course}\n` +
        (campus ? `*Campus:* ${campus}\n` : '') +
        (message ? `*Message:* ${message}` : '');

      window.open(`https://wa.me/919605664455?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
      g('swcSuccess')?.classList.add('visible');
      const form = g('swcEnquiryForm');
      if (form) form.style.display = 'none';
    }

    btn.addEventListener('click', submit);
    return () => btn.removeEventListener('click', submit);
  }, []);

  return null;
}
