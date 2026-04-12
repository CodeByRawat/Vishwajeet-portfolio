/* ── Client data for modal ── */
const clientData = {
  1: {
    name: 'Sarah Jenkins',
    role: 'Founder, Lumina Skincare',
    tag: 'Skincare E-Commerce · Q3 2023 · 4 months',
    avatar: 'https://i.pravatar.cc/80?img=5',
    spend: '$42,500',
    revenue: '$318,750',
    roas: '7.5x',
    strategy: 'Restructured the campaign hierarchy and built custom lookalike audiences from high-LTV buyers. Scaled spend while dropping CPA by 43%, resulting in the brand\'s best quarter on record.',
  },
  2: {
    name: 'Raj Malhotra',
    role: 'CEO, FitCore India',
    tag: 'Health & Fitness · Q1 2024 · 3 months',
    avatar: 'https://i.pravatar.cc/80?img=11',
    spend: '$18,200',
    revenue: '$112,400',
    roas: '6.2x',
    strategy: 'Introduced dynamic product ads combined with video retargeting. ROAS went from 1.8x to 6.2x within 90 days through systematic creative testing and CBO campaigns.',
  },
  3: {
    name: 'Amanda Torres',
    role: 'Course Creator',
    tag: 'Digital Education · Q2 2023 · 2 months',
    avatar: 'https://i.pravatar.cc/80?img=9',
    spend: '$8,950',
    revenue: '$49,200',
    roas: '5.5x',
    strategy: 'Deployed a 3-stage funnel: awareness via video ads, middle-funnel lead magnets, and bottom-funnel urgency retargeting. Conversion rate improved by 3.4x overall.',
  },
  4: {
    name: 'Daniel Reeves',
    role: 'Real Estate Agent',
    tag: 'Real Estate · Q4 2023 · 5 months',
    avatar: 'https://i.pravatar.cc/80?img=8',
    spend: '$31,000',
    revenue: '$186,000',
    roas: '6.0x',
    strategy: 'Built a hyper-local targeting strategy with layered interest + behavioral data. Introduced a 2-step lead qualification funnel reducing junk leads by 78%.',
  },
  5: {
    name: 'Priya Sharma',
    role: 'D2C Brand Owner',
    tag: 'D2C Consumer Goods · H1 2024 · 6 months',
    avatar: 'https://i.pravatar.cc/80?img=25',
    spend: '$9,600',
    revenue: '$57,600',
    roas: '6.0x',
    strategy: 'Scaled from seed budget through systematic CBO testing, winning creative selection, and weekly performance reviews with clear KPI targets. Revenue grew 6x in 6 months.',
  },
};

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Smooth scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      // close mobile menu if open
      document.getElementById('mobileMenu').classList.remove('open');
    }
  });
});

/* ── Mobile nav toggle ── */
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links .nav-link');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => observer.observe(s));

/* ── Fade-up scroll reveal ── */
const fadeEls = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
fadeEls.forEach(el => fadeObserver.observe(el));

/* ── Modal Logic ── */
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');

function openModal(clientId) {
  const d = clientData[clientId];
  if (!d) return;

  document.getElementById('modalAvatar').src = d.avatar;
  document.getElementById('modalAvatar').alt = d.name;
  document.getElementById('modalName').textContent = d.name;
  document.getElementById('modalRole').textContent = d.role;
  document.getElementById('modalTag').textContent = d.tag;
  document.getElementById('modalSpend').textContent = d.spend;
  document.getElementById('modalRevenue').textContent = d.revenue;
  document.getElementById('modalRoas').textContent = d.roas;
  document.getElementById('modalStrategy').textContent = d.strategy;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Bind top client cards
document.querySelectorAll('.top-card').forEach(card => {
  card.addEventListener('click', () => openModal(parseInt(card.dataset.client)));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(parseInt(card.dataset.client));
    }
  });
});

// Close modal
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Modal CTA
document.getElementById('modalCta').addEventListener('click', () => {
  closeModal();
  setTimeout(() => {
    const contact = document.querySelector('#contact');
    if (contact) {
      const top = contact.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, 350);
});

/* ── Add fade-up to key sections on load ── */
document.addEventListener('DOMContentLoaded', () => {
  const targets = [
    '.stat-card','results-section .result-card',
    '.feature-card','.t-card','.o-card',
    '.section-header','.contact-left','.contact-right'
  ];

  document.querySelectorAll('.stat-card, .feature-card, .result-card, .t-card, .o-card').forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${i * 0.07}s`;
    fadeObserver.observe(el);
  });
});
