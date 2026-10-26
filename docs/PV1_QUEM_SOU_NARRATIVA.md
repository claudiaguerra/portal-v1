# PV1 — Sessão "Quem Sou": Narrativa em Carrossel (Overlay)

> Documento de contexto para o terminal Freebuff. Ler obrigatoriamente antes de implementar.

## 1. Objetivo
Na seção "Quem Sou" (`id="quem-sou"`) do portal-v1, substituir a CTA atual por um botão de destaque
"Cláudia Guerra - NA NARRATIVA DE OUTRAS BOCAS" que abre um overlay com carrossel narrativo de 10 slides manuais.

## 2. Escopo estrito
- Trabalhar APENAS na seção "Quem Sou". Demais seções não devem ser alteradas.

## 3. Requisitos funcionais

### 3.1 Botão novo
- Substituir o botão "Conheça minha história completa" por "Cláudia Guerra - NA NARRATIVA DE OUTRAS BOCAS".
- Destaque visual imponente: ajustar tamanho, peso da fonte, padding e adicionar efeito de hover sutil,
  mantendo a paleta de cores oficial do site.
- O botão compõe a entrada visual junto à imagem `imagens/qs/QS_MINHA_HISTORIA.png`.

### 3.2 Overlay (modal)
- Ao clicar no botão, abrir tela sobreposta com fundo semi-transparente cobrindo a tela.
- Botão discreto de "Fechar" (X) no canto superior direito.

### 3.3 Carrossel
- Exatamente 10 slides manuais (SEM autoplay / troca automática).
- Botões discretos e elegantes de Avançar/Retroceder nas extremidades esquerda e direita.
- Imagens em ordem, da pasta `imagens/qs/narrativa/`:
  `narrativa01.jpg`, `narrativa02.jpg`, `narrativa03.jpg`, `narrativa04.jpg`, `narrativa05.jpg`,
  `narrativa06.jpg`, `narrativa07.jpg`, `narrativa08.jpg`, `narrativa09.jpg`, `narrativa10.jpg`.

### 3.4 Animações
- Transição suave entre slides (fade ou deslize).
- O texto aparece primeiro; a imagem aparece em seguida, um pouco mais lenta.

### 3.5 Textos dos slides
- Inserir os blocos abaixo EXATAMENTE como fornecidos.
- RESTRIÇÃO: as marcações "slide 1", "slide 2", etc. são apenas orientação.
  NÃO inserir no HTML e NÃO virar títulos/cabeçalhos. Apenas o bloco de texto puro.

## 4. Textos dos slides

### slide 1
Cláudia Guerra - NA NARRATIVA DE OUTRAS BOCAS

Há pessoas que escolhem a vida pública como profissão. Outras chegam até ela porque a própria vida lhes mostrou que permanecer indiferente nunca foi uma opção.

A trajetória de Cláudia Guerra nasceu muito antes da política institucional. Ela começou dentro de casa, cercada por mulheres que transformavam dificuldades em coragem, responsabilidade em cuidado e afeto em força para seguir adiante. Foi nesse ambiente que ela aprendeu que justiça não é apenas uma palavra. É uma prática cotidiana.

Nascida em Goiânia, Cláudia chegou ainda criança a Uberlândia, cidade onde construiu suas raízes, formou sua família, desenvolveu sua carreira e escolheu dedicar sua vida. Mineira por pertencimento e por convicção, foi ali que descobriu sua vocação para ensinar, acolher, pesquisar, mobilizar pessoas e construir caminhos coletivos.

Sua história pessoal nunca esteve separada de sua história pública.

A separação dos pais, quando tinha apenas sete anos, fez com que crescesse observando de perto a força da mãe, Maria Lúcia, assistente social que assumiu a criação de quatro filhos com o apoio indispensável da avó Mira e das tias Maria Delourdes e Maria José. Eram mulheres que não falavam sobre protagonismo feminino porque simplesmente o viviam todos os dias.

Foi nesse ambiente que Cláudia aprendeu que cuidar não é um gesto de fragilidade, mas de coragem. Aprendeu que nenhuma transformação social acontece sem solidariedade, sem trabalho e sem responsabilidade compartilhada.

### slide 2
Décadas depois, compreenderia que aquelas experiências moldariam não apenas sua personalidade, mas também todas as escolhas profissionais e políticas que faria ao longo da vida.

