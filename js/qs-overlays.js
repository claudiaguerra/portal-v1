/* ============================================================
   Portal Cláudia Guerra — Overlays da seção "Quem sou"
   Código escopado (prefixo "qs-"), sem variáveis globais.
   Substitui os links da timeline por overlays (modais) com
   animação dessincronizada, acessibilidade e fallback de imagem.
   ============================================================ */
(function () {
  "use strict";

  var QS_CONFIG = {
    IMAGES_BASE: "imagens/qs/",
    FALLBACK_IMAGE: "QS00.jpg",
    CLOSE_DELAY: 340, // ms — alinhado à transição de fechamento do CSS
    EXIT_DELAY: 360 // ms — duração da animação de saída (navegação entre marcos)
  };

  /* ------------------------------------------------------------
     DADOS — marcos da trajetória (title e paragraphs EXATOS)
     ------------------------------------------------------------ */
  var QS_MARCOS = [
    {
      id: 1,
      title: "Origem, infância e vida em Uberlândia",
      image: "QS01.jpg",
      paragraphs: [
        "Nascida em Goiânia, Cláudia Guerra chegou ainda criança a Uberlândia, cidade onde construiu suas raízes, formou sua família e desenvolveu praticamente toda a sua trajetória pessoal e profissional. É em Uberlândia que encontra seu lugar de pertencimento e onde consolidou sua atuação como educadora, gestora pública, ativista e representante política.",
        "Desde cedo, aprendeu que a transformação da sociedade começa nas relações humanas, na solidariedade e no compromisso com o bem comum, valores que acompanhariam toda a sua caminhada."
      ]
    },
    {
      id: 2,
      title: "Família, valores e história de vida",
      image: "QS02.jpg",
      paragraphs: [
        "A história de Cláudia é profundamente marcada pela força das mulheres de sua família. Após a separação dos pais, ainda na infância, foi criada pela mãe, Maria Lúcia, assistente social, com o apoio da avó Mira e das tias Maria Delourdes e Maria José. Esse ambiente familiar, sustentado pelo cuidado, pela coragem e pela responsabilidade compartilhada, moldou sua visão de mundo e fortaleceu seu compromisso com a justiça social.",
        "Outro episódio decisivo foi a reaproximação com o pai, Glaris, já na terceira idade. Sobrevivente de uma infância marcada por extrema violência, ele reencontrou a filha pouco antes de enfrentar um câncer em estágio terminal. A experiência do cuidado e da reconstrução desse vínculo reforçou em Cláudia a convicção de dedicar sua vida à prevenção da violência, à proteção das mulheres e à promoção da cultura de paz nas famílias."
      ]
    },
    {
      id: 3,
      title: "Formação acadêmica (Professora universitária e Doutora em História)",
      image: "QS03.jpg",
      paragraphs: [
        "Movida pela convicção de que a educação é uma das mais importantes ferramentas de transformação social, Cláudia construiu uma sólida trajetória acadêmica.",
        "É Doutora em História pela Universidade Federal de Uberlândia (UFU), onde pesquisou a violência nos relacionamentos, tema que dialoga diretamente com sua atuação profissional e social.",
        "Há mais de vinte e cinco anos atua como professora universitária em cursos de graduação e pós-graduação, ministrando disciplinas como Sociologia, Antropologia, Ciência Política, Filosofia e Relações Étnico-Raciais e Culturais. Ao longo desse percurso, formou milhares de estudantes, sempre articulando conhecimento acadêmico, cidadania e compromisso com os direitos humanos."
      ]
    },
    {
      id: 4,
      title: "Ativismo pelos direitos das mulheres e cultura da paz nas famílias",
      image: "QS04.jpg",
      paragraphs: [
        "Muito antes de ingressar na política institucional, Cláudia já dedicava sua trajetória à defesa dos direitos das mulheres, das famílias e da construção de uma sociedade mais justa.",
        "Sua atuação foi construída no diálogo entre pesquisa, educação, participação comunitária e formulação de políticas públicas, tornando-se uma referência em temas relacionados à prevenção da violência doméstica, autonomia das mulheres, igualdade de direitos e fortalecimento da cultura de paz.",
        "Seu compromisso nasce da compreensão de que enfrentar a violência exige educação, acolhimento, políticas públicas permanentes e participação ativa da sociedade."
      ]
    },
    {
      id: 5,
      title: "Participação na criação da ONG SOS Mulheres",
      image: "QS05.jpg",
      paragraphs: [
        "Na década de 1990, Cláudia participou da criação da organização da sociedade civil SOS Mulher e Família, iniciativa pioneira voltada ao acolhimento, orientação e fortalecimento de mulheres em situação de violência.",
        "A experiência contribuiu para consolidar sua atuação no movimento de defesa dos direitos das mulheres e reafirmou sua convicção de que a transformação social também acontece por meio da organização da sociedade civil."
      ]
    },
    {
      id: 6,
      title: "Criação e implantação da Casa Abrigo Travessia",
      image: "QS06.jpg",
      paragraphs: [
        "Em 2002, participou da criação e implantação da Casa Abrigo Travessia, equipamento público destinado ao acolhimento sigiloso de mulheres e seus filhos em situação de risco decorrente da violência doméstica.",
        "A Casa Abrigo permanece em funcionamento, oferecendo proteção, acolhimento e oportunidades para que mulheres possam reconstruir suas vidas com segurança e dignidade, tornando-se uma das políticas públicas mais importantes da rede municipal de proteção às mulheres."
      ]
    },
    {
      id: 7,
      title: "Participação na criação do Programa de Abordagem Multidisciplinar em Violência Familiar (PAM/PPVD)",
      image: "QS07.jpg",
      paragraphs: [
        "Nos anos 2000, participou da criação do Programa de Abordagem Multidisciplinar em Violência Familiar (PAM), iniciativa que posteriormente integrou o Programa de Prevenção à Violência Doméstica (PPVD).",
        "O programa reuniu diferentes áreas do conhecimento para desenvolver ações de prevenção, acompanhamento e enfrentamento da violência familiar, fortalecendo uma abordagem interdisciplinar voltada à proteção das pessoas em situação de vulnerabilidade."
      ]
    },
    {
      id: 8,
      title: "Criação e fortalecimento do Conselho Municipal dos Direitos das Mulheres e do Núcleo de Estudos de Gênero da UFU",
      image: "QS08.jpg",
      paragraphs: [
        "Cláudia também participou da criação do Conselho Municipal dos Direitos das Mulheres (CMDM) e do Núcleo de Estudos de Gênero (NEGUEM), da Universidade Federal de Uberlândia.",
        "Esses espaços contribuíram para ampliar o debate sobre igualdade de gênero, fortalecer pesquisas acadêmicas, incentivar políticas públicas e promover a participação social na defesa dos direitos das mulheres.",
        "Sua atuação permaneceu presente ao longo dos anos, apoiando o fortalecimento dessas iniciativas e incentivando o diálogo entre universidade, poder público e sociedade civil."
      ]
    },
    {
      id: 9,
      title: "Gestão pública na Divisão dos Direitos das Mulheres",
      image: "QS09.jpg",
      paragraphs: [
        "Em 2001, participou da estruturação da Divisão dos Direitos das Mulheres da Prefeitura Municipal de Uberlândia, tornando-se sua primeira diretora durante a gestão do prefeito Zaire Rezende.",
        "A experiência marcou o início de sua atuação direta na gestão pública, transformando demandas históricas dos movimentos de mulheres em políticas públicas estruturadas e permanentes.",
        "Foi nesse período que ajudou a consolidar importantes iniciativas voltadas à proteção das mulheres e ao fortalecimento da rede municipal de atendimento."
      ]
    },
    {
      id: 10,
      title: "Professora, palestrante e consultora",
      image: "QS10.jpg",
      paragraphs: [
        "Além da carreira universitária, Cláudia desenvolve palestras, consultorias, oficinas e rodas de conversa para instituições públicas, organizações da sociedade civil, empresas e instituições de ensino.",
        "Entre os temas abordados estão prevenção da violência doméstica, economia do cuidado, educação para igualdade, sexualidades e afetividades, saúde e direitos sexuais e reprodutivos, climatério, mulheres na política, ética, cidadania, masculinidades, redes sociais e formação para a participação democrática.",
        "Seu trabalho busca aproximar conhecimento científico das experiências cotidianas, contribuindo para a formação de pessoas e instituições comprometidas com os direitos humanos."
      ]
    },
    {
      id: 11,
      title: "Vereadora de Uberlândia",
      image: "QS11.jpg",
      paragraphs: [
        "Eleita vereadora em 2020, Cláudia exerceu mandato entre 2021 e 2024, pautando sua atuação pelo diálogo com a população, pela defesa da educação pública, da democracia, dos direitos das mulheres e da construção coletiva de políticas públicas.",
        "Durante o mandato, trabalhou pela autonomia das mulheres, pela valorização da diversidade, pelo fortalecimento da saúde, da geração de trabalho e renda, da segurança alimentar e de outras pautas construídas em permanente diálogo com a sociedade.",
        "Sua atuação parlamentar consolidou uma trajetória iniciada muitos anos antes nos movimentos sociais, na universidade e na gestão pública."
      ]
    },
    {
      id: 12,
      title: "Primeira Procuradora da Mulher da Câmara Municipal",
      image: "QS12.jpg",
      paragraphs: [
        "Durante seu mandato, Cláudia implantou a Procuradoria da Mulher da Câmara Municipal de Uberlândia, tornando-se a primeira Procuradora da Mulher da história do Legislativo municipal.",
        "Também presidiu a Comissão dos Direitos das Mulheres e a Comissão de Educação, fortalecendo instrumentos institucionais voltados à defesa dos direitos das mulheres, ao combate à violência e ao aprimoramento das políticas públicas municipais."
      ]
    },
    {
      id: 13,
      title: "Atuação em mandatos, conselhos, voluntariado e movimentos sociais",
      image: "QS13.jpg",
      paragraphs: [
        "A trajetória de Cláudia reúne atuação em diferentes espaços de participação social e política.",
        "Foi presidente da Ação da Mulher Trabalhista (AMT) do PDT de Uberlândia, vice-presidente da AMT de Minas Gerais, presidente do PDT de Uberlândia (2023–2025), Superintendente Regional da União dos Vereadores do Brasil (UVB) no Triângulo Mineiro e participante do Legislativo de Minas.",
        "Também atua como voluntária-fundadora de organizações da sociedade civil, desenvolve oficinas com mulheres e pessoas LGBT+ privadas de liberdade, integra iniciativas como Mulheres do Brasil, Elas em Movimento e ASSUS, além de atuar como Promotora Legal Popular na formação cidadã de mulheres.",
        "Sua caminhada demonstra uma atuação permanente, construída em diferentes espaços de participação democrática e compromisso social."
      ]
    },
    {
      id: 14,
      title: "Suplente ao cargo de Deputada Estadual",
      image: "QS14.jpg",
      paragraphs: [
        "Em 2022, Cláudia colocou sua trajetória e experiência à disposição de Minas Gerais como candidata a deputada estadual.",
        "Recebeu quase 16 mil votos distribuídos por mais de 400 municípios mineiros, tornando-se suplente para a legislatura 2023–2026.",
        "A pré-candidatura ao Parlamento Estadual representa a continuidade de uma trajetória construída ao longo de décadas de atuação na educação, na gestão pública, nos movimentos sociais e na formulação de políticas voltadas à promoção dos direitos humanos, da igualdade e da participação cidadã."
      ]
    },
    {
      id: 15,
      title: "Candidata a Deputada Estadual de Minas Gerais nas Eleições 2026",
      image: "QS14.jpg",
      paragraphs: [
        "Aqui será inserido as informações sobre a proposta de mandato como deputada estadual."
      ]
    }
  ];

  /* ------------------------------------------------------------
     Setup — apenas na seção #quem-sou
     ------------------------------------------------------------ */
  var section = document.getElementById("quem-sou");
  if (!section) return;

  var triggers = Array.prototype.slice.call(
    section.querySelectorAll(".qs-trigger, .qs-cta-trigger")
  );
  if (!triggers.length) return;

  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------
     Construção da overlay (uma instância reutilizável)
     ------------------------------------------------------------ */
  var root = document.createElement("div");
  root.className = "qs-overlay";
  root.setAttribute("role", "dialog");
  root.setAttribute("aria-modal", "true");
  root.setAttribute("aria-labelledby", "qs-overlay-title");

  var backdrop = document.createElement("div");
  backdrop.className = "qs-overlay-backdrop";

  var card = document.createElement("div");
  card.className = "qs-overlay-card";

  var closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "qs-overlay-close";
  closeBtn.setAttribute("aria-label", "Fechar");
  closeBtn.innerHTML =
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" ' +
    'stroke-width="2.5" stroke-linecap="round" aria-hidden="true">' +
    '<path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>';

  var media = document.createElement("div");
  media.className = "qs-overlay-media";
  var img = document.createElement("img");
  img.className = "qs-overlay-img";
  img.alt = "";
  img.setAttribute("loading", "lazy");
  img.setAttribute("decoding", "async");
  media.appendChild(img);

  var body = document.createElement("div");
  body.className = "qs-overlay-body";

  // Título envolto por uma "máscara" que o revela da esquerda para a direita
  var titleWrap = document.createElement("div");
  titleWrap.className = "qs-overlay-title-wrap";

  var titleEl = document.createElement("h2");
  titleEl.className = "qs-overlay-title";
  titleEl.id = "qs-overlay-title";
  titleWrap.appendChild(titleEl);

  var textWrap = document.createElement("div");
  textWrap.className = "qs-overlay-text";

  // Navegação entre overlays (marco anterior / próximo marco)
  var nav = document.createElement("div");
  nav.className = "qs-overlay-nav";

  var prevBtn = document.createElement("button");
  prevBtn.type = "button";
  prevBtn.className = "qs-nav-btn qs-nav-prev";
  prevBtn.setAttribute("aria-label", "Marco anterior");
  prevBtn.innerHTML =
    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" ' +
    'stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M15 18l-6-6 6-6"/></svg>';

  var nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "qs-nav-btn qs-nav-next";
  nextBtn.setAttribute("aria-label", "Próximo marco");
  nextBtn.innerHTML =
    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" ' +
    'stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M9 18l6-6-6-6"/></svg>';

  nav.appendChild(prevBtn);
  nav.appendChild(nextBtn);

  body.appendChild(titleWrap);
  body.appendChild(textWrap);
  body.appendChild(nav);

  card.appendChild(media);
  card.appendChild(body);
  root.appendChild(backdrop);
  root.appendChild(card);
  document.body.appendChild(root);

  /* No mobile o botão fechar flutua no topo da tela (sobre o backdrop),
     para não cobrir a foto; no desktop permanece dentro do cartão.
     O re-posicionamento é feito por matchMedia, mantendo o desktop intacto. */
  function syncCloseBtnPlacement() {
    var isMobile = window.matchMedia &&
      window.matchMedia("(max-width: 767px)").matches;
    if (isMobile && closeBtn.parentNode !== root) {
      // Antes do cartão para o foco (Tab) começar no fechar
      root.insertBefore(closeBtn, card);
    } else if (!isMobile && closeBtn.parentNode !== card) {
      card.appendChild(closeBtn);
    }
  }
  syncCloseBtnPlacement();
  window.addEventListener("resize", syncCloseBtnPlacement);

  var lastTrigger = null;

  /* ------------------------------------------------------------
     Render + open/close
     ------------------------------------------------------------ */
  function getMarcoIndex(id) {
    for (var i = 0; i < QS_MARCOS.length; i++) {
      if (QS_MARCOS[i].id === id) return i;
    }
    return -1;
  }

  function renderMarco(index) {
    var marco = QS_MARCOS[index];
    titleEl.textContent = marco.title;
    closeBtn.setAttribute("aria-label", "Fechar — " + marco.title);
    img.alt = "Fotografia — " + marco.title;

    // Overlay em branco (temporária): sem foto, sem parágrafos e sem navegação
    if (marco.blank) {
      media.style.display = "none";
      textWrap.innerHTML = "";
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      body.scrollTop = 0;
      return;
    }
    media.style.display = "";

    // Imagem com fallback: se o arquivo não existir, usa QS00.jpg
    var fallbackUsed = false;
    img.onerror = function () {
      if (fallbackUsed) return;
      fallbackUsed = true;
      img.src = QS_CONFIG.IMAGES_BASE + QS_CONFIG.FALLBACK_IMAGE;
    };
    img.src = QS_CONFIG.IMAGES_BASE + marco.image;

    // Texto: um <p> para cada parágrafo, sem cortes
    textWrap.innerHTML = "";
    for (var i = 0; i < marco.paragraphs.length; i++) {
      var p = document.createElement("p");
      p.className = "qs-paragraph";
      p.textContent = marco.paragraphs[i];
      textWrap.appendChild(p);
    }

    // Limites da navegação: primeira e última overlay
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === QS_MARCOS.length - 1;

    // Cada marco começa do topo do texto
    body.scrollTop = 0;
  }

  function lockScroll() {
    document.body.classList.add("qs-scroll-lock");
  }

  function unlockScroll() {
    document.body.classList.remove("qs-scroll-lock");
  }

  var currentIndex = -1;

  function showMarco(index, animate) {
    if (index < 0 || index >= QS_MARCOS.length) return;

    var alreadyOpen = root.classList.contains("is-open");

    if (animate && alreadyOpen) {
      // Navegação: animação de saída → troca de conteúdo → entrada
      root.classList.add("is-exiting");
      window.setTimeout(function () {
        currentIndex = index;
        renderMarco(index);
        // Força o reflow para reiniciar as transições de entrada
        void root.offsetWidth;
        root.classList.remove("is-exiting");
      }, prefersReducedMotion ? 0 : QS_CONFIG.EXIT_DELAY);
      return;
    }

    if (!alreadyOpen) {
      lastTrigger = document.activeElement;
      lockScroll();
    }

    currentIndex = index;
    renderMarco(index);

    if (!alreadyOpen) {
      // Força o reflow para reiniciar as transições de entrada
      void root.offsetWidth;
      root.classList.add("is-open");
      closeBtn.focus();
    }
  }

  function openMarco(id) {
    showMarco(getMarcoIndex(id), true);
  }

  function navigate(delta) {
    if (!root.classList.contains("is-open")) return;
    showMarco(currentIndex + delta, true);
  }

  function closeOverlay() {
    if (!root.classList.contains("is-open")) return;
    root.classList.remove("is-open");
    unlockScroll();
    var trigger = lastTrigger;
    lastTrigger = null;
    if (trigger && trigger.focus) {
      // Restaura o foco ao trigger depois da transição de saída
      window.setTimeout(function () {
        trigger.focus();
      }, prefersReducedMotion ? 0 : QS_CONFIG.CLOSE_DELAY);
    }
  }

  /* ------------------------------------------------------------
     Eventos
     ------------------------------------------------------------ */
  triggers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = parseInt(btn.getAttribute("data-qs-id"), 10);
      if (!isNaN(id)) openMarco(id);
    });
  });

  closeBtn.addEventListener("click", closeOverlay);

  // Clique fora do cartão (backdrop)
  backdrop.addEventListener("click", closeOverlay);

  // Navegação entre overlays
  prevBtn.addEventListener("click", function () {
    navigate(-1);
  });
  nextBtn.addEventListener("click", function () {
    navigate(1);
  });

  // ESC fecha + focus trap (Tab)
  document.addEventListener("keydown", function (e) {
    if (!root.classList.contains("is-open")) return;

    if (e.key === "Escape") {
      e.preventDefault();
      closeOverlay();
      return;
    }

    if (e.key === "Tab") {
      var focusables = Array.prototype.slice.call(
        root.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter(function (el) {
        return !el.disabled;
      });
      if (!focusables.length) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

})();
