'use client';

import { useEffect } from 'react';

/* Restores the gallery interactions from the original site:
   category counts, category filter buttons, and the image lightbox
   (click to open, prev/next, backdrop/Escape to close, arrow keys). */
export default function GalleryBehavior() {
  useEffect(() => {
    const $ = (s) => document.querySelector(s);
    const $$ = (s) => [...document.querySelectorAll(s)];

    // ── category counts ──
    const sections = $$('.glr-section[data-cat]');
    let total = 0;
    for (const sec of sections) {
      const n = sec.querySelectorAll('.glr-item').length;
      total += n;
      const el = $('#cnt-' + sec.getAttribute('data-cat'));
      if (el) el.textContent = n;
    }
    const allEl = $('#cnt-all');
    if (allEl) allEl.textContent = total;

    // ── category filter ──
    const onFilter = (e) => {
      const btn = e.target.closest('.glr-cat-btn');
      if (!btn) return;
      $$('.glr-cat-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat') || 'all';
      sections.forEach((sec) => {
        sec.style.display = cat === 'all' || sec.getAttribute('data-cat') === cat ? '' : 'none';
      });
    };

    // ── lightbox ──
    const box = $('#glr-lightbox');
    const boxImg = $('#glr-lightbox-img');
    const boxCap = $('#glr-lightbox-caption');
    let items = [];
    let idx = 0;

    const show = (el) => {
      if (!box || !boxImg) return;
      items = $$('.glr-item[data-src]');
      idx = items.indexOf(el);
      boxImg.src = el.getAttribute('data-src');
      boxImg.alt = el.getAttribute('data-caption') || 'SkyWings Aviation Academy';
      if (boxCap) boxCap.textContent = el.getAttribute('data-caption') || '';
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      if (!box) return;
      box.classList.remove('open');
      document.body.style.overflow = '';
    };
    const nav = (dir) => {
      if (!items.length) return;
      idx = (idx + dir + items.length) % items.length;
      const el = items[idx];
      boxImg.src = el.getAttribute('data-src');
      boxImg.alt = el.getAttribute('data-caption') || 'SkyWings Aviation Academy';
      if (boxCap) boxCap.textContent = el.getAttribute('data-caption') || '';
    };

    const onClick = (e) => {
      const item = e.target.closest('.glr-item[data-src]');
      if (item) { show(item); return; }
      if (e.target.closest('.glr-lightbox__prev')) { nav(-1); return; }
      if (e.target.closest('.glr-lightbox__next')) { nav(1); return; }
      if (e.target.closest('.glr-lightbox__close') || e.target === box) close();
    };
    const onKey = (e) => {
      if (!box || !box.classList.contains('open')) return;
      if (e.key === 'ArrowRight') nav(1);
      if (e.key === 'ArrowLeft') nav(-1);
      if (e.key === 'Escape') close();
    };

    document.addEventListener('click', onClick);
    document.addEventListener('click', onFilter);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('click', onFilter);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, []);

  return null;
}
