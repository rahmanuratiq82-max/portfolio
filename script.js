// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const saved = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', saved);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Scroll: Nav shadow
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

// Reveal on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 60);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Skill bars animate on scroll
const skillBarObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.skill-bar');
      bars.forEach(bar => {
        const w = bar.getAttribute('data-w');
        setTimeout(() => {
          bar.style.width = w + '%';
        }, 200);
      });
      skillBarObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const skillsSection = document.querySelector('.skills-grid');
if (skillsSection) skillBarObserver.observe(skillsSection);

// Contact form handler
function handleContact() {
  const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
  let valid = true;
  inputs.forEach(i => {
    if (!i.value.trim()) { valid = false; i.style.borderColor = '#ff6584'; }
    else { i.style.borderColor = ''; }
  });
  if (!valid) return;
  showToast();
  inputs.forEach(i => i.value = '');
}

function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// Smooth stagger hero on load
const heroReveal = document.querySelectorAll('.hero .reveal');
heroReveal.forEach((el, i) => {
  el.style.animationDelay = `${i * 0.1 + 0.2}s`;
  el.style.animation = `fadeInUp 0.7s ease ${i * 0.12 + 0.2}s both`;
});
