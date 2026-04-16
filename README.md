# Personal website — Nanyan Amber Jiang

Minimal portfolio site built with **React** and **Tailwind CSS**, served by **Vite**. Layout is tuned for desktop and scales down for tablet and phone.

## Tech stack

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss`
- [Lucide React](https://lucide.dev/) for icons
- [ESLint 9](https://eslint.org/) (flat config)

## Prerequisites

- **Node.js** 20+ (recommended; matches current Vite / tooling expectations)
- **npm** (ships with Node)

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `npm run dev`  | Start dev server with HMR            |
| `npm run build`| Production build → `dist/`           |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint on the project            |

## Project layout

```
public/          # Static assets (served at site root)
  bio.jpg
  icon.png
  NanyanJiang江南燕_Resume.pdf
src/
  App.jsx        # Main page layout & content
  App.css        # Shared styles (e.g. CV button)
  index.css      # Tailwind entry + base styles
  main.jsx       # React entry
index.html       # HTML shell, fonts, favicon
vite.config.js   # Vite + build-time “last updated” injection
```

## “Last updated” date

The footer line **Last updated …** is filled at **dev / build time** from Git:

- Uses the **date of the latest commit** (`git log -1 --date=short`).
- If Git is unavailable, it falls back to **today’s date** (English locale).

After you **commit**, restart `npm run dev` or run `npm run build` so the new commit date is baked into the bundle.

## Customization

- **Resume PDF**: place or replace `public/NanyanJiang江南燕_Resume.pdf` (or update the path in `App.jsx` where `window.open` is called).
- **Favicon**: `public/icon.png`, linked in `index.html`.
- **Fonts**: Google Fonts links in `index.html` (e.g. Rubik).

## Production build

```bash
npm run build
```

Output is in `dist/`. Deploy that folder to any static host (GitHub Pages, Netlify, Vercel, S3, etc.).

## License

Private project; all rights reserved unless you add a license file.
