'use client';

import Script from 'next/script';

/* Loads Chart.js + the original feedback form/dashboard logic (student
   submission to Google Apps Script, plus the password-gated analytics
   dashboard). Behavior preserved verbatim from the original site. */
export default function FeedbackScripts() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js" strategy="afterInteractive" />
      <Script src="/js/feedback-form.js" strategy="lazyOnload" />
    </>
  );
}
