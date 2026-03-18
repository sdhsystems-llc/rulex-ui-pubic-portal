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
      if (url.hostname.includes('youtube.com')) {
        const id = url.searchParams.get('v');
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&rel=0` : rawUrl;
      }
      if (url.hostname.includes('youtu.be')) {
        const id = url.pathname.replace('/', '').trim();
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&rel=0` : rawUrl;
      }
      if (url.hostname.includes('vimeo.com')) {
        const id = url.pathname.split('/').filter(Boolean).pop();
        return id ? `https://player.vimeo.com/video/${id}?autoplay=1&muted=1&loop=1` : rawUrl;
      }
      return rawUrl;
    } catch (_err) {
      return rawUrl;
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPipelineMedia);
  } else {
    initPipelineMedia();
  }
})();
