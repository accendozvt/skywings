import { Sora, Instrument_Sans } from 'next/font/google';

// Self-hosted at build time by next/font — no network request, no layout shift.
// Both are variable fonts; omitting `weight` pulls the full variable axis so
// every weight used in the design (300–700) is available via CSS font-weight.
export const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora-var',
  display: 'optional',
});

export const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body-var',
  display: 'optional',
});
