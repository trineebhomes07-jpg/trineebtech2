/* ============================================================
   TRINEEB TECH – DATA / CONTENT
   ============================================================ */

const DATA = {

  /* ── Services ────────────────────────────────────────── */
  services: [
    { icon: '🌐', title: 'Website Development',         desc: 'High-performance, responsive websites that convert visitors into customers.' },
    { icon: '📱', title: 'Mobile App Development',      desc: 'Cross-platform iOS & Android apps with seamless user experiences.' },
    { icon: '⚙️', title: 'Custom Software Development', desc: 'Tailored software solutions built around your unique business logic.' },
    { icon: '🤖', title: 'AI & Business Automation',    desc: 'Smart automation that eliminates manual tasks and boosts productivity.' },
    { icon: '📈', title: 'Digital Marketing',           desc: 'SEO, PPC, social media strategies that grow your online presence.' },
    { icon: '🎨', title: 'UI/UX Design',                desc: 'Intuitive, beautiful interfaces crafted for exceptional user delight.' },
    { icon: '☁️', title: 'Cloud Solutions',             desc: 'Scalable AWS, Azure, and GCP infrastructure for modern businesses.' },
    { icon: '🔒', title: 'Cybersecurity Services',      desc: 'Protect your digital assets with enterprise-grade security protocols.' },
    { icon: '📊', title: 'Data Analytics & Dashboards', desc: 'Real-time insights and business intelligence for smarter decisions.' },
    { icon: '💡', title: 'Technology Consulting',       desc: 'Strategic guidance to align technology with your business goals.' },
  ],

  /* ── Industries ──────────────────────────────────────── */
  industries: [
    { emoji: '🏢', title: 'Real Estate',            desc: 'Property portals, CRM systems, virtual tours.',       tag: 'Property Tech' },
    { emoji: '🎓', title: 'Education',              desc: 'LMS platforms, student portals, e-learning apps.',    tag: 'EdTech' },
    { emoji: '🏥', title: 'Healthcare',             desc: 'Patient management, telemedicine, health records.',   tag: 'HealthTech' },
    { emoji: '🛍️', title: 'Retail & E-Commerce',    desc: 'Online stores, POS systems, inventory management.',  tag: 'Commerce' },
    { emoji: '💰', title: 'Finance',                desc: 'Fintech apps, banking solutions, trading platforms.', tag: 'FinTech' },
    { emoji: '🏭', title: 'Manufacturing',          desc: 'ERP systems, supply chain, production tracking.',     tag: 'Industry 4.0' },
    { emoji: '🏨', title: 'Hospitality',            desc: 'Booking systems, hotel apps, guest management.',      tag: 'HospTech' },
    { emoji: '🚀', title: 'Startups',               desc: 'MVPs, product development, growth hacking tools.',    tag: 'Startup' },
    { emoji: '🏛️', title: 'Corporate Enterprises',  desc: 'Enterprise software, digital transformation, ERP.',  tag: 'Enterprise' },
  ],

  /* ── Solutions ───────────────────────────────────────── */
  solutions: [
    { icon: 'fa-solid fa-globe',           title: 'Business Websites' },
    { icon: 'fa-solid fa-users',           title: 'CRM Systems' },
    { icon: 'fa-solid fa-layer-group',     title: 'ERP Solutions' },
    { icon: 'fa-solid fa-cart-shopping',   title: 'E-Commerce Platforms' },
    { icon: 'fa-solid fa-mobile-screen',   title: 'Mobile Applications' },
    { icon: 'fa-solid fa-robot',           title: 'AI Chatbots' },
    { icon: 'fa-solid fa-funnel-dollar',   title: 'Lead Generation Systems' },
    { icon: 'fa-solid fa-gears',           title: 'Business Automation Tools' },
    { icon: 'fa-solid fa-user-circle',     title: 'Customer Portals' },
    { icon: 'fa-solid fa-chart-bar',       title: 'Analytics Dashboards' },
  ],

  /* ── Process Steps ───────────────────────────────────── */
  process: [
    { num: '01', icon: 'fa-solid fa-comments',      title: 'Discovery & Consultation',  desc: 'Deep-dive sessions to understand your business goals and challenges.' },
    { num: '02', icon: 'fa-solid fa-list-check',    title: 'Requirement Analysis',       desc: 'Detailed documentation of features, scope, and technical requirements.' },
    { num: '03', icon: 'fa-solid fa-compass-drafting', title: 'Strategy & Planning',     desc: 'Project roadmap, tech stack selection, and resource planning.' },
    { num: '04', icon: 'fa-solid fa-pen-ruler',     title: 'Design & Prototyping',       desc: 'Wireframes, UI/UX prototypes reviewed and approved by you.' },
    { num: '05', icon: 'fa-solid fa-code',          title: 'Development',                desc: 'Agile sprints with transparent progress and regular demos.' },
    { num: '06', icon: 'fa-solid fa-vial',          title: 'Testing & Optimization',     desc: 'QA testing, performance optimization, security audits.' },
    { num: '07', icon: 'fa-solid fa-rocket',        title: 'Launch',                     desc: 'Seamless deployment with zero downtime and full monitoring.' },
    { num: '08', icon: 'fa-solid fa-chart-line',    title: 'Support & Growth',           desc: 'Ongoing maintenance, analytics tracking, and feature enhancements.' },
  ],

  /* ── Tech Stack ──────────────────────────────────────── */
  techStack: [
    {
      label: 'Frontend',
      icon: 'fa-solid fa-display',
      items: [
        { icon: '⚛️', name: 'React' },
        { icon: '▲',  name: 'Next.js' },
        { icon: '🔷', name: 'TypeScript' },
        { icon: '🌐', name: 'HTML5' },
        { icon: '🎨', name: 'CSS3 / Tailwind' },
        { icon: '💚', name: 'Vue.js' },
      ]
    },
    {
      label: 'Backend',
      icon: 'fa-solid fa-server',
      items: [
        { icon: '🟢', name: 'Node.js' },
        { icon: '🐘', name: 'PHP / Laravel' },
        { icon: '🐍', name: 'Python / Django' },
        { icon: '☕', name: 'Java / Spring' },
        { icon: '🔷', name: 'GraphQL' },
        { icon: '🔌', name: 'REST APIs' },
      ]
    },
    {
      label: 'Database',
      icon: 'fa-solid fa-database',
      items: [
        { icon: '🐬', name: 'MySQL' },
        { icon: '🐘', name: 'PostgreSQL' },
        { icon: '🍃', name: 'MongoDB' },
        { icon: '🔴', name: 'Redis' },
        { icon: '🔥', name: 'Firebase' },
        { icon: '❄️',  name: 'Snowflake' },
      ]
    },
    {
      label: 'Cloud & DevOps',
      icon: 'fa-solid fa-cloud',
      items: [
        { icon: '☁️', name: 'AWS' },
        { icon: '🔵', name: 'Microsoft Azure' },
        { icon: '🌐', name: 'Google Cloud' },
        { icon: '🐳', name: 'Docker' },
        { icon: '☸️', name: 'Kubernetes' },
        { icon: '🔁', name: 'CI/CD Pipelines' },
      ]
    },
    {
      label: 'AI & Automation',
      icon: 'fa-solid fa-robot',
      items: [
        { icon: '🤖', name: 'OpenAI / GPT' },
        { icon: '🧠', name: 'Machine Learning' },
        { icon: '⚡', name: 'Zapier / Make' },
        { icon: '🔗', name: 'LangChain' },
        { icon: '📊', name: 'TensorFlow' },
        { icon: '🌀', name: 'n8n Automation' },
      ]
    },
  ],

  /* ── Portfolio ───────────────────────────────────────── */
  portfolio: [
    {
      emoji: '🏢',
      badge: 'Real Estate',
      industry: 'Real Estate',
      title: 'PropVista — Real Estate CRM & Portal',
      services: ['Website Development', 'CRM System', 'Mobile App'],
      result: '340% increase in lead conversions within 6 months',
    },
    {
      emoji: '🎓',
      badge: 'Education',
      industry: 'Education',
      title: 'EduSphere — Learning Management System',
      services: ['Custom Software', 'Mobile App', 'UI/UX Design'],
      result: '50,000+ students onboarded in the first quarter',
    },
    {
      emoji: '🏥',
      badge: 'Healthcare',
      industry: 'Healthcare',
      title: 'MediCore — Patient Management Platform',
      services: ['Software Development', 'Cloud Solutions', 'AI Automation'],
      result: 'Reduced admin time by 65% across 12 clinics',
    },
    {
      emoji: '🛒',
      badge: 'E-Commerce',
      industry: 'Retail',
      title: 'ShopElite — Premium E-Commerce Platform',
      services: ['E-Commerce', 'Mobile App', 'Digital Marketing'],
      result: '$2.4M in revenue in the first year of operation',
    },
    {
      emoji: '💰',
      badge: 'Finance',
      industry: 'Finance',
      title: 'FinTrack — Business Finance Dashboard',
      services: ['Custom Software', 'Data Analytics', 'API Integration'],
      result: 'Real-time reporting for 500+ business accounts',
    },
    {
      emoji: '🤖',
      badge: 'AI Solution',
      industry: 'Multiple Sectors',
      title: 'AutoBot — AI Business Automation Suite',
      services: ['AI Automation', 'Chatbot Development', 'Integration'],
      result: '80% reduction in manual workflows for 30+ businesses',
    },
  ],

  /* ── Testimonials ────────────────────────────────────── */
  testimonials: [
    {
      text: 'Trineeb Tech transformed our entire real estate operations. The CRM system they built has become the backbone of our business. Exceptional quality and professionalism throughout.',
      name: 'Ahmed Al-Rashid',
      company: 'Al-Rashid Properties',
      project: 'CRM & Property Portal',
      initials: 'AR',
    },
    {
      text: 'The e-learning platform Trineeb Tech developed exceeded all expectations. Our student engagement increased by 200% and the mobile app is simply outstanding.',
      name: 'Dr. Fatima Hassan',
      company: 'Bright Future Academy',
      project: 'LMS Platform & Mobile App',
      initials: 'FH',
    },
    {
      text: 'Working with Trineeb Tech was a game-changer. Their AI automation solution eliminated hours of manual work. Highly recommend for any business serious about digital transformation.',
      name: 'Marcus Wellington',
      company: 'Wellington Enterprises',
      project: 'AI & Business Automation',
      initials: 'MW',
    },
    {
      text: 'The e-commerce platform delivered was beyond our expectations — fast, beautiful, and incredibly powerful. Sales increased by 180% in the first three months after launch.',
      name: 'Priya Sharma',
      company: 'LuxeStyle Boutique',
      project: 'E-Commerce Platform',
      initials: 'PS',
    },
    {
      text: "Our hospital management system runs flawlessly. Trineeb Tech's team understood our complex requirements and delivered a solution that genuinely improves patient care.",
      name: 'Dr. Samuel Okafor',
      company: 'MediCore Hospital Group',
      project: 'Healthcare Software',
      initials: 'SO',
    },
    {
      text: 'From the initial consultation to the final launch, the experience was premium. Trineeb Tech are true professionals who deliver on every promise. Absolutely world-class.',
      name: 'Lisa Chen',
      company: 'Chen Global Holdings',
      project: 'Corporate Website & ERP',
      initials: 'LC',
    },
  ],

  /* ── Stats ───────────────────────────────────────────── */
  stats: [
    { icon: 'fa-solid fa-check-circle',  value: 250,  suffix: '+', label: 'Projects Delivered' },
    { icon: 'fa-solid fa-star',          value: 98,   suffix: '%', label: 'Client Satisfaction Rate' },
    { icon: 'fa-solid fa-industry',      value: 15,   suffix: '+', label: 'Industries Served' },
    { icon: 'fa-solid fa-calendar',      value: 8,    suffix: '+', label: 'Years of Experience' },
    { icon: 'fa-solid fa-code',          value: 500,  suffix: '+', label: 'Technology Solutions' },
  ],

};
/* ============================================================
   TRINEEB TECH – SCROLL ANIMATIONS (lightweight AOS)
   ============================================================ */

