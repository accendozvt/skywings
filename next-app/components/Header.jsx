'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COURSES, CAMPUSES, CONTACT } from '@/lib/site';
import './Header.css';

/* Inline icon set (stroke icons share the same wrapper attributes) */
const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
const COURSE_ICON = {
  plane: <svg viewBox="0 0 24 24" {...S}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>,
  user: <svg viewBox="0 0 24 24" {...S}><circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" /></svg>,
  monitor: <svg viewBox="0 0 24 24" {...S}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  building: <svg viewBox="0 0 24 24" {...S}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>,
  truck: <svg viewBox="0 0 24 24" {...S}><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
  coffee: <svg viewBox="0 0 24 24" {...S}><path d="M18 8h1a4 4 0 010 8h-1" /><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>,
};
const PinIcon = <svg viewBox="0 0 24 24" {...S}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;
const ChevIcon = <svg viewBox="0 0 24 24" {...S}><path d="M9 18l6-6-6-6" /></svg>;
const PhoneIcon = <svg viewBox="0 0 24 24" {...S}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>;
const SendIcon = <svg viewBox="0 0 24 24" {...S}><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2l6 6-1 3.5 3.5-1z" /></svg>;
const WaIcon = <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" /></svg>;

const NAV_LINKS = [
  { href: '/about-us', label: 'About Us' },
  { href: '#', label: 'Placements' },
  ...CAMPUSES.map((c) => ({ href: `/${c.slug}`, label: c.title })),
  { href: '/articles-and-news', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // keyboard-opened dropdown

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setDrawerOpen(false); setOpenMenu(null); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const toggleMenu = (name) => (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpenMenu((cur) => (cur === name ? null : name));
    }
  };

  return (
    <>
      <header className={`swh${scrolled ? ' is-scrolled' : ''}`} role="banner">
        <div className="swh-inner">
          <Link href="/" className="swh-logo" aria-label="SkyWings Aviation Academy — Home">
            <Image
              src="/assets/images/skywings-aviation-academy-logo.png"
              alt="SkyWings Aviation Academy"
              className="swh-logo__img"
              width={180}
              height={119}
              priority
            />
          </Link>

          <nav className="swh-nav" role="navigation" aria-label="Main navigation">
            {/* Courses */}
            <div className={`swh-nav__item${openMenu === 'courses' ? ' is-open' : ''}`}>
              <span className="swh-nav__link has-drop" role="button" aria-haspopup="true"
                aria-expanded={openMenu === 'courses'} tabIndex={0} onKeyDown={toggleMenu('courses')}>
                Courses
              </span>
              <div className="swh-drop swh-drop--wide" role="menu">
                {COURSES.map((c) => (
                  <Link key={c.slug} href={`/${c.slug}`} className="swh-drop__link" role="menuitem">
                    <div className="swh-drop__icon">{COURSE_ICON[c.icon]}</div>
                    <div className="swh-drop__text">
                      <div className="swh-drop__title">{c.title}</div>
                      <div className="swh-drop__sub">{c.sub}</div>
                    </div>
                  </Link>
                ))}
                <div className="swh-drop__divider" />
                <Link href="/aviation-courses-in-kerala" className="swh-drop__link" role="menuitem" style={{ gridColumn: '1/-1' }}>
                  <div className="swh-drop__icon" style={{ background: 'rgba(149,191,71,0.08)' }}>
                    <svg viewBox="0 0 24 24" {...S}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                  <div className="swh-drop__text">
                    <div className="swh-drop__title">View All Courses</div>
                    <div className="swh-drop__sub">Compare programmes, fees &amp; intake dates</div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="swh-nav__item"><Link href="/about-us" className="swh-nav__link">About</Link></div>

            {/* Campuses */}
            <div className={`swh-nav__item${openMenu === 'campuses' ? ' is-open' : ''}`}>
              <span className="swh-nav__link has-drop" role="button" aria-haspopup="true"
                aria-expanded={openMenu === 'campuses'} tabIndex={0} onKeyDown={toggleMenu('campuses')}>
                Campuses
              </span>
              <div className="swh-drop" role="menu">
                {CAMPUSES.map((c) => (
                  <Link key={c.slug} href={`/${c.slug}`} className="swh-drop__link" role="menuitem">
                    <div className="swh-drop__icon">{PinIcon}</div>
                    <div className="swh-drop__text">
                      <div className="swh-drop__title">{c.title}</div>
                      <div className="swh-drop__sub">{c.sub}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="swh-nav__item"><Link href="#" className="swh-nav__link">Placements</Link></div>
            <div className="swh-nav__item"><Link href="/articles-and-news" className="swh-nav__link">Blog</Link></div>
            <div className="swh-nav__item"><Link href="/contact" className="swh-nav__link">Contact</Link></div>
          </nav>

          <div className="swh-actions">
            <a href={CONTACT.phoneHref} className="swh-contact__phone" aria-label="Call SkyWings Academy">
              {PhoneIcon}{CONTACT.phone}
            </a>
            <Link href="/contact#enquiry" className="swh-btn swh-btn--sky">{SendIcon}Enquire Now</Link>
            <button className={`swh-hamburger${drawerOpen ? ' is-open' : ''}`} aria-label="Toggle menu"
              aria-expanded={drawerOpen} aria-controls="swh-drawer" onClick={() => setDrawerOpen((v) => !v)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div className={`swh-drawer${drawerOpen ? ' is-open' : ''}`} id="swh-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div className="swh-drawer__section">
          <div className="swh-drawer__label">Courses</div>
          {COURSES.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="swh-drawer__link" onClick={() => setDrawerOpen(false)}>
              {c.title}{ChevIcon}
            </Link>
          ))}
        </div>
        <div className="swh-drawer__divider" />
        <div className="swh-drawer__section">
          <div className="swh-drawer__label">Navigation</div>
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="swh-drawer__link" onClick={() => setDrawerOpen(false)}>
              {l.label}{ChevIcon}
            </Link>
          ))}
        </div>
        <div className="swh-drawer__divider" />
        <div className="swh-drawer__actions">
          <a href={CONTACT.phoneHref} className="swh-btn swh-btn--sky">{PhoneIcon}Call: {CONTACT.phone}</a>
          <a href={CONTACT.whatsappHref} className="swh-btn swh-btn--wa" target="_blank" rel="noopener">{WaIcon}WhatsApp Us</a>
        </div>
      </div>
    </>
  );
}
