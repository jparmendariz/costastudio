/**
 * Costa Studio - Main JavaScript
 * Maneja: loader, scroll header, mobile menu, animaciones
 */

(function() {
  'use strict';

  // ============================================================================
  // INTRO — Revelación Artesanal en 3 Actos
  // Spec: docs/superpowers/specs/2026-03-18-intro-animation-design.md
  // Badge (Acto 3, orden 2) está actualmente display:none — se omite de la
  // secuencia. Si se reactiva, agregar un paso fade-up con 700ms delay aquí
  // y ajustar delays del subtítulo a 1000ms.
  // ============================================================================
  const introOverlay = document.getElementById('intro-overlay');
  const introHiddenEls = document.querySelectorAll('.intro-hidden');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /** Envuelve cada palabra en spans para animación stagger */
  const splitText = (element) => {
    if (!element) return;
    const words = element.textContent.trim().split(/\s+/);
    element.innerHTML = words.map(w =>
      '<span class="word-wrap"><span class="word">' + w + '</span></span>'
    ).join(' ');
  };

  /** Muestra contenido sin animación (visitas repetidas o reduced motion) */
  const skipIntro = () => {
    if (introOverlay) {
      introOverlay.style.display = 'none';
    }
    introHiddenEls.forEach(el => el.classList.remove('intro-hidden'));
  };

  /** Acto 3: Revela el contenido del hero en secuencia escalonada */
  const revealHeroContent = () => {
    const heroLogo = document.querySelector('.hero__logo-card');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    const heroCtas = document.querySelector('.hero__ctas');
    const headerEl = document.querySelector('.header');

    // 1. Logo — breathe in (100ms delay)
    if (heroLogo) {
      setTimeout(() => {
        heroLogo.classList.remove('intro-hidden');
        heroLogo.classList.add('intro-breathe');
      }, 100);
    }

    // 2. Subtítulo — text split stagger (800ms delay)
    // Nota: delay comprimido de 1000ms a 800ms porque el badge está oculto
    if (heroSubtitle) {
      splitText(heroSubtitle);
      setTimeout(() => {
        heroSubtitle.classList.remove('intro-hidden');
        const words = heroSubtitle.querySelectorAll('.word');
        words.forEach((word, i) => {
          setTimeout(() => word.classList.add('visible'), i * 120);
        });

        // 3. CTA — fade up (después de última palabra + 400ms)
        const ctaDelay = words.length * 120 + 400;
        if (heroCtas) {
          setTimeout(() => {
            heroCtas.classList.remove('intro-hidden');
            heroCtas.classList.add('intro-fade-up');
          }, ctaDelay);
        }

        // 4. Header — fade down (junto con CTA)
        if (headerEl) {
          setTimeout(() => {
            headerEl.classList.remove('intro-hidden');
            headerEl.classList.add('intro-fade-down');
          }, ctaDelay);
        }
      }, 800);
    }
  };

  /** Inicia la secuencia completa de intro */
  const startIntro = () => {
    if (sessionStorage.getItem('costa-intro-seen') || prefersReducedMotion) {
      skipIntro();
      return;
    }

    const startTime = Date.now();

    const triggerDissolve = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 1600 - elapsed);

      // Esperar mínimo 1600ms, luego iniciar dissolve
      setTimeout(() => {
        if (!introOverlay || introOverlay.classList.contains('dissolved')) return;

        // Acto 2: Dissolve
        introOverlay.classList.add('dissolved');

        // Al terminar la transición, iniciar Acto 3
        const handler = () => {
          introOverlay.removeEventListener('transitionend', handler);
          introOverlay.style.display = 'none';
          revealHeroContent();
          sessionStorage.setItem('costa-intro-seen', 'true');
        };
        introOverlay.addEventListener('transitionend', handler);
      }, remaining);
    };

    // Si la página ya cargó, disparar directamente
    if (document.readyState === 'complete') {
      triggerDissolve();
    } else {
      window.addEventListener('load', triggerDissolve);
    }
  };

  // Ejecutar intro
  startIntro();

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
