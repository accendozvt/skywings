'use client';

import { useEffect } from 'react';

/* Wires the landing-page enquiry form: on submit, reveal success and open
   WhatsApp with a callback request (matches the original behavior). */
export default function No1FormBehavior() {
  useEffect(() => {
    const form = document.getElementById('lp-form');
    if (!form) return;

    function onSubmit(e) {
      e.preventDefault();
      const btn = document.getElementById('lp-submit');
      if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }
      document.getElementById('lp-success')?.classList.add('visible');
      form.style.display = 'none';
      const msg = encodeURIComponent('Hi, I am interested in aviation courses at SkyWings Academy. Please call me back.');
      setTimeout(() => window.open(`https://wa.me/919847163163?text=${msg}`, '_blank', 'noopener'), 1200);
    }

    form.addEventListener('submit', onSubmit);
    return () => form.removeEventListener('submit', onSubmit);
  }, []);

  return null;
}
