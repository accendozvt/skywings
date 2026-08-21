# SkyWings Aviation Academy — Next.js Website

Native Next.js (App Router) rebuild of the SkyWings site. All pages are
statically generated (SSG) for fast loads and clean SEO, and run as a Node app.

## Tech

- **Next.js 15** App Router, React 19 — JavaScript/JSX
- **Static generation**: every page pre-rendered to HTML at build time
- **Server Components** by default; small `'use client'` islands only for the
  mobile menu, blog filter, enquiry/contact/feedback forms
- **next/font** (self-hosted Sora + Instrument Sans, zero layout shift)
- **Metadata API** — per-page title/description/canonical/OG/Twitter from the
  SEOPress data, plus JSON-LD (Organization, Course, FAQ, Blog, BlogPosting)
- **301 redirects** for all old WordPress URLs live in `next.config.mjs`

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build

```bash
npm run build      # generates .next (static-rendered pages)
npm run start      # serves the built app (honours the PORT env var)
```

## Deploying to Hostinger (Node.js hosting)

1. In hPanel, create a **Node.js application** (Node 20+ recommended).
2. Upload the contents of this `next-app/` folder to the app root
   (you can omit `node_modules/` and `.next/` — they are rebuilt on the server).
3. Set the application to install and build:
   - Install command: `npm install`
   - Build command:  `npm run build`
   - Start command:  `npm run start`
     (equivalently `node_modules/.bin/next start -p $PORT`)
4. Hostinger provides the `PORT` env var automatically; `next start` uses it.
5. Point your domain to the application. No database or environment variables
   are required.
6. To publish content changes, redeploy (re-run the build) — the site is fully
   static, so there is no runtime CMS.

Old WordPress URLs (pages, tag/category archives, and old
`/wp-content/uploads/...` image URLs) 301-redirect to their new locations via
`next.config.mjs` — no `.htaccess` needed.

## Structure

```
app/
  layout.jsx            root layout: fonts, header, footer, default metadata,
                        Organization JSON-LD, floating mobile call/WhatsApp
  page.jsx              homepage
  <slug>/page.jsx       one folder per route (course pages, blog articles, etc.)
  robots.js             robots.txt (App Router route)
  sitemap.js            sitemap.xml (App Router route)
  not-found.jsx         branded 404
components/              Header, Footer, MobileWidget, BlogSection,
                        EnquiryForm, ContactFormBehavior, FeedbackScripts, …
lib/
  site.js               contact details, nav data, course catalogue
  seo.js                per-page SEO metadata + pageMetadata() helper
  posts.js              static blog post data
  redirects.mjs         old→new URL map (auto-generated)
public/
  assets/images/…       all site images (SEO-named)
  assets/opengraph/preview.webp   1200×630 share image
  js/feedback-form.js   feedback form + analytics dashboard logic
  llms.txt              company context for AI crawlers
```

## Notes

- Forms: the homepage and contact enquiry forms open WhatsApp with the filled
  details; the feedback form posts to its Google Apps Script sheet (unchanged)
  and includes the password-gated analytics dashboard.
- Known content gaps (no source ever existed): the "Placements" nav link and
  the "Terms of Use" / "Refund Policy" footer links have no destination page.

## Regenerating from source

The page components were generated from the verified static build in `../dist`
by `../_build/to-next.mjs`. Interactive pages (homepage, blog, contact,
feedback, no1, airline-campus) are hand-finished and excluded from that script.
SEO parity and content checks:

```bash
node ../_build/parity.mjs         # compares SEO meta vs dist (needs npm start running)
node ../_build/content-check.mjs  # h1s, asset existence, interactive sections
```
