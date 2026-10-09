const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
        } else {
                navbar.classList.remove('scrolled');
        }
});

// ===============================================

const nav_bar = document.querySelector('.navbar');
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
        // Toggle navbar background
        if (window.scrollY > 0) {
                nav_bar.classList.add('scrolled');
        } else {
                nav_bar.classList.remove('scrolled');
        }

        // Calculate scroll progress
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        // Prevent division by zero on very short pages
        if (scrollHeight > 0) {
                const scrollPercentage = (scrollTop / scrollHeight) * 100;
                scrollProgress.style.width = scrollPercentage + '%';
        }
});