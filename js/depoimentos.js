/* ============================================================
   Portal Cláudia Guerra — Depoimentos de Empatia
   Os depoimentos são exibidos diretamente na página, sem overlay.
   Para adicionar um novo depoimento, inclua um objeto no array
   "depoimentos" abaixo, no formato:
     { id: 1, nome: "Nome da pessoa", frase: "Frase ou trecho do depoimento",
       url: "https://www.youtube.com/embed/VIDEO_ID" }
   A URL deve ser o link de EMBED do vídeo (YouTube/Vimeo).
   Ao cadastrar o primeiro depoimento real, os cards ilustrativos
   "Em breve" desaparecem automaticamente.
   ============================================================ */
const depoimentos = [];

function carregarDepoimentos() {
  const grid = document.getElementById('depoimentos-grid');
  if (!grid) return;

  grid.innerHTML = '';

  if (depoimentos.length === 0) {
    // SIMULAÇÃO ILUSTRATIVA — exibida apenas enquanto não há depoimentos
    // cadastrados. Mostra como cada card ficará, marcado com "Em breve".
    const exemplos = [
      'Aqui aparecerá o relato de alguém que viveu a transformação de perto.',
      'Espaço reservado para o vídeo de quem caminhou junto nessa trajetória.',
      'O seu depoimento pode estar aqui. Envie o seu registro para o portal.'
    ];

    exemplos.forEach(function (frase, i) {
      const card = document.createElement('article');
      card.className = 'depoimento-card depoimento-card--breve';
      card.innerHTML =
        '<div class="depoimento-video depoimento-video-breve">' +
          '<span class="depoimento-play" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' +
          '</span>' +
          '<span class="depoimento-chip">Em breve</span>' +
          '<div class="depoimento-info">' +
            '<h4 class="depoimento-nome depoimento-nome-breve">Nome da pessoa</h4>' +
            '<p class="depoimento-frase">"' + frase + '"</p>' +
          '</div>' +
        '</div>';
      grid.appendChild(card);
    });
    return;
  }

  depoimentos.forEach(function (item) {
    const card = document.createElement('article');
    card.className = 'depoimento-card depoimento-card--real';

    let nomeHtml = item.nome ? '<h4 class="depoimento-nome">' + item.nome + '</h4>' : '';
    let fraseHtml = item.frase ? '<p class="depoimento-frase">"' + item.frase + '"</p>' : '';

    card.innerHTML =
      '<div class="depoimento-video">' +
        '<iframe src="' + item.url + '" title="Depoimento' + (item.nome ? ' — ' + item.nome : '') + '" allowfullscreen loading="lazy"></iframe>' +
      '</div>' +
      '<div class="depoimento-info">' +
        nomeHtml +
        fraseHtml +
      '</div>';

    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', carregarDepoimentos);
