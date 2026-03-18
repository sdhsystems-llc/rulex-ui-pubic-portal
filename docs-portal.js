(function () {
  function slugify(text) {
    return (text || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function initVersionSwitchers() {
    var key = "rulex_docs_version";
    var saved = localStorage.getItem(key) || "v1";
    var switches = Array.from(document.querySelectorAll(".docs-version-switch"));
    if (!switches.length) return;

    function applyVersion(v) {
      switches.forEach(function (el) { el.value = v; });
      document.body.setAttribute("data-doc-version", v);
      var badge = document.getElementById("docsVersionBadge");
      if (badge) badge.textContent = v.toUpperCase();
    }

    applyVersion(saved);
    switches.forEach(function (el) {
      el.addEventListener("change", function () {
        var v = el.value || "v1";
        localStorage.setItem(key, v);
        applyVersion(v);
      });
    });
  }

  function initDocSearch() {
    var input = document.getElementById("globalDocsSearch");
    var panel = document.getElementById("globalSearchResults");
    if (!input || !panel) return;

    var index = [];
    fetch("docs-search-index.json")
      .then(function (r) { return r.json(); })
      .then(function (data) { index = Array.isArray(data) ? data : []; })
      .catch(function () { index = []; });

    function render(items) {
      if (!items.length) {
        panel.innerHTML = "<div class='global-search-empty'>No matching docs found.</div>";
        panel.style.display = "block";
        return;
      }
      panel.innerHTML = items.map(function (item) {
        var subtitle = item.section ? (item.page + " - " + item.section) : item.page;
        return "<a class='global-search-item' href='" + item.path + "'>" +
          "<div class='global-search-item-title'>" + item.title + "</div>" +
          "<div class='global-search-item-sub'>" + subtitle + "</div>" +
        "</a>";
      }).join("");
      panel.style.display = "block";
    }

    input.addEventListener("input", function () {
      var q = (input.value || "").toLowerCase().trim();
      if (!q) {
        panel.style.display = "none";
        return;
      }
      var results = index.filter(function (item) {
        var hay = [
          item.title,
          item.page,
          item.section,
          (item.keywords || []).join(" ")
        ].join(" ").toLowerCase();
        return hay.indexOf(q) !== -1;
      }).slice(0, 8);
      render(results);
    });

    document.addEventListener("click", function (e) {
      var wrap = document.querySelector(".global-search-wrap");
      if (wrap && !wrap.contains(e.target)) panel.style.display = "none";
    });
  }

  function initOnPageToc() {
    var panel = document.querySelector(".docs-main-panel");
    if (!panel) return;
    var headings = Array.from(panel.querySelectorAll("h2, h3"));
    if (!headings.length) return;

    var tocItems = headings.map(function (h) {
      if (!h.id) h.id = slugify(h.textContent);
      return { id: h.id, text: h.textContent.trim(), level: h.tagName.toLowerCase() };
    });

    var toc = document.createElement("aside");
    toc.className = "onpage-toc";
    toc.innerHTML =
      "<div class='onpage-toc-title'>On this page</div>" +
      "<div class='onpage-toc-links'>" +
      tocItems.map(function (item) {
        return "<a class='onpage-toc-link " + (item.level === "h3" ? "is-h3" : "is-h2") +
          "' href='#" + item.id + "' data-target='" + item.id + "'>" + item.text + "</a>";
      }).join("") +
      "</div>";
    document.body.appendChild(toc);

    var links = Array.from(toc.querySelectorAll(".onpage-toc-link"));
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) {
            l.classList.toggle("active", l.getAttribute("data-target") === entry.target.id);
          });
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });

    headings.forEach(function (h) { observer.observe(h); });
  }

  function init() {
    initVersionSwitchers();
    initDocSearch();
    initOnPageToc();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
