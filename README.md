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
