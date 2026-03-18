(function () {
  function normalize(text) {
    return (text || "").toLowerCase().trim();
  }

  function initEndpointExplorer() {
    var searchInput = document.getElementById("endpointSearch");
    var methodFilter = document.getElementById("endpointMethodFilter");
    var moduleFilter = document.getElementById("endpointModuleFilter");
    var resultsLabel = document.getElementById("endpointResultsCount");
    if (!searchInput || !methodFilter || !moduleFilter) return;

    var tables = Array.from(document.querySelectorAll(".docs-endpoint-table"));
    var allRows = [];
    var modules = new Set();

    tables.forEach(function (table) {
      var wrap = table.closest(".docs-endpoint-table-wrap");
      var heading = wrap && wrap.previousElementSibling && wrap.previousElementSibling.tagName === "H3"
        ? wrap.previousElementSibling
        : null;
      var moduleName = heading ? heading.textContent.trim() : "General";
      modules.add(moduleName);

      var theadRow = table.querySelector("thead tr");
      if (theadRow && !table.dataset.copyColAdded) {
        var th = document.createElement("th");
        th.textContent = "Copy";
        theadRow.appendChild(th);
        table.dataset.copyColAdded = "1";
      }

      Array.from(table.querySelectorAll("tbody tr")).forEach(function (row) {
        var methodPill = row.querySelector(".method-pill");
        var methodText = methodPill ? normalize(methodPill.textContent) : "";
        row.dataset.method = methodText;
        row.dataset.module = moduleName;

        if (!row.querySelector(".endpoint-copy-btn")) {
          var pathCell = row.children[1];
          var pathText = pathCell ? pathCell.textContent.trim() : "";
          var copyCell = document.createElement("td");
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "endpoint-copy-btn";
          btn.textContent = "Copy";
          btn.addEventListener("click", function () {
            navigator.clipboard.writeText(pathText).then(function () {
              btn.textContent = "Copied";
              setTimeout(function () { btn.textContent = "Copy"; }, 900);
            });
          });
          copyCell.appendChild(btn);
          row.appendChild(copyCell);
        }

        allRows.push(row);
      });
    });

    Array.from(modules).sort().forEach(function (name) {
      var option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      moduleFilter.appendChild(option);
    });

    function applyFilters() {
      var q = normalize(searchInput.value);
      var method = normalize(methodFilter.value);
      var module = normalize(moduleFilter.value);
      var visible = 0;

      allRows.forEach(function (row) {
        var rowText = normalize(row.textContent);
        var qMatch = !q || rowText.indexOf(q) !== -1;
        var methodMatch = !method || row.dataset.method === method;
        var moduleMatch = !module || normalize(row.dataset.module) === module;
        var show = qMatch && methodMatch && moduleMatch;
        row.style.display = show ? "" : "none";
        if (show) visible += 1;
      });

      if (resultsLabel) {
        resultsLabel.textContent = visible + " endpoint(s)";
      }
    }

    searchInput.addEventListener("input", applyFilters);
    methodFilter.addEventListener("change", applyFilters);
    moduleFilter.addEventListener("change", applyFilters);
    applyFilters();
  }

  function init() {
    initEndpointExplorer();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
