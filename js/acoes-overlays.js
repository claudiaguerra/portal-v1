/* ============================================================
   Portal Cláudia Guerra — Overlays dos cards da seção "Ações"
   Código escopado (prefixo "acoes-"), sem variáveis globais.
   Cada card expandido abre uma overlay (sem imagens) com os
   sub-itens do grupo, notas e contatos clicáveis (site,
   Instagram, WhatsApp e telefone). Segue o padrão visual das
   overlays de "Quem Sou" (js/qs-overlays.js).
   Vanilla JS, compatível com Hostinger/Vercel (sem Node).
   ============================================================ */
(function () {
  "use strict";

  var ACOES_CONFIG = {
    CLOSE_DELAY: 320 // ms — alinhado à transição de fechamento do CSS
  };

  /* ------------------------------------------------------------
     DADOS — 6 grupos de ações (títulos, textos e contatos EXATOS)
     ------------------------------------------------------------ */
  var ACOES_GRUPOS = [
    {
      id: 1,
      title: "Proteção às Mulheres e Famílias",
      items: [
        {
          titulo: "ONG SOS Mulheres (SOS Mulher e Família de Uberlândia)",
          descricao: "É uma organização não governamental de utilidade pública cofundada de forma voluntária por Cláudia Guerra na década de 1990. Atua há mais de 27 anos prestando acolhimento e atendimento social, psicológico e jurídico continuado e gratuito para mulheres e seus familiares em situação de violência conjugal, familiar e de gênero.",
          contatos: [
            { tipo: "site", rotulo: "Site", valor: "https://sosmulheres.org.br/" },
            { tipo: "instagram", rotulo: "Instagram", valor: "@sosmulheresudi" },
            { tipo: "whatsapp", rotulo: "WhatsApp", valor: "+55 34 99636-7862" }
          ]
        },
        {
          titulo: "Casa Abrigo Travessia",
          descricao: "Um serviço público municipal de acolhimento institucional provisório, de endereço sigiloso por questões de segurança, voltado a abrigar mulheres em risco iminente de morte devido à violência doméstica, acompanhadas de seus filhos menores de idade. Cláudia Guerra foi diretora e gestora de políticas públicas na Prefeitura de Uberlândia, tendo coordenado diretamente a Casa Abrigo no período de implantação de sua estrutura física (2001–2002).",
          notas: [
            {
              rotulo: "Informações de Acesso",
              texto: "O encaminhamento é sigiloso e feito exclusivamente via Delegacia Especializada de Atendimento à Mulher (DEAM) ou órgãos judiciais da rede de proteção."
            }
          ],
          contatos: [
            { tipo: "site", rotulo: "Site institucional", valor: "https://www.uberlandia.mg.gov.br/" }
          ]
        },
        {
          titulo: "Programa PAM / PPVD (Patrulha de Atendimento Multidisciplinar / Patrulha de Prevenção à Violência Doméstica)",
          descricao: "O Programa PAM (ativo de 2003 a 2015) foi uma patrulha de atendimento pioneira idealizada em parceria entre a ONG SOS Mulher e Família, a Polícia Militar de Minas Gerais (PMMG), a Prefeitura de Uberlândia e a Universidade Federal de Uberlândia (UFU). Consistia em visitas domiciliares ativas e multiprofissionais às famílias envolvidas em conflitos intrafamiliares. Atualmente, esse legado de prevenção e fiscalização ativa é continuado pela PPVD (Patrulha de Prevenção à Violência Doméstica) da Polícia Militar, com a qual Cláudia colabora ativamente na capacitação de agentes e distribuição de materiais de orientação.",
          contatos: [
            { tipo: "site", rotulo: "Site com Guia de Proteção", valor: "https://claudiaguerra.com.br/guia-de-seguranca-as-mulheres/" },
            { tipo: "instagram", rotulo: "Instagram", valor: "@claudiaguerraudi" },
            { tipo: "telefone", rotulo: "Telefone PPVD (32º BPM)", valor: "(34) 99968-5878" }
          ]
        },
        {
          titulo: "Redes de Proteção e a Cultura da Paz nas Famílias",
          descricao: "Consolidam-se na articulação permanente dos órgãos públicos da região para garantir fluxos únicos de atendimento rápido e na publicação de cartilhas de apoio (como o livro coordenado por Cláudia, 'Da Lagarta à Borboleta') para desatar ciclos de violência intrafamiliar.",
          contatos: []
        }
      ]
    },
    {
      id: 2,
      title: "Políticas Públicas para Mulheres",
      items: [
        {
          titulo: "Divisão dos Direitos das Mulheres",
          descricao: "Setor de gestão pública na Prefeitura de Uberlândia do qual Cláudia Guerra foi diretora e gestora. Sob sua liderança, o órgão estruturou as primeiras políticas públicas municipais focadas na promoção da igualdade de gênero, autonomia econômica feminina e na estruturação da Rede de Enfrentamento à Violência contra as Mulheres.",
          contatos: [
            { tipo: "site", rotulo: "Site institucional", valor: "https://www.uberlandia.mg.gov.br/" }
          ]
        },
        {
          titulo: "Conselho Municipal dos Direitos das Mulheres (CMDM) de Uberlândia",
          descricao: "Órgão colegiado paritário de caráter deliberativo, consultivo e fiscalizador, que Cláudia Guerra ajudou a fundar de forma voluntária nos anos 1990. O CMDM é responsável por propor, monitorar e avaliar as políticas públicas municipais direcionadas à garantia dos direitos das mulheres.",
          contatos: [
            { tipo: "instagram", rotulo: "Instagram", valor: "@cmdm.udi" }
          ]
        },
        {
          titulo: "Procuradoria da Mulher (Câmara Municipal de Uberlândia)",
          descricao: "Órgão do Poder Legislativo implementado sob a liderança de Cláudia Guerra durante o seu mandato parlamentar. Cláudia assumiu a responsabilidade histórica de ser a primeira Procuradora Titular da Mulher na história da Câmara Municipal de Uberlândia, criando um canal direto de denúncias, encaminhamento de vítimas de violência e fiscalização de políticas públicas estaduais e municipais de gênero.",
          contatos: [
            { tipo: "site", rotulo: "Site", valor: "https://www.camarauberlandia.mg.gov.br/" },
            { tipo: "instagram", rotulo: "Instagram", valor: "@procuradoriadamulherudi" }
          ]
        },
        {
          titulo: "Defesa da autonomia feminina e Enfrentamento às violências",
          descricao: "integram as ações práticas da Procuradoria da Mulher e dos conselhos, garantindo o acompanhamento de leis protetivas e o monitoramento das taxas locais de feminicídio.",
          contatos: []
        }
      ]
    },
    {
      id: 3,
      title: "Mandato e Atuação Legislativa",
      items: [
        {
          titulo: "Mandato Parlamentar 'Eu Meto a Colher' (Cláudia Guerra)",
          descricao: "Atuação de Cláudia Guerra como Vereadora na Câmara Municipal de Uberlândia (legislatura 2021–2024). O mandato caracterizou-se pela forte defesa dos direitos humanos, sustentabilidade, proteção das mulheres e inclusão social. Por meio de emendas impositivas parlamentares, o mandato destinou milhões de reais para o fortalecimento direto de organizações da sociedade civil locais (como a própria SOS Mulheres e entidades de apoio social e de saúde).",
          contatos: [
            { tipo: "site", rotulo: "Site oficial", valor: "https://claudiaguerra.com.br/" },
            { tipo: "instagram", rotulo: "Instagram", valor: "@claudiaguerraudi" },
            { tipo: "whatsapp", rotulo: "WhatsApp de Atendimento", valor: "+55 34 98428-2416" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Educação, Pesquisa e Formação",
      items: [
        {
          titulo: "Pesquisa Acadêmica e Doutorado em História (UFU / USP)",
          descricao: "Atuação de Cláudia Guerra como professora universitária de pós-graduação e graduação, aliada ao seu trabalho de pesquisa acadêmica focado na história social, gênero e violência doméstica. Autora do livro 'Da Lagarta à Borboleta: Pesquisas e Intervenções em Violência Intrafamiliar' (decorrente do projeto PEIC-UFU), ela traduz as descobertas das teses acadêmicas em políticas públicas reais para a população.",
          contatos: [
            { tipo: "site", rotulo: "Plataforma de vínculo acadêmico", valor: "https://ufu.br/" }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Participação Social e Voluntariado",
      items: [
        {
          titulo: "NEGUEM/UFU (Núcleo de Estudos de Gênero da UFU)",
          descricao: "Núcleo de estudos, pesquisa e extensão ligado à Universidade Federal de Uberlândia, cofundado por Cláudia Guerra de forma voluntária nos anos 1990. O NEGUEM serve como uma importante ponte entre a produção de ciência e as lutas sociais, construindo debates, pesquisas científicas e promovendo eventos em prol dos direitos das minorias e igualdade de gênero.",
          contatos: [
            { tipo: "site", rotulo: "Site", valor: "https://neguem.ufu.br/" },
            { tipo: "instagram", rotulo: "Instagram", valor: "@neguem_ufu" }
          ]
        },
        {
          titulo: "Promotoras Legais Populares (PLPs Uberlândia)",
          descricao: "Projeto de capacitação comunitária no qual Cláudia atua de forma voluntária. Consiste na formação de lideranças femininas populares (com cursos de noções básicas de Direito, Direitos Humanos das Mulheres e funcionamento do Estado). Uma vez formadas, as PLPs atuam de forma descentralizada em seus bairros, orientando e fazendo a triagem de demandas de violência e garantindo o acesso democrático à justiça.",
          contatos: [
            { tipo: "instagram", rotulo: "Instagram de referência", valor: "@plpsuberlandia" }
          ]
        },
        {
          titulo: "Grupo Mulheres do Brasil (Núcleo Uberlândia)",
          descricao: "Movimento suprapartidário nacional do qual Cláudia Guerra é participante no núcleo local. Reúne mulheres de diversos setores para debater e propor ações nas áreas de educação, saúde, empreendedorismo e erradicação da violência doméstica.",
          contatos: [
            { tipo: "site", rotulo: "Site oficial", valor: "https://www.grupomulheresdobrasil.org.br/" },
            { tipo: "instagram", rotulo: "Instagram", valor: "@grupomulheresdobrasil_uberlandia" }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Diversidade, Cultura e Inclusão",
      descricao_introdutoria: "Este grupo é caracterizado pelas ações transversais de Cláudia pela promoção dos direitos humanos, inclusão social e diversidade:",
      topicos: [
        {
          titulo: "Cultura e Inclusão",
          texto: "Cláudia é uma das fundadoras da Academia de Letras de Uberlândia (fundada em 2025) e defende ativamente o fomento de manifestações populares tradicionais da cultura negra, periférica e congados."
        },
        {
          titulo: "Saúde e Educação Inclusiva",
          texto: "Pauta a garantia de direitos de pessoas neurodivergentes (autistas, TDAH) com atendimento escolar especializado e acolhimento humanizado de mães atípicas no SUS."
        },
        {
          titulo: "Economia do Cuidado e Trabalho",
          texto: "Defende a divisão de tarefas e a valorização das pessoas que exercem trabalhos informais e de cuidado diário na sociedade."
        }
      ],
      contatos: []
    }
  ];

  var section = document.getElementById("acoes");
  if (!section) return;

  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------
     Construção da overlay (uma instância reutilizável, sem imagem)
     ------------------------------------------------------------ */
  var root = document.createElement("div");
  root.className = "acoes-overlay";
  root.setAttribute("role", "dialog");
  root.setAttribute("aria-modal", "true");
  root.setAttribute("aria-labelledby", "acoes-overlay-title");

  var backdrop = document.createElement("div");
  backdrop.className = "acoes-backdrop";

  var card = document.createElement("div");
  card.className = "acoes-card";

  var closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "acoes-close";
  closeBtn.setAttribute("aria-label", "Fechar");
  closeBtn.innerHTML =
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" ' +
    'stroke-width="2.5" stroke-linecap="round" aria-hidden="true">' +
    '<path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>';

  var body = document.createElement("div");
  body.className = "acoes-body";

  var eyebrow = document.createElement("p");
  eyebrow.className = "acoes-eyebrow";
  eyebrow.textContent = "Ações";

  var titleEl = document.createElement("h2");
  titleEl.className = "acoes-title";
  titleEl.id = "acoes-overlay-title";

  var textWrap = document.createElement("div");
  textWrap.className = "acoes-text";

  body.appendChild(eyebrow);
  body.appendChild(titleEl);
  body.appendChild(textWrap);

  card.appendChild(closeBtn); // desktop: dentro do cartão
  card.appendChild(body);
  root.appendChild(backdrop);
  root.appendChild(card);
  document.body.appendChild(root);

  /* No mobile o botão fechar flutua sobre o backdrop (fora do cartão),
     com área de toque de 44px — mesmo padrão das overlays de "Quem Sou". */
  function syncCloseBtnPlacement() {
    var isMobile = window.matchMedia &&
      window.matchMedia("(max-width: 767px)").matches;
    if (isMobile && closeBtn.parentNode !== root) {
      root.insertBefore(closeBtn, card);
    } else if (!isMobile && closeBtn.parentNode !== card) {
      card.appendChild(closeBtn);
    }
  }
  syncCloseBtnPlacement();
  window.addEventListener("resize", syncCloseBtnPlacement);

  var lastTrigger = null;

  /* ------------------------------------------------------------
     Contatos clicáveis
     ------------------------------------------------------------ */
  function digits(v) {
    return String(v).replace(/\D+/g, "");
  }

  function contactHref(tipo, valor) {
    if (tipo === "instagram") {
      return "https://www.instagram.com/" + String(valor).replace(/^@/, "");
    }
    if (tipo === "whatsapp") {
      return "https://wa.me/" + digits(valor);
    }
    if (tipo === "telefone") {
      var d = digits(valor);
      return "tel:+" + (d.indexOf("55") === 0 ? d : "55" + d);
    }
    return valor; // site
  }

  function contactIsExternal(tipo) {
    return tipo === "site" || tipo === "instagram" || tipo === "whatsapp";
  }

  /* Rótulo visível: para sites, sem o prefixo https:// (ex.: nomedosite.com.br/home) */
  function displayLabel(tipo, valor) {
    if (tipo === "site") {
      return String(valor).replace(/^https?:\/\//i, "").replace(/\/+$/, "");
    }
    return valor;
  }

  /* Valor copiado no botão de telefone: formato internacional +55 (DD) número */
  function copyValue(valor) {
    var d = digits(valor);
    var local = d.indexOf("55") === 0 ? d.slice(2) : d;
    var ddd = local.slice(0, 2);
    var rest = local.slice(2);
    var part =
      rest.length === 8
        ? rest.slice(0, 4) + "-" + rest.slice(4)
        : rest.slice(0, 5) + "-" + rest.slice(5);
    return "+55 " + ddd + " " + part;
  }

  function contactIcon(tipo) {
    if (tipo === "site") {
      return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" ' +
        'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
    }
    if (tipo === "instagram") {
      return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" ' +
        'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>' +
        '<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>';
    }
    if (tipo === "whatsapp") {
      return '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">' +
        '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
    }
    // telefone
    return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
  }

  function buildContact(tipo, rotulo, valor) {
    var isPhone = tipo === "telefone";
    var el = document.createElement(isPhone ? "button" : "a");
    if (isPhone) el.type = "button";
    el.className = "acoes-contact acoes-contact-" + tipo;
    el.setAttribute("aria-label", (isPhone ? "Copiar número — " : rotulo + " — ") + displayLabel(tipo, valor));
    if (isPhone) {
      // Telefone: a função é apenas copiar o número (toast via [data-copy] do main.js)
      el.title = "Copiar número";
      el.setAttribute("data-copy", copyValue(valor));
      el.setAttribute("data-copy-message", "Telefone copiado para a Área de Transferência!");
    } else {
      el.title = valor;
      el.href = contactHref(tipo, valor);
      if (contactIsExternal(tipo)) {
        el.target = "_blank";
        el.rel = "noopener noreferrer";
      }
    }
    var icon = document.createElement("span");
    icon.className = "acoes-contact-icon";
    icon.innerHTML = contactIcon(tipo);
    var label = document.createElement("span");
    label.className = "acoes-contact-label";
    label.textContent = displayLabel(tipo, valor);
    el.appendChild(icon);
    el.appendChild(label);
    return el;
  }

  /* ------------------------------------------------------------
     Render
     ------------------------------------------------------------ */
  function getEntries(grupo) {
    if (grupo.topicos) {
      return grupo.topicos.map(function (t) {
        return { titulo: t.titulo, texto: t.texto };
      });
    }
    return (grupo.items || []).map(function (it) {
      return { titulo: it.titulo, texto: it.descricao, notas: it.notas, contatos: it.contatos };
    });
  }

  function renderGrupo(index) {
    var grupo = ACOES_GRUPOS[index];
    titleEl.textContent = grupo.title;
    closeBtn.setAttribute("aria-label", "Fechar — " + grupo.title);
    textWrap.innerHTML = "";

    if (grupo.descricao_introdutoria) {
      var intro = document.createElement("p");
      intro.className = "acoes-intro";
      intro.textContent = grupo.descricao_introdutoria;
      textWrap.appendChild(intro);
    }

    getEntries(grupo).forEach(function (entry) {
      var item = document.createElement("div");
      item.className = "acoes-item";

      var itemTitle = document.createElement("h3");
      itemTitle.className = "acoes-item-title";
      itemTitle.textContent = entry.titulo;
      item.appendChild(itemTitle);

      var itemText = document.createElement("p");
      itemText.className = "acoes-item-text";
      itemText.textContent = entry.texto;
      item.appendChild(itemText);

      if (entry.notas && entry.notas.length) {
        entry.notas.forEach(function (nota) {
          var note = document.createElement("div");
          note.className = "acoes-note";
          var noteLabel = document.createElement("strong");
          noteLabel.className = "acoes-note-label";
          noteLabel.textContent = nota.rotulo;
          note.appendChild(noteLabel);
          var noteText = document.createElement("span");
          noteText.className = "acoes-note-text";
          noteText.textContent = nota.texto;
          note.appendChild(noteText);
          item.appendChild(note);
        });
      }

      if (entry.contatos && entry.contatos.length) {
        var contacts = document.createElement("div");
        contacts.className = "acoes-contacts";
        entry.contatos.forEach(function (c) {
          contacts.appendChild(buildContact(c.tipo, c.rotulo, c.valor));
        });
        item.appendChild(contacts);
      }

      textWrap.appendChild(item);
    });

    body.scrollTop = 0;
  }

  /* ------------------------------------------------------------
     Open / close
     ------------------------------------------------------------ */
  function lockScroll() {
    document.body.classList.add("acoes-scroll-lock");
  }

  function unlockScroll() {
    document.body.classList.remove("acoes-scroll-lock");
  }

  function openGrupo(index) {
    if (index < 0 || index >= ACOES_GRUPOS.length) return;
    var alreadyOpen = root.classList.contains("is-open");
    if (!alreadyOpen) {
      lastTrigger = document.activeElement;
      lockScroll();
    }
    renderGrupo(index);
    if (!alreadyOpen) {
      void root.offsetWidth;
      root.classList.add("is-open");
      closeBtn.focus();
    }
  }

  function closeOverlay() {
    if (!root.classList.contains("is-open")) return;
    root.classList.remove("is-open");
    unlockScroll();
    var trigger = lastTrigger;
    lastTrigger = null;
    if (trigger && trigger.focus) {
      window.setTimeout(function () {
        trigger.focus();
      }, prefersReducedMotion ? 0 : ACOES_CONFIG.CLOSE_DELAY);
    }
  }

  /* ------------------------------------------------------------
     Eventos
     ------------------------------------------------------------ */
  // Disparado pelos cards da seção (ver js/acoes-cards.js)
  section.addEventListener("acoes:open", function (e) {
    var index = e.detail && e.detail.index;
    if (typeof index === "number") openGrupo(index);
  });

  closeBtn.addEventListener("click", closeOverlay);

  // Clique fora do cartão (backdrop)
  backdrop.addEventListener("click", closeOverlay);

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
