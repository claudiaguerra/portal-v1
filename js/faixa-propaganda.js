/* ============================================================
   Portal Cláudia Guerra — V1
   Faixa de propaganda eleitoral — troca de cor por scroll.
   Espelha a lógica do header (js/main.js): o header recebe
   "is-scrolled" quando y > 10; a faixa usa o MESMO gatilho,
   porém com cores invertidas na posição inferior.
   ============================================================ */
(function () {
  "use strict";

  function init() {
    var faixa = document.getElementById("faixa-propaganda");
    if (!faixa) return;

    function onScroll() {
      var y = window.scrollY || window.pageYOffset || 0;
      faixa.classList.toggle("is-scrolled", y > 10);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();