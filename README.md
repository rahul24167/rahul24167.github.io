# rahul24167.github.io

Personal portfolio site, migrated from static HTML/CSS/JS to
[Next.js](https://nextjs.org/) (App Router + TypeScript). All styling, markup,
and content are preserved exactly from the original site.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in a browser.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm start` — serve the production build

## Project structure

- `app/` — root layout (`layout.tsx`), home page (`page.tsx`), global
  stylesheet (`globals.css`, unchanged from the original `style.css`)
- `components/` — `Sidebar`, `Navbar`, `Projects`, `Blog`, `Experience`,
  `About`, `Contact`
- `data/` — project, blog post, and skills content
- `public/` — images and favicon
