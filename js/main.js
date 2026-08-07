/* ============================================================
   Portal Cláudia Guerra — V1
   JavaScript frontend (sem dependências externas)
   ============================================================ */
(function () {
  "use strict";

  /* ------------------------------------------------------------
     CONFIG — ATUALIZAR AQUI os conteúdos ainda não definidos.
     Toda URL que contiver "SEU_" é tratada como placeholder e o
     portal exibe um cartão "em breve" no lugar do embed.
     ------------------------------------------------------------ */
  var CONFIG = {
    // Formulário oficial Método Kóller (Google Forms) — embed URL:
    METODO_KOLLER_FORM_URL: "https://forms.gle/SEU_FORMULARIO_METODO_KOLLER_AQUI",

    // Vídeo em destaque da seção Infos (embed do YouTube):
    YOUTUBE_VIDEO_URL: "https://www.youtube.com/embed/SEU_VIDEO_DESTAQUE_AQUI",

    // Canal oficial no YouTube:
    YOUTUBE_CHANNEL_URL: "https://www.youtube.com/SEU_CANAL_AQUI",

    PLACEHOLDER_HINT: "SEU_"
  };

  function isPlaceholder(url) {
    return !url || url.indexOf(CONFIG.PLACEHOLDER_HINT) !== -1;
  }

  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ============================================================
     1. HEADER — estado ao rolar
     ============================================================ */
  var header = document.getElementById("site-header");
  var toTop = document.getElementById("to-top");

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) {
      header.classList.toggle("is-scrolled", y > 10);
    }
    if (toTop) {
      toTop.classList.toggle("is-visible", y > 600);
    }
  }

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ============================================================
     2. NAVEGAÇÃO MOBILE
     ============================================================ */
  var navToggle = document.getElementById("nav-toggle");
  var siteNav = document.getElementById("site-nav");

  function closeNav() {
    if (!siteNav || !navToggle) return;
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menu de navegação");
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Fechar menu de navegação" : "Abrir menu de navegação");
    });

    // Fecha ao clicar em um link do menu
    siteNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) closeNav();
    });
  }

  /* ============================================================
     3. HERO — carrossel de 5 slides
     ============================================================ */
  var hero = document.getElementById("hero");
  var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
  var dotsWrap = document.querySelector(".hero-dots");
  var prevBtn = document.querySelector(".hero-arrow-prev");
  var nextBtn = document.querySelector(".hero-arrow-next");
  var current = 0;
  var timer = null;
  var DELAY = 5000;
  var touchX = null;

  if (slides.length > 1) {
    // Cria os indicadores
    slides.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.className = "hero-dot" + (i === 0 ? " is-active" : "");
      dot.type = "button";
      dot.setAttribute("aria-label", "Ir para o slide " + (i + 1) + " de " + slides.length);
      dot.addEventListener("click", function () {
        goTo(i);
        resetTimer();
      });
      dotsWrap.appendChild(dot);
    });

    function updateDots() {
      var dots = dotsWrap.children;
      for (var i = 0; i < dots.length; i++) {
        dots[i].classList.toggle("is-active", i === current);
      }
    }

    function goTo(index) {
      slides[current].classList.remove("is-active");
      slides[current].setAttribute("aria-hidden", "true");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      slides[current].removeAttribute("aria-hidden");
      updateDots();
    }

    function next() {
      goTo(current + 1);
    }

    function prev() {
      goTo(current - 1);
    }

    function startTimer() {
      stopTimer();
      if (prefersReducedMotion) return; // sem autoplay para quem prefere menos movimento
      timer = window.setInterval(next, DELAY);
    }

    function stopTimer() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function resetTimer() {
      if (prefersReducedMotion) return;
      startTimer();
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { prev(); resetTimer(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { next(); resetTimer(); });

    // Pausa com hover/foco, retoma ao sair
    hero.addEventListener("mouseenter", stopTimer);
    hero.addEventListener("mouseleave", startTimer);
    hero.addEventListener("focusin", stopTimer);
    hero.addEventListener("focusout", startTimer);

    // Gestos de toque
    hero.addEventListener("touchstart", function (e) {
      touchX = e.changedTouches[0].clientX;
      stopTimer();
    }, { passive: true });

    hero.addEventListener("touchend", function (e) {
      if (touchX === null) return;
      var delta = e.changedTouches[0].clientX - touchX;
      if (Math.abs(delta) > 50) {
        if (delta < 0) next(); else prev();
      }
      touchX = null;
      resetTimer();
    }, { passive: true });

    // Teclado: setas esquerda/direita quando o hero está em foco
    hero.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { next(); resetTimer(); e.preventDefault(); }
      if (e.key === "ArrowLeft") { prev(); resetTimer(); e.preventDefault(); }
    });

    // Não avança com a aba em segundo plano
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopTimer(); else startTimer();
    });

    startTimer();
  }

  /* ============================================================
     4. SCROLLSPY — destaca o item ativo no menu
     ============================================================ */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));

  function setActive(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach(function (s) { spy.observe(s); });

    // No topo, o destaque volta para "Início"
    window.addEventListener("scroll", function () {
      if ((window.scrollY || 0) < 200) setActive("inicio");
    }, { passive: true });
  }

  /* ============================================================
     5. APARIÇÃO NO SCROLL (fade suave)
     ============================================================ */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if ("IntersectionObserver" in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ============================================================
     6. INTEGRAÇÕES — formulário Método Kóller e vídeo em destaque
     ============================================================ */
  function renderFallback(container, title, text) {
    var card = document.createElement("div");
    card.className = "embed-fallback";

    var h = document.createElement("p");
    h.className = "embed-fallback-title";
    h.textContent = title;

    var p = document.createElement("p");
    p.className = "embed-fallback-text";
    p.textContent = text;

    var actions = document.createElement("div");

    // Botão real disponível: WhatsApp da equipe
    var wa = document.createElement("a");
    wa.className = "btn btn-whatsapp";
    wa.href = "https://wa.me/553484282416?text=Ol%C3%A1!%20Acessei%20o%20Portal%20Cl%C3%A1udia%20Guerra%20e%20quero%20participar.";
    wa.target = "_blank";
    wa.rel = "noopener";
    wa.textContent = "Falar com a equipe";

    var ig = document.createElement("a");
    ig.className = "btn btn-outline btn-light-outline";
    ig.href = "https://www.instagram.com/claudiaguerraudi";
    ig.target = "_blank";
    ig.rel = "noopener";
    ig.textContent = "Instagram";

    // Fallback "Copiar número" quando o click-to-chat (wa.me -> api.whatsapp.com) é bloqueado
    var copy = document.createElement("button");
    copy.className = "btn btn-outline btn-light-outline";
    copy.type = "button";
    copy.setAttribute("data-copy", "+55 34 8428-2416");
    copy.textContent = "Copiar número";

    actions.appendChild(wa);
    actions.appendChild(copy);
    actions.appendChild(ig);
    card.appendChild(h);
    card.appendChild(p);
    card.appendChild(actions);
    container.appendChild(card);
  }

  // Formulário Método Kóller
  var formSlot = document.getElementById("form-slot");
  if (formSlot) {
    if (isPlaceholder(CONFIG.METODO_KOLLER_FORM_URL)) {
      renderFallback(
        formSlot,
        "Formulário em construção",
        "Em breve, o formulário oficial do Método Kóller estará disponível aqui. Enquanto isso, fale diretamente com a equipe."
      );
    } else {
      var iframe = document.createElement("iframe");
      iframe.src = CONFIG.METODO_KOLLER_FORM_URL;
      iframe.setAttribute("title", "Formulário de participação Método Kóller");
      iframe.setAttribute("loading", "lazy");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      formSlot.appendChild(iframe);
    }
  }

  // Vídeo em destaque
  var videoSlot = document.getElementById("video-slot");
  if (videoSlot) {
    if (isPlaceholder(CONFIG.YOUTUBE_VIDEO_URL)) {
      renderFallback(
        videoSlot,
        "Vídeos em breve",
        "Conteúdos em vídeo serão publicados em destaque aqui. Acompanhe o canal no YouTube e o Instagram para novidades."
      );
    } else {
      var viframe = document.createElement("iframe");
      viframe.src = CONFIG.YOUTUBE_VIDEO_URL;
      viframe.setAttribute("title", "Vídeo em destaque — YouTube");
      viframe.setAttribute("loading", "lazy");
      viframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
      viframe.setAttribute("allowfullscreen", "");
      videoSlot.appendChild(viframe);
    }
  }

  // Botões do YouTube: aplica a URL do canal quando configurada
  var youtubeLinks = Array.prototype.slice.call(document.querySelectorAll(".js-youtube"));
  youtubeLinks.forEach(function (link) {
    if (!isPlaceholder(CONFIG.YOUTUBE_CHANNEL_URL)) {
      link.href = CONFIG.YOUTUBE_CHANNEL_URL;
      link.target = "_blank";
      link.rel = "noopener";
      link.removeAttribute("title");
    }
  });

  /* ------------------------------------------------------------
     Copiar número do WhatsApp — fallback quando o click-to-chat
     (wa.me -> api.whatsapp.com) é bloqueado pelo navegador/rede.
     Qualquer elemento com [data-copy] copia o valor para a área
     de transferência (delegação de eventos cobre botões dinâmicos).
     ------------------------------------------------------------ */
  function copyToClipboard(text, done) {
    function legacyCopy() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "0";
      ta.style.left = "0";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      if (ok) { done(); }
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, legacyCopy);
    } else {
      legacyCopy();
    }
  }

  function showCopyToast() {
    var toast = document.getElementById("copy-toast");
    if (!toast) return;
    toast.classList.add("is-visible");
    clearTimeout(showCopyToast._t);
    showCopyToast._t = setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2200);
  }

  document.addEventListener("click", function (e) {
    var btn = e.target && e.target.closest ? e.target.closest("[data-copy]") : null;
    if (!btn) return;
    var text = btn.getAttribute("data-copy") || "";
    if (text) { copyToClipboard(text, showCopyToast); }
  });
})();
