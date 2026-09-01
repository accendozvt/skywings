/* SkyWings site behaviors — vanilla replacements for the React islands.
   Loaded with defer on every page; each block guards on element existence. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ── Header: scroll state ── */
  var header = $('.swh');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Header: hamburger drawer ── */
  var ham = $('.swh-hamburger');
  var drawer = $('.swh-drawer');
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    if (ham) { ham.classList.remove('is-open'); ham.setAttribute('aria-expanded', 'false'); }
    document.body.style.overflow = '';
  }
  if (ham && drawer) {
    ham.addEventListener('click', function () {
      var open = drawer.classList.toggle('is-open');
      ham.classList.toggle('is-open', open);
      ham.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    $$('a', drawer).forEach(function (a) { a.addEventListener('click', closeDrawer); });
    document.addEventListener('click', function (e) {
      if (drawer.classList.contains('is-open') && !drawer.contains(e.target) && !ham.contains(e.target)) closeDrawer();
    });
  }

  /* ── Header: dropdown keyboard support ── */
  $$('.swh-nav__link.has-drop').forEach(function (trigger) {
    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        var item = trigger.closest('.swh-nav__item');
        var open = item.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', String(open));
      }
    });
  });

  /* ── Escape closes drawer + open dropdowns ── */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    closeDrawer();
    $$('.swh-nav__item.is-open').forEach(function (i) { i.classList.remove('is-open'); });
  });

  /* ── Homepage enquiry form → WhatsApp ── */
  var homeForm = $('#sw-enquiry-form');
  if (homeForm) {
    homeForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = homeForm;
      var v = function (n) { return (f[n] && f[n].value || '').trim(); };
      var msg = '🎓 *New Enquiry: SkyWings Academy*\n\n' +
        '*Name:* ' + v('sw_name') + '\n*Phone:* ' + v('sw_phone') + '\n' +
        (v('sw_email') ? '*Email:* ' + v('sw_email') + '\n' : '') +
        '*Course:* ' + v('sw_course') + '\n' +
        (v('sw_campus') ? '*Campus:* ' + v('sw_campus') + '\n' : '') +
        (v('sw_message') ? '*Message:* ' + v('sw_message') : '');
      var ok = $('#sw-success');
      if (ok) ok.classList.add('visible');
      window.open('https://wa.me/919605664455?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    });
  }

  /* ── Contact page form → WhatsApp ── */
  var swcBtn = $('#swcSubmitBtn');
  if (swcBtn) {
    swcBtn.addEventListener('click', function () {
      var g = function (id) { return document.getElementById(id); };
      var val = function (id) { return (g(id) && g(id).value || '').trim(); };
      if (!val('swc-name')) return g('swc-name').focus();
      if (!val('swc-phone')) return g('swc-phone').focus();
      if (!val('swc-course')) return g('swc-course').focus();
      var msg = '*New Enquiry: SkyWings Academy*\n\n' +
        '*Name:* ' + val('swc-name') + '\n*Phone:* ' + val('swc-phone') + '\n' +
        (val('swc-email') ? '*Email:* ' + val('swc-email') + '\n' : '') +
        (val('swc-city') ? '*City:* ' + val('swc-city') + '\n' : '') +
        '*Course:* ' + val('swc-course') + '\n' +
        (val('swc-campus') ? '*Campus:* ' + val('swc-campus') + '\n' : '') +
        (val('swc-message') ? '*Message:* ' + val('swc-message') : '');
      window.open('https://wa.me/919605664455?text=' + encodeURIComponent(msg), '_blank', 'noopener');
      var s = g('swcSuccess');
      if (s) s.classList.add('visible');
      var form = g('swcEnquiryForm');
      if (form) form.style.display = 'none';
    });
  }

  /* ── No.1 landing page form ── */
  var lpForm = $('#lp-form');
  if (lpForm) {
    lpForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = $('#lp-submit');
      if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }
      var ok = $('#lp-success');
      if (ok) ok.classList.add('visible');
      lpForm.style.display = 'none';
      var msg = encodeURIComponent('Hi, I am interested in aviation courses at SkyWings Academy. Please call me back.');
      setTimeout(function () { window.open('https://wa.me/919847163163?text=' + msg, '_blank', 'noopener'); }, 1200);
    });
  }

  /* ── Blog listing filter ── */
  var blgGrid = $('#blg-grid');
  if (blgGrid && $('.blg-filter-btn')) {
    var empty = null;
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.blg-filter-btn');
      if (!btn) return;
      $$('.blg-filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.getAttribute('data-cat') || 'all';
      var shown = 0;
      $$('.blg-card', blgGrid).forEach(function (c) {
        var show = cat === 'all' || c.getAttribute('data-cat') === cat;
        c.style.display = show ? '' : 'none';
        if (show) shown++;
      });
      if (!empty) {
        empty = document.createElement('div');
        empty.className = 'blg-empty';
        empty.textContent = 'No posts found in this category yet. Check back soon!';
        blgGrid.appendChild(empty);
      }
      empty.style.display = shown ? 'none' : '';
    });
  }

  /* ── Gallery: counts, filter, lightbox ── */
  var sections = $$('.glr-section[data-cat]');
  if (sections.length) {
    var total = 0;
    sections.forEach(function (sec) {
      var n = $$('.glr-item', sec).length;
      total += n;
      var el = $('#cnt-' + sec.getAttribute('data-cat'));
      if (el) el.textContent = n;
    });
    var allEl = $('#cnt-all');
    if (allEl) allEl.textContent = total;

    var box = $('#glr-lightbox');
    var boxImg = $('#glr-lightbox-img');
    var boxCap = $('#glr-lightbox-caption');
    var items = [];
    var idx = 0;
    var showItem = function (el) {
      items = $$('.glr-item[data-src]');
      idx = items.indexOf(el);
      boxImg.src = el.getAttribute('data-src');
      boxImg.alt = el.getAttribute('data-caption') || 'SkyWings Aviation Academy';
      if (boxCap) boxCap.textContent = el.getAttribute('data-caption') || '';
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    var closeBox = function () {
      box.classList.remove('open');
      document.body.style.overflow = '';
    };
    var nav = function (dir) {
      if (!items.length) return;
      idx = (idx + dir + items.length) % items.length;
      showItem(items[idx]);
    };
    document.addEventListener('click', function (e) {
      var item = e.target.closest('.glr-item[data-src]');
      if (item && box) { showItem(item); return; }
      var fbtn = e.target.closest('.glr-cat-btn');
      if (fbtn) {
        $$('.glr-cat-btn').forEach(function (b) { b.classList.remove('active'); });
        fbtn.classList.add('active');
        var cat = fbtn.getAttribute('data-cat') || 'all';
        sections.forEach(function (sec) {
          sec.style.display = (cat === 'all' || sec.getAttribute('data-cat') === cat) ? '' : 'none';
        });
        return;
      }
      if (!box) return;
      if (e.target.closest('.glr-lightbox__prev')) { nav(-1); return; }
      if (e.target.closest('.glr-lightbox__next')) { nav(1); return; }
      if (e.target.closest('.glr-lightbox__close') || e.target === box) closeBox();
    });
    document.addEventListener('keydown', function (e) {
      if (!box || !box.classList.contains('open')) return;
      if (e.key === 'ArrowRight') nav(1);
      if (e.key === 'ArrowLeft') nav(-1);
      if (e.key === 'Escape') closeBox();
    });
  }
})();