(function () {
  'use strict';

  let observer;

  function init() {
    const elements = document.querySelectorAll('[data-aos]');
    if (!elements.length) return;

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('aos-animate');
              // Unobserve once animated for performance
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      elements.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show all immediately
      elements.forEach(function (el) {
        el.classList.add('aos-animate');
      });
    }
  }

  /* Re-init after dynamic content is rendered */
  document.addEventListener('DOMContentLoaded', function () {
    // Small delay to allow render.js to finish
    setTimeout(init, 100);
  });

  /* Expose for external calls after dynamic renders */
  window.TrineebAOS = { init: init };
})();
/* ============================================================
   TRINEEB TECH – NAVBAR
   ============================================================ */

(function () {
  const navbar   = document.getElementById('navbar');
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  /* Scroll effect */
  function handleScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* Mobile toggle */
  toggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  /* Close nav on link click */
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

  /* Active link highlight on scroll */
  const sections = document.querySelectorAll('section[id]');
  const links    = navLinks.querySelectorAll('a[href^="#"]');

  function updateActiveLink() {
    let current = '';
    sections.forEach(function (sec) {
      if (window.scrollY >= sec.offsetTop - 120) {
        current = sec.getAttribute('id');
      }
    });

    links.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
})();
/* ============================================================
   TRINEEB TECH – HERO PARTICLES
   ============================================================ */

(function () {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  const PARTICLE_COUNT = 55;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');

    const x        = Math.random() * 100;
    const y        = Math.random() * 100;
    const size     = Math.random() * 2.5 + 1;
    const duration = (Math.random() * 5 + 3).toFixed(1);
    const delay    = (Math.random() * 6).toFixed(2);

    p.style.cssText = `
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      --duration: ${duration}s;
      --delay: ${delay}s;
    `;

    container.appendChild(p);
  }
})();
/* ============================================================
   TRINEEB TECH – RENDER / DOM BUILDERS
   ============================================================ */

