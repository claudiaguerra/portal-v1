# PV1 — TECHNICAL SPECIFICATION OF PORTAL V1

**Project:** Portal Cláudia Guerra  
**Version:** PV1  
**Document:** Technical Specification for Implementation  
**Recipients:** Google Stitch (GS) / Freebuff (FB) / Web Implementation  
**Status:** Approved  
**Document Type:** Technical Specification Layer

---

# 1. Objective

This document consolidates the approved technical definitions for the development of Portal V1.

The objective is to guide the portal implementation ensuring:

- compliance with the approved concept;
- technical compatibility;
- visual consistency;
- responsiveness;
- future evolution capability;
- compatibility with the defined hosting infrastructure.

This document represents the technical execution layer.

It does not contain internal philosophical or conceptual project justifications.

---

# 2. General Implementation Principles

Portal V1 must follow the following principles:

- technical simplicity;
- user experience as the priority;
- reusable components;
- low coupling;
- performance;
- accessibility;
- compatibility with shared hosting.

Every technical decision must consider:

Functionality
↓
Compatibility
↓
Stability
↓
Performance
↓
Maintenance
↓
Visual Complexity

When there is a conflict between visual effect and technical feasibility, the solution must prioritize functionality.

---

# 3. Technical Environment

## 3.1 Hosting

Portal V1 will be published on:

**Hostinger Single Web Hosting**

The implementation must work in a traditional shared hosting environment.

---

# 3.2 Allowed Technologies

Prioritize:

- HTML5;
- CSS3;
- frontend JavaScript;
- PHP compatible with shared hosting;
- MySQL/MariaDB when necessary.

---

# 3.3 Forbidden Technologies

Do not use:

- Node.js;
- Node applications;
- dedicated servers;
- persistent processes;
- containers;
- environments requiring additional runtime;
- incompatible plugins;
- mandatory dependencies on external infrastructure.

---

# 3.4 GS / FB Rule

Before implementing any feature, validate:

- does it work on Hostinger?
- does it require Node.js?
- does it require a plugin?
- does it require an additional server?
- can it be executed with HTML/CSS/JS/PHP?

If the answer is incompatible:

The functionality must be reviewed and simplified.

---

# 4. General Portal Architecture

Portal V1 will be structured as:

- main Home page in scroll format;
- sections organized through navigation;
- internal pages when necessary;
- reusable components;
- external integrations.

Planned structure:

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

# 5. Navigation

## Requirements

The portal must have:

- main menu;
- navigation between sections;
- identification of the current section;
- responsive behavior.

Menu items must maintain standardized spelling.

---

# 6. Hero

## Requirements

The Hero must have:

- highlighted visual composition;
- Cláudia's photograph;
- graphic elements related to the context;
- impact statement;
- complementary text;
- specific CTA.

---

## Multiple Hero Slides

The Hero must use:

- 5 slides;
- automatic progression;
- user manual control;
- side arrows;
- bottom indicators.

Configuration:

- automatic timing: 5 seconds;
- interaction restarts the timer;
- smooth transition between slides.

---

## Technical Rule

If the complete behavior implementation is incompatible with the infrastructure:

Replace it with a simplified solution:

- pure CSS/JS carousel;
- simple animation;
- static composition.

---

# 7. Portal Sections

Each menu item corresponds to a Home section.

Each section must contain:

- introductory information;
- visual elements;
- buttons directing users to deeper content.

---

# 8. Seção Infos

## Objective

Centralize informative content and relevant materials.

Contents:

- videos;
- lectures;
- plenary sessions;
- reports;
- timeless important news.

---

## Directions

The Seção Infos may direct users to:

- cartazes de mobilização;
- Minas que Cuida;
- Participe;
- Ações;
- social networks.

---

# 9. Interface Components

Use reusable components:

- buttons;
- cards;
- highlight blocks;
- galleries;
- forms;
- navigation elements.

---

# 10. Responsiveness

The portal must work on:

- desktop;
- tablet;
- mobile.

Priority:

adaptive mobile first.

---

Requirements:

- adaptable layouts;
- readable texts;
- responsive images;
- reorganizable components.

---

# 11. Animations and Interactions

Animations must be:

- smooth;
- functional;
- discreet;
- performance-oriented.

Applications:

- element entry during scroll;
- interaction states;
- transitions;
- Hero.

Avoid:

- excessive effects;
- heavy animations;
- unnecessary dependencies.

---

# 12. Accessibility

Implement:

- adequate contrast;
- readable texts;
- keyboard navigation;
- images with descriptions;
- clear forms.

---

# 13. SEO

Implement:

- semantic HTML structure;
- single H1;
- H2 for sections;
- H3 for subsections;
- metadata;
- optimized images.

Prepare:

- social sharing;
- future evolution.

---

# 14. Performance

Prioritize:

- optimized images;
- efficient loading;
- low number of dependencies;
- organized code.

Apply:

- lazy loading when appropriate;
- external resource control.

---

# 15. Integrations

Planned integrations:

## Social Networks

- Instagram;
- Facebook;
- YouTube.

## Communication

- WhatsApp.

## Participation

- Método Kóller.

---

# 16. Forms

Portal V1 will not create a new form system.

The existing official form from Método Kóller will be integrated via:

**embed**

Responsibilities:

Portal:
- presentation;
- invitation;
- experience.

Método Kóller:
- data collection;
- processing;
- storage;
- automations.

---

# 17. Multimedia Content

The Portal will act as a curation layer.

## Videos

Source:

- YouTube.

Implementation:

- embed.

---

## Social Networks

Content may come from:

- Instagram;
- Facebook.

Interactions:

- like;
- comment;
- share.

These actions will occur on the original platforms.

Flow:
Portal
↓
User selects interaction
↓
New tab opens original platform
↓
User interacts
↓
Portal remains open

---

# 18. Security and Privacy

Principles:

- collect only necessary data;
- use official integrations;
- protect user data.

Responsibilities:

Método Kóller:
- form data.

External platforms:
- social interactions.

---

# 19. Infrastructure and Implementation

## Mandatory Rules

Do not use:

- Node.js;
- incompatible plugins;
- dependencies that prevent shared hosting compatibility.

---

## Replacement Rule

No visual feature is mandatory if it prevents technical compatibility.

---

# 20. Delivery and Validation

Portal V1 will be approved after validation:

## Visual

- identity;
- layout;
- components.

## Functional

- menus;
- buttons;
- links;
- forms;
- integrations.

## Technical

- Hostinger;
- performance;
- compatibility.

## Responsive

- desktop;
- tablet;
- mobile.

---

# Final Approval Criteria

Portal V1 will be considered delivered when:

- all approved SPECs have been implemented;
- functionality has been validated;
- infrastructure requirements have been respected;
- main content has been published;
- structure allows future evolution.

---

# END OF DOCUMENT

PV1 — Technical Specification of Portal V1
