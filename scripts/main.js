/**
 * Costa Studio - Main JavaScript
 * Maneja: loader, scroll header, mobile menu, animaciones
 */

(function() {
  'use strict';

  // ============================================================================
  // LOADER
  // ============================================================================
  const loader = document.getElementById('loader');

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('loaded');
    }, 1500);
  });

  // ============================================================================
  // HEADER SCROLL
  // ============================================================================
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });

  // ============================================================================
  // MOBILE MENU
  // ============================================================================
  const hamburger = document.querySelector('.header__hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link, .mobile-menu__cta');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ============================================================================
  // SMOOTH SCROLL FOR ANCHORS
  // ============================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================================================
  // SCROLL ANIMATIONS
  // ============================================================================
  const animatedElements = document.querySelectorAll('[data-animate]');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay * 1000);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));

  // ============================================================================
  // LANGUAGE TOGGLE (placeholder)
  // ============================================================================
  const langToggle = document.getElementById('lang-toggle');
  const langToggleMobile = document.getElementById('lang-toggle-mobile');

  function toggleLanguage(button) {
    const current = button.querySelector('.lang-toggle__current');
    const newLang = current.textContent === 'ES' ? 'EN' : 'ES';
    current.textContent = newLang;

    // Sincronizar ambos toggles
    document.querySelectorAll('.lang-toggle__current').forEach(el => {
      el.textContent = newLang;
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => toggleLanguage(langToggle));
  }

  if (langToggleMobile) {
    langToggleMobile.addEventListener('click', () => toggleLanguage(langToggleMobile));
  }

})();