/* ── Services ─────────────────────────────────────────── */
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  grid.innerHTML = DATA.services.map((s, i) => `
    <div class="service-card" data-aos="fade-up" data-aos-delay="${(i % 5) * 80}" tabindex="0" role="article">
      <span class="service-icon" aria-hidden="true">${s.icon}</span>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="service-arrow" aria-hidden="true"><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  `).join('');
}

/* ── Industries ───────────────────────────────────────── */
function renderIndustries() {
  const grid = document.getElementById('industriesGrid');
  if (!grid) return;

  const bgColors = [
    'linear-gradient(135deg, #1a2a1a, #2d4a2d)',
    'linear-gradient(135deg, #1a1a2a, #2d2d4a)',
    'linear-gradient(135deg, #2a1a1a, #4a2d2d)',
    'linear-gradient(135deg, #1a2a2a, #2d4a4a)',
    'linear-gradient(135deg, #2a1a2a, #4a2d4a)',
    'linear-gradient(135deg, #2a2a1a, #4a4a2d)',
    'linear-gradient(135deg, #1a1a1a, #3a2d2a)',
    'linear-gradient(135deg, #1a2a20, #2d3a30)',
    'linear-gradient(135deg, #201a2a, #302d3a)',
  ];

  grid.innerHTML = DATA.industries.map((ind, i) => `
    <div class="industry-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}" tabindex="0" role="article">
      <div class="industry-bg" style="background: ${bgColors[i % bgColors.length]}" aria-hidden="true">
        ${ind.emoji}
      </div>
      <div class="industry-overlay" aria-hidden="true"></div>
      <div class="industry-content">
        <div class="industry-tag">${ind.tag}</div>
        <h3>${ind.title}</h3>
        <p>${ind.desc}</p>
      </div>
    </div>
  `).join('');
}

