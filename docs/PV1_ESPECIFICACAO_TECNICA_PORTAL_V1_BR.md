# PV1 — ESPECIFICAÇÃO TÉCNICA DO PORTAL V1

**Projeto:** Portal Cláudia Guerra  
**Versão:** PV1  
**Documento:** Especificação Técnica para Implementação  
**Destinatários:** Google Stitch (GS) / Freebuff (FB) / Implementação Web  
**Status:** Aprovado  
**Tipo de documento:** Camada de Especificação Técnica

---

# 1. Objetivo

Este documento consolida as definições técnicas aprovadas para desenvolvimento do Portal V1.

O objetivo é orientar a implementação do portal garantindo:

- fidelidade ao conceito aprovado;
- compatibilidade técnica;
- consistência visual;
- responsividade;
- possibilidade de evolução futura;
- compatibilidade com a infraestrutura de hospedagem definida.

Este documento representa a camada técnica de execução.

Não contém justificativas filosóficas ou conceituais internas do projeto.

---

# 2. Princípios Gerais de Implementação

O Portal V1 deverá seguir os seguintes princípios:

- simplicidade técnica;
- experiência do usuário como prioridade;
- componentes reutilizáveis;
- baixo acoplamento;
- performance;
- acessibilidade;
- compatibilidade com hospedagem compartilhada.

Toda decisão técnica deverá considerar:
Funcionamento
↓
Compatibilidade
↓
Estabilidade
↓
Performance
↓
Manutenção
↓
Complexidade visual


Quando houver conflito entre efeito visual e viabilidade técnica, a solução deverá priorizar funcionamento.

---

# 3. Ambiente Técnico

## 3.1 Hospedagem

O Portal V1 será publicado em:

**Hostinger Single Web Hosting**

A implementação deverá funcionar em ambiente de hospedagem compartilhada tradicional.

---

# 3.2 Tecnologias permitidas

Priorizar:

- HTML5;
- CSS3;
- JavaScript frontend;
- PHP compatível com hospedagem compartilhada;
- MySQL/MariaDB quando necessário.

---

# 3.3 Tecnologias proibidas

Não utilizar:

- Node.js;
- aplicações Node;
- servidores próprios;
- processos persistentes;
- containers;
- ambientes que exijam runtime adicional;
- plugins incompatíveis;
- dependências obrigatórias de infraestrutura externa.

---

# 3.4 Regra GS / FB

Antes de implementar qualquer recurso, validar:

- funciona na Hostinger?
- exige Node.js?
- exige plugin?
- exige servidor adicional?
- pode ser executado com HTML/CSS/JS/PHP?

Caso a resposta seja incompatível:

A funcionalidade deverá ser revisada e simplificada.

---

# 4. Arquitetura Geral do Portal

O Portal V1 será estruturado como:

- Home principal em formato scroll;
- seções organizadas por navegação;
- páginas internas quando necessário;
- componentes reutilizáveis;
- integrações externas.

Estrutura prevista:

Portal V1

├── Home
│
├── Header
│
├── Hero
│
├── Seções principais
│
├── Conteúdos complementares
│
├── Formulários
│
├── Integrações externas
│
└── Footer

---

# 5. Navegação

## Requisitos

O portal deverá possuir:

- menu principal;
- navegação entre seções;
- identificação da seção atual;
- comportamento responsivo.

Itens do menu deverão possuir grafia padronizada.

---

# 6. Hero

## Requisitos

A Hero deverá possuir:

- composição visual em destaque;
- fotografia da Cláudia;
- elementos gráficos relacionados ao contexto;
- frase de impacto;
- texto complementar;
- CTA próprio.

---

## Hero múltiplo

A Hero deverá utilizar:

- 5 slides;
- avanço automático;
- controle manual pelo usuário;
- setas laterais;
- indicadores inferiores.

Configuração:

- tempo automático: 5 segundos;
- interação reinicia temporizador;
- transição suave entre slides.

---

## Regra técnica

Caso a implementação do comportamento completo seja incompatível com a infraestrutura:

Substituir por solução simplificada:

- carrossel CSS/JS puro;
- animação simples;
- composição estática.

---

# 7. Seções do Portal

Cada item do menu corresponde a uma seção da Home.

Cada seção deverá possuir:

