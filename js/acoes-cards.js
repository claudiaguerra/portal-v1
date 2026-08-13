/* ============================================================
   Portal Cláudia Guerra — Cards da seção "Ações" como tags
   expansíveis: fallback de toque (telas sem hover).
   Código escopado (prefixo "acoes-"), sem variáveis globais.
   Desktop: comportamento 100% CSS (hover-only, sem clique).
   ============================================================ */
(function () {
  "use strict";

  var section = document.getElementById("acoes");
  if (!section) return;

  // Em dispositivos com hover (mouse), o hover do CSS já resolve.
  var canHover =
    window.matchMedia &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (canHover) return;

  var cards = Array.prototype.slice.call(section.querySelectorAll(".card"));
  if (!cards.length) return;

  function closeAll(except) {
    cards.forEach(function (card) {
      if (card !== except) card.classList.remove("is-open");
    });
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      var willOpen = !card.classList.contains("is-open");
      closeAll(card);
      card.classList.toggle("is-open", willOpen);
    });
  });

  // Tap fora de qualquer tag recolhe todas.
  document.addEventListener("click", function (event) {
    if (!event.target.closest("#acoes .card")) closeAll(null);
  });
})();