/* ── Solutions ────────────────────────────────────────── */
function renderSolutions() {
  const grid = document.getElementById('solutionsGrid');
  if (!grid) return;
  grid.innerHTML = DATA.solutions.map((sol, i) => `
    <div class="solution-card" data-aos="fade-up" data-aos-delay="${(i % 5) * 80}" tabindex="0" role="article">
      <span class="solution-number" aria-hidden="true">0${i + 1}</span>
      <div class="solution-icon" aria-hidden="true">
        <i class="${sol.icon}"></i>
      </div>
      <h3>${sol.title}</h3>
    </div>
  `).join('');
}

/* ── Process Timeline ─────────────────────────────────── */
function renderProcess() {
  const timeline = document.getElementById('processTimeline');
  if (!timeline) return;
  timeline.innerHTML = DATA.process.map((step, i) => `
    <div class="process-step" data-aos="fade-up" data-aos-delay="${i * 80}" role="listitem">
      <div class="step-number-wrapper">
        <div class="step-number">${step.num}</div>
        <div class="step-icon" aria-hidden="true"><i class="${step.icon}"></i></div>
      </div>
      <h3>${step.title}</h3>
      <p>${step.desc}</p>
    </div>
  `).join('');
}

/* ── Tech Stack ───────────────────────────────────────── */
function renderTechStack() {
  const grid = document.getElementById('stackGrid');
  if (!grid) return;
  grid.innerHTML = DATA.techStack.map(cat => `
    <div class="stack-category" data-aos="fade-up">
      <div class="stack-cat-header">
        <div class="stack-cat-icon" aria-hidden="true"><i class="${cat.icon}"></i></div>
        <span class="stack-cat-label">${cat.label}</span>
      </div>
      <div class="stack-items">
        ${cat.items.map(item => `
          <div class="stack-item" tabindex="0">
            <span class="stack-item-icon" aria-hidden="true">${item.icon}</span>
            <span>${item.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ── Portfolio ────────────────────────────────────────── */
function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;
  grid.innerHTML = DATA.portfolio.map((proj, i) => `
    <div class="portfolio-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}" tabindex="0" role="article">
      <div class="portfolio-image">
        <div class="portfolio-image-emoji" aria-hidden="true">${proj.emoji}</div>
        <div class="portfolio-image-overlay" aria-hidden="true"></div>
        <span class="portfolio-badge">${proj.badge}</span>
        <div class="portfolio-view-btn" aria-hidden="true">View Case Study →</div>
      </div>
      <div class="portfolio-body">
        <div class="portfolio-industry">${proj.industry}</div>
        <h3>${proj.title}</h3>
        <div class="portfolio-services">
          ${proj.services.map(s => `<span class="portfolio-service-tag">${s}</span>`).join('')}
        </div>
        <div class="portfolio-result">
          <i class="fa-solid fa-chart-line"></i>
          <span>${proj.result}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ── Stats ────────────────────────────────────────────── */
function renderStats() {
  const grid = document.getElementById('statsGrid');
  if (!grid) return;
  grid.innerHTML = DATA.stats.map((stat, i) => `
    <div class="stat-card" data-aos="fade-up" data-aos-delay="${i * 80}" role="figure">
      <div class="stat-icon" aria-hidden="true"><i class="${stat.icon}"></i></div>
      <div class="stat-value" data-target="${stat.value}" data-suffix="${stat.suffix}">
        0${stat.suffix}
      </div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');
}

/* ── Init All Renders ─────────────────────────────────── */
function initRenders() {
  renderServices();
  renderIndustries();
  renderSolutions();
  renderProcess();
  renderTechStack();
  renderPortfolio();
  renderStats();
}

document.addEventListener('DOMContentLoaded', initRenders);
/* ============================================================
   TRINEEB TECH – ANIMATED STAT COUNTERS
   ============================================================ */

(function () {
  'use strict';

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateCounter(el) {
    const target   = parseInt(el.getAttribute('data-target'), 10);
    const suffix   = el.getAttribute('data-suffix') || '';
    const duration = 2200; // ms
    const start    = performance.now();

    function update(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedVal = Math.round(easeOut(progress) * target);

      el.textContent = easedVal + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  function observeStats() {
    const statValues = document.querySelectorAll('.stat-value[data-target]');
    if (!statValues.length) return;

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );

      statValues.forEach(function (el) {
        io.observe(el);
      });
    } else {
      statValues.forEach(animateCounter);
    }
  }

  /* Stats are rendered dynamically, wait for render.js */
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(observeStats, 200);
  });
})();
/* ============================================================
   TRINEEB TECH – TESTIMONIALS SLIDER
   ============================================================ */

(function () {
  'use strict';

  let currentIndex = 0;
  let autoInterval;
  let itemsPerSlide = 3;

  function getItemsPerSlide() {
    if (window.innerWidth <= 560) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  function renderTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    const dotsContainer = document.getElementById('testimonialDots');
    if (!track || !dotsContainer) return;

    track.innerHTML = DATA.testimonials.map(t => `
      <div class="testimonial-card" role="article">
        <div class="testimonial-stars" aria-label="5 star rating">
          ${[1,2,3,4,5].map(() => '<i class="fa-solid fa-star" aria-hidden="true"></i>').join('')}
        </div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar" aria-hidden="true">${t.initials}</div>
          <div class="testimonial-author-info">
            <h4>${t.name}</h4>
            <p>${t.company}</p>
            <span class="testimonial-project-type">${t.project}</span>
          </div>
        </div>
      </div>
    `).join('');

    renderDots(dotsContainer);
  }

  function renderDots(container) {
    itemsPerSlide = getItemsPerSlide();
    const totalSlides = Math.ceil(DATA.testimonials.length / itemsPerSlide);

    container.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.classList.add('t-dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', function () {
        goTo(i);
      });
      container.appendChild(dot);
    }
  }

  function goTo(index) {
    itemsPerSlide = getItemsPerSlide();
    const totalSlides = Math.ceil(DATA.testimonials.length / itemsPerSlide);
    currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
    updateSlider();
  }

  function updateSlider() {
    const track = document.getElementById('testimonialsTrack');
    if (!track) return;

    itemsPerSlide = getItemsPerSlide();
    const cards     = track.querySelectorAll('.testimonial-card');
    const cardWidth = cards[0] ? cards[0].offsetWidth + 24 : 0; // gap = 24px
    const offset    = currentIndex * itemsPerSlide * cardWidth;

    track.style.transform = `translateX(-${offset}px)`;

    // Update dots
    const dots = document.querySelectorAll('.t-dot');
    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function autoPlay() {
    autoInterval = setInterval(function () {
      itemsPerSlide = getItemsPerSlide();
      const totalSlides = Math.ceil(DATA.testimonials.length / itemsPerSlide);
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }, 4500);
  }

  function stopAutoPlay() {
    clearInterval(autoInterval);
  }

  function initTestimonials() {
    renderTestimonials();
    autoPlay();

    const wrapper = document.querySelector('.testimonials-track-wrapper');
    if (wrapper) {
      wrapper.addEventListener('mouseenter', stopAutoPlay);
      wrapper.addEventListener('mouseleave', autoPlay);

      // Touch swipe support
      let touchStartX = 0;
      wrapper.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].clientX;
        stopAutoPlay();
      }, { passive: true });

      wrapper.addEventListener('touchend', function (e) {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          itemsPerSlide = getItemsPerSlide();
          const totalSlides = Math.ceil(DATA.testimonials.length / itemsPerSlide);
          if (diff > 0) {
            currentIndex = Math.min(currentIndex + 1, totalSlides - 1);
          } else {
            currentIndex = Math.max(currentIndex - 1, 0);
          }
          updateSlider();
        }
        autoPlay();
      }, { passive: true });
    }

    // Rebuild on resize
    let resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        currentIndex = 0;
        const dotsContainer = document.getElementById('testimonialDots');
        if (dotsContainer) renderDots(dotsContainer);
        updateSlider();
      }, 250);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(initTestimonials, 150);
  });
})();
/* ============================================================
   TRINEEB TECH – FORM HANDLING
   ============================================================ */

