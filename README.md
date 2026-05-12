# Portfolio — Shahnazar

A single-page personal portfolio site built with Next.js. It presents an introduction, about section, skills with animated proficiency bars, featured projects (with store links where applicable), and a contact area with a simple message form. The layout is responsive, uses a dark theme with gradient accents, and includes smooth scroll navigation between sections.

This app is configured for **static export** (`output: 'export'` in `next.config.js`): `next build` emits a static site in the `out/` folder for hosting on GitHub Pages, S3, or any static file host. In production builds, `basePath` and `assetPrefix` are set to `/portfolio_native` so assets resolve correctly when the site lives under that subpath; locally, `npm run dev` uses no base path.

## Tech stack

| Area | Technology |
|------|----------------|
| Framework | [Next.js](https://nextjs.org/) 14 (App Router) |
| UI | [React](https://react.dev/) 18 |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 3 |
| Motion | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Linting | ESLint with `eslint-config-next` |

## Features

- Fixed navbar with hash links to each section (`#home`, `#about`, `#skills`, `#projects`, `#contact`) and a mobile menu
- Hero with staggered entrance animations and social links
- About narrative plus a small statistics grid
- Skills section with animated progress-style bars and a tech stack chip list
- Projects grid driven by static data (descriptions, tech tags, App Store / Play Store links when available)
- Contact details alongside a controlled form (submit handler is a client-side placeholder; connect it to your backend or a form service for production)

## Project structure

```text
src/
  app/
    layout.tsx      # Root layout, metadata, global CSS import
    page.tsx        # Composes all sections + footer
    globals.css     # Global styles
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Contact.tsx
```

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (20 LTS recommended)
- npm (ships with Node) or another compatible package manager

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The dev server supports hot reload while you edit files.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js in development mode |
| `npm run build` | Static export: writes optimized HTML/CSS/JS to `out/` |
| `npm run lint` | Run ESLint across the project |

The `package.json` `start` script runs `next start`, which targets a Node server deployment. Because this repo uses `output: 'export'`, prefer serving the `out/` directory for production previews and hosting.

## Customization

Update copy, links, and data in the components under `src/components/`. Common touchpoints:

- **Hero** (`src/components/Hero.tsx`): name, role line, bio, GitHub / LinkedIn / email, scroll target
- **About** (`src/components/About.tsx`): bio paragraphs and the stats array
- **Skills** (`src/components/Skills.tsx`): `skills` array (name, level, gradient) and the tech stack string list
- **Projects** (`src/components/Projects.tsx`): `projects` array (title, description, `tech`, store URLs, placeholder gradient class)
- **Contact** (`src/components/Contact.tsx`): contact details and form submission logic
- **SEO / tab title** (`src/app/layout.tsx`): `metadata.title` and `metadata.description`

Global look and feel can be tuned in `tailwind.config.ts` and `src/app/globals.css`. Deployment-related settings live in `next.config.js` (`basePath`, `assetPrefix`, static export).

## Production build (static export)

```bash
npm run build
```

The static site is generated under `out/`. Preview it locally with any static file server, for example:

```bash
npx serve out
```

Deploy the **contents** of `out/` to your host. If you change the public URL or subpath, update `basePath` / `assetPrefix` in `next.config.js` so links and assets stay correct.

For a **hosted Next.js server** (no static export), you would remove `output: 'export'` and related static-only constraints from the Next.js config; this project is currently set up for static hosting.

## License

This repository is marked private in `package.json`. If you open-source it, add a `LICENSE` file and adjust this section accordingly.
