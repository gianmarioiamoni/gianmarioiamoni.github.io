// Hamburger menu script for navigation
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const header = document.querySelector('header');

    navToggle.addEventListener('click', () => {
        header.classList.toggle('nav-open');
    });

    document.addEventListener('click', (e) => {
        if (!header.contains(e.target)) {
            header.classList.remove('nav-open');
        }
    });
});

