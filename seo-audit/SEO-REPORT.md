# SkyWings Academy — Technical SEO & Lighthouse Report
_Generated 2026-09-01 · Lighthouse 12 (simulated throttling) · local static server with gzip, matching production compression_

## Executive summary

All 23 public pages now score **100 in Accessibility, Best Practices, and SEO on both Mobile and Desktop** (46/46 runs). Performance is **100 on Desktop (22/23, one 99)** and **92–100 on Mobile** (12 pages at 100).

Category averages across all 46 page×mode runs:

| Category | Baseline | Final |
|---|---|---|
| Performance | 85.2 | **98.9** |
| Accessibility | 89.8 | **100** |
| Best Practices | 100 | **100** |
| SEO | 99.7 | **100** |

**About the remaining mobile Performance spread (92–99 on 11 pages):** these pages run the identical optimization pipeline as the pages scoring 100 and score 100 in adjacent runs. The variance is local-machine Total Blocking Time noise (200–290 ms measured under background load vs 0–50 ms when quiet) plus the local test server's ~450 ms TTFB. Production (LiteSpeed, precompressed gzip, HTTP/2) serves faster than the local harness; live scores are expected at or above these numbers.

## Score table (baseline → final)

| Page | Mode | P (was→now) | A (was→now) | BP (was→now) | SEO (was→now) |
|---|---|---|---|---|---|
| (home) | mobile | 70 → **100** | 91 → **100** | 100 → **100** | 100 → **100** |
| (home) | desktop | 88 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| about-us | mobile | 70 → **96** | 92 → **100** | 100 → **100** | 100 → **100** |
| about-us | desktop | 94 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| contact | mobile | 69 → **99** | 91 → **100** | 100 → **100** | 100 → **100** |
| contact | desktop | 99 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| aviation-courses-in-kerala | mobile | 65 → **97** | 90 → **100** | 100 → **100** | 100 → **100** |
| aviation-courses-in-kerala | desktop | 99 → **100** | 90 → **100** | 100 → **100** | 100 → **100** |
| bba-aviation | mobile | 73 → **96** | 90 → **100** | 100 → **100** | 100 → **100** |
| bba-aviation | desktop | 98 → **100** | 90 → **100** | 100 → **100** | 100 → **100** |
| diploma-in-cabin-crew-management | mobile | 68 → **93** | 90 → **100** | 100 → **100** | 100 → **100** |
| diploma-in-cabin-crew-management | desktop | 98 → **99** | 90 → **100** | 100 → **100** | 100 → **100** |
| mba-airline-and-airport-management | mobile | 67 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| mba-airline-and-airport-management | desktop | 88 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| diploma-in-airline-airport-management | mobile | 79 → **100** | 90 → **100** | 100 → **100** | 100 → **100** |
| diploma-in-airline-airport-management | desktop | 93 → **100** | 90 → **100** | 100 → **100** | 100 → **100** |
| bba-logistics-supply-chain-management | mobile | 71 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| bba-logistics-supply-chain-management | desktop | 92 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| diploma-in-aviation-hospitality-management | mobile | 80 → **100** | 90 → **100** | 100 → **100** | 100 → **100** |
| diploma-in-aviation-hospitality-management | desktop | 91 → **100** | 90 → **100** | 100 → **100** | 100 → **100** |
| articles-and-news | mobile | 71 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| articles-and-news | desktop | 97 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| gallery | mobile | 71 → **99** | 92 → **100** | 100 → **100** | 100 → **100** |
| gallery | desktop | 81 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| kochi-campus | mobile | 94 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| kochi-campus | desktop | 99 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| mahe-campus | mobile | 68 → **99** | 92 → **100** | 100 → **100** | 100 → **100** |
| mahe-campus | desktop | 99 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| no1-aviation-institute-in-kerala | mobile | 71 → **94** | 92 → **100** | 100 → **100** | 100 → **100** |
| no1-aviation-institute-in-kerala | desktop | 96 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| bba-aviation-colleges-in-kerala | mobile | 86 → **95** | 92 → **100** | 100 → **100** | 100 → **100** |
| bba-aviation-colleges-in-kerala | desktop | 99 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| airline-campus-interview-2026-cabin-crew-recruitment | mobile | 79 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| airline-campus-interview-2026-cabin-crew-recruitment | desktop | 99 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| privacy-policy | mobile | 83 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| privacy-policy | desktop | 99 → **100** | 92 → **100** | 100 → **100** | 100 → **100** |
| aviation-courses-in-kerala-guide-2026 | mobile | 71 → **99** | 92 → **100** | 100 → **100** | 92 → **100** |
| aviation-courses-in-kerala-guide-2026 | desktop | 96 → **100** | 92 → **100** | 100 → **100** | 92 → **100** |
| aviation-industry-outlook-2026 | mobile | 80 → **92** | 82 → **100** | 100 → **100** | 100 → **100** |
| aviation-industry-outlook-2026 | desktop | 99 → **100** | 82 → **100** | 100 → **100** | 100 → **100** |
| bba-with-aviation-vs-general-bba | mobile | 81 → **100** | 82 → **100** | 100 → **100** | 100 → **100** |
| bba-with-aviation-vs-general-bba | desktop | 99 → **100** | 82 → **100** | 100 → **100** | 100 → **100** |
| career-in-air-cargo-logistics-2026 | mobile | 80 → **93** | 82 → **100** | 100 → **100** | 100 → **100** |
| career-in-air-cargo-logistics-2026 | desktop | 99 → **100** | 82 → **100** | 100 → **100** | 100 → **100** |
| high-paying-aviation-jobs-in-kerala-2026 | mobile | 70 → **98** | 82 → **100** | 100 → **100** | 100 → **100** |
| high-paying-aviation-jobs-in-kerala-2026 | desktop | 99 → **100** | 82 → **100** | 100 → **100** | 100 → **100** |

