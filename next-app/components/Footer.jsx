import Link from 'next/link';
import Image from 'next/image';
import { COURSES, CONTACT, SOCIAL } from '@/lib/site';
import './Footer.css';

const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
const PhoneIcon = <svg viewBox="0 0 24 24" {...S}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>;
const WaIcon = <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
const MailIcon = <svg viewBox="0 0 24 24" {...S}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const PinIcon = <svg viewBox="0 0 24 24" {...S}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;

export default function Footer() {
  return (
    <footer className="swf">
      {/* CTA BAND */}
      <div className="swf-cta">
        <div className="swf-wrap">
          <div className="swf-cta-inner">
            <div className="swf-cta__text">
              <div className="swf-cta__heading">Ready to start your aviation career?</div>
              <div className="swf-cta__sub">Admissions open for 2025–26 · Kochi &amp; Mahe campuses</div>
            </div>
            <div className="swf-cta__btns">
              <a href={CONTACT.phoneHref} className="swf-btn swf-btn--sky">{PhoneIcon}Call Us</a>
              <a href={CONTACT.whatsappHref} className="swf-btn swf-btn--wa" target="_blank" rel="noopener">{WaIcon}WhatsApp Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="swf-top">
        <div className="swf-wrap">
          <div className="swf-top-inner">
            {/* BRAND */}
            <div className="swf-brand">
              <Link href="/" className="swf-logo">
                <Image src="/assets/images/skywings-aviation-academy-logo.png" alt="SkyWings Aviation Academy" width={140} height={92} />
              </Link>
              <p className="swf-tagline">Kerala&apos;s leading aviation academy, shaping global careers in aviation, hospitality &amp; logistics since 2012.</p>
              <div className="swf-social">
                <a href={SOCIAL.facebook} className="swf-social__link" target="_blank" rel="noopener" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href={SOCIAL.instagram} className="swf-social__link" target="_blank" rel="noopener" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a href={SOCIAL.youtube} className="swf-social__link" target="_blank" rel="noopener" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
                <a href={SOCIAL.google} className="swf-social__link" target="_blank" rel="noopener" aria-label="Google Reviews">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                </a>
              </div>
            </div>

            {/* COURSES */}
            <div className="swf-col">
              <div className="swf-col__title">Courses</div>
              <ul className="swf-col__list">
                {COURSES.map((c) => (
                  <li key={c.slug}><Link href={`/${c.slug}`}>{c.title}</Link></li>
                ))}
                <li><Link href="/aviation-courses-in-kerala">View All Courses →</Link></li>
              </ul>
            </div>

            {/* ACADEMY */}
            <div className="swf-col">
              <div className="swf-col__title">Academy</div>
              <ul className="swf-col__list">
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/kochi-campus">Kochi Campus</Link></li>
                <li><Link href="/mahe-campus">Mahe Campus</Link></li>
                <li><Link href="/articles-and-news">Blog &amp; News</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="swf-col">
              <div className="swf-col__title">Contact</div>
              <ul className="swf-address-list">
                <li className="swf-address-item">
                  <div className="swf-address-item__icon">{PhoneIcon}</div>
                  <div className="swf-address-item__text">
                    <span className="swf-address-item__label">Phone</span>
                    <span className="swf-address-item__value"><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></span>
                  </div>
                </li>
                <li className="swf-address-item">
                  <div className="swf-address-item__icon">{MailIcon}</div>
                  <div className="swf-address-item__text">
                    <span className="swf-address-item__label">Email</span>
                    <span className="swf-address-item__value"><a href={CONTACT.emailHref}>{CONTACT.email}</a></span>
                  </div>
                </li>
                <li className="swf-address-item">
                  <div className="swf-address-item__icon">{PinIcon}</div>
                  <div className="swf-address-item__text">
                    <span className="swf-address-item__label">Kochi Campus</span>
                    <span className="swf-address-item__value">Pallissery Road, NH bypass,<br />behind Starbucks, Kochi 682032</span>
                  </div>
                </li>
                <li className="swf-address-item">
                  <div className="swf-address-item__icon">{PinIcon}</div>
                  <div className="swf-address-item__text">
                    <span className="swf-address-item__label">Mahe Campus</span>
                    <span className="swf-address-item__value">Lalu&apos;s Business Park, Opp. Sreenarayana Guru College, Mahe</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="swf-bottom">
        <div className="swf-wrap">
          <div className="swf-bottom-inner">
            <p className="swf-copyright">© 2026 <Link href="/">SkyWings Aviation Academy</Link>. All rights reserved.</p>
            <nav className="swf-legal" aria-label="Legal">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <a href="#">Terms of Use</a>
              <a href="#">Refund Policy</a>
              <a href="/sitemap.xml">Sitemap</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
