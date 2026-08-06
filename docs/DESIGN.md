version: "2.1.0"
name: "Portal V1 - Design System"
target:
  - Google Stitch (GS)
  - Freebuff (FB)
---

# DESIGN.md
# Portal V1

## 1. Design Tokens

### Colors

Primary:
- Main: #6A1B9A
- Light: #9C4DCC
- Dark: #4A126A

Secondary:
- Main: #C300C1
- Light: #FF70FD
- Dark: #7A0078

Accent:
- Main: #E9C43D

Neutral:
- Background: #FFFFFF
- Surface: #F8F7FA
- Text: #212121
- Text muted: #616161
- Border: #E0E0E0


## Typography

Heading:
- Font: Montserrat
- Weight: 700

Body:
- Font: Open Sans
- Weight: 400

Accent:
- Font: Caveat
- Weight: 600

Scale:
- Small: 14px
- Base: 16px
- Medium: 20px
- Large: 32px
- Title: 48px


## Spacing

Base unit:
- 8px

Scale:
- 0
- 8
- 16
- 24
- 32
- 48
- 64


## Radius

- Button: 12px
- Card: 20px
- Image: 16px


# 2. Layout

Container:
- Maximum width: 1200px
- Center aligned
- Responsive padding

Grid:
- Desktop: multi-column layout
- Tablet: reduced columns
- Mobile: single column layout


Section pattern:

Section
- Title
- Description
- Content
- CTA


# 3. Visual Style

Use:
- clean layouts
- modular blocks
- generous spacing
- rounded elements
- clear hierarchy
- editorial organization

Avoid:
- excessive decoration
- heavy visual effects
- inconsistent styles


# 4. Components

## Header

Contains:
- logo
- navigation
- primary CTA


## Navigation

Order:
1. Início
2. Quem Sou
3. Ações
4. Propostas
5. Minas que Cuida
6. Infos
7. Participe

Rules:
- consistent typography
- active state
- smooth scrolling


## Hero

Structure:
- background image layer
- Claudia image
- headline
- supporting text
- CTA

Rules:
- 5 slides
- automatic transition
- navigation arrows
- slide indicators

Allowed transitions:
- fade
- opacity
- CSS transitions


## Cards

Style:
- rounded corners
- internal padding
- image support
- clear hierarchy

Usage:
- proposals
- actions
- content
- agenda
- information blocks


## Buttons

Style:
- rounded
- high contrast
- clear CTA text

Minimum touch area:
- 44px


## Forms

Use:
- Método Kóller existing form

Rules:
- follow design tokens
- responsive
- accessible


# 5. Images and Media

Images:
- real photography
- human context
- institutional environment

Requirements:
- optimized files
- responsive images
- alt text


Videos:
- YouTube embed


Social Content:
- Instagram
- Facebook

External actions:
- open original content in new tab


# 6. Responsive Rules

Desktop:
- full layouts
- multi-column sections
- expanded navigation

Tablet:
- adjusted spacing
- reduced columns

Mobile:
- single column
- simplified layouts
- touch-friendly controls


# 7. Animation Rules

Allowed:
- fade
- opacity transitions
- subtle movement
- CSS transitions

Avoid:
- heavy animations
- complex libraries
- parallax effects


# 8. Technical Constraints

Hosting:
- Hostinger Single Web Hosting

Allowed:
- HTML5
- CSS3
- JavaScript frontend
- PHP when required

Forbidden:
- Node.js
- Node runtime
- server applications
- incompatible plugins


# 9. Implementation Priority

1. Functionality
2. Compatibility
3. Performance
4. Visual consistency
5. Animation refinement

If a visual effect conflicts with technical limitations:
- simplify;
- replace with compatible solution.


# END DESIGN.md