- informação introdutória;
- elementos visuais;
- botões direcionando para conteúdos aprofundados.

---

# 8. Seção Infos

## Objetivo

Centralizar conteúdos informativos e materiais relevantes.

Conteúdos:

- vídeos;
- palestras;
- plenárias;
- reportagens;
- notícias importantes atemporais.

---

## Encaminhamentos

A seção Infos poderá direcionar para:

- cartazes de mobilização;
- Minas que Cuida;
- Participe;
- Ações;
- redes sociais.

---

# 9. Componentes de Interface

Utilizar componentes reutilizáveis:

- botões;
- cards;
- blocos de destaque;
- galerias;
- formulários;
- elementos de navegação.

---

# 10. Responsividade

O portal deverá funcionar em:

- desktop;
- tablet;
- mobile.

Prioridade:

mobile first adaptativo.

---

Requisitos:

- layouts adaptáveis;
- textos legíveis;
- imagens responsivas;
- componentes reorganizáveis.

---

# 11. Animações e Interações

Animações devem ser:

- suaves;
- funcionais;
- discretas;
- performáticas.

Aplicações:

- entrada de elementos no scroll;
- estados de interação;
- transições;
- Hero.

Evitar:

- efeitos excessivos;
- animações pesadas;
- dependências desnecessárias.

---

# 12. Acessibilidade

Implementar:

- contraste adequado;
- textos legíveis;
- navegação por teclado;
- imagens com descrição;
- formulários claros.

---

# 13. SEO

Implementar:

- estrutura HTML semântica;
- H1 único;
- H2 para seções;
- H3 para subdivisões;
- metadados;
- imagens otimizadas.

Preparar:

- compartilhamento social;
- evolução futura.

---

# 14. Performance

Priorizar:

- imagens otimizadas;
- carregamento eficiente;
- baixo número de dependências;
- código organizado.

Aplicar:

- lazy loading quando adequado;
- controle de recursos externos.

---

# 15. Integrações

Integrações previstas:

## Redes sociais

- Instagram;
- Facebook;
- YouTube.

## Comunicação

- WhatsApp.

## Participação

- Método Kóller.

---

# 16. Formulários

O Portal V1 não criará novo sistema de formulários.

O formulário oficial existente no Método Kóller será integrado via:

**embed**

Responsabilidades:

Portal:
- apresentação;
- convite;
- experiência.

Método Kóller:
- coleta;
- processamento;
- armazenamento;
- automações.

---

# 17. Conteúdo Multimídia

O Portal será uma camada de curadoria.

## Vídeos

Origem:

- YouTube.

Implementação:

- embed.

---

## Redes sociais

Conteúdos podem vir de:

- Instagram;
- Facebook.

Interações:

- curtir;
- comentar;
- compartilhar.

Serão realizadas nas plataformas originais.

Fluxo:

Portal
↓
Usuário seleciona interação
↓
Nova aba abre plataforma original
↓
Usuário interage
↓
Portal permanece aberto

---

# 18. Segurança e Privacidade

Princípios:

- coletar somente dados necessários;
- utilizar integrações oficiais;
- preservar dados do usuário.

Responsabilidades:

Método Kóller:
- dados de formulários.

Plataformas externas:
- interações sociais.

---

# 19. Infraestrutura e Implementação

## Regras obrigatórias

Não utilizar:

- Node.js;
- plugins incompatíveis;
- dependências que impeçam hospedagem compartilhada.

---

## Regra de substituição

Nenhuma funcionalidade visual é obrigatória se impedir compatibilidade técnica.

---

# 20. Entrega e Validação

O Portal V1 será aprovado após validação:

## Visual

- identidade;
- layout;
- componentes.

## Funcional

- menus;
- botões;
- links;
- formulários;
- integrações.

## Técnica

- Hostinger;
- performance;
- compatibilidade.

## Responsiva

- desktop;
- tablet;
- mobile.

---

# Critério final de aprovação

O Portal V1 será considerado entregue quando:

- todas as SPECs aprovadas estiverem implementadas;
- funcionamento estiver validado;
- infraestrutura estiver respeitada;
- conteúdo principal estiver publicado;
- estrutura permitir evolução futura.

---

# FIM DO DOCUMENTO

PV1 — Especificação Técnica do Portal V1
