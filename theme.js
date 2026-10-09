const themeButton = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const htmlElement = document.documentElement;

// Retrieve saved theme or default to system preference / dark
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply initial theme on load
setTheme(savedTheme);

if (themeButton) {
        themeButton.addEventListener('click', () => {
                const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                setTheme(newTheme);
        });
}

function setTheme(theme) {
        if (theme === 'dark') {
                htmlElement.classList.add('dark');
                if (themeIcon) themeIcon.className = 'ri-sun-fill';
        } else {
                htmlElement.classList.remove('dark');
                if (themeIcon) themeIcon.className = 'ri-moon-fill';
        }

        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
}