(function () {
  'use strict';

  /* Helper: show inline feedback */
  function showFeedback(form, message, type) {
    // Remove existing
    const existing = form.querySelector('.form-feedback');
    if (existing) existing.remove();

    const el = document.createElement('div');
    el.classList.add('form-feedback', 'form-feedback--' + type);
    el.setAttribute('role', 'alert');
    el.textContent = message;

    el.style.cssText = `
      padding: 0.75rem 1rem;
      border-radius: 10px;
      font-size: 0.875rem;
      font-weight: 500;
      margin-top: 0.5rem;
      background: ${type === 'success'
        ? 'linear-gradient(135deg,rgba(184,164,122,0.15),rgba(184,164,122,0.08))'
        : 'rgba(220,53,69,0.1)'};
      border: 1px solid ${type === 'success' ? 'rgba(184,164,122,0.35)' : 'rgba(220,53,69,0.25)'};
      color: ${type === 'success' ? '#8a7a58' : '#c0392b'};
    `;

    form.appendChild(el);

    // Auto-remove after 5s
    setTimeout(function () {
      el.remove();
    }, 5000);
  }

  /* Simple email validator */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* Generic submit handler */
  function handleFormSubmit(form, successMsg) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && !isValidEmail(emailInput.value)) {
        showFeedback(form, 'Please enter a valid email address.', 'error');
        emailInput.focus();
        return;
      }

      // Simulate async submission
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      setTimeout(function () {
        showFeedback(form, successMsg, 'success');
        form.reset();
        btn.textContent = originalText;
        btn.disabled = false;
      }, 1200);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const heroForm    = document.getElementById('heroForm');
    const consultForm = document.getElementById('consultForm');

    if (heroForm) {
      handleFormSubmit(
        heroForm,
        '✓ Thank you! Our team will contact you within 24 hours.'
      );
    }

    if (consultForm) {
      handleFormSubmit(
        consultForm,
        '✓ Consultation scheduled! We\'ll reach out within 24 hours to confirm your session.'
      );
    }
  });
})();
/* ============================================================
   TRINEEB TECH – MAIN / INIT
   ============================================================ */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ── Smooth scroll for anchor links ─────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const navHeight = document.getElementById('navbar').offsetHeight;
        const top       = target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });

    /* ── Keyboard accessibility for cards ───────────────── */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        const el = document.activeElement;
        if (el && el.matches('.service-card, .solution-card, .portfolio-card, .industry-card')) {
          e.preventDefault();
          el.click();
        }
      }
    });

    /* ── Sticky WhatsApp CTA ─────────────────────────────── */
    const wa = document.createElement('a');
    wa.href          = 'https://wa.me/1234567890?text=Hello%20Trineeb%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20project.';
    wa.target        = '_blank';
    wa.rel           = 'noopener noreferrer';
    wa.setAttribute('aria-label', 'Chat on WhatsApp');
    wa.innerHTML     = '<i class="fa-brands fa-whatsapp"></i>';
    wa.style.cssText = `
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 999;
      width: 56px;
      height: 56px;
      background: linear-gradient(135deg, #25d366, #128c7e);
      color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      box-shadow: 0 6px 24px rgba(37,211,102,0.45);
      transition: all 0.3s ease;
      text-decoration: none;
    `;

    wa.addEventListener('mouseenter', function () {
      wa.style.transform   = 'scale(1.12) translateY(-3px)';
      wa.style.boxShadow   = '0 10px 32px rgba(37,211,102,0.6)';
    });

    wa.addEventListener('mouseleave', function () {
      wa.style.transform   = 'scale(1) translateY(0)';
      wa.style.boxShadow   = '0 6px 24px rgba(37,211,102,0.45)';
    });

    document.body.appendChild(wa);

    /* ── Scroll-to-top button ────────────────────────────── */
    const scrollBtn = document.createElement('button');
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.innerHTML     = '<i class="fa-solid fa-arrow-up"></i>';
    scrollBtn.style.cssText = `
      position: fixed;
      bottom: 96px;
      right: 28px;
      z-index: 999;
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, #b8a47a, #8a7a58);
      color: #fff;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      box-shadow: 0 4px 16px rgba(184,164,122,0.4);
      cursor: pointer;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
    `;

    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        scrollBtn.style.opacity        = '1';
        scrollBtn.style.pointerEvents  = 'all';
      } else {
        scrollBtn.style.opacity        = '0';
        scrollBtn.style.pointerEvents  = 'none';
      }
    }, { passive: true });

    document.body.appendChild(scrollBtn);

    /* ── Page fade-in ─────────────────────────────────────── */
    document.body.style.opacity    = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.body.style.opacity = '1';
      });
    });

  });
})();
