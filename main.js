/* ============================================================
   ARVAMOS FC — main.js (premium template v2)
   config.js (CLUB object) が先に読み込まれている前提です
============================================================ */
'use strict';

/* ── 0. Apply brand colors from config ─────────────────── */
(function applyColors() {
  const r = document.documentElement;
  const c = CLUB.colors;
  r.style.setProperty('--red',   c.primary);
  r.style.setProperty('--red-d', c.primaryDark);
  r.style.setProperty('--red-l', c.primaryLight);
  r.style.setProperty('--black', c.black);
  r.style.setProperty('--dark',  c.dark);
  r.style.setProperty('--dark2', c.dark2);
  r.style.setProperty('--dark3', c.dark3);
})();

/* ── SVG icon helpers ────────────────────────────────────── */
const SNS_SVG = {
  x:         '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.735-8.849L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
  youtube:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  facebook:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  tiktok:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.82a8.18 8.18 0 0 0 4.78 1.53V6.9a4.85 4.85 0 0 1-1.01-.21z"/></svg>',
  line:      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.085.922.26 1.057.6.122.31.079.794.039 1.104l-.171 1.027c-.053.31-.242 1.212 1.061.661 1.301-.55 7.018-4.133 9.575-7.076 1.765-1.95 2.403-3.927 2.403-6.924z"/></svg>',
};

function buildSnsHtml(size = 15) {
  return Object.entries(CLUB.sns)
    .filter(([, url]) => url)
    .map(([key, url]) => {
      const label = { x:'X (Twitter)', instagram:'Instagram', youtube:'YouTube', facebook:'Facebook', tiktok:'TikTok', line:'LINE' }[key] || key;
      const icon  = (SNS_SVG[key] || '').replace('viewBox', `width="${size}" height="${size}" viewBox`);
      return `<a href="${url}" class="sns" aria-label="${label}" target="_blank" rel="noopener">${icon}</a>`;
    })
    .join('');
}

/* ── 1. Build Header ─────────────────────────────────────── */
function buildHeader() {
  const el = document.getElementById('site-header');
  if (!el) return;
  const page = document.body.dataset.page || '';
  const first = CLUB.name.split(' ')[0]; // e.g. "ARVAMOS"

  const navLinks = [
    { href: 'index.html',          label: 'HOME',     page: 'index' },
    { href: 'index.html#news',     label: 'NEWS',     page: '' },
    { href: 'index.html#schedule', label: 'SCHEDULE', page: '' },
    { href: 'players.html',        label: 'PLAYERS',  page: 'players' },
    { href: 'staff.html',          label: 'STAFF',    page: 'staff' },
    { href: 'results.html',        label: 'RESULTS',  page: 'results' },
  ];

  const navHtml = navLinks.map(l =>
    `<li><a href="${l.href}" class="nav__link${l.page === page ? ' nav__link--current' : ''}">${l.label}</a></li>`
  ).join('');

  const logoSvg = `<svg class="logo__emblem" viewBox="0 0 56 56" width="44" height="44" aria-hidden="true"><polygon points="28,3 52,16 52,40 28,53 4,40 4,16" fill="${CLUB.colors.primary}"/><text x="28" y="36" text-anchor="middle" fill="#fff" font-family="Oswald,sans-serif" font-size="21" font-weight="700">${first.charAt(0)}</text></svg>`;

  el.innerHTML = `
    <header class="header" id="header">
      <div class="header__inner">
        <a href="index.html" class="logo">${logoSvg}<div class="logo__text"><span class="logo__name">${CLUB.name}</span><span class="logo__sub">${CLUB.tagline}</span></div></a>
        <nav class="nav" id="nav" aria-label="メインメニュー">
          <ul class="nav__list">${navHtml}<li><a href="contact.html" class="nav__link nav__link--cta${page==='contact'?' nav__link--current':''}">CONTACT</a></li></ul>
        </nav>
        <button class="hamburger" id="hamburger" aria-label="メニューを開く" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>
      </div>
    </header>`;
}