Outro capítulo marcante veio da história de seu pai, Glaris.

Ainda menino, ele testemunhou o assassinato da própria mãe pelo pai. Uma tragédia que atravessou gerações e deixou marcas profundas em sua vida. Durante muitos anos, pai e filha conviveram pouco, consequência dos caminhos diferentes que seguiram.

Já idoso, Glaris mudou-se para Uberlândia a convite da filha. Foi a oportunidade para que ambos reconstruíssem uma relação interrompida pelo tempo. Pouco depois veio o diagnóstico de um câncer em estágio terminal. Ao lado da família, Cláudia participou intensamente dos cuidados até seus últimos dias.

Essa experiência transformou definitivamente sua compreensão sobre violência, cuidado, perdão e reconstrução. Mais do que uma lembrança familiar, tornou-se uma das bases da sua atuação permanente pela proteção das mulheres, pela prevenção da violência doméstica e pela construção de uma cultura de paz.

Sua história, portanto, nunca foi construída apenas por livros ou pela política. Foi construída pela vida.

Foi justamente essa experiência humana que encontrou na educação seu principal instrumento de transformação.

### slide 3
Cláudia tornou-se professora e fez da sala de aula um espaço permanente de diálogo e formação cidadã. Doutora em História pela Universidade Federal de Uberlândia, dedicou sua pesquisa à compreensão da violência nos relacionamentos, tema que dialogava diretamente com questões que já faziam parte de sua trajetória pessoal e profissional.

Há mais de vinte e cinco anos leciona em cursos de graduação e pós-graduação, ministrando disciplinas como Sociologia, Antropologia, Ciência Política, Filosofia e Relações Étnico-Raciais e Culturais.

Para ela, ensinar nunca significou apenas transmitir conhecimento. Sempre significou formar pessoas capazes de compreender o mundo, respeitar as diferenças e participar ativamente da construção da democracia.

Essa mesma compreensão levou sua atuação muito além da universidade.

Ao longo de sua caminhada passou a realizar palestras, consultorias, oficinas e rodas de conversa sobre prevenção da violência doméstica, economia do cuidado, sexualidades e afetividades, direitos sexuais e reprodutivos, educação para igualdade, climatério, menopausa, mulheres na política, masculinidades, ética, redes sociais, comunicação e formação cidadã.

Em cada encontro, manteve o mesmo propósito: transformar conhecimento em instrumento de autonomia e participação social.

### slide 4
Mas sua atuação nunca ficou restrita às salas de aula.

Muito antes de ocupar qualquer cargo público, Cláudia já participava da construção de organizações e políticas voltadas aos direitos das mulheres.

Na década de 1990 esteve entre as pessoas que ajudaram a criar o SOS Mulher e Família, o Conselho Municipal dos Direitos das Mulheres (CMDM) e o Núcleo de Estudos de Gênero (NEGUEM), da Universidade Federal de Uberlândia.

Nos anos seguintes participou também da criação do Programa de Abordagem Multidisciplinar Domiciliar em Violência Familiar (PAM), iniciativa que atuou entre 2003 e 2015.

Seu compromisso permaneceu mesmo depois dessas estruturas estarem consolidadas. Continuou apoiando como voluntária-fundadora as instituições que seguem em atividade, acreditando que a participação da sociedade civil é indispensável para fortalecer políticas públicas permanentes.

Desde 2018 desenvolve oficinas com mulheres e pessoas LGBT+ privadas de liberdade na Penitenciária Professor Pimenta da Veiga.

Também tornou-se Promotora Legal Popular, formando mulheres para o exercício da cidadania, do acesso à justiça, das políticas públicas e dos direitos humanos.

### slide 5
Participa de iniciativas como o Elas em Movimento, do Comitê Uberlândia do Mulheres do Brasil e da Associação dos Usuários(as) do SUS (ASSUS), sempre articulando educação, participação social e fortalecimento comunitário.

Sua voz também encontrou espaço nos meios de comunicação. Apresentou o programa *Revista da Cidade*, da TV Paranaíba, ainda na década de 1990, além dos programas *Mulheridade News*, na CBL/YouTube, e *Mulheres em Movimento*, na Rádio Universitária FM 107,5, ampliando o diálogo com diferentes públicos sobre cidadania, igualdade e direitos humanos.

