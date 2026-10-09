document.addEventListener('DOMContentLoaded', () => {
    const serviceSections = document.querySelectorAll('.service-info-container .service-section');
    const serviceImg = document.getElementById('activeServiceImg');

    if (!serviceSections.length || !serviceImg) return;

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const activeSection = entry.target;

                // 1. Set active class on section text
                serviceSections.forEach((section) => section.classList.remove('show'));
                activeSection.classList.add('show');

                // 2. 3D Card Swap Animation
                const newImgSrc = activeSection.getAttribute('data-img');
                if (newImgSrc && serviceImg.getAttribute('src') !== newImgSrc) {
                    // Trigger tilt/scale down swap transition
                    serviceImg.classList.add('swap-anim');

                    setTimeout(() => {
                        serviceImg.setAttribute('src', newImgSrc);
                        // Return card back into 3D focus
                        serviceImg.classList.remove('swap-anim');
                    }, 280);
                }
            }
        });
    }, observerOptions);

    serviceSections.forEach((section) => observer.observe(section));
});