/* ── 2. Build Footer ─────────────────────────────────────── */
function buildFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  const first = CLUB.name.split(' ')[0];
  const logoSvg = `<svg class="logo__emblem" viewBox="0 0 56 56" width="52" height="52" aria-hidden="true"><polygon points="28,3 52,16 52,40 28,53 4,40 4,16" fill="${CLUB.colors.primary}"/><text x="28" y="36" text-anchor="middle" fill="#fff" font-family="Oswald,sans-serif" font-size="21" font-weight="700">${first.charAt(0)}</text></svg>`;
  const c = CLUB.contact;
  const yr = new Date().getFullYear();

  el.innerHTML = `
    <footer class="footer">
      <div class="footer__top">
        <div class="container">
          <div class="fg">
            <div class="fg__brand">
              <a href="index.html" class="logo">${logoSvg}<div class="logo__text"><span class="logo__name">${CLUB.name}</span><span class="logo__sub">${CLUB.tagline}</span></div></a>
              <p class="fg__desc">勝利への意志、地域への誇り。<br>${CLUB.name}は${CLUB.established}年創設のサッカークラブです。地域に根ざした熱いフットボールをお届けします。</p>
              <div class="fg__sns">${buildSnsHtml(15)}</div>
            </div>
            <div class="fg__col"><h4 class="fg__ttl">CLUB</h4><ul><li><a href="index.html#about">クラブ概要</a></li><li><a href="staff.html">スタッフ</a></li><li><a href="players.html">選手一覧</a></li><li><a href="results.html">試合結果</a></li></ul></div>
            <div class="fg__col"><h4 class="fg__ttl">MATCH</h4><ul><li><a href="index.html#schedule">試合日程</a></li><li><a href="results.html">試合結果</a></li><li><a href="#">チケット</a></li><li><a href="#">スタジアム情報</a></li></ul></div>
            <div class="fg__col"><h4 class="fg__ttl">CONTACT</h4><address class="fg__addr"><p>${c.postal}<br>${c.address}</p><p><a href="tel:${c.phone}">${c.phone}</a></p><p><a href="mailto:${c.email}">${c.email}</a></p></address></div>
          </div>
        </div>
      </div>
      <div class="footer__bottom"><div class="container footer__bottom-in"><p>&copy; ${yr} ${CLUB.name}. All Rights Reserved.</p><div class="footer__legal"><a href="#">プライバシーポリシー</a><a href="#">サイトマップ</a></div></div></div>
    </footer>`;
}

/* ── 3. Build Mobile Bottom Nav ──────────────────────────── */
function buildMobNav() {
  const el = document.getElementById('mob-nav');
  if (!el) return;
  const page = document.body.dataset.page || '';
  const items = [
    { href:'index.html', label:'HOME', page:'index', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
    { href:'index.html#schedule', label:'SCHEDULE', page:'', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' },
    { href:'players.html', label:'PLAYERS', page:'players', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4"/><circle cx="17" cy="17" r="4"/></svg>' },
    { href:'contact.html', label:'CONTACT', page:'contact', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' },
  ];
  el.innerHTML = `<ul class="mob-nav__list">${items.map(i=>`<li><a href="${i.href}" class="mob-nav__item${i.page===page?' is-active':''}">${i.svg}<span>${i.label}</span></a></li>`).join('')}</ul>`;
}

/* ── 4. Header scroll + hamburger ───────────────────────── */
function setupHeader() {
  const hdr = document.getElementById('header');
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const tot = document.getElementById('totop');
  if (!hdr) return;

  const onScroll = () => {
    hdr.classList.toggle('scrolled', window.scrollY > 60);
    if (tot) tot.classList.toggle('show', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const close = () => {
    ham && ham.classList.remove('open');
    nav && nav.classList.remove('open');
    ham && ham.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (ham && nav) {
    ham.addEventListener('click', () => {
      const open = ham.classList.toggle('open');
      nav.classList.toggle('open', open);
      ham.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('.nav__link').forEach(l => l.addEventListener('click', close));
  }

  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  if (tot) tot.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── 5. Smooth scroll with offset ───────────────────────── */
function setupSmoothScroll() {
  const hdr = document.getElementById('header');
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = (hdr ? hdr.offsetHeight : 72) + 4;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    });
  });
}

/* ── 6. Scroll reveal ────────────────────────────────────── */
function setupReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -70px 0px', threshold: .08 });
  document.querySelectorAll('[data-animate]').forEach(el => obs.observe(el));
}

/* ── 7. Number counter ───────────────────────────────────── */
function setupCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      const end = parseInt(el.dataset.to, 10);
      const dur = end > 999 ? 1800 : 1200;
      const t0  = Date.now();
      obs.unobserve(el);
      (function tick() {
        const p = Math.min((Date.now() - t0) / dur, 1);
        el.textContent = Math.floor((1-(1-p)*(1-p)) * end).toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = end.toLocaleString();
      })();
    });
  }, { threshold: .4 });
  document.querySelectorAll('.js-count').forEach(el => obs.observe(el));
}