Ao mesmo tempo, nunca deixou de cultivar aquilo que alimenta sua dimensão mais pessoal.

Escreve poesias, toca tambor, aprecia a leitura, a dança, o cinema, o carnaval, a cultura popular, o convívio familiar e uma boa partida de truco entre amigos.

Há mais de vinte anos divide a vida com Ricardo, companheiro de caminhada e parceiro na construção de uma família baseada no respeito e na corresponsabilidade. É mãe de Vitor e Dudu, educados, segundo ela, pelo exemplo da ética, do diálogo, do respeito às diferenças e da igualdade. A cachorrinha Babi completa esse cotidiano que costuma definir como seu lugar de equilíbrio e afeto.

Foi toda essa trajetória que, naturalmente, encontrou a política institucional.

### slide 6
Em 2001 participou da estruturação da Divisão de Direitos das Mulheres da Prefeitura de Uberlândia, tornando-se sua primeira diretora durante a gestão do prefeito Zaire Rezende.

No ano seguinte participou diretamente da criação da Casa Abrigo Travessia, equipamento público que continua oferecendo acolhimento sigiloso a mulheres e filhos em situação de risco decorrente da violência doméstica.

Anos depois, em 2020, foi eleita vereadora de Uberlândia com 2.699 votos.

Durante o mandato, entre 2021 e 2024, presidiu a Comissão dos Direitos das Mulheres e a Comissão de Educação e implantou a Procuradoria da Mulher da Câmara Municipal, tornando-se sua primeira Procuradora da Mulher.

Sua atuação parlamentar concentrou-se na defesa da autonomia das mulheres, da educação pública de qualidade, da diversidade, da saúde, dos direitos sexuais e reprodutivos, da geração de trabalho e renda, da segurança alimentar e de políticas públicas construídas a partir da escuta permanente da população.

Em 2022 apresentou seu nome para representar Minas Gerais na Assembleia Legislativa.

Recebeu quase dezesseis mil votos distribuídos por mais de quatrocentos municípios mineiros, tornando-se suplente para a legislatura 2023–2026.

### slide 7
Também presidiu o PDT de Uberlândia entre 2023 e 2025, foi presidente da Ação da Mulher Trabalhista do PDT de Uberlândia, vice-presidente da AMT de Minas Gerais, integrante do Movimento Trabalhista pela Educação, Superintendente Regional da União dos Vereadores do Brasil no Triângulo Mineiro e participante do Legislativo de Minas, fortalecendo espaços de formação política e integração entre mandatos.

Olhar para a trajetória de Cláudia Guerra é perceber que nenhuma dessas etapas surgiu de forma isolada.

A professora dialoga com a pesquisadora.
A pesquisadora fortalece a gestora pública.
A gestora inspira a ativista.
A ativista sustenta a parlamentar.

E todas elas encontram origem na menina criada por mulheres que ensinaram, pelo exemplo, que cuidar das pessoas também é uma forma de transformar o mundo.

Essa continua sendo a essência da sua caminhada.

Mais do que ocupar cargos, Cláudia Guerra escolheu construir uma vida dedicada ao conhecimento, ao cuidado, à participação cidadã e à defesa da dignidade humana. Uma trajetória que permanece em construção, guiada pela convicção de que a política, quando nasce da escuta, da ética e do compromisso com as pessoas, pode ser uma das mais importantes ferramentas de transformação social.

### slide 8
Existe um traço que atravessa toda a trajetória de Cláudia Guerra e explica escolhas que, vistas isoladamente, poderiam parecer caminhos diferentes. A universidade, o voluntariado, a gestão pública, a política institucional, a comunicação e a defesa dos direitos humanos nunca foram capítulos independentes. Sempre fizeram parte de uma mesma vocação: cuidar das pessoas.

Para Cláudia, cuidar nunca significou apenas oferecer proteção. Significa criar condições para que cada pessoa possa viver com autonomia, dignidade e oportunidades. É por isso que sua atuação sempre esteve voltada para a educação, para a construção de políticas públicas e para o fortalecimento da cidadania.

Sua formação acadêmica lhe ofereceu ferramentas para compreender as desigualdades. A experiência como professora mostrou que o conhecimento transforma vidas. O trabalho voluntário revelou a força da organização comunitária. A gestão pública ensinou que boas ideias precisam se transformar em políticas permanentes. E a atuação parlamentar demonstrou que escutar a população continua sendo o primeiro dever de quem representa o interesse coletivo.

