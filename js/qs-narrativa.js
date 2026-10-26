/* ============================================================
   Portal Cláudia Guerra — "Na narrativa de outras bocas"
   Carrossel narrativo de 10 slides manuais na seção "Quem sou".
   Solução própria e isolada (prefixo "qsn-"), Vanilla JS,
   sem variáveis globais, compatível com Hostinger/Vercel.
   Textos dos slides EXATAMENTE como no arquivo de contexto
   (docs/PV1_QUEM_SOU_NARRATIVA.md), sem marcadores "slide N".
   ============================================================ */
(function () {
  "use strict";

  var QSN_CONFIG = {
    IMAGES_BASE: "imagens/qs/narrativa/",
    EXIT_DELAY: 280,  // ms — duração da animação de saída entre slides
    CLOSE_DELAY: 320  // ms — alinhado à transição de fechamento do CSS
  };

  /* ------------------------------------------------------------
     DADOS — 10 slides (texto puro; *...* vira itálico na renderização)
     ------------------------------------------------------------ */
  var QSN_SLIDES = [
    {
      image: "narrativa01.jpg",
      title: "Cláudia Guerra - NA NARRATIVA DE OUTRAS BOCAS",
      paragraphs: [
        "Há pessoas que escolhem a vida pública como profissão. Outras chegam até ela porque a própria vida lhes mostrou que permanecer indiferente nunca foi uma opção.",
        "A trajetória de Cláudia Guerra nasceu muito antes da política institucional. Ela começou dentro de casa, cercada por mulheres que transformavam dificuldades em coragem, responsabilidade em cuidado e afeto em força para seguir adiante. Foi nesse ambiente que ela aprendeu que justiça não é apenas uma palavra. É uma prática cotidiana.",
        "Nascida em Goiânia, Cláudia chegou ainda criança a Uberlândia, cidade onde construiu suas raízes, formou sua família, desenvolveu sua carreira e escolheu dedicar sua vida. Mineira por pertencimento e por convicção, foi ali que descobriu sua vocação para ensinar, acolher, pesquisar, mobilizar pessoas e construir caminhos coletivos.",
        "Sua história pessoal nunca esteve separada de sua história pública.",
        "A separação dos pais, quando tinha apenas sete anos, fez com que crescesse observando de perto a força da mãe, Maria Lúcia, assistente social que assumiu a criação de quatro filhos com o apoio indispensável da avó Mira e das tias Maria Delourdes e Maria José. Eram mulheres que não falavam sobre protagonismo feminino porque simplesmente o viviam todos os dias.",
        "Foi nesse ambiente que Cláudia aprendeu que cuidar não é um gesto de fragilidade, mas de coragem. Aprendeu que nenhuma transformação social acontece sem solidariedade, sem trabalho e sem responsabilidade compartilhada."
      ]
    },
    {
      image: "narrativa02.jpg",
      paragraphs: [
        "Décadas depois, compreenderia que aquelas experiências moldariam não apenas sua personalidade, mas também todas as escolhas profissionais e políticas que faria ao longo da vida.",
        "Outro capítulo marcante veio da história de seu pai, Glaris.",
        "Ainda menino, ele testemunhou o assassinato da própria mãe pelo pai. Uma tragédia que atravessou gerações e deixou marcas profundas em sua vida. Durante muitos anos, pai e filha conviveram pouco, consequência dos caminhos diferentes que seguiram.",
        "Já idoso, Glaris mudou-se para Uberlândia a convite da filha. Foi a oportunidade para que ambos reconstruíssem uma relação interrompida pelo tempo. Pouco depois veio o diagnóstico de um câncer em estágio terminal. Ao lado da família, Cláudia participou intensamente dos cuidados até seus últimos dias.",
        "Essa experiência transformou definitivamente sua compreensão sobre violência, cuidado, perdão e reconstrução. Mais do que uma lembrança familiar, tornou-se uma das bases da sua atuação permanente pela proteção das mulheres, pela prevenção da violência doméstica e pela construção de uma cultura de paz.",
        "Sua história, portanto, nunca foi construída apenas por livros ou pela política. Foi construída pela vida.",
        "Foi justamente essa experiência humana que encontrou na educação seu principal instrumento de transformação."
      ]
    },
    {
      image: "narrativa03.jpg",
      paragraphs: [
        "Cláudia tornou-se professora e fez da sala de aula um espaço permanente de diálogo e formação cidadã. Doutora em História pela Universidade Federal de Uberlândia, dedicou sua pesquisa à compreensão da violência nos relacionamentos, tema que dialogava diretamente com questões que já faziam parte de sua trajetória pessoal e profissional.",
        "Há mais de vinte e cinco anos leciona em cursos de graduação e pós-graduação, ministrando disciplinas como Sociologia, Antropologia, Ciência Política, Filosofia e Relações Étnico-Raciais e Culturais.",
        "Para ela, ensinar nunca significou apenas transmitir conhecimento. Sempre significou formar pessoas capazes de compreender o mundo, respeitar as diferenças e participar ativamente da construção da democracia.",
        "Essa mesma compreensão levou sua atuação muito além da universidade.",
        "Ao longo de sua caminhada passou a realizar palestras, consultorias, oficinas e rodas de conversa sobre prevenção da violência doméstica, economia do cuidado, sexualidades e afetividades, direitos sexuais e reprodutivos, educação para igualdade, climatério, menopausa, mulheres na política, masculinidades, ética, redes sociais, comunicação e formação cidadã.",
        "Em cada encontro, manteve o mesmo propósito: transformar conhecimento em instrumento de autonomia e participação social."
      ]
    },
    {
      image: "narrativa04.jpg",
      paragraphs: [
        "Mas sua atuação nunca ficou restrita às salas de aula.",
        "Muito antes de ocupar qualquer cargo público, Cláudia já participava da construção de organizações e políticas voltadas aos direitos das mulheres.",
        "Na década de 1990 esteve entre as pessoas que ajudaram a criar o SOS Mulher e Família, o Conselho Municipal dos Direitos das Mulheres (CMDM) e o Núcleo de Estudos de Gênero (NEGUEM), da Universidade Federal de Uberlândia.",
        "Nos anos seguintes participou também da criação do Programa de Abordagem Multidisciplinar Domiciliar em Violência Familiar (PAM), iniciativa que atuou entre 2003 e 2015.",
        "Seu compromisso permaneceu mesmo depois dessas estruturas estarem consolidadas. Continuou apoiando como voluntária-fundadora as instituições que seguem em atividade, acreditando que a participação da sociedade civil é indispensável para fortalecer políticas públicas permanentes.",
        "Desde 2018 desenvolve oficinas com mulheres e pessoas LGBT+ privadas de liberdade na Penitenciária Professor Pimenta da Veiga.",
        "Também tornou-se Promotora Legal Popular, formando mulheres para o exercício da cidadania, do acesso à justiça, das políticas públicas e dos direitos humanos."
      ]
    },
    {
      image: "narrativa05.jpg",
      paragraphs: [
        "Participa de iniciativas como o Elas em Movimento, do Comitê Uberlândia do Mulheres do Brasil e da Associação dos Usuários(as) do SUS (ASSUS), sempre articulando educação, participação social e fortalecimento comunitário.",
        "Sua voz também encontrou espaço nos meios de comunicação. Apresentou o programa *Revista da Cidade*, da TV Paranaíba, ainda na década de 1990, além dos programas *Mulheridade News*, na CBL/YouTube, e *Mulheres em Movimento*, na Rádio Universitária FM 107,5, ampliando o diálogo com diferentes públicos sobre cidadania, igualdade e direitos humanos.",
        "Ao mesmo tempo, nunca deixou de cultivar aquilo que alimenta sua dimensão mais pessoal.",
        "Escreve poesias, toca tambor, aprecia a leitura, a dança, o cinema, o carnaval, a cultura popular, o convívio familiar e uma boa partida de truco entre amigos.",
        "Há mais de vinte anos divide a vida com Ricardo, companheiro de caminhada e parceiro na construção de uma família baseada no respeito e na corresponsabilidade. É mãe de Vitor e Dudu, educados, segundo ela, pelo exemplo da ética, do diálogo, do respeito às diferenças e da igualdade. A cachorrinha Babi completa esse cotidiano que costuma definir como seu lugar de equilíbrio e afeto.",
        "Foi toda essa trajetória que, naturalmente, encontrou a política institucional."
      ]
    },
    {
      image: "narrativa06.jpg",
      paragraphs: [
        "Em 2001 participou da estruturação da Divisão de Direitos das Mulheres da Prefeitura de Uberlândia, tornando-se sua primeira diretora durante a gestão do prefeito Zaire Rezende.",
        "No ano seguinte participou diretamente da criação da Casa Abrigo Travessia, equipamento público que continua oferecendo acolhimento sigiloso a mulheres e filhos em situação de risco decorrente da violência doméstica.",
        "Anos depois, em 2020, foi eleita vereadora de Uberlândia com 2.699 votos.",
        "Durante o mandato, entre 2021 e 2024, presidiu a Comissão dos Direitos das Mulheres e a Comissão de Educação e implantou a Procuradoria da Mulher da Câmara Municipal, tornando-se sua primeira Procuradora da Mulher.",
        "Sua atuação parlamentar concentrou-se na defesa da autonomia das mulheres, da educação pública de qualidade, da diversidade, da saúde, dos direitos sexuais e reprodutivos, da geração de trabalho e renda, da segurança alimentar e de políticas públicas construídas a partir da escuta permanente da população.",
        "Em 2022 apresentou seu nome para representar Minas Gerais na Assembleia Legislativa.",
        "Recebeu quase dezesseis mil votos distribuídos por mais de quatrocentos municípios mineiros, tornando-se suplente para a legislatura 2023–2026."
      ]
    },
    {
      image: "narrativa07.jpg",
      paragraphs: [
        "Também presidiu o PDT de Uberlândia entre 2023 e 2025, foi presidente da Ação da Mulher Trabalhista do PDT de Uberlândia, vice-presidente da AMT de Minas Gerais, integrante do Movimento Trabalhista pela Educação, Superintendente Regional da União dos Vereadores do Brasil no Triângulo Mineiro e participante do Legislativo de Minas, fortalecendo espaços de formação política e integração entre mandatos.",
        "Olhar para a trajetória de Cláudia Guerra é perceber que nenhuma dessas etapas surgiu de forma isolada.",
        "A professora dialoga com a pesquisadora.\nA pesquisadora fortalece a gestora pública.\nA gestora inspira a ativista.\nA ativista sustenta a parlamentar.",
        "E todas elas encontram origem na menina criada por mulheres que ensinaram, pelo exemplo, que cuidar das pessoas também é uma forma de transformar o mundo.",
        "Essa continua sendo a essência da sua caminhada.",
        "Mais do que ocupar cargos, Cláudia Guerra escolheu construir uma vida dedicada ao conhecimento, ao cuidado, à participação cidadã e à defesa da dignidade humana. Uma trajetória que permanece em construção, guiada pela convicção de que a política, quando nasce da escuta, da ética e do compromisso com as pessoas, pode ser uma das mais importantes ferramentas de transformação social."
      ]
    },
    {
      image: "narrativa08.jpg",
      paragraphs: [
        "Existe um traço que atravessa toda a trajetória de Cláudia Guerra e explica escolhas que, vistas isoladamente, poderiam parecer caminhos diferentes. A universidade, o voluntariado, a gestão pública, a política institucional, a comunicação e a defesa dos direitos humanos nunca foram capítulos independentes. Sempre fizeram parte de uma mesma vocação: cuidar das pessoas.",
        "Para Cláudia, cuidar nunca significou apenas oferecer proteção. Significa criar condições para que cada pessoa possa viver com autonomia, dignidade e oportunidades. É por isso que sua atuação sempre esteve voltada para a educação, para a construção de políticas públicas e para o fortalecimento da cidadania.",
        "Sua formação acadêmica lhe ofereceu ferramentas para compreender as desigualdades. A experiência como professora mostrou que o conhecimento transforma vidas. O trabalho voluntário revelou a força da organização comunitária. A gestão pública ensinou que boas ideias precisam se transformar em políticas permanentes. E a atuação parlamentar demonstrou que escutar a população continua sendo o primeiro dever de quem representa o interesse coletivo."
      ]
    },
    {
      image: "narrativa09.jpg",
      paragraphs: [
        "Ao longo dessa caminhada, Cláudia nunca separou teoria e prática.",
        "Enquanto pesquisava violência nos relacionamentos, estava ao lado de mulheres que enfrentavam diariamente essa realidade.\nEnquanto ensinava sobre cidadania, ajudava a construir organizações sociais e espaços de acolhimento.\nEnquanto defendia políticas públicas, participava diretamente de sua criação e implementação.",
        "Essa coerência tornou-se uma das marcas de sua trajetória.",
        "Mais do que ocupar espaços de poder, sempre buscou construir espaços de participação.\nMais do que falar sobre direitos, dedicou sua vida a criar condições para que eles fossem conhecidos, acessados e exercidos.",
        "Talvez seja por isso que sua atuação seja reconhecida por diferentes áreas da sociedade.",
        "Na educação, pela formação de milhares de estudantes.\nNa sociedade civil, pela criação e fortalecimento de organizações que permanecem atuantes.\nNa gestão pública, pela participação na implantação de políticas que continuam produzindo resultados.\nNa política, pela defesa permanente do diálogo, da escuta e da construção coletiva.",
        "Essa forma de compreender a vida pública também explica sua relação com a cultura.\nPara Cláudia, a arte nunca foi um detalhe.",
        "Ela acredita que a cultura fortalece vínculos, amplia o sentimento de pertencimento e humaniza as relações.",
        "Escrever poemas, tocar tambor, participar do carnaval, cantar, dançar ou simplesmente reunir amigos ao redor de uma mesa representam diferentes maneiras de celebrar aquilo que considera essencial: a convivência, a diversidade e a alegria de viver.",
        "A mesma mulher que pesquisa, ensina, escreve projetos e participa de debates também encontra inspiração na música, na literatura, no cinema e nas manifestações populares."
      ]
    },
    {
      image: "narrativa10.jpg",
      paragraphs: [
        "Essa combinação entre sensibilidade e compromisso social faz parte de sua identidade.",
        "Sua caminhada também é marcada por uma característica pouco comum: a capacidade de construir pontes.\nAo longo da vida, transitou entre universidade e comunidade, entre movimentos sociais e instituições públicas, entre pesquisa acadêmica e gestão, entre escuta e ação.\nEm todos esses espaços, manteve a convicção de que mudanças duradouras só acontecem quando diferentes pessoas conseguem dialogar em torno de objetivos comuns.",
        "Essa compreensão acompanha sua atuação até hoje.",
        "Independentemente do espaço em que esteja, Cláudia continua acreditando que transformar a realidade exige disposição para ouvir, aprender, construir consensos e trabalhar coletivamente.",
        "Sua história demonstra que políticas públicas não surgem apenas de decisões administrativas.",
        "Elas nascem das experiências das pessoas, das demandas das comunidades, da coragem de enfrentar problemas antigos e da disposição permanente para construir soluções.",
        "Por isso, ao olhar para sua própria trajetória, Cláudia costuma enxergar menos uma sucessão de cargos e mais uma sequência de compromissos assumidos ao longo da vida.",
        "Compromissos com a educação.\nCom as mulheres.\nCom as famílias.\nCom a democracia.\nCom a cultura.\nCom os direitos humanos.\nCom a construção de uma sociedade em que ninguém precise enfrentar sozinho a violência, a desigualdade ou a falta de oportunidades.",
        "Essa talvez seja a melhor forma de compreender sua caminhada.",
        "Ela não foi construída em torno da política.",
        "Foi construída em torno das pessoas.",
        "E é justamente essa escolha que continua orientando cada novo passo de sua história."
      ]
    }
  ];

  var openBtn = document.querySelector(".qsn-open-btn");
  if (!openBtn) return;

  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------
     Construção da overlay (uma instância reutilizável)
     ------------------------------------------------------------ */
  var root = document.createElement("div");
  root.className = "qsn-overlay";
  root.setAttribute("role", "dialog");
  root.setAttribute("aria-modal", "true");
  root.setAttribute("aria-label", "Cláudia Guerra - NA NARRATIVA DE OUTRAS BOCAS");

  var backdrop = document.createElement("div");
  backdrop.className = "qsn-backdrop";

  var card = document.createElement("div");
  card.className = "qsn-card";

  var closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "qsn-close";
  closeBtn.setAttribute("aria-label", "Fechar");
  closeBtn.innerHTML =
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" ' +
    'stroke-width="2.5" stroke-linecap="round" aria-hidden="true">' +
    '<path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>';

  var media = document.createElement("div");
  media.className = "qsn-media";
  var img = document.createElement("img");
  img.className = "qsn-img";
  img.alt = "";
  img.setAttribute("loading", "lazy");
  img.setAttribute("decoding", "async");
  media.appendChild(img);

  var body = document.createElement("div");
  body.className = "qsn-body";

  var titleEl = document.createElement("h2");
  titleEl.className = "qsn-title";
  titleEl.id = "qsn-title";

  var textWrap = document.createElement("div");
  textWrap.className = "qsn-text";

  // Controle de navegação: setas nas extremidades + contador ao centro
  var nav = document.createElement("div");
  nav.className = "qsn-nav";

  var prevBtn = document.createElement("button");
  prevBtn.type = "button";
  prevBtn.className = "qsn-arrow qsn-arrow-prev";
  prevBtn.setAttribute("aria-label", "Slide anterior");
  prevBtn.innerHTML =
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" ' +
    'stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M15 18l-6-6 6-6"/></svg>';

  var counter = document.createElement("span");
  counter.className = "qsn-counter";
  counter.setAttribute("aria-live", "polite");

  var nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "qsn-arrow qsn-arrow-next";
  nextBtn.setAttribute("aria-label", "Próximo slide");
  nextBtn.innerHTML =
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" ' +
    'stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M9 18l6-6-6-6"/></svg>';

  nav.appendChild(prevBtn);
  nav.appendChild(counter);
  nav.appendChild(nextBtn);

  body.appendChild(titleEl);
  body.appendChild(textWrap);
  body.appendChild(nav);

  card.appendChild(closeBtn);
  card.appendChild(media);
  card.appendChild(body);
  root.appendChild(backdrop);
  root.appendChild(card);
  document.body.appendChild(root);

  /* ------------------------------------------------------------
     Render + open/close/navegação
     ------------------------------------------------------------ */
  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // *texto* (markdown do contexto) vira <em>texto</em>
  function richText(str) {
    return escapeHtml(str).replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  var currentIndex = 0;
  var lastTrigger = null;

  function renderSlide(index) {
    var slide = QSN_SLIDES[index];

    if (slide.title) {
      titleEl.textContent = slide.title;
      titleEl.style.display = "";
    } else {
      titleEl.style.display = "none";
    }

    img.alt = "Imagem da narrativa — capítulo " + (index + 1);
    img.src = QSN_CONFIG.IMAGES_BASE + slide.image;

    textWrap.innerHTML = "";
    slide.paragraphs.forEach(function (para) {
      var p = document.createElement("p");
      p.className = "qsn-p";
      // Quebras de linha do contexto viram quebras suaves no parágrafo
      p.innerHTML = richText(para).replace(/\n/g, "<br>");
      textWrap.appendChild(p);
    });

    // Primeira e última setas desabilitadas nos extremos
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === QSN_SLIDES.length - 1;
    counter.textContent = (index + 1) + " / " + QSN_SLIDES.length;

    if (slide.title) {
      root.setAttribute("aria-label", slide.title);
    }

    body.scrollTop = 0;
  }

  // Texto entra primeiro; a imagem entra em seguida (stagger via CSS)
  function playEnter() {
    card.classList.remove("qsn-enter");
    void card.offsetWidth;
    card.classList.add("qsn-enter");
  }

  function preload(index) {
    if (index < 0 || index >= QSN_SLIDES.length) return;
    var probe = new Image();
    probe.src = QSN_CONFIG.IMAGES_BASE + QSN_SLIDES[index].image;
  }

  function showSlide(index, animate) {
    if (index < 0 || index >= QSN_SLIDES.length) return;

    var open = root.classList.contains("is-open");

    if (animate && open) {
      // Saída → troca de conteúdo → entrada
      card.classList.add("qsn-exiting");
      window.setTimeout(function () {
        currentIndex = index;
        renderSlide(index);
        card.classList.remove("qsn-exiting");
        playEnter();
      }, prefersReducedMotion ? 0 : QSN_CONFIG.EXIT_DELAY);
      return;
    }

    currentIndex = index;
    renderSlide(index);

    if (!open) {
      lastTrigger = document.activeElement;
      document.body.classList.add("qsn-scroll-lock");
      void root.offsetWidth;
      root.classList.add("is-open");
      playEnter();
      closeBtn.focus();
    } else {
      playEnter();
    }
  }

  function openOverlay() {
    preload(currentIndex + 1);
    showSlide(0, false);
  }

  function navigate(delta) {
    if (!root.classList.contains("is-open")) return;
    var next = currentIndex + delta;
    if (next < 0 || next >= QSN_SLIDES.length) return;
    preload(next + delta);
    showSlide(next, true);
  }

  function closeOverlay() {
    if (!root.classList.contains("is-open")) return;
    root.classList.remove("is-open");
    card.classList.remove("qsn-enter", "qsn-exiting");
    document.body.classList.remove("qsn-scroll-lock");
    var trigger = lastTrigger;
    lastTrigger = null;
    if (trigger && trigger.focus) {
      window.setTimeout(function () {
        trigger.focus();
      }, prefersReducedMotion ? 0 : QSN_CONFIG.CLOSE_DELAY);
    }
  }

  /* ------------------------------------------------------------
     Eventos
     ------------------------------------------------------------ */
  openBtn.addEventListener("click", openOverlay);
  closeBtn.addEventListener("click", closeOverlay);
  backdrop.addEventListener("click", closeOverlay);

  prevBtn.addEventListener("click", function () { navigate(-1); });
  nextBtn.addEventListener("click", function () { navigate(1); });

  // Teclado: Escape fecha; setas navegam; Tab fica preso na overlay
  document.addEventListener("keydown", function (e) {
    if (!root.classList.contains("is-open")) return;

    if (e.key === "Escape") {
      e.preventDefault();
      closeOverlay();
      return;
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      navigate(-1);
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      navigate(1);
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

  // Gestos de toque: deslizar horizontalmente troca de slide
  var touchX = null;
  var touchY = null;
  card.addEventListener("touchstart", function (e) {
    var t = e.changedTouches[0];
    touchX = t.clientX;
    touchY = t.clientY;
  }, { passive: true });

  card.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var t = e.changedTouches[0];
    var dx = t.clientX - touchX;
    var dy = t.clientY - touchY;
    touchX = null;
    touchY = null;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) navigate(1); else navigate(-1);
    }
  }, { passive: true });

})();
