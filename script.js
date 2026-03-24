/* ── Index page specific scripts ─────────────────────────────────── */
(function () {
  const pStyle = document.createElement('style');
  pStyle.textContent = `
    .p-step.doing { animation: pulse-border 2s ease-in-out infinite; }
    @keyframes pulse-border {
      0%, 100% { box-shadow: 0 0 0 0 rgba(14,165,233,0.3); }
      50%       { box-shadow: 0 0 0 6px rgba(14,165,233,0); }
    }
  `;
  document.head.appendChild(pStyle);

  function normalizeEmbedUrl(rawUrl) {
    if (!rawUrl) return '';
    try {
      const url = new URL(rawUrl, window.location.href);
      const host = url.hostname.toLowerCase();
      if (host === 'youtube.com' || host === 'www.youtube.com') {
        const id = url.searchParams.get('v');
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&rel=0` : '';
      }
      if (host === 'youtu.be') {
        const id = url.pathname.replace('/', '').trim();
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&rel=0` : '';
      }
      if (host === 'vimeo.com' || host === 'www.vimeo.com' || host === 'player.vimeo.com') {
        const id = url.pathname.split('/').filter(Boolean).pop();
        return id ? `https://player.vimeo.com/video/${id}?autoplay=1&muted=1&loop=1` : '';
      }
      return '';
    } catch (_err) {
      return '';
    }
  }

  function initPipelineMedia() {
    const shell = document.querySelector('.pipeline-video-shell');
    if (!shell) return;

    const video = document.getElementById('pipelineDemoVideo');
    const source = document.getElementById('pipelineDemoSource');
    const embed = document.getElementById('pipelineDemoEmbed');
    const fallback = document.getElementById('pipelineVideoFallback');
    const note = document.getElementById('pipelineVideoNote');

    const rawVideoUrl = (shell.getAttribute('data-video-url') || '').trim();
    const rawEmbedUrl = (shell.getAttribute('data-embed-url') || '').trim();
    const embedUrl = normalizeEmbedUrl(rawEmbedUrl);

    if (embedUrl && embed) {
      embed.src = embedUrl;
      embed.style.display = 'block';
      if (video) video.style.display = 'none';
      if (fallback) fallback.style.display = 'none';
      if (note) note.textContent = 'Playing embedded walkthrough video from your shared link.';
      return;
    }

    if (!video || !source) return;
    if (rawVideoUrl) source.src = rawVideoUrl;

    video.load();
    const showFallback = () => {
      if (fallback) fallback.style.display = 'block';
      if (note) note.textContent = 'Video file not found yet. Add your MP4 or paste your link in data-embed-url to show your animated walkthrough.';
    };

    video.addEventListener('error', showFallback, { once: true });
    video.addEventListener('stalled', showFallback, { once: true });
    video.addEventListener('loadeddata', () => {
      if (fallback) fallback.style.display = 'none';
      video.play().catch(() => {});
    }, { once: true });
  }

  function initSuiteMedia() {
    const mediaCards = Array.from(document.querySelectorAll('.suite-media'));
    if (!mediaCards.length) return;

    mediaCards.forEach((card) => {
      const video = card.querySelector('.suite-video');
      const source = video ? video.querySelector('source') : null;
      const configuredUrl = (card.getAttribute('data-video-url') || '').trim();

      if (!video || !source) {
        card.classList.add('is-fallback');
        return;
      }

      if (configuredUrl) source.src = configuredUrl;
      video.load();

      const showFallback = () => card.classList.add('is-fallback');
      const hideFallback = () => card.classList.remove('is-fallback');

      video.addEventListener('error', showFallback, { once: true });
      video.addEventListener('stalled', showFallback, { once: true });
      video.addEventListener('loadeddata', () => {
        hideFallback();
        video.play().catch(() => {});
      }, { once: true });
    });
  }

  function initSuiteRotator() {
    const tabs = Array.from(document.querySelectorAll('.suite-tab'));
    const panels = Array.from(document.querySelectorAll('.suite-section[data-suite-id]'));
    if (!tabs.length || !panels.length) return;

    let activeIndex = Math.max(0, tabs.findIndex((t) => t.classList.contains('is-active')));
    if (activeIndex < 0) activeIndex = 0;
    let timer = null;

    function setActive(nextIndex) {
      activeIndex = ((nextIndex % tabs.length) + tabs.length) % tabs.length;

      tabs.forEach((tab, idx) => {
        const isActive = idx === activeIndex;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      panels.forEach((panel, idx) => {
        const isActive = idx === activeIndex;
        panel.classList.toggle('is-active', isActive);
        panel.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      });
    }

    function startAutoRotate() {
      stopAutoRotate();
      timer = window.setInterval(() => setActive(activeIndex + 1), 6000);
    }

    function stopAutoRotate() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        setActive(idx);
        startAutoRotate();
      });
      tab.addEventListener('focus', stopAutoRotate);
      tab.addEventListener('blur', startAutoRotate);
    });

    const flow = document.querySelector('.suite-flow');
    if (flow) {
      flow.addEventListener('mouseenter', stopAutoRotate);
      flow.addEventListener('mouseleave', startAutoRotate);
    }

    setActive(activeIndex);
    startAutoRotate();
  }

  function initSuiteStickyNav() {
    const links = Array.from(document.querySelectorAll('.suite-nav-link'));
    const sections = links
      .map((link) => {
        const id = (link.getAttribute('href') || '').replace('#', '');
        return document.getElementById(id);
      })
      .filter(Boolean);
    if (!links.length || !sections.length) return;

    function activateById(id) {
      links.forEach((link) => {
        const active = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('is-active', active);
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activateById(entry.target.id);
      });
    }, { rootMargin: '-20% 0px -65% 0px', threshold: 0.05 });

    sections.forEach((section) => observer.observe(section));
  }

  function initCustomerCarousel() {
    const track = document.getElementById('customerTrack');
    const prev = document.getElementById('customerPrev');
    const next = document.getElementById('customerNext');
    const dotsWrap = document.getElementById('customerDots');
    if (!track || !dotsWrap) return;

    const slides = Array.from(track.querySelectorAll('.customer-slide'));
    if (!slides.length) return;
    let index = 0;
    let timer = null;

    dotsWrap.innerHTML = slides.map((_, i) =>
      `<button class="customer-dot${i === 0 ? ' is-active' : ''}" data-slide="${i}" aria-label="Go to story ${i + 1}"></button>`
    ).join('');
    const dots = Array.from(dotsWrap.querySelectorAll('.customer-dot'));

    function render() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    }

    function go(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      render();
    }

    function startAuto() {
      stopAuto();
      timer = window.setInterval(() => go(index + 1), 6000);
    }

    function stopAuto() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    if (prev) prev.addEventListener('click', () => { go(index - 1); startAuto(); });
    if (next) next.addEventListener('click', () => { go(index + 1); startAuto(); });
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const i = Number(dot.getAttribute('data-slide') || 0);
        go(i);
        startAuto();
      });
    });

    const root = document.getElementById('customerCarousel');
    if (root) {
      root.addEventListener('mouseenter', stopAuto);
      root.addEventListener('mouseleave', startAuto);
    }

    render();
    startAuto();
  }

  function initViewportVideoPlayback() {
    const videos = Array.from(document.querySelectorAll('.suite-video, #pipelineDemoVideo'));
    if (!videos.length) return;

    const visibility = new Map();

    function syncPlayback(video) {
      const isVisible = visibility.get(video) === true;
      if (document.hidden || !isVisible) {
        if (!video.paused) video.pause();
        return;
      }
      video.play().catch(() => {});
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        visibility.set(video, entry.isIntersecting);
        syncPlayback(video);
      });
    }, { threshold: 0.35 });

    videos.forEach((video) => {
      visibility.set(video, false);
      observer.observe(video);
    });

    document.addEventListener('visibilitychange', () => {
      videos.forEach(syncPlayback);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initPipelineMedia();
      initSuiteMedia();
      initSuiteRotator();
      initSuiteStickyNav();
      initCustomerCarousel();
      initViewportVideoPlayback();
    });
  } else {
    initPipelineMedia();
    initSuiteMedia();
    initSuiteRotator();
    initSuiteStickyNav();
    initCustomerCarousel();
    initViewportVideoPlayback();
  }
})();
