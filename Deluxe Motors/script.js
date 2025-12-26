 // DELUXE Motors – Compact JS

// Toggle mobile menu
const menuBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll + active link
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;

        document.querySelectorAll('.nav-links a')
            .forEach(l => l.classList.remove('active'));

        link.classList.add('active');
        target.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('active');
    });
});

// Change navbar style on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.background =
        window.scrollY > 80 ? '#000' : 'rgba(0,0,0,0.95)';
});

// Set default active link
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.nav-links a')?.classList.add('active');
});
