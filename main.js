/* ============================================================
   ARVAMOS FC — main.js
============================================================ */

// ----------------------------------------
// Header scroll effect
// ----------------------------------------
const header = document.getElementById('header');

const onScroll = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 40);
  backToTop.classList.toggle('is-visible', window.scrollY > 400);
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ----------------------------------------
// Hamburger menu
// ----------------------------------------
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('is-open');
  nav.classList.toggle('is-open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close nav on link click
nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Close nav on outside click
document.addEventListener('click', e => {
  if (nav.classList.contains('is-open') &&
      !nav.contains(e.target) &&
      !hamburger.contains(e.target)) {
    hamburger.classList.remove('is-open');
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

// ----------------------------------------
// Hero — animate in on load
// ----------------------------------------
const heroElements = document.querySelectorAll('.hero [data-animate]');

const animateHero = () => {
  heroElements.forEach((el, i) => {
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity    = '1';
      el.style.transform  = 'translateY(0)';
    }, 300 + i * 180);
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', animateHero);
} else {
  animateHero();
}

// ----------------------------------------
// Scroll reveal — Intersection Observer
// ----------------------------------------
const revealTargets = document.querySelectorAll('[data-animate]:not(.hero [data-animate])');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  rootMargin: '0px 0px -80px 0px',
  threshold: 0.1,
});

revealTargets.forEach(el => revealObserver.observe(el));

// ----------------------------------------
// Schedule tab filter
// ----------------------------------------
const tabBtns   = document.querySelectorAll('.tab-btn');
const matchRows = document.querySelectorAll('.match-row');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabBtns.forEach(b => b.classList.remove('tab-btn--active'));
    btn.classList.add('tab-btn--active');

    matchRows.forEach(row => {
      if (target === 'all' || row.dataset.type === target) {
        row.classList.remove('hidden');
      } else {
        row.classList.add('hidden');
      }
    });
  });
});

// ----------------------------------------
// Back to top
// ----------------------------------------
const backToTop = document.getElementById('backToTop');

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ----------------------------------------
// Smooth scroll for anchor links
// (補完: CSS scroll-behavior に加えてオフセット調整)
// ----------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = header.offsetHeight + 8;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ----------------------------------------
// Gallery — lightbox (簡易実装)
// ----------------------------------------
const galleryItems = document.querySelectorAll('.gallery__item');

const lightbox  = createLightbox();
document.body.appendChild(lightbox.el);

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    lightbox.open(img.src, img.alt);
  });
});

function createLightbox() {
  const el = document.createElement('div');
  el.className = 'lightbox';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.innerHTML = `
    <div class="lightbox__backdrop"></div>
    <div class="lightbox__content">
      <button class="lightbox__close" aria-label="閉じる">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <img class="lightbox__img" src="" alt="">
    </div>
  `;

  const backdrop = el.querySelector('.lightbox__backdrop');
  const closeBtn = el.querySelector('.lightbox__close');
  const img      = el.querySelector('.lightbox__img');

  const close = () => {
    el.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => { el.style.display = 'none'; }, 300);
  };

  backdrop.addEventListener('click', close);
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && el.classList.contains('is-open')) close();
  });

  // Inject lightbox styles
  const style = document.createElement('style');
  style.textContent = `
    .lightbox {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 9999;
      align-items: center;
      justify-content: center;
    }
    .lightbox.is-open { display: flex; }
    .lightbox__backdrop {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.92);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .lightbox.is-open .lightbox__backdrop { opacity: 1; }
    .lightbox__content {
      position: relative;
      z-index: 1;
      max-width: 90vw;
      max-height: 90vh;
      opacity: 0;
      transform: scale(0.92);
      transition: opacity 0.3s, transform 0.3s;
    }
    .lightbox.is-open .lightbox__content { opacity: 1; transform: scale(1); }
    .lightbox__img {
      max-width: 90vw;
      max-height: 85vh;
      object-fit: contain;
      display: block;
    }
    .lightbox__close {
      position: absolute;
      top: -48px;
      right: 0;
      color: #fff;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      transition: color 0.2s;
    }
    .lightbox__close:hover { color: #cc0000; }
  `;
  document.head.appendChild(style);

  return {
    el,
    open(src, alt) {
      img.src = src;
      img.alt = alt;
      el.style.display = 'flex';
      requestAnimationFrame(() => el.classList.add('is-open'));
      document.body.style.overflow = 'hidden';
    },
  };
}

// ----------------------------------------
// Active nav link on scroll (spy)
// ----------------------------------------
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks  = document.querySelectorAll('.nav__link');

const spyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle(
          'nav__link--active',
          link.getAttribute('href') === `#${id}`
        );
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => spyObserver.observe(section));

// Inject active nav style
const activeStyle = document.createElement('style');
activeStyle.textContent = `
  .nav__link--active:not(.nav__link--contact) {
    color: #cc0000;
  }
  .nav__link--active:not(.nav__link--contact)::after {
    transform: scaleX(1);
  }
`;
document.head.appendChild(activeStyle);