/* ── 8. Hero — Poster Design ─────────────────────────────── */
function buildHero() {
  // Season label
  const seasonEl = document.getElementById('hero-season');
  if (seasonEl) seasonEl.textContent = `SEASON ${CLUB.season}`;

  // Club name
  const titleEl = document.getElementById('hero-title');
  if (titleEl) titleEl.textContent = CLUB.name;

  // Big watermark copy from config
  const bgCopy = document.getElementById('hp-bg-copy');
  if (bgCopy && CLUB.hero.posterCopy) {
    bgCopy.innerHTML = CLUB.hero.posterCopy.map(l => `<span>${l}</span>`).join('');
  }

  // Player image collage
  const playerInner = document.getElementById('hero-player-inner');
  if (playerInner) {
    const imgs = CLUB.hero.playerImages || [];
    const [main, s1, s2, s3] = imgs;
    const err = `onerror="this.parentElement.style.display='none'"`;
    if (main || s1 || s2) {
      playerInner.innerHTML = `
        <div class="hp-collage">
          ${main ? `<div class="hp-collage__main"><img src="${main}" alt="選手" loading="eager" ${err}></div>` : ''}
          ${s1   ? `<div class="hp-collage__s1"><img src="${s1}" alt="選手" loading="lazy" ${err}></div>`     : ''}
          ${s2   ? `<div class="hp-collage__s2"><img src="${s2}" alt="選手" loading="lazy" ${err}></div>`     : ''}
          ${s3   ? `<div class="hp-collage__s3"><img src="${s3}" alt="選手" loading="lazy" ${err}></div>`     : ''}
          <div class="hp-collage__overlay"></div>
        </div>`;
    } else {
      playerInner.innerHTML = `<div class="hp-player__ph"><p class="hp-player__ph-hint">PLAYER IMAGE</p></div>`;
    }
  }

  // About text (lower section)
  const atEl = document.getElementById('about-text');
  if (atEl) atEl.textContent = `${CLUB.name}は${CLUB.established}年に創設。情熱とチームワークを信条に、地域に根ざしながら常にトップを目指す選手たちが揃っています。ピッチの上での勝利だけでなく、地域社会への貢献と次世代の育成を使命としています。`;

  // ── Animations ──

  // 1. Watermark copy (instant fade-in)
  requestAnimationFrame(() => {
    if (bgCopy) bgCopy.classList.add('is-visible');
  });

  // 2. Left panel .js-hi elements (staggered fade-up)
  document.querySelectorAll('.hp-left .js-hi').forEach((el, i) => {
    setTimeout(() => {
      el.style.transition = 'opacity .75s ease, transform .75s ease';
      el.style.opacity    = '1';
      el.style.transform  = 'translateY(0)';
    }, 180 + i * 150);
  });

  // 3. Player area slides in from right
  setTimeout(() => {
    const p = document.getElementById('hp-player');
    if (p) p.classList.add('is-visible');
  }, 280);

  // 4. Diagonal red lines appear
  setTimeout(() => {
    const l = document.getElementById('hp-lines');
    if (l) l.classList.add('is-visible');
  }, 520);

  // 5. CTA banner slides up
  setTimeout(() => {
    const c = document.getElementById('hp-cta');
    if (c) c.classList.add('is-visible');
  }, 900);

  // 6. Scroll indicator
  setTimeout(() => {
    const s = document.querySelector('.hero__scroll--dark');
    if (s) { s.style.transition = 'opacity .6s ease'; s.style.opacity = '1'; }
  }, 1100);
}

