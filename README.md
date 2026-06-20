# Vijayasri Camarushi — AI Researcher Portfolio

A cinematic, 3D-animated portfolio rebuilt around an "HCI research lab"
visual identity. Built with React, Tailwind CSS v4, Framer Motion,
React Three Fiber, and Drei.

Live structure carried over from the original site:
https://vscamarushi2008-web.github.io/Portfolio/

## Stack

- **React 19** + **Vite 8** — app shell & build tooling
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — design tokens defined in `src/index.css`
- **Framer Motion** — scroll reveals, hero stagger, magnetic buttons, 3D card tilt
- **React Three Fiber + Drei + three.js** — hero neural-network scene, ambient particles
- **lucide-react** — icon set

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/Portfolio/` (the `/Portfolio/` base path
matches the GitHub Pages deployment path — see below).

## Build

```bash
npm run build
npm run preview   # serve the production build locally
```

## Deploying to GitHub Pages

This repo is preconfigured to deploy to:
`https://<your-username>.github.io/Portfolio/`

**Option A — GitHub Actions (recommended, already included):**

1. Push this code to the `main` branch of your `Portfolio` repo.
2. In the repo settings → **Pages**, set **Source** to **GitHub Actions**.
3. The included workflow at `.github/workflows/deploy.yml` will build and
   deploy automatically on every push to `main`.

**Option B — manual deploy:**

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

### If your repo name is NOT "Portfolio"

The Vite `base` path is hardcoded in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Portfolio/', // change this to '/your-repo-name/'
})
```

If you deploy to a custom domain or to the root of `username.github.io`,
set `base: '/'` instead.

## Editing content

All real copy (name, bio, skills, projects, certifications, contact info)
lives in **one file**: `src/data/content.js`. Edit that file to update text
anywhere on the site — no need to touch component code.

To swap images/certs/the research PDF, replace the files in
`public/images/` and `public/docs/` (keep the same filenames, or update the
paths in `content.js`).

## Folder structure

```
src/
├── components/
│   ├── layout/         Navbar, Footer
│   ├── three/          R3F scene, neural network nodes, particles, 3D card tilt
│   ├── sections/       Hero, About, Skills, Research, Projects, Certifications, Photography, Contact
│   └── ui/              GlassPanel, SectionHeading, MagneticButton, ScrollProgress
├── data/content.js      All real content — single source of truth
├── hooks/useMousePosition.js
├── App.jsx
├── main.jsx
└── index.css            Tailwind v4 theme tokens + global styles
```

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (disables/shortens animations globally).
- Keyboard focus is visible on all interactive elements.
- The 3D hero scene is lazy-mounted via `<Suspense>` and capped at DPR 1.5
  to stay smooth on lower-end devices.
- All images use `loading="lazy"`.
