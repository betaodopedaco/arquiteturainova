// Menu mobile
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('nav');

mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Efeito 3D para títulos
const heroSpans = document.querySelectorAll('.hero h2 span');
heroSpans.forEach(span => {
    span.addEventListener('mouseenter', () => {
        span.style.transition = 'transform 0.3s ease';
    });
    
    span.addEventListener('mouseleave', () => {
        setTimeout(() => {
            span.style.transition = 'transform 0.6s ease';
            span.style.transform = '';
        }, 300);
    });
});

// Efeito de parallax para hero section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const moveX = (e.clientX / window.innerWidth) - 0.5;
    const moveY = (e.clientY / window.innerHeight) - 0.5;
    
    hero.style.transform = `perspective(1000px) rotateY(${moveX * 3}deg) rotateX(${moveY * 3}deg)`;
});
