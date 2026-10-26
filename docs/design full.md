---
version: "2.0.0"
name: "Portal Cláudia Guerra - Technical Design Specification"

purpose:
  define:
    - visual rules
    - interface components
    - layout standards
    - interaction patterns
    - implementation guidelines

  target:
    - Google Stitch (GS)
    - Freebuff (FB)

  rule:
    - This document defines HOW the interface must be built.
---

# DESIGN.md — Technical Design Specification
# Portal Cláudia Guerra V1

---

# 1. Design System Tokens

## 1.1 Colors

```yaml
colors:

  primary:
    main: "#6A1B9A"
    light: "#9C4DCC"
    dark: "#4A126A"

  secondary:
    main: "#C300C1"
    light: "#FF70FD"
    dark: "#7A0078"

  accent:
    main: "#E9C43D"

  neutral:
    background: "#FFFFFF"
    surface: "#F8F7FA"
    text_main: "#212121"
    text_muted: "#616161"
    border: "#E0E0E0"
```

---

## 1.2 Typography

### Headings

```yaml
font_family: "Montserrat"
weight: 700
```

Usage:

- Hero titles
- Section titles
- Main headings

---

### Body Text

```yaml
font_family: "Open Sans"
weight: 400
```

Usage:

- Paragraphs
- Descriptions
- Informational text

---

### Accent Typography

```yaml
font_family: "Caveat"
weight: 600
```

Usage:

- Highlight phrases
- Special emphasis
- Signature elements

---

## 1.3 Typography Scale

```yaml
small: "14px"
base: "16px"
medium: "20px"
large: "32px"
title: "48px"
```

---

# 2. Spacing System

Base unit:

```yaml
base: "8px"
```

Scale:

```yaml
spacing:
  - 0
  - 8
  - 16
  - 24
  - 32
  - 48
  - 64
```

---

# 3. Border Radius

```yaml
radius:

  button: "12px"

  card: "20px"

  image: "16px"
```

---

# 4. Layout System

## 4.1 Container

Rules:

- Maximum content width: 1200px
- Center aligned content
- Consistent horizontal margins
- Responsive padding

---

## 4.2 Grid

Desktop:

- Multi-column layouts allowed
- Full section width available

Tablet:

- Reduce columns according to content

Mobile:

- Single column priority

---

## 4.3 Section Structure

All sections must follow:

Section

- Section Header
- Content Area
- Optional CTA

---

# 5. Visual Style Rules

Apply:

- clean layouts
- modular blocks
- generous whitespace
- rounded elements
- clear hierarchy
- editorial organization
- consistent visual language

Avoid:

- excessive decoration
- visual overload
- unnecessary effects
- inconsistent component styles

---

# 6. Header Component

## Structure

Required elements:

- logo
- navigation menu
- primary action

---

## Behavior

Desktop:

- horizontal navigation

Mobile:

- collapsed navigation menu

---

## Style Rules

The Header must:

- maintain readability;
- preserve alignment;
- adapt to screen size;
- use approved colors and typography.

---

# 7. Navigation Component

## Menu Order

Required order:

1. Início
2. Quem Sou
3. Ações
4. Propostas
5. Minas que Cuida
6. Infos
7. Participe

---

## Navigation Rules

Required:

- same typography style for all menu items;
- active section indication;
- smooth scrolling;
- mobile usability.

---

# 8. Hero Component

## Structure

The Hero must contain:

- slide system;
- contextual background image;
- Claudia Guerra highlighted image;
- headline;
- complementary text;
- specific CTA.

---

## Slide Configuration

Number of slides:

```yaml
slides: 5
```

---

## Slide Composition

Each slide must follow:

Hero Slide

- Background Layer
  - contextual image collage

- Foreground Layer
  - Claudia image
  - headline
  - complementary text
  - CTA

---

## Slide Content Rules

Each slide must contain:

Headline:

- short impact phrase;
- related to slide theme.

Complementary text:

- informative description;
- maximum readability.

CTA:

