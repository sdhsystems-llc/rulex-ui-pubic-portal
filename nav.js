/* ── Rule-X Shared Navigation Component ──────────────────────────── */
(function () {
  const FAVICON = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='url(%23g)'/><defs><linearGradient id='g' x1='0' y1='0' x2='100%25' y2='100%25'><stop offset='0' stop-color='%230EA5E9'/><stop offset='1' stop-color='%237C3AED'/></linearGradient></defs><text y='.9em' font-size='72' text-anchor='middle' x='50' font-family='sans-serif' font-weight='800' fill='white'>X</text></svg>`;

  const CHEVRON = `<svg class="nav-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const NAV_HTML = `
  <div class="announcement-bar" id="announcementBar">
    🚀 Rule-X v2.0 is here — Temporal Rules, CEP Windows &amp; AI Builder.
    <a href="pricing.html">Request early access →</a>
    <button class="announcement-close" id="announcementClose" aria-label="Dismiss">✕</button>
  </div>

  <nav id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <div class="nav-logo-icon">X</div>
        Rule&#8209;X
      </a>

      <ul class="nav-links" id="navLinks">

        <!-- Products -->
        <li class="has-dropdown">
          <a href="features.html" class="nav-link-btn">Products ${CHEVRON}</a>
          <div class="dropdown-panel">
            <div class="dropdown-section-label">Platform</div>
            <div class="dropdown-grid">
              <a href="features.html" class="dropdown-item">
                <div class="dropdown-item-icon" style="background:rgba(14,165,233,0.1);border-color:rgba(14,165,233,0.2);">🎨</div>
                <div>
                  <div class="dropdown-item-title">Visual Block Builder</div>
                  <div class="dropdown-item-desc">Drag-and-drop rule authoring</div>
                </div>
              </a>
              <a href="features.html#ai" class="dropdown-item">
                <div class="dropdown-item-icon" style="background:rgba(124,58,237,0.1);border-color:rgba(124,58,237,0.2);">🤖</div>
                <div>
                  <div class="dropdown-item-title">AI Rule Generation</div>
                  <div class="dropdown-item-desc">Natural language to rules</div>
                </div>
              </a>
              <a href="block-types.html" class="dropdown-item">
                <div class="dropdown-item-icon" style="background:rgba(52,211,153,0.1);border-color:rgba(52,211,153,0.2);">🧩</div>
                <div>
                  <div class="dropdown-item-title">Block Types</div>
                  <div class="dropdown-item-desc">13 block types for every pattern</div>
                </div>
              </a>
              <a href="deployments.html" class="dropdown-item">
                <div class="dropdown-item-icon" style="background:rgba(251,146,60,0.1);border-color:rgba(251,146,60,0.2);">🚀</div>
                <div>
                  <div class="dropdown-item-title">Deployment Pipeline</div>
                  <div class="dropdown-item-desc">CI/CD for business rules</div>
                </div>
              </a>
              <a href="features.html#tables" class="dropdown-item">
                <div class="dropdown-item-icon" style="background:rgba(20,184,166,0.1);border-color:rgba(20,184,166,0.2);">📋</div>
                <div>
                  <div class="dropdown-item-title">Decision Tables</div>
                  <div class="dropdown-item-desc">DMN-compliant spreadsheet rules</div>
                </div>
              </a>
              <a href="features.html#collab" class="dropdown-item">
                <div class="dropdown-item-icon" style="background:rgba(124,58,237,0.1);border-color:rgba(124,58,237,0.2);">👥</div>
                <div>
                  <div class="dropdown-item-title">Collaboration</div>
                  <div class="dropdown-item-desc">Real-time team rule authoring</div>
                </div>
              </a>
            </div>
          </div>
        </li>

        <li><a href="customers.html">Customers</a></li>
        <li><a href="open-source.html">Open Source</a></li>
        <li><a href="pricing.html">Pricing</a></li>

        <!-- Developer -->
        <li class="has-dropdown">
          <a href="docs.html" class="nav-link-btn">Developer ${CHEVRON}</a>
          <div class="dropdown-panel dropdown-panel-wide">
            <div class="dropdown-columns">
              <div>
                <div class="dropdown-section-label">Learn</div>
                <a href="docs.html" class="dropdown-item-simple"><span>📄</span> Documentation</a>
                <a href="platform.html" class="dropdown-item-simple"><span>🧭</span> Platform Docs</a>
                <a href="code-repository.html" class="dropdown-item-simple"><span>🗂️</span> Code Repository</a>
                <a href="api-reference.html" class="dropdown-item-simple"><span>🔌</span> API Reference Docs</a>
                <a href="docs.html#developer-hub-overview" class="dropdown-item-simple"><span>💻</span> Developer Hub</a>
                <a href="roadmap.html" class="dropdown-item-simple"><span>🗺️</span> Roadmap</a>
                <a href="release-notes.html" class="dropdown-item-simple"><span>📝</span> Release Notes</a>
                <a href="university.html" class="dropdown-item-simple"><span>🎓</span> University</a>
                <a href="open-source.html" class="dropdown-item-simple"><span>♥</span> Commitment to Open Source</a>
              </div>
              <div>
                <div class="dropdown-section-label">Community</div>
                <a href="community.html#blog" class="dropdown-item-simple"><span>✍️</span> Engineering Blog</a>
                <a href="community.html" class="dropdown-item-simple"><span>💬</span> Community</a>
                <a href="community.html#training" class="dropdown-item-simple"><span>🎓</span> Training</a>
                <a href="community.html#certs" class="dropdown-item-simple"><span>🏆</span> Certifications</a>
                <a href="docs.html" class="dropdown-item-simple"><span>→</span> See All Developer Resources</a>
              </div>
            </div>
          </div>
        </li>

        <!-- Resources -->
        <li class="has-dropdown">
          <a href="#" class="nav-link-btn">Resources ${CHEVRON}</a>
          <div class="dropdown-panel dropdown-panel-wide">
            <div class="dropdown-columns">
              <div>
                <div class="dropdown-section-label">Resources</div>
                <a href="community.html#ebooks" class="dropdown-item-simple"><span>📚</span> Ebooks</a>
                <a href="community.html#blog" class="dropdown-item-simple"><span>📝</span> Blog</a>
                <a href="customers.html#cases" class="dropdown-item-simple"><span>🏢</span> Case Studies</a>
                <a href="community.html#compare" class="dropdown-item-simple"><span>⚖️</span> Comparison Guide</a>
                <a href="community.html#academy" class="dropdown-item-simple"><span>🎓</span> Rule Engine Academy</a>
              </div>
              <div>
                <div class="dropdown-section-label">Support &amp; Events</div>
                <a href="community.html#support" class="dropdown-item-simple"><span>🛟</span> Rule-X Support</a>
                <a href="community.html#services" class="dropdown-item-simple"><span>🤝</span> Professional Services</a>
                <a href="community.html#webinars" class="dropdown-item-simple"><span>🎥</span> Webinars</a>
                <a href="community.html#research" class="dropdown-item-simple"><span>📊</span> Research Reports</a>
                <a href="community.html#events" class="dropdown-item-simple"><span>📅</span> Events</a>
              </div>
            </div>
            <div class="dropdown-featured">
              <div class="dropdown-featured-label">Featured</div>
              <a href="community.html#report" class="dropdown-featured-item">
                <div class="dropdown-featured-icon">📊</div>
                <div>
                  <div class="dropdown-featured-title">The State of AI-Native Rule Engines Report 2026</div>
                  <div class="dropdown-featured-desc">Download the latest research on enterprise rule automation trends.</div>
                </div>
              </a>
            </div>
          </div>
        </li>

      </ul>

      <div class="nav-actions">
        <a href="contact.html" class="btn btn-ghost">Contact us</a>
        <a href="pricing.html" class="btn btn-primary">Get Started →</a>
      </div>

      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <div class="mobile-menu" id="mobileMenu">
    <div class="mobile-menu-inner">
      <div class="mobile-section-label">Product</div>
      <a href="features.html">Features</a>
      <a href="block-types.html">Block Types</a>
      <a href="deployments.html">Deployments</a>
      <a href="use-cases.html">Use Cases</a>
      <div class="mobile-section-label">Company</div>
      <a href="customers.html">Customers</a>
      <a href="open-source.html">Open Source</a>
      <a href="pricing.html">Pricing</a>
      <div class="mobile-section-label">Developer</div>
      <a href="docs.html">Documentation</a>
      <a href="platform.html">Platform Docs</a>
      <a href="code-repository.html">Code Repository</a>
      <a href="api-reference.html">API Reference</a>
      <a href="roadmap.html">Roadmap</a>
      <a href="release-notes.html">Release Notes</a>
      <a href="university.html">University</a>
      <a href="community.html">Community</a>
      <a href="community.html#training">Training</a>
      <a href="community.html#certs">Certifications</a>
      <div class="mobile-section-label">Resources</div>
      <a href="community.html#blog">Blog</a>
      <a href="community.html#ebooks">Ebooks</a>
      <a href="customers.html#cases">Case Studies</a>
      <a href="community.html#compare">Comparison Guide</a>
      <a href="community.html#academy">Rule Engine Academy</a>
      <a href="community.html#support">Rule-X Support</a>
      <a href="community.html#services">Professional Services</a>
      <a href="community.html#webinars">Webinars</a>
      <a href="community.html#research">Research Reports</a>
      <a href="community.html#events">Events</a>
      <div class="mobile-menu-actions">
        <a href="contact.html" class="btn btn-outline" style="width:100%;justify-content:center;">Contact us</a>
        <a href="pricing.html" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:10px;">Get Started →</a>
      </div>
    </div>
  </div>
  `;

  const FOOTER_HTML = `
  <footer>
    <div class="container">
      <div class="footer-grid-new">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo" style="display:inline-flex;">
            <div class="nav-logo-icon">X</div>
            Rule&#8209;X
          </a>
          <p>The AI-powered rule engine platform for teams that need intelligent, auditable, and collaborative decision automation at scale.</p>
          <div class="footer-social">
            <a href="#" class="social-btn" title="LinkedIn">in</a>
            <a href="#" class="social-btn" title="Twitter">𝕏</a>
            <a href="#" class="social-btn" title="GitHub">⌥</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Product</h4>
          <ul>
            <li><a href="features.html">Features</a></li>
            <li><a href="block-types.html">Block Types</a></li>
            <li><a href="deployments.html">Deployments</a></li>
            <li><a href="use-cases.html">Use Cases</a></li>
            <li><a href="pricing.html">Pricing</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Developer</h4>
          <ul>
            <li><a href="docs.html">Documentation</a></li>
            <li><a href="platform.html">Platform Docs</a></li>
            <li><a href="code-repository.html">Code Repository</a></li>
            <li><a href="api-reference.html">API Reference</a></li>
            <li><a href="roadmap.html">Roadmap</a></li>
            <li><a href="release-notes.html">Release Notes</a></li>
            <li><a href="university.html">University</a></li>
            <li><a href="docs.html">Developer Hub</a></li>
            <li><a href="community.html#blog">Engineering Blog</a></li>
            <li><a href="open-source.html">Open Source</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="community.html#blog">Blog</a></li>
            <li><a href="community.html#ebooks">Ebooks</a></li>
            <li><a href="customers.html#cases">Case Studies</a></li>
            <li><a href="community.html#compare">Comparison Guide</a></li>
            <li><a href="community.html#support">Rule-X Support</a></li>
            <li><a href="community.html#webinars">Webinars</a></li>
            <li><a href="community.html#academy">Academy</a></li>
            <li><a href="community.html#research">Research Reports</a></li>
            <li><a href="community.html#events">Events</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="customers.html">Customers</a></li>
            <li><a href="community.html">Community</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-left">© 2026 Rule-X. All rights reserved.</div>
        <div class="footer-bottom-right">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
  `;

  const QUICK_NAV_ITEMS = [
    { title: 'Home', href: 'index.html' },
    { title: 'Features', href: 'features.html' },
    { title: 'Block Types', href: 'block-types.html' },
    { title: 'Deployments', href: 'deployments.html' },
    { title: 'Use Cases', href: 'use-cases.html' },
    { title: 'Documentation', href: 'docs.html' },
    { title: 'Platform Docs', href: 'platform.html' },
    { title: 'Code Repository Docs', href: 'code-repository.html' },
    { title: 'API Reference', href: 'api-reference.html' },
    { title: 'Roadmap', href: 'roadmap.html' },
    { title: 'Release Notes', href: 'release-notes.html' },
    { title: 'University', href: 'university.html' },
    { title: 'Community', href: 'community.html' },
    { title: 'Customers', href: 'customers.html' },
    { title: 'Open Source', href: 'open-source.html' },
    { title: 'Pricing', href: 'pricing.html' },
    { title: 'Contact', href: 'contact.html' }
  ];

  const GLOBAL_WIDGETS_HTML = `
  <div id="pageProgress" class="page-progress"><span id="pageProgressBar"></span></div>

  <button id="quickNavFab" class="quick-fab" aria-label="Open quick navigation">
    ⚡ Quick Nav
  </button>

  <button id="backTopBtn" class="back-top-btn" aria-label="Back to top">↑</button>

  <div id="quickNavModal" class="quick-nav-modal" aria-hidden="true">
    <div class="quick-nav-panel" role="dialog" aria-modal="true" aria-label="Quick navigation">
      <div class="quick-nav-head">
        <div class="quick-nav-title">Navigate Rule-X</div>
        <button id="quickNavClose" class="quick-nav-close" aria-label="Close">✕</button>
      </div>
      <input id="quickNavInput" class="quick-nav-input" type="text" placeholder="Search pages (Ctrl/Cmd+K)" />
      <div id="quickNavList" class="quick-nav-list"></div>
      <div class="quick-nav-help">Tip: press <kbd>Ctrl</kbd>+<kbd>K</kbd> (or <kbd>⌘</kbd>+<kbd>K</kbd>) from any page.</div>
    </div>
  </div>
  `;

  function initNav() {
    const annBar   = document.getElementById('announcementBar');
    const closeBtn = document.getElementById('announcementClose');
    const navbar   = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobileMenu');

    /* Dismiss announcement bar */
    if (sessionStorage.getItem('ann-dismissed')) {
      if (annBar) annBar.style.display = 'none';
      if (navbar) navbar.style.top = '0';
      if (mobileMenu) mobileMenu.style.top = '64px';
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        annBar.style.display = 'none';
        navbar.style.top = '0';
        if (mobileMenu) mobileMenu.style.top = '64px';
        sessionStorage.setItem('ann-dismissed', '1');
      });
    }

    /* Hamburger */
    const hamburger = document.getElementById('hamburger');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('open');
      });
      document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
          mobileMenu.classList.remove('open');
          hamburger.classList.remove('open');
        }
      });
    }

    /* Navbar scroll shadow */
    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.style.boxShadow = window.scrollY > 20
          ? '0 4px 32px rgba(0,0,0,0.4)' : 'none';
      }, { passive: true });
    }

    /* Dropdown hover */
    document.querySelectorAll('.has-dropdown').forEach(item => {
      let timer;
      item.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        document.querySelectorAll('.has-dropdown').forEach(other => {
          if (other !== item) other.classList.remove('dropdown-open');
        });
        item.classList.add('dropdown-open');
      });
      item.addEventListener('mouseleave', () => {
        timer = setTimeout(() => item.classList.remove('dropdown-open'), 100);
      });
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.has-dropdown')) {
        document.querySelectorAll('.has-dropdown').forEach(d => d.classList.remove('dropdown-open'));
      }
    });

    /* Active link highlight */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#navLinks a').forEach(link => {
      const href = (link.getAttribute('href') || '').split('#')[0];
      if (href && href === currentPage) link.classList.add('nav-active');
    });

    /* Smooth scroll for in-page anchor links */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = annBar && annBar.style.display !== 'none' ? 104 : 64;
          window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
        }
      });
    });

    /* FAQ accordion (if present) */
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        item.classList.toggle('open');
      });
    });
  }

  function initGlobalExperience() {
    const progressBar = document.getElementById('pageProgressBar');
    const backTopBtn = document.getElementById('backTopBtn');
    const quickFab = document.getElementById('quickNavFab');
    const quickModal = document.getElementById('quickNavModal');
    const quickClose = document.getElementById('quickNavClose');
    const quickInput = document.getElementById('quickNavInput');
    const quickList = document.getElementById('quickNavList');

    function updateProgress() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const pct = Math.max(0, Math.min(100, (scrollTop / maxScroll) * 100));
      if (progressBar) progressBar.style.width = `${pct}%`;
      if (backTopBtn) backTopBtn.classList.toggle('show', scrollTop > 420);
    }

    function renderQuickList(query = '') {
      if (!quickList) return;
      const q = query.toLowerCase().trim();
      const items = QUICK_NAV_ITEMS.filter(item => !q || item.title.toLowerCase().includes(q));
      quickList.innerHTML = items.map(item => `
        <a class="quick-nav-item" href="${item.href}">
          <span>${item.title}</span>
          <small>${item.href}</small>
        </a>
      `).join('') || `<div class="quick-nav-empty">No page match found.</div>`;
    }

    function openQuickNav() {
      if (!quickModal) return;
      quickModal.classList.add('open');
      quickModal.setAttribute('aria-hidden', 'false');
      renderQuickList('');
      if (quickInput) {
        quickInput.value = '';
        setTimeout(() => quickInput.focus(), 10);
      }
    }

    function closeQuickNav() {
      if (!quickModal) return;
      quickModal.classList.remove('open');
      quickModal.setAttribute('aria-hidden', 'true');
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    if (backTopBtn) {
      backTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    if (quickFab) quickFab.addEventListener('click', openQuickNav);
    if (quickClose) quickClose.addEventListener('click', closeQuickNav);
    if (quickInput) quickInput.addEventListener('input', () => renderQuickList(quickInput.value));

    if (quickModal) {
      quickModal.addEventListener('click', (e) => {
        if (e.target === quickModal) closeQuickNav();
      });
    }

    document.addEventListener('keydown', (e) => {
      const isCmdK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k';
      if (isCmdK) {
        e.preventDefault();
        if (quickModal && quickModal.classList.contains('open')) {
          closeQuickNav();
        } else {
          openQuickNav();
        }
      }
      if (e.key === 'Escape' && quickModal && quickModal.classList.contains('open')) {
        closeQuickNav();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    document.body.insertAdjacentHTML('beforeend', GLOBAL_WIDGETS_HTML);
    initNav();
    initGlobalExperience();

    /* Fade-in observer */
    const fadeStyle = document.createElement('style');
    fadeStyle.textContent = `
      .fade-in { opacity:0; transform:translateY(20px); transition:opacity 0.55s ease, transform 0.55s ease; }
      .fade-in.visible { opacity:1; transform:translateY(0); }
    `;
    document.head.appendChild(fadeStyle);

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll(
      '.feature-card,.use-case-card,.block-pill,.step,.testimonial-card,.pipeline-visual,.pricing-card,.case-study-card,.oss-card,.cert-card,.blog-card,.community-channel,.docs-qs-card,.stat-item'
    ).forEach((el, i) => {
      el.classList.add('fade-in');
      el.style.transitionDelay = `${(i % 5) * 60}ms`;
      obs.observe(el);
    });
  });
})();
