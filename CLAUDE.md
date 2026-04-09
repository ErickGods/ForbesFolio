# CLAUDE.md — ForbesFolio

AI assistant guide for the ForbesFolio codebase. Read this before making changes.

---

## Project Overview

ForbesFolio is a single-page React portfolio website styled after Forbes magazine's editorial aesthetic. It is deployed to GitHub Pages at `https://erickgods.github.io/ForbesFolio`.

The centerpiece feature is a **3D magazine page-flip carousel** (`FeaturedWork`) built with Framer Motion, showcasing portfolio projects as interactive magazine spreads.

---

## Repository Layout

```
ForbesFolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions: build + deploy to GitHub Pages
├── website/                  # All application code lives here
│   ├── public/
│   │   └── images/           # Static images (referenced via BASE_URL)
│   ├── src/
│   │   ├── components/       # All React components (co-located with CSS)
│   │   │   ├── Header.jsx / Header.css
│   │   │   ├── Hero.jsx / Hero.css
│   │   │   ├── FeaturedWork.jsx / FeaturedWork.css
│   │   │   ├── About.jsx / About.css
│   │   │   ├── Contact.jsx / Contact.css
│   │   │   ├── Footer.jsx / Footer.css
│   │   │   └── Portfolio.jsx / Portfolio.css  ← unused, not imported
│   │   ├── App.jsx           # Root component — composes all sections
│   │   ├── main.jsx          # React entry point (mounts App into #root)
│   │   └── index.css         # Global styles and CSS custom properties
│   ├── index.html            # HTML shell with Google Fonts preconnect
│   ├── vite.config.js        # Vite config (base: '/ForbesFolio/')
│   └── package.json          # Scripts, dependencies
```

---

## Tech Stack

| Concern | Tool/Library |
|---|---|
| UI framework | React 18.2 |
| Language | JavaScript (ES Modules, JSX) — no TypeScript |
| Build tool | Vite 5.0 |
| Animations | Framer Motion 12 |
| Deployment | gh-pages + GitHub Actions |
| Fonts | Google Fonts CDN (Playfair Display, Inter) |
| Styling | Plain CSS with custom properties |
| State | Local component state only (no Redux, Zustand, etc.) |
| Routing | None — single-page with anchor links |
| Testing | None configured |

---

## Development Workflow

All commands must be run from the `website/` directory:

```bash
cd website

npm install        # install dependencies
npm run dev        # start dev server (hot reload, http://localhost:5173)
npm run build      # production build → website/dist/
npm run preview    # preview production build locally
npm run deploy     # build + push to gh-pages branch (manual deploy)
```

Auto-deploy runs via GitHub Actions on every push to `main`.

---

## Component Architecture

```
App
├── Header          — fixed top nav, anchor links, mobile hamburger
├── main
│   ├── Hero        — landing section with CTA
│   ├── FeaturedWork — 3D magazine flip carousel (most complex component)
│   ├── About       — bio + stats grid
│   └── Contact     — contact info + static form
└── Footer          — links and copyright
```

**Key rules:**
- Each component imports its own `.css` file (co-located in the same directory)
- All components are functional with React hooks
- No shared state — each component is self-contained
- `Portfolio.jsx` exists but is **not used** in `App.jsx` — treat as legacy

---

## CSS Conventions

Global CSS custom properties are defined in `src/index.css` under `:root`:

```css
/* Colors */
--color-gold: #B8860B;
--color-light-gold: #D4A84B;
--color-black: #000000;
--color-white: #FFFFFF;
--color-gray-100 through --color-gray-900

/* Typography */
--font-serif: 'Playfair Display', serif;
--font-sans: 'Inter', sans-serif;

/* Spacing */
--spacing-xs / -sm / -md / -lg / -xl

/* Transitions */
--transition-fast / -normal / -slow
```

**Conventions:**
- Always use CSS variables for colors, fonts, and spacing — never hardcode
- BEM-like class naming (e.g., `.magazine-container`, `.magazine-nav`)
- Mobile-first responsive design; breakpoint at `768px`
- Use Flexbox and CSS Grid for layout
- `scroll-behavior: smooth` is set globally for anchor navigation

---

## Image Paths

Static images live in `website/public/images/`. Reference them with Vite's `import.meta.env.BASE_URL` so paths work in both dev and GitHub Pages:

```jsx
// Correct — works in dev (/) and production (/ForbesFolio/)
src={`${import.meta.env.BASE_URL}images/my-image.jpg`}

// Wrong — breaks on GitHub Pages
src="/images/my-image.jpg"
```

---

## FeaturedWork Component

This is the most complex component. Key details:

- Displays 5 portfolio projects as a two-page magazine spread
- **3D page-flip animation** uses Framer Motion variants with perspective transforms
- Forward flip: right page rotates left over the left page
- Backward flip: left page rotates right to reveal previous spread
- State: `currentPage` (index), `direction` (+1/-1), `isAnimating` (boolean gate)
- Uses a `useRef` (`animationDirRef`) for immediate direction tracking during animation
- `AnimatePresence` with `mode="wait"` for transitions
- Keyboard navigation: `ArrowLeft` / `ArrowRight` keys
- Project data is defined as a `WORKS_DATA` constant inside the file

When modifying animations, be cautious about the `isAnimating` guard — it prevents double-firing. Don't remove it.

---

## Git Branches

| Branch | Purpose |
|---|---|
| `main` | Production — triggers auto-deploy to GitHub Pages |
| `claude/*` | Feature branches for AI-assisted changes |

Feature branches are merged into `main` to trigger deployment. Do not push directly to `main` for new features.

---

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Triggers on push to `main` or manual `workflow_dispatch`
2. Installs deps with `npm ci` in `website/`
3. Runs `npm run build` → produces `website/dist/`
4. Uploads `website/dist` as a Pages artifact
5. Deploys to GitHub Pages

The Vite base is `/ForbesFolio/` — this is required for asset paths to work on GitHub Pages. Do not change it without updating the workflow.

---

## What Doesn't Exist Yet

- No test suite (no Vitest, no Jest, no Testing Library)
- No TypeScript (type packages are installed but unused)
- No form submission handler (Contact form is static UI only)
- No router (navigation is anchor-based)
- No global state management

Do not add these unless explicitly requested.

---

## Key Conventions for AI Assistants

1. **Work in `website/src/`** — all code changes happen here
2. **Use CSS variables** — never hardcode colors or fonts
3. **Co-locate CSS** — add a `ComponentName.css` alongside any new `ComponentName.jsx`
4. **Use `import.meta.env.BASE_URL`** for all image paths
5. **Don't add TypeScript** — the project is intentionally plain JavaScript
6. **Don't install new dependencies** without a clear reason — the stack is intentionally minimal
7. **Don't touch `Portfolio.jsx`** unless asked — it's unused and may be intentionally preserved
8. **Don't change `vite.config.js` base**  — `/ForbesFolio/` is required for GitHub Pages
9. **Respect the `isAnimating` guard** in `FeaturedWork.jsx` — it prevents animation bugs
10. **Feature branches → `main`** — never push directly to `main`
