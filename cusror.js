document.addEventListener('DOMContentLoaded', () => {
    const dot = document.querySelector('[data-cursor-dot]');
    const ring1 = document.querySelector('[data-cursor-ring-1]');
    const ring2 = document.querySelector('[data-cursor-ring-2]');
    const ring3 = document.querySelector('[data-cursor-ring-3]');

    if (!window.matchMedia('(pointer: fine)').matches || !dot || !ring1 || !ring2 || !ring3) {
      return;
    }

    let mouseX = 0, mouseY = 0;
    
    // Positional coordinates for each ring
    let r1X = 0, r1Y = 0;
    let r2X = 0, r2Y = 0;
    let r3X = 0, r3Y = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Instant tracking for core dot
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;

      // Make elements visible
      [dot, ring1, ring2, ring3].forEach(el => el.style.opacity = '1');
    });

    // Staggered smooth trailing animation
    const animateRings = () => {
      // Ring 1: Tight tracking (fastest)
      r1X += (mouseX - r1X) * 0.25;
      r1Y += (mouseY - r1Y) * 0.25;
      ring1.style.left = `${r1X}px`;
      ring1.style.top = `${r1Y}px`;

      // Ring 2: Medium tracking
      r2X += (mouseX - r2X) * 0.15;
      r2Y += (mouseY - r2Y) * 0.15;
      ring2.style.left = `${r2X}px`;
      ring2.style.top = `${r2Y}px`;

      // Ring 3: Smooth lag tracking (slowest)
      r3X += (mouseX - r3X) * 0.08;
      r3Y += (mouseY - r3Y) * 0.08;
      ring3.style.left = `${r3X}px`;
      ring3.style.top = `${r3Y}px`;

      requestAnimationFrame(animateRings);
    };
    animateRings();

    // Hover triggers for clickable elements
    const targets = 'a, button, input, textarea, select, .contact-card, [role="button"]';
    
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(targets)) document.body.classList.add('cursor-hover');
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(targets)) document.body.classList.remove('cursor-hover');
    });

    // Click animation handlers
    window.addEventListener('mousedown', () => document.body.classList.add('cursor-active'));
    window.addEventListener('mouseup', () => document.body.classList.remove('cursor-active'));

    // Hide cursor on mouse leave
    document.addEventListener('mouseleave', () => {
      [dot, ring1, ring2, ring3].forEach(el => el.style.opacity = '0');
    });
});