/* ── 9. Next Match Banner ────────────────────────────────── */
function buildNMB() {
  const el = document.getElementById('nmb');
  if (!el) return;
  const m = CLUB.nextMatch;
  const ticket = m.ticketUrl ? `<a href="${m.ticketUrl}" class="nmb__ticket">TICKET <span>→</span></a>` : '';
  el.innerHTML = `
    <div class="nmb__label">NEXT MATCH</div>
    <div class="nmb__game">
      <span class="nmb__team nmb__team--h">${m.homeTeam}</span>
      <div class="nmb__center"><span class="nmb__vs">VS</span><span class="nmb__info">${m.competition} &nbsp;${m.kickOff}</span></div>
      <span class="nmb__team nmb__team--a">${m.awayTeam}</span>
    </div>
    <div class="nmb__cd" id="countdown">
      <div class="cd-unit"><b id="cd-d">00</b><small>DAYS</small></div><div class="cd-sep">:</div>
      <div class="cd-unit"><b id="cd-h">00</b><small>HRS</small></div><div class="cd-sep">:</div>
      <div class="cd-unit"><b id="cd-m">00</b><small>MIN</small></div><div class="cd-sep">:</div>
      <div class="cd-unit"><b id="cd-s">00</b><small>SEC</small></div>
    </div>${ticket}`;
}

/* ── 10. Countdown ───────────────────────────────────────── */
function setupCountdown() {
  const target = new Date(CLUB.nextMatch.date);
  const pad = n => String(n).padStart(2,'0');

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      const el = document.getElementById('countdown');
      if (el) el.innerHTML = `<span style="font-family:var(--f-disp);letter-spacing:.1em;color:var(--red)">MATCH DAY!</span>`;
      return;
    }
    const d = document.getElementById('cd-d'), h = document.getElementById('cd-h'),
          m = document.getElementById('cd-m'), s = document.getElementById('cd-s');
    if (d) d.textContent = pad(Math.floor(diff / 86400000));
    if (h) h.textContent = pad(Math.floor((diff % 86400000) / 3600000));
    if (m) m.textContent = pad(Math.floor((diff % 3600000) / 60000));
    if (s) s.textContent = pad(Math.floor((diff % 60000) / 1000));
  }
  tick();
  setInterval(tick, 1000);
}

/* ── 11. Ticker ──────────────────────────────────────────── */
function buildTicker() {
  const el = document.getElementById('ticker');
  if (!el) return;
  const items = CLUB.news.map(n => `<span>${n.date}&nbsp; ${n.title}</span>`).join('');
  el.innerHTML = `<span class="ticker__badge">NEWS</span><div class="ticker__wrap"><div class="ticker__inner">${items}${items}</div></div>`;
}

/* ── 12. News Rail ───────────────────────────────────────── */
function buildNewsRail() {
  const rail = document.getElementById('news-rail');
  const dots = document.getElementById('news-dots');
  if (!rail) return;

  rail.innerHTML = CLUB.news.map(n => `
    <article class="nc">
      <a href="${n.url}" class="nc__inner">
        <div class="nc__img-box"><img src="${n.img}" alt="${n.title}" loading="lazy"><span class="nc__cat nc__cat--${n.catClass}">${n.cat}</span></div>
        <div class="nc__body"><time class="nc__date">${n.date}</time><h3 class="nc__title">${n.title}</h3><p class="nc__text">${n.text}</p></div>
      </a>
    </article>`).join('');

  if (dots) {
    dots.innerHTML = CLUB.news.map((_, i) => `<button class="news-dot${i===0?' is-active':''}" data-i="${i}" aria-label="ニュース${i+1}"></button>`).join('');
  }

  // Scroll sync with dots
  rail.addEventListener('scroll', () => {
    const w = (rail.querySelector('.nc')?.offsetWidth || 0) + 22;
    const idx = Math.round(rail.scrollLeft / w);
    document.querySelectorAll('.news-dot').forEach((d, i) => d.classList.toggle('is-active', i === idx));
  }, { passive: true });

  document.querySelectorAll('.news-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const card = rail.querySelectorAll('.nc')[parseInt(dot.dataset.i)];
      if (card) rail.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' });
    });
  });
}

