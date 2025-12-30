/**
 * Costa Studio - Main JavaScript
 * JavaScript minimo para interacciones esenciales
 */

(function() {
  'use strict';

  // ==========================================================================
  // 1. Header Sticky - Cambio de estilo al scroll
  // ==========================================================================
  const header = document.querySelector('.header');
  const scrollThreshold = 50;

  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  // Passive listener para mejor performance
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Ejecutar al cargar por si la pagina inicia scrolleada
  handleScroll();

  // ==========================================================================
  // 2. Smooth Scroll - Para anclas internas
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');

      // Ignorar si es solo "#"
      if (targetId === '#') return;

      var target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();

        // Offset para el header sticky
        var headerHeight = header.offsetHeight;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================================================
  // 3. Animaciones de Entrada - Intersection Observer
  // ==========================================================================
  var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  var animationObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        animationObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Aplicar a secciones principales
  var sectionsToAnimate = document.querySelectorAll(
    '.filosofia, .metodologia, .valores, .cta-final'
  );

  sectionsToAnimate.forEach(function(section) {
    section.classList.add('animate-on-scroll');
    animationObserver.observe(section);
  });

  // ==========================================================================
  // 4. Prevencion de FOUC (Flash of Unstyled Content)
  // ==========================================================================
  document.documentElement.classList.add('js-loaded');

})();