- specific action related to slide objective.

---

## Hero Controls

Required:

- previous button;
- next button;
- slide indicators.

Indicators:

- horizontal dots;
- active state visible.

---

## Automatic Behavior

Required:

- automatic slide transition;
- user interaction resets timer.

Recommended timing:

- 5 seconds per slide.

---

# 9. Section Components

## Section Structure

All sections must follow the same visual pattern:

Section

- Section Header
  - Title
  - Optional subtitle
  - Supporting text

- Content Area
  - Cards
  - Images
  - Text blocks
  - Multimedia elements

- Optional CTA

---

## Section Rules

All sections must maintain:

- consistent spacing;
- same content alignment;
- visual hierarchy;
- responsive behavior.

Avoid:

- independent visual styles per section;
- unnecessary layout variations.

---

# 10. Cards Component

## Card Structure

Each card must contain:

- optional image;
- title;
- supporting text;
- optional action.

---

## Card Style

Required:

- rounded corners;
- internal padding;
- consistent spacing;
- readable hierarchy;
- subtle border or elevation.

---

## Card Usage

Cards may be used for:

- proposals;
- Minas que Cuida axes;
- actions;
- content publications;
- agenda items;
- institutional information.

---

# 11. Button Component

## Button Structure

Required:

- clear label;
- readable typography;
- sufficient contrast;
- defined action.

---

## Button Style

Use:

- rounded shape;
- consistent padding;
- approved color palette.

---

## Accessibility

Minimum touch area:

```yaml
touch_target: "44px"
```

---

## CTA Rules

CTA text must be:

- written in Brazilian Portuguese;
- action oriented;
- clear.

Examples:

- Quero participar
- Conheça as propostas
- Saiba mais
- Participe

---

# 12. Image Rules

## Image Type

Preferred:

- real photography;
- documentary style;
- human interactions;
- institutional context.

---

## Image Treatment

Use:

- natural colors;
- balanced contrast;
- responsive sizing.

---

## Technical Requirements

Images must have:

- optimized file size;
- responsive behavior;
- alternative text.

Avoid:

- unnecessary heavy images;
- generic stock imagery.

---

# 13. Multimedia Components

## Video

Source:

- YouTube embed.

Rules:

- preserve responsive behavior;
- maintain aspect ratio;
- avoid automatic playback.

---

## Social Media Content

Supported sources:

- Instagram;
- Facebook.

---

## External Actions

When user selects:

- like;
- comment;
- share;
- original publication access;

the action must:

- open in new browser tab;
- preserve current Portal navigation.

---

# 14. Form Component

## Form Integration

The Portal V1 form must use:

- existing Método Kóller form structure.

---

## Placement

Forms may appear in:

- Participe section;
- CTA blocks;
- participation areas.

---

## Visual Rules

Forms must:

- follow Portal design tokens;
- maintain accessibility;
- use clear labels;
- have visible feedback states.

---

# 15. Animation and Interaction Rules

## General Rule

Animations must improve usability without compromising:

- performance;
- accessibility;
- compatibility.

---

## Allowed Animations

Use:

- fade transitions;
- opacity changes;
- subtle movement;
- CSS transitions.

---

## Component Interactions

Cards:

Allowed:

- subtle elevation;
- soft highlight.

Buttons:

Allowed:

- hover state;
- focus state.

Sections:

Allowed:

- smooth entrance transitions.

---

## Avoid

Do not use:

- heavy animation libraries;
- complex parallax;
- excessive movement;
- effects requiring external runtime.

---

# 16. Responsive Design Rules

## Desktop

Required:

- full Hero composition;
- multi-column layouts;
- expanded navigation;
- complete visual hierarchy.

---

## Tablet

Adjust:

- spacing;
- typography size;
- number of columns;
- image proportions.

---

## Mobile

Priority:

- single column layouts;
- readable text;
- simplified compositions;
- touch-friendly elements.

---

# 17. Accessibility Rules

Required:

## Typography

- readable font sizes;
- adequate contrast;
- clear hierarchy.