/* ── 13. Schedule ────────────────────────────────────────── */
function buildSchedule() {
  const list = document.getElementById('schedule-list');
  if (!list) return;

  list.innerHTML = CLUB.schedule.map(s => {
    const isHome = s.type === 'home';
    const btnHtml = s.ticketUrl
      ? `<a href="${s.ticketUrl}" class="btn btn--red btn--sm">TICKET</a>`
      : `<a href="#" class="btn btn--ghost btn--sm">DETAIL</a>`;
    const hTeam = isHome ? `<span class="mteam mteam--h">${s.home}</span>` : `<span class="mteam">${s.home}</span>`;
    const aTeam = isHome ? `<span class="mteam">${s.away}</span>` : `<span class="mteam mteam--h">${s.away}</span>`;
    return `<div class="mrow" data-type="${s.type}" data-animate>
      <div class="mrow__date"><b>${s.date}</b><span>${s.month}</span></div>
      <div class="mrow__meta"><span class="mbadge mbadge--${s.type.charAt(0)}">${s.type.toUpperCase()}</span><span class="mcomp">${s.comp} &nbsp;${s.time}</span></div>
      <div class="mrow__teams">${hTeam}<span class="mvs">VS</span>${aTeam}</div>
      <span class="mvenue">${s.venue}</span>
      ${btnHtml}
    </div>`;
  }).join('');

  // Filter tabs
  document.querySelectorAll('.stab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.stab').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const f = btn.dataset.f;
      list.querySelectorAll('.mrow').forEach(r => r.classList.toggle('hidden', f !== 'all' && r.dataset.type !== f));
    });
  });
}

/* ── 14. Results (shared: index + results page) ──────────── */
function buildResultsSummary(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const res = CLUB.results;
  const W = res.filter(r=>r.result==='W').length;
  const D = res.filter(r=>r.result==='D').length;
  const L = res.filter(r=>r.result==='L').length;
  const gf = res.reduce((a,r) => a + (r.type==='home'?r.hs:r.as), 0);
  const ga = res.reduce((a,r) => a + (r.type==='home'?r.as:r.hs), 0);
  // Target elements already carry class="result-summary" in the HTML; inject items directly.
  el.classList.add('result-summary');
  el.innerHTML = `
    <div class="rs-item rs-item--w"><span class="rs-item__n">${W}</span><span class="rs-item__l">WIN</span></div>
    <div class="rs-item rs-item--d"><span class="rs-item__n">${D}</span><span class="rs-item__l">DRAW</span></div>
    <div class="rs-item rs-item--l"><span class="rs-item__n">${L}</span><span class="rs-item__l">LOSS</span></div>
    <div class="rs-item rs-item--gf"><span class="rs-item__n">${gf}</span><span class="rs-item__l">GOALS FOR</span></div>
    <div class="rs-item rs-item--ga"><span class="rs-item__n">${ga}</span><span class="rs-item__l">GOALS AGAINST</span></div>`;
}

function buildResultsList(targetId, limit) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const data = limit ? CLUB.results.slice(0, limit) : CLUB.results;
  el.innerHTML = data.map(r => {
    const usHome = r.type === 'home';
    const score = usHome
      ? `<b>${r.hs}</b><span>-</span><b>${r.as}</b>`
      : `<b>${r.as}</b><span>-</span><b>${r.hs}</b>`;
    return `<div class="rrow is-${r.result}">
      <span class="rrow__date">${r.date}</span>
      <span class="rrow__badge is-${r.result}">${r.result==='W'?'WIN':r.result==='D'?'DRAW':'LOSS'}</span>
      <div class="rrow__teams">
        <span class="mteam${usHome?' mteam--h':''}">${r.home}</span>
        <span class="rrow__score">${score}</span>
        <span class="mteam${!usHome?' mteam--h':''}">${r.away}</span>
        <span class="rrow__comp">${r.comp}</span>
      </div>
      <span class="rrow__venue">${r.venue}</span>
    </div>`;
  }).join('');
}

/* ── 15. Schedule/Results view toggle (index) ────────────── */
function setupViewTabs() {
  const vtabs = document.querySelectorAll('.vtab');
  const pSchedule = document.getElementById('pane-schedule');
  const pResults  = document.getElementById('pane-results');
  const lblEl     = document.getElementById('sch-label');
  const ttlEl     = document.getElementById('sch-title');
  if (!vtabs.length) return;

  vtabs.forEach(btn => {
    btn.addEventListener('click', () => {
      vtabs.forEach(b => b.classList.remove('vtab--active'));
      btn.classList.add('vtab--active');
      const isSchedule = btn.dataset.view === 'schedule';
      if (pSchedule) pSchedule.hidden = !isSchedule;
      if (pResults)  pResults.hidden  = isSchedule;
      if (lblEl) lblEl.textContent = isSchedule ? 'UPCOMING' : 'RECENT';
      if (ttlEl) ttlEl.textContent = isSchedule ? 'SCHEDULE' : 'RESULTS';
    });
  });
}

