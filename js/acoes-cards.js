/* ============================================================
   Portal Cláudia Guerra — Cards da seção "Ações" como tags
   expansíveis + abertura da overlay de cada grupo.
   - Desktop: hover expande via CSS; clique em qualquer ponto
     do card expandido abre a overlay (evento "acoes:open").
   - Toque: 1º toque expande; 2º toque abre a overlay.
   - Teclado: Enter/Espaço abrem a overlay (cards navegáveis).
   Código escopado (prefixo "acoes-"), sem variáveis globais.
   ============================================================ */
(function () {
  "use strict";

  var section = document.getElementById("acoes");
  if (!section) return;

  var cards = Array.prototype.slice.call(section.querySelectorAll(".card"));
  if (!cards.length) return;

  var canHover =
    window.matchMedia &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function closeAll(except) {
    cards.forEach(function (card) {
      if (card !== except) card.classList.remove("is-open");
    });
  }

  cards.forEach(function (card, index) {
    // Acessibilidade: cards navegáveis por teclado (abrem a overlay)
    var titleEl = card.querySelector(".card-title");
    var name = titleEl ? titleEl.textContent.trim() : "deste grupo";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-label", "Abrir detalhes: " + name);

    function openOverlay() {
      card.dispatchEvent(
        new CustomEvent("acoes:open", {
          bubbles: true,
          detail: { index: index }
        })
      );
    }

    // Teclado: Enter ou Espaço abre a overlay do grupo
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openOverlay();
      }
    });

    if (canHover) {
      // Desktop: o hover expande via CSS; o clique abre a overlay
      card.addEventListener("click", openOverlay);
      return;
    }

    // Toque: 1º toque expande; 2º toque abre a overlay
    card.addEventListener("click", function () {
      var isOpen = card.classList.contains("is-open");
      if (isOpen) {
        openOverlay();
      } else {
        closeAll(card);
        card.classList.add("is-open");
      }
    });
  });

  // Tap fora de qualquer tag recolhe todas (somente em telas de toque)
  if (!canHover) {
    document.addEventListener("click", function (event) {
      if (!event.target.closest("#acoes .card")) closeAll(null);
    });
  }
})();