### slide 9
Ao longo dessa caminhada, Cláudia nunca separou teoria e prática.

Enquanto pesquisava violência nos relacionamentos, estava ao lado de mulheres que enfrentavam diariamente essa realidade.
Enquanto ensinava sobre cidadania, ajudava a construir organizações sociais e espaços de acolhimento.
Enquanto defendia políticas públicas, participava diretamente de sua criação e implementação.

Essa coerência tornou-se uma das marcas de sua trajetória.

Mais do que ocupar espaços de poder, sempre buscou construir espaços de participação.
Mais do que falar sobre direitos, dedicou sua vida a criar condições para que eles fossem conhecidos, acessados e exercidos.

Talvez seja por isso que sua atuação seja reconhecida por diferentes áreas da sociedade.

Na educação, pela formação de milhares de estudantes.
Na sociedade civil, pela criação e fortalecimento de organizações que permanecem atuantes.
Na gestão pública, pela participação na implantação de políticas que continuam produzindo resultados.
Na política, pela defesa permanente do diálogo, da escuta e da construção coletiva.

Essa forma de compreender a vida pública também explica sua relação com a cultura.
Para Cláudia, a arte nunca foi um detalhe.

Ela acredita que a cultura fortalece vínculos, amplia o sentimento de pertencimento e humaniza as relações.

Escrever poemas, tocar tambor, participar do carnaval, cantar, dançar ou simplesmente reunir amigos ao redor de uma mesa representam diferentes maneiras de celebrar aquilo que considera essencial: a convivência, a diversidade e a alegria de viver.

A mesma mulher que pesquisa, ensina, escreve projetos e participa de debates também encontra inspiração na música, na literatura, no cinema e nas manifestações populares.

### slide 10
Essa combinação entre sensibilidade e compromisso social faz parte de sua identidade.

Sua caminhada também é marcada por uma característica pouco comum: a capacidade de construir pontes.
Ao longo da vida, transitou entre universidade e comunidade, entre movimentos sociais e instituições públicas, entre pesquisa acadêmica e gestão, entre escuta e ação.
Em todos esses espaços, manteve a convicção de que mudanças duradouras só acontecem quando diferentes pessoas conseguem dialogar em torno de objetivos comuns.

Essa compreensão acompanha sua atuação até hoje.

Independentemente do espaço em que esteja, Cláudia continua acreditando que transformar a realidade exige disposição para ouvir, aprender, construir consensos e trabalhar coletivamente.

Sua história demonstra que políticas públicas não surgem apenas de decisões administrativas.

Elas nascem das experiências das pessoas, das demandas das comunidades, da coragem de enfrentar problemas antigos e da disposição permanente para construir soluções.

Por isso, ao olhar para sua própria trajetória, Cláudia costuma enxergar menos uma sucessão de cargos e mais uma sequência de compromissos assumidos ao longo da vida.

Compromissos com a educação.
Com as mulheres.
Com as famílias.
Com a democracia.
Com a cultura.
Com os direitos humanos.
Com a construção de uma sociedade em que ninguém precise enfrentar sozinho a violência, a desigualdade ou a falta de oportunidades.

Essa talvez seja a melhor forma de compreender sua caminhada.

Ela não foi construída em torno da política.

Foi construída em torno das pessoas.

E é justamente essa escolha que continua orientando cada novo passo de sua história.

## 5. Restrições técnicas
- HTML5 semântico, CSS3 (estilização/animações) e JavaScript puro (Vanilla JS).
- Proibido frameworks ou dependências que exijam Node.js.
- Compatibilidade total com Hostinger e Vercel.
- Acessibilidade: Escape fecha a overlay, atributos aria, gestão de foco.

## 6. Remoção
- Remover o botão "Conheça minhas ações" da seção "Quem Sou" (o `btn-outline` dentro da seção, que aponta para `#acoes`).

## 7. Diretriz de design
- Planejar uma solução ESPECIAL e própria para esta narrativa; NÃO copiar a estrutura de overlays/carrossel já existentes em outras seções, mas também não gerar conflitos com os assets atuais (`css/qs-overlays.css`, `js/main.js`).