/* ── 16. Players Grid (index – 6 cards max) ──────────────── */
function buildPlayersGrid() {
  const el = document.getElementById('players-grid');
  if (!el) return;
  const data = CLUB.players.slice(0, 6);
  el.innerHTML = data.map(p => `
    <div class="pc" data-animate>
      <div class="pc__img-wrap"><img class="pc__img" src="${p.img}" alt="${p.nameJa}" loading="lazy"></div>
      <div class="pc__top"><span class="pc__pos">${p.pos}</span><span class="pc__num">${p.num}</span></div>
      <div class="pc__info"><p class="pc__ja">${p.nameJa}</p><p class="pc__en">${p.nameEn}</p><p class="pc__role">${p.pos==='GK'?'GOALKEEPER':p.pos==='DF'?'DEFENDER':p.pos==='MF'?'MIDFIELDER':'FORWARD'}</p></div>
    </div>`).join('');
}

/* ── 17. Players Page (full grid) ────────────────────────── */
function buildPlayersPage() {
  const el = document.getElementById('pf-grid');
  if (!el) return;

  function render(filter) {
    const data = filter === 'all' ? CLUB.players : CLUB.players.filter(p => p.pos === filter);
    el.innerHTML = data.map(p => {
      const posLabel = p.pos==='GK'?'GOALKEEPER':p.pos==='DF'?'DEFENDER':p.pos==='MF'?'MIDFIELDER':'FORWARD';
      return `<div class="pf-card" data-pos="${p.pos}" data-animate>
        <div class="pf-card__img-wrap">
          <img class="pf-card__img" src="${p.img}" alt="${p.nameJa}" loading="lazy">
          <div class="pf-card__badge"><span class="pf-card__pos">${p.pos}</span><span class="pf-card__num">${p.num}</span></div>
        </div>
        <div class="pf-card__body">
          <p class="pf-card__name-ja">${p.nameJa}</p>
          <p class="pf-card__name-en">${p.nameEn}</p>
          <div class="pf-card__stats">
            <div class="pf-stat"><span class="pf-stat__v">${p.height}cm</span><span class="pf-stat__l">HEIGHT</span></div>
            <div class="pf-stat"><span class="pf-stat__v">${p.weight}kg</span><span class="pf-stat__l">WEIGHT</span></div>
            <div class="pf-stat"><span class="pf-stat__v">${p.foot}</span><span class="pf-stat__l">FOOT</span></div>
          </div>
          <p class="pf-card__bio">${p.bio}</p>
          <p class="pf-card__from">FROM: ${p.from}</p>
        </div>
      </div>`;
    }).join('');
    // Re-observe new elements
    document.querySelectorAll('.pf-card[data-animate]').forEach(e => {
      e.classList.remove('is-visible');
      revealObs.observe(e);
    });
  }

  render('all');

  document.querySelectorAll('.ptab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ptab').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      render(btn.dataset.pos);
    });
  });
}

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); revealObs.unobserve(e.target); } });
}, { rootMargin: '0px 0px -60px 0px', threshold: .08 });

/* ── 18. Staff Page ──────────────────────────────────────── */
function buildStaffPage() {
  const el = document.getElementById('sf-grid');
  if (!el) return;
  el.innerHTML = CLUB.staff.map(s => `
    <div class="sf-card" data-animate>
      <div class="sf-card__img-wrap">
        <img class="sf-card__img" src="${s.img}" alt="${s.nameJa}" loading="lazy">
        <div class="sf-card__role"><p class="sf-card__role-en">${s.role}</p><p class="sf-card__role-ja">${s.roleJa}</p></div>
      </div>
      <div class="sf-card__body">
        <p class="sf-card__name-ja">${s.nameJa}</p>
        <p class="sf-card__name-en">${s.nameEn}</p>
        <p class="sf-card__bio">${s.bio}</p>
      </div>
    </div>`).join('');
}