---

## Navigation

Required:

- keyboard navigation;
- visible focus states;
- logical order.

---

## Components

Buttons and interactive elements must:

- have accessible labels;
- maintain minimum touch area;
- provide interaction feedback.

---

# 18. Implementation Constraints

## Hosting Environment

The design must be compatible with:

Hostinger Single Web Hosting

---

## Allowed Technologies

Use:

- HTML5;
- CSS3;
- JavaScript frontend;
- PHP when required.

---

## Forbidden Technologies

Do not use:

- Node.js;
- Node runtime;
- server applications;
- incompatible plugins;
- dependencies requiring custom server environments.

---
# 19. External Resources and Dependencies

## General Rule

External resources must be minimized.

Priority:

1. Native browser resources
2. Lightweight solutions
3. Official embeds
4. External services only when necessary

---

## Allowed External Integrations

The Portal may use:

- YouTube embeds;
- Instagram embeds;
- Facebook integrations;
- WhatsApp links;
- approved external forms.

---

## Dependency Restrictions

Do not use:

- unnecessary libraries;
- heavy frameworks;
- proprietary dependencies;
- solutions that prevent migration.

---

# 20. Code and Component Organization

The implementation must maintain:

- reusable components;
- organized structure;
- maintainable files;
- clear separation between assets.

---

## Recommended Structure

```
/portal

├── index.html
├── css/
├── js/
├── images/
├── assets/
└── media/
```

---

# 21. Performance Rules

The interface must prioritize:

- fast loading;
- optimized assets;
- efficient rendering;
- reduced unnecessary requests.

---

## Images

Required:

- compression;
- appropriate formats;
- responsive loading.

---

## Animations

Must not negatively affect:

- loading speed;
- mobile performance;
- usability.

---

# 22. Design Adaptation Rules

When a visual requirement conflicts with technical limitations:

Follow this priority:

1. Functional implementation
2. Technical compatibility
3. Accessibility
4. Performance
5. Visual refinement

---

## Simplification Rule

If a component cannot be implemented using the defined technical environment:

The solution must be:

1. reviewed;
2. simplified;
3. replaced by compatible alternative.

---

## Example

Complex animation:

Replace with:

- CSS transition;
- simple JavaScript interaction;
- static composition.

---

# 23. AI Generation Rules

Google Stitch (GS) and Freebuff (FB) must:

## Follow

- approved design tokens;
- defined components;
- layout rules;
- responsive rules;
- accessibility requirements.

---

## Do Not Create

- new color systems;
- new typography styles;
- new component patterns;
- unnecessary visual effects.

---

# 24. Visual Consistency Rules

All pages and sections must maintain:

- same spacing system;
- same typography hierarchy;
- same button styles;
- same card patterns;
- same image treatment.

---

# 25. Content Presentation Rules

Visible interface text must be:

- Brazilian Portuguese;
- clear;
- concise;
- accessible.

---

## Text Hierarchy

Use:

Heading:

- primary information.

Subheading:

- supporting information.

Body:

- explanation.

CTA:

- action.

---

# 26. Final Implementation Checklist

Before delivery verify:

## Design

- [ ] Colors follow tokens
- [ ] Typography follows system
- [ ] Components are consistent
- [ ] Layout follows grid rules

---

## Interface

- [ ] Header works correctly
- [ ] Navigation works correctly
- [ ] Hero follows specification
- [ ] Sections follow structure
- [ ] CTAs are functional

---

## Responsive

- [ ] Desktop validated
- [ ] Tablet validated
- [ ] Mobile validated

---

## Accessibility

- [ ] Contrast validated
- [ ] Navigation accessible
- [ ] Buttons accessible
- [ ] Images contain alt text

---

## Technical

- [ ] Compatible with Hostinger
- [ ] No Node.js dependency
- [ ] No incompatible plugins
- [ ] Assets optimized

---

# END DESIGN.md

Version: 2.0.0
Status: Technical Specification
Target: GS / FB Implementation