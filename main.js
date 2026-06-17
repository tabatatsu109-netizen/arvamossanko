/* ============================================================
   ARVAMOS FC — main.js (full redesign)
============================================================ */

'use strict';

// ── Header scroll ──────────────────────────────────────────
const header    = document.getElementById('header');
const totopBtn  = document.getElementById('totop');

function onScroll() {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 60);
  totopBtn.classList.toggle('show', y > 500);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Hamburger ──────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');

function closeNav() {
  hamburger.classList.remove('open');
  nav.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  nav.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

nav.querySelectorAll('.nav__link').forEach(l => l.addEventListener('click', closeNav));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeNav();
});

// ── Hero entrance animation ────────────────────────────────
const heroEls = document.querySelectorAll('.js-hi');

function animateHero() {
  heroEls.forEach((el, i) => {
    setTimeout(() => {
      el.style.transition = 'opacity .85s ease, transform .85s ease';
      el.style.opacity    = '1';
      el.style.transform  = 'translateY(0)';
    }, 200 + i * 180);
  });
  // Trigger red rule width animation
  const rule = document.querySelector('.hero__rule');
  if (rule) setTimeout(() => rule.classList.add('show'), 800);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', animateHero);
} else {
  animateHero();
}

// ── Smooth scroll with header offset ──────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = header.offsetHeight + 4;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  });
});

// ── Scroll reveal ──────────────────────────────────────────
const revealEls = document.querySelectorAll('[data-animate]');

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -80px 0px', threshold: 0.08 });

revealEls.forEach(el => revealObs.observe(el));

// ── Number counter ─────────────────────────────────────────
const counters = document.querySelectorAll('.js-count');

const counterObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el  = entry.target;
    const end = parseInt(el.dataset.to, 10);
    const dur = end > 1000 ? 1800 : 1200;
    const start = Date.now();
    counterObs.unobserve(el);

    (function tick() {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / dur, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      el.textContent = Math.floor(eased * end).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = end.toLocaleString();
    })();
  });
}, { threshold: 0.4 });

counters.forEach(el => counterObs.observe(el));

// ── Countdown timer ────────────────────────────────────────
const MATCH_DATE = new Date('2024-06-22T14:00:00');

function padZ(n) { return String(n).padStart(2, '0'); }

function updateCountdown() {
  const diff = MATCH_DATE - Date.now();
  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<span style="font-family:var(--f-disp);letter-spacing:.1em;color:var(--red)">MATCH DAY!</span>';
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cd-d').textContent = padZ(d);
  document.getElementById('cd-h').textContent = padZ(h);
  document.getElementById('cd-m').textContent = padZ(m);
  document.getElementById('cd-s').textContent = padZ(s);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ── News rail dots + snap ──────────────────────────────────
const rail  = document.getElementById('news-rail');
const dots  = document.querySelectorAll('.news-dot');

function updateDots() {
  const cards    = rail.querySelectorAll('.nc');
  const cardW    = cards[0]?.offsetWidth ?? 0;
  const gap      = 24;
  const scrolled = rail.scrollLeft;
  const idx      = Math.round(scrolled / (cardW + gap));
  dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
}

rail.addEventListener('scroll', updateDots, { passive: true });
window.addEventListener('resize', updateDots);

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const i      = parseInt(dot.dataset.i, 10);
    const card   = rail.querySelectorAll('.nc')[i];
    if (!card) return;
    rail.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' });
  });
});

// ── Schedule tab filter ────────────────────────────────────
const stabs  = document.querySelectorAll('.stab');
const mrows  = document.querySelectorAll('.mrow');

stabs.forEach(btn => {
  btn.addEventListener('click', () => {
    stabs.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const f = btn.dataset.f;
    mrows.forEach(row => {
      row.classList.toggle('hidden', f !== 'all' && row.dataset.type !== f);
    });
  });
});

// ── Gallery lightbox ───────────────────────────────────────
const lb     = document.getElementById('lb');
const lbImg  = document.getElementById('lb-img');
const lbBg   = document.getElementById('lb-bg');
const lbClose= document.getElementById('lb-close');

document.querySelectorAll('.gi').forEach(item => {
  item.addEventListener('click', () => {
    const src = item.dataset.src || item.querySelector('img')?.src;
    const alt = item.querySelector('img')?.alt ?? '';
    if (!src) return;
    lbImg.src = src;
    lbImg.alt = alt;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    lb.focus();
  });
});

function closeLb() {
  lb.hidden = true;
  document.body.style.overflow = '';
  lbImg.src = '';
}

lbClose.addEventListener('click', closeLb);
lbBg.addEventListener('click', closeLb);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

// ── Back to top ────────────────────────────────────────────
totopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Active nav highlight on scroll ────────────────────────
const sections = document.querySelectorAll('section[id], div[id="top"]');
const navLinks  = document.querySelectorAll('.nav__link');

const spyObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle(
        'nav__link--active',
        link.getAttribute('href') === `#${entry.target.id}`
      );
    });
  });
}, { rootMargin: '-35% 0px -60% 0px' });

sections.forEach(s => spyObs.observe(s));

// Inject active style
const style = document.createElement('style');
style.textContent = `
  .nav__link--active:not(.nav__link--cta) { color: var(--red); }
  .nav__link--active:not(.nav__link--cta)::after { transform: scaleX(1); }
`;
document.head.appendChild(style);