/* ── 19. Match Planner Section ───────────────────────────── */
function buildPlanner() {
  const el = document.getElementById('planner-wrap');
  if (!el) return;
  const mp = CLUB.matchPlanner;
  if (mp.enabled && mp.embedUrl) {
    el.innerHTML = `<iframe class="planner-iframe" src="${mp.embedUrl}" height="${mp.height}" frameborder="0" allowfullscreen loading="lazy" title="Match Planner"></iframe>`;
  } else {
    el.innerHTML = `
      <div class="planner-ph">
        <div class="planner-ph__icon">📅</div>
        <p class="planner-ph__title">MATCH PLANNER</p>
        <p class="planner-ph__text">スケジュール管理ツールとの連携準備中です。<br><code class="planner-ph__code">config.js</code> の <strong>matchPlanner</strong> に embedUrl を設定すると、ここに外部ツールが表示されます。</p>
      </div>`;
  }
}

/* ── 20. Sponsors ────────────────────────────────────────── */
function buildSponsors() {
  const el = document.getElementById('sponsors-content');
  if (!el) return;
  const sp = CLUB.sponsors;
  const tier = (name, data, rowClass) => {
    if (!data || !data.length) return '';
    const items = data.map(s => {
      const inner = s.logo
        ? `<img src="${s.logo}" alt="${s.name}">`
        : `<span>${s.name}</span>`;
      return `<div class="spi"><a href="${s.url}" target="_blank" rel="noopener" title="${s.name}">${inner}</a></div>`;
    }).join('');
    return `<div class="sp-tier" data-animate><h3 class="sp-tier__lbl">${name}</h3><div class="sp-row ${rowClass}">${items}</div></div>`;
  };
  el.innerHTML = tier('GOLD PARTNER', sp.gold, 'sp-row--gold') + tier('SILVER PARTNER', sp.silver, 'sp-row--silver') + tier('OFFICIAL PARTNER', sp.official, 'sp-row--official');
}

/* ── 21. Lightbox ────────────────────────────────────────── */
function setupLightbox() {
  const lb    = document.getElementById('lb');
  const lbImg = document.getElementById('lb-img');
  const lbBg  = document.getElementById('lb-bg');
  const lbCls = document.getElementById('lb-close');
  if (!lb) return;

  const open = (src, alt) => { lbImg.src = src; lbImg.alt = alt; lb.hidden = false; document.body.style.overflow = 'hidden'; };
  const close = () => { lb.hidden = true; document.body.style.overflow = ''; lbImg.src = ''; };

  document.querySelectorAll('.gi').forEach(item => {
    item.addEventListener('click', () => open(item.dataset.src || item.querySelector('img')?.src || '', item.querySelector('img')?.alt || ''));
  });
  lbBg  && lbBg.addEventListener('click', close);
  lbCls && lbCls.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── 22. Results Page ────────────────────────────────────── */
function buildResultsPage() {
  buildResultsSummary('result-summary-page');
  buildResultsList('results-list-page');

  // Result filter tabs (W/D/L)
  document.querySelectorAll('[data-rf]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-rf]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const f = btn.dataset.rf;
      document.querySelectorAll('#results-list-page .rrow').forEach(r => {
        r.classList.toggle('hidden', f !== 'all' && !r.classList.contains(`is-${f}`));
      });
    });
  });
}