## What was done (Phases 0–9)

- ✅ **Phase 0 — Inventory & baseline**: 23 public pages + 2 noindex utility pages; full Lighthouse baseline saved to `seo-audit/baseline/`.
- ✅ **Phase 1 — Meta**: unique titles (≤60 chars) and descriptions (140–160 chars, from real page content) for every page; single canonical each; `max-image-preview:large` robots; verified no duplicates.
- ✅ **Phase 2 — Social**: full OG + Twitter card tags on all public pages, absolute image URLs (1200×630 webp + jpg fallback) with width/height/alt/type; noindex pages explicitly cleared of inherited OG.
- ✅ **Phase 3 — Sitemap/robots/manifest**: `sitemap.xml` with git-derived lastmod, `robots.txt` (AI crawlers explicitly allowed), web manifest, `llms.txt` + `llms-full.txt` (148 KB, all 23 pages).
- ✅ **Phase 4 — Structured data**: per-page @graph (WebSite + WebPage), BreadcrumbList on 14 inner pages, Course schema with real durations on 6 course pages, Organization with @id; all JSON-LD validates and is minified at build.
- ✅ **Phase 5 — Redirects & headers**: 91 × 301 redirects for all legacy WordPress URLs; force-HTTPS + non-www; security headers (HSTS, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy, CSP); X-Robots-Tag noindex on utility pages.
- ✅ **Phase 6 — Performance**: React runtime + RSC payload stripped at postbuild (JS 103 KB → 8.6 KB vanilla); CSS inlined + per-page purged; 134 responsive webp variants with srcset/sizes + intrinsic dimensions; LCP preload; font subsetting preload + `font-display: optional`; content-visibility on below-fold sections; gzip precompression; Google Maps embeds deferred via IntersectionObserver. Home mobile: P70 → P100 (page weight 4.6 MB → ~600 KB, doc 244 KB → 156 KB / 32 KB gz, CLS 0, TBT ≤50 ms).
- ✅ **Phase 7 — Accessibility**: automated contrast-convergence pipeline (Lighthouse sweep → class-keyed override generator → converge loop) plus source fixes; skip-link; aria-hidden on decorative ordinals; all 23 pages A100 on mobile **and** desktop.
- ✅ **Phase 8 — Content polish**: last user-visible em-dashes replaced (nav label, blog title, aria-label, WhatsApp templates); descriptive link text on guide-2026 course links.
- ✅ **Phase 9 — Verification**: full 46-run Lighthouse audit (`seo-audit/final/`); 1,145 internal links + 273 asset references all resolve; meta/OG/JSON-LD validators pass.

## Visible changes (all minimal, listed per the ground rules)

1. **Champagne CTA bands** (7 course pages + home mid-CTA): headline/body text changed from white to dark ink — white on champagne was 2.4:1 contrast.
2. **Eyebrow labels on light sections**: bright champagne (#c0a562) → darker gold (#7a6638) for 4.5:1 contrast; unchanged on dark sections.
3. **Low-opacity body text** on dark stat strips and final CTAs: opacity raised (0.38–0.45 → 0.72) — slightly brighter, same hierarchy.
4. **About-us numbered watermarks** ("01"–"06"): 50% opacity removed (color already dimmed); course-card links slightly darker gold.
5. **Nav drawer**: "Diploma — Airline & Airport" → "Diploma: Airline & Airport"; blog title "…2026 — The Complete Guide" → "…2026: The Complete Guide".
6. **Guide-2026 course cards**: "Learn More" → "Explore BBA Aviation" etc. (descriptive link text).
7. **Maps on contact/campus pages** now load as you scroll near them (previously eager).
8. **Webfonts** use `font-display: optional`: on a very slow first visit text may render in the metrically-matched fallback (Arial, size-adjusted — no layout shift); cached visits always show Sora/Instrument Sans.

## Manual actions for you

1. **Google Search Console**: submit `https://skywingsacademy.com/sitemap.xml` (Indexing → Sitemaps). Same in **Bing Webmaster Tools**.
2. **Rich Results Test** (https://search.google.com/test/rich-results): spot-check home, a course page, and a blog post.
3. **OG debuggers**: Facebook Sharing Debugger + LinkedIn Post Inspector on the home URL to refresh their caches after deploy.
4. **Header check** after deploy: `curl -I https://skywingsacademy.com/` should show HSTS, nosniff, X-Frame-Options, Referrer-Policy, CSP.
5. **GA4**: no analytics is installed (by design, keeps BP/perf at 100). If wanted, add gtag via a deferred script — expect a small BP/perf cost.
6. Still pending from earlier: gallery section-E images, remaining placed-student photos, Placements/Terms/Refund page content, feedback-dashboard password rotation, old template file cleanup in public_html.
