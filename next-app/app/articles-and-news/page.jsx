import { pageMetadata } from '@/lib/seo';
import BlogSection from '@/components/BlogSection';
import './page.css';

export const metadata = pageMetadata('articles-and-news');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'SkyWings Academy Aviation Blog, Kerala',
  description:
    'Aviation news, career guides, and insights for aviation students in Kerala. Tips on BBA Aviation, Cabin Crew training, airport jobs, and Gulf careers.',
  url: 'https://skywingsacademy.com/articles-and-news/',
  publisher: {
    '@type': 'EducationalOrganization',
    name: 'SkyWings Academy of Aviation & Logistics',
    url: 'https://skywingsacademy.com',
    logo: { '@type': 'ImageObject', url: 'https://skywingsacademy.com/assets/images/skywings-aviation-academy-logo.png' },
  },
  inLanguage: 'en-IN',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://skywingsacademy.com' },
      { '@type': 'ListItem', position: 2, name: 'Aviation Blog', item: 'https://skywingsacademy.com/articles-and-news/' },
    ],
  },
};

export default function BlogListingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="blg">
        <section className="blg-hero">
          <div className="blg-wrap">
            <div className="blg-hero__inner">
              <div className="blg-eyebrow">Aviation Knowledge Hub</div>
              <h1 className="blg-h1">Aviation Blog &amp; News, Kerala</h1>
              <p className="blg-hero__lead">
                Career guides, aviation industry updates, student stories, and tips for aviation aspirants in Kerala.
                Written by industry professionals at SkyWings Academy.
              </p>
            </div>
          </div>
        </section>

        <BlogSection />

        <div className="blg-cta">
          <div className="blg-wrap">
            <div className="blg-cta__inner">
              <div className="blg-cta__text">
                <h2>Ready to start your aviation career in Kerala?</h2>
                <p>Free counselling · 2026 admissions open · Kochi &amp; Mahe campuses</p>
              </div>
              <div className="blg-cta__btns">
                <a href="tel:+919847163163" className="blg-btn blg-btn--solid">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
                  Call Now
                </a>
                <a href="/aviation-courses-in-kerala/" className="blg-btn blg-btn--ghost">View Courses</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
