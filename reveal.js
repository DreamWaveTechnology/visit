document.addEventListener('DOMContentLoaded', () => {
  // Select target elements across the page
  const targetSelectors = [
    '.navbar',
    '.hero-header',
    '.hero-title',
    '.hero-btns',
    '.results-card',
    '.sub-section-banner',
    '.section-heading',
    '.section-para',
    '.we-do-card',
    '.home-img-card',
    '.sub-section-btn',
    '.process-top',
    '.process-bottom',
    '.pro-form',
    '.footer-dwt',
    '.footer-company',
    '.footer-services',
    '.footer-support'
  ];

  const elementsToAnimate = document.querySelectorAll(targetSelectors.join(', '));

  // Automatically attach reveal class and staggered delays where needed
  elementsToAnimate.forEach((el) => {
    if (!el.classList.contains('reveal-element')) {
      el.classList.add('reveal-element');
    }

    // Add staggered delay to grid children
    const parent = el.parentElement;
    if (parent && (parent.classList.contains('results-grid') || 
                   parent.classList.contains('what-we-do-grid') || 
                   parent.classList.contains('process-point-list'))) {
      const index = Array.from(parent.children).indexOf(el);
      const delayClass = `delay-${(index % 6) + 1}`;
      el.classList.add(delayClass);
    }
  });

  // Intersection Observer for scroll triggers
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve after revealing for optimal performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elementsToAnimate.forEach(el => revealObserver.observe(el));
});