/* ── 23. Contact Page ────────────────────────────────────── */
function buildContactPage() {
  // Info list
  const ciList = document.getElementById('ci-list');
  const c = CLUB.contact;
  if (ciList) {
    const mapIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
    const telIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.58 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
    const mailIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
    ciList.innerHTML = `
      <div class="ci-item"><div class="ci-item__icon">${mapIcon}</div><div class="ci-item__body"><p class="ci-item__label">ADDRESS</p><p class="ci-item__val">${c.postal} ${c.address}</p></div></div>
      <div class="ci-item"><div class="ci-item__icon">${telIcon}</div><div class="ci-item__body"><p class="ci-item__label">PHONE</p><p class="ci-item__val"><a href="tel:${c.phone}">${c.phone}</a></p></div></div>
      <div class="ci-item"><div class="ci-item__icon">${mailIcon}</div><div class="ci-item__body"><p class="ci-item__label">EMAIL</p><p class="ci-item__val"><a href="mailto:${c.email}">${c.email}</a></p></div></div>`;
  }

  // SNS in contact page
  const ciSns = document.getElementById('ci-sns');
  if (ciSns) ciSns.innerHTML = buildSnsHtml(16);

  // Form
  const form = document.getElementById('contact-form');
  const msg  = document.getElementById('form-msg');
  if (!form || !msg) return;

  // Check if sponsor anchor
  if (window.location.hash === '#sponsor') {
    const catEl = document.getElementById('f-cat');
    if (catEl) { catEl.value = 'sponsor'; }
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    let valid = true;

    // Clear previous errors
    form.querySelectorAll('.field-error').forEach(el => el.remove());
    form.querySelectorAll('.is-error').forEach(el => el.classList.remove('is-error'));

    // Validate required fields
    ['f-name','f-email','f-subject','f-message','f-privacy'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const ok = el.type === 'checkbox' ? el.checked : el.value.trim() !== '';
      if (!ok) {
        valid = false;
        el.classList.add('is-error');
        const err = document.createElement('p');
        err.className = 'field-error';
        err.textContent = el.type === 'checkbox' ? '同意が必要です' : 'このフィールドは必須です';
        el.closest('.form-group').appendChild(err);
      }
    });

    // Email format
    const emailEl = document.getElementById('f-email');
    if (emailEl && emailEl.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
      valid = false;
      emailEl.classList.add('is-error');
      const err = document.createElement('p');
      err.className = 'field-error';
      err.textContent = '正しいメールアドレスを入力してください';
      emailEl.closest('.form-group').appendChild(err);
    }

    if (!valid) return;

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.textContent = '送信中...';
    submitBtn.disabled = true;

    if (c.formAction) {
      // Submit to configured endpoint (e.g. Formspree)
      try {
        const res = await fetch(c.formAction, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form),
        });
        if (res.ok) {
          msg.className = 'form-msg form-msg--ok';
          msg.textContent = 'お問い合わせを送信しました。担当者よりご連絡いたします。';
          msg.hidden = false;
          form.reset();
        } else {
          throw new Error('server error');
        }
      } catch {
        msg.className = 'form-msg form-msg--err';
        msg.textContent = '送信に失敗しました。お手数ですがメールにてご連絡ください。';
        msg.hidden = false;
      }
    } else {
      // Fallback: open mailto
      const name    = document.getElementById('f-name')?.value || '';
      const subject = document.getElementById('f-subject')?.value || '';
      const message = document.getElementById('f-message')?.value || '';
      const body    = encodeURIComponent(`お名前: ${name}\n\n${message}`);
      window.location.href = `mailto:${c.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
      msg.className = 'form-msg form-msg--ok';
      msg.textContent = 'メールクライアントを開きました。送信をお願いします。';
      msg.hidden = false;
    }

    submitBtn.textContent = '送信する';
    submitBtn.disabled = false;
  });
}

/* ── 24. Nav spy (index only) ────────────────────────────── */
function setupNavSpy() {
  const navLinks = document.querySelectorAll('.nav__link');
  if (!navLinks.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      navLinks.forEach(l => {
        const href = l.getAttribute('href') || '';
        const match = href === `#${e.target.id}` || href.endsWith(`#${e.target.id}`);
        if (match) l.classList.toggle('nav__link--current', e.isIntersecting);
      });
    });
  }, { rootMargin: '-35% 0px -60% 0px' });
  document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
}

/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildHeader();
  buildFooter();
  buildMobNav();
  setupHeader();
  setupSmoothScroll();
  setupReveal();
  setupCounters();

  const page = document.body.dataset.page;

  if (page === 'index') {
    buildHero();
    buildNMB();
    setupCountdown();
    buildTicker();
    buildNewsRail();
    buildSchedule();
    buildResultsSummary('result-summary');
    buildResultsList('results-list-idx', 5);
    setupViewTabs();
    buildPlayersGrid();
    buildPlanner();
    buildSponsors();
    setupLightbox();
    setupNavSpy();
  }

  if (page === 'players') {
    buildPlayersPage();
  }

  if (page === 'staff') {
    buildStaffPage();
  }

  if (page === 'results') {
    buildResultsPage();
  }

  if (page === 'contact') {
    buildContactPage();
  }

  // Reveal any statically placed [data-animate] elements
  document.querySelectorAll('[data-animate]').forEach(el => revealObs.observe(el));
});
