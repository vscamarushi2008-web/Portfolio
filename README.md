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
