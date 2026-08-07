# GUIA_DE_REGRAS_FB.md

# Guia de Regras Permanentes
## Portal Cláudia Guerra

**Versão:** 1.0

Este documento define as regras obrigatórias para qualquer geração de código, layout, componente ou alteração realizada neste projeto.

Estas regras possuem prioridade sobre qualquer prompt futuro, exceto quando explicitamente substituídas.

---

# REGRA 01 — Compatibilidade com Hospedagem

O projeto será hospedado em um plano **Hostinger Single Web Hosting**.

Toda solução proposta deve ser compatível com este ambiente.

### É obrigatório

- HTML5
- CSS3
- JavaScript Vanilla
- PHP
- MySQL/MariaDB
- WordPress
- Arquivos estáticos

### É permitido

- CSS Variables
- Flexbox
- CSS Grid
- SVG
- Web Components
- Fetch API
- Local Storage
- Session Storage

---

# REGRA 02 — É proibido utilizar

Nunca gerar soluções que dependam de:

- Node.js
- Express
- Next.js
- Nuxt
- NestJS
- Bun
- Deno
- Vite como dependência obrigatória
- npm em produção
- yarn
- pnpm
- Docker
- Containers
- PM2
- Servidores próprios
- APIs locais Node
- SSR (Server Side Rendering)
- Edge Functions
- Serverless Functions
- Cloudflare Workers
- Firebase Functions
- Supabase Edge Functions

Caso alguma funcionalidade exija essas tecnologias, deve ser apresentada uma alternativa compatível com PHP ou JavaScript puro.

---

# REGRA 03 — Dependências

O projeto deve possuir o menor número possível de dependências externas.

Prioridade:

1. HTML
2. CSS
3. JavaScript Vanilla

Bibliotecas somente quando forem realmente indispensáveis.

---

# REGRA 04 — Performance

Todo componente deve priorizar:

- carregamento rápido
- baixo consumo de memória
- baixo uso de CPU
- poucas requisições HTTP
- imagens otimizadas
- lazy loading
- código enxuto

Evitar:

- bibliotecas pesadas
- animações custosas
- DOM excessivo

---

# REGRA 05 — Responsividade

Todo layout deve funcionar em:

- Desktop
- Notebook
- Tablet
- Smartphone

Sem necessidade de código específico para cada dispositivo.

---

# REGRA 06 — Acessibilidade

Sempre considerar:

- contraste adequado
- navegação por teclado
- foco visível
- textos alternativos
- hierarquia correta de headings
- labels em formulários

---

# REGRA 07 — SEO

Sempre estruturar o HTML com:

- header
- nav
- main
- section
- article
- footer

Utilizar:

- meta description
- title
- Open Graph
- Schema.org quando aplicável

---

# REGRA 08 — Organização do Código

Gerar código organizado.

Separar:

- HTML
- CSS
- JavaScript

Evitar arquivos gigantes.

Sempre comentar apenas quando realmente necessário.

---

# REGRA 09 — Compatibilidade

O código deve funcionar nos navegadores modernos sem necessidade de transpilers.

---

# REGRA 10 — Design System

Todo elemento visual deve obedecer integralmente o arquivo:

**Design.md**

O Design.md é a referência oficial do projeto.

Nunca criar identidade visual própria.

Nunca substituir:

- tipografia
- paleta
- espaçamentos
- bordas
- sombras
- botões
- componentes
- estilos

Sempre reutilizar o sistema existente.

Caso alguma informação não esteja presente no Design.md, solicitar orientação em vez de inventar um novo padrão.

---

# REGRA 11 — Componentização

Todo elemento novo deve ser tratado como componente reutilizável.

Exemplos:

- Hero
- Card
- Timeline
- Banner
- CTA
- Footer
- Header
- Menu
- Botões
- Formulários

Cada componente deve possuir responsabilidade única.

---

# REGRA 12 — Consistência Visual

Nunca misturar estilos.

Todo o portal deve parecer ter sido produzido por uma única equipe de design.

---

# REGRA 13 — Animações

Animações devem ser discretas.

Priorizar:

- fade
- slide
- scale leve

Evitar:

- efeitos exagerados
- animações contínuas
- movimentos que prejudiquem leitura

---

# REGRA 14 — Imagens

Sempre utilizar:

- lazy loading
- tamanhos otimizados
- proporções consistentes

Nunca utilizar imagens genéricas quando houver material oficial disponível.

As fotografias oficiais da candidata possuem prioridade absoluta.

---

# REGRA 15 — Identidade da Candidata

Nunca criar:

- nova logomarca
- nova identidade visual
- nova assinatura
- novos símbolos

Sempre utilizar o material oficial fornecido.

Caso a logo oficial exista, ela deve ser reutilizada exatamente como fornecida.

---

# REGRA 16 — Conteúdo

Nunca inventar:

- propostas
- cargos
- histórico
- números
- biografia

Somente utilizar informações fornecidas pelo usuário.

---

# REGRA 17 — Portal

O Portal Cláudia Guerra é:

- institucional
- participativo
- editorial
- eleitoral (durante campanha)

Toda proposta deve respeitar essa arquitetura híbrida.

---

# REGRA 18 — Minas que Cuida

O programa Minas que Cuida é um dos principais elementos do portal.

Sempre preservar sua identidade e estrutura.

---

# REGRA 19 — Prioridades

Sempre priorizar:

1. Clareza
2. Usabilidade
3. Performance
4. Acessibilidade
5. Consistência Visual

Nunca sacrificar essas prioridades por efeitos visuais.

---

# REGRA 20 — Antes de Gerar Qualquer Solução

O FB deve verificar:

- É compatível com Hostinger?
- Usa Node.js?
- Depende de backend incompatível?
- Respeita Design.md?
- Reutiliza os componentes existentes?
- Mantém a identidade oficial?
- Está otimizado para produção?

Se qualquer resposta for negativa, a solução deve ser revisada antes de ser apresentada.

---

# REGRA 21 — Fluxo de Decisão

Em caso de conflito entre documentos, seguir a seguinte ordem de prioridade:

1. Arquivos oficiais do projeto (Design.md, arquitetura, especificações de componentes).
2. Este GUIA_DE_REGRAS_FB.md.
3. Prompt atual do usuário.
4. Sugestões ou padrões internos do FB.

O FB nunca deve substituir uma regra dos documentos oficiais por conveniência técnica ou preferência própria.

---

# REGRA 22 — Modo de Trabalho

Ao receber um novo prompt, o FB deve:

1. Verificar a compatibilidade com este guia.
2. Verificar a conformidade com o Design.md.
3. Identificar possíveis conflitos técnicos.
4. Informar qualquer incompatibilidade antes de gerar código.
5. Só então produzir a implementação.

Caso haja ausência de informação essencial, deve solicitar esclarecimento em vez de fazer suposições de arquitetura ou design.