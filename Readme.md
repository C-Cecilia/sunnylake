# 🌤 Sunny Lake

A fully responsive travel website for Sunny Lake National Park, built with **React 18 + Vite**. Features rich scroll interactions, animated transitions, and multi-page navigation.

---

## Tech Stack

- **React 18** + **Vite 5**
- **React Router v6** — client-side routing
- **CSS Variables** — centralised design tokens
- Plain CSS modules per component (no CSS-in-JS)

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Project Structure

```
src/
├── App.jsx                  # Router setup, Navbar + Footer wrapping all routes
├── main.jsx
├── styles/                  # All CSS files live here
│   ├── tokens.css           # Design variables (colours, spacing, typography)
│   ├── index.css            # Global reset + base styles
│   ├── Navbar.css
│   ├── Footer.css
│   ├── Hero.css
│   ├── AboutSection.css
│   ├── ActivitiesSection.css
│   ├── StaySection.css
│   ├── FoodSection.css
│   ├── InstagramSection.css
│   ├── KnowSection.css
│   ├── Newsletter.css
│   ├── BlogSection.css
│   ├── PageHero.css
│   ├── StickyLayout.css
│   ├── FilterGrid.css
│   └── PlaceholderPage.css
├── constants/
│   └── index.js             # All image, icon, and video path mappings
├── components/
│   ├── ui/                  # Shared layout components
│   │   ├── Navbar.jsx       # Fixed navbar + fullscreen hamburger menu
│   │   ├── Footer.jsx       # Multi-column footer with social links
│   │   ├── PageHero.jsx     # Auto-cycling hero with Ken Burns effect
│   │   ├── StickyLayout.jsx # Sticky left nav + scrollable right sections
│   │   └── FilterGrid.jsx   # Client-side filterable card grid
│   └── sections/            # Homepage section components
│       ├── Hero.jsx         # Fullscreen video hero
│       ├── AboutSection.jsx # Scroll-hijack image gallery
│       ├── ActivitiesSection.jsx
│       ├── StaySection.jsx
│       ├── FoodSection.jsx  # Wipe-up text animation on scroll
│       ├── InstagramSection.jsx  # Infinite horizontal marquee
│       ├── KnowSection.jsx  # Hover-lift info cards
│       ├── Newsletter.jsx   # Email subscription with validation
│       └── BlogSection.jsx
└── pages/
    ├── HomePage.jsx
    ├── WhatToDoPage.jsx
    ├── WhereToStayPage.jsx
    ├── WhereToEatPage.jsx
    ├── VisitorInfoPage.jsx
    └── BlogPage.jsx
```

---

## Pages & Routes

| Route | Page | Key Features |
|-------|------|-------------|
| `/` | Home | Video hero, scroll-hijack gallery, marquee, animations |
| `/what-to-do` | What to do | PageHero carousel, sticky left nav |
| `/where-to-stay` | Where to stay | PageHero carousel, filterable property grid |
| `/where-to-eat` | Where to eat | PageHero carousel, filterable restaurant grid |
| `/visitor-info` | Visitor info | PageHero carousel, sticky left nav |
| `/blog` | Blog | Blog cards, Instagram marquee, newsletter |

---

## Key Interactions

### Hero Video
Full-viewport video background with gradient overlay. Title bottom-left, description bottom-right (50% width).

### About Section — Scroll-Hijack Gallery
- Three images stacked with `position: absolute`
- Scroll wheel directly controls a `progress` value (0 → 2)
- Magnetic snap to nearest image after 150ms of inactivity
- Releases page scroll at first/last image

### Page Hero Carousel
- Auto-advances every 6 seconds
- Ken Burns zoom-in animation (scale 1.0 → 1.08) per slide
- 1.2s crossfade between slides
- `←` button for manual previous navigation
- Uses `imagesRef` to avoid stale closure in timer

### Hamburger Menu
- Fullscreen overlay with 2×2 navigation grid
- Wipe-up text animation: titles appear first (0.5s), sub-links follow (0.5s delay)
- Animation re-triggers on every open via `requestAnimationFrame` double-frame trick

### Food Section
- IntersectionObserver triggers wipe-up animation on scroll into view
- Resets and re-fires on every entry (not one-time)

### Instagram Marquee
- Infinite horizontal scroll via CSS `@keyframes`
- Alternating landscape/portrait image sizes
- Pauses on hover

### Filter Grid
- Client-side filtering — items can belong to multiple categories
- Initial filter set from URL query param (`?filter=hotels`)
- `useEffect` syncs `initialFilter` prop changes to state

### Sticky Layout (What to do / Visitor info)
- CSS Grid with left column `position: sticky`
- `IntersectionObserver` highlights active pill as you scroll
- Pill click instant-scrolls to corresponding section
- Deep-link support via URL hash (`#sightseeing`)

---

## Asset Structure

All static assets live in `public/`:

```
public/
├── images/
│   ├── svg/           # Icons (01.svg – 13.svg)
│   ├── WhatToDo/
│   ├── WhereToStay/
│   ├── WhereToEat/
│   ├── VisitorInfo/
│   └── *.jpg          # Homepage images
└── SunnyLake.png      # Logo mark
```

All paths are managed centrally in `src/constants/index.js`.

---

## Design Tokens

Defined in `src/styles/tokens.css`:

| Token | Value |
|-------|-------|
| `--bg` | `#f0ede5` (warm off-white) |
| `--white` | `#ffffff` |
| `--text` | `#1a1a14` |
| `--text-muted` | `#7a7a6a` |
| `--font-display` | Cormorant Garamond |
| `--font-body` | DM Sans |
| `--navbar-height` | `72px` |
| `--section-px` | `64px` |
| `--section-py` | `96px` |
