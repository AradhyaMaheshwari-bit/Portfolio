# Aradhya Maheshwari — Portfolio

A personal portfolio site for a Python & data analytics developer. Built with Vite, React 19, TypeScript, and Tailwind CSS v4. Dark, accessible, no framework bloat.

## Stack

- **Vite 8** — dev server and build
- **React 19** + **TypeScript 6**
- **Tailwind CSS v4** — theme tokens defined in `src/index.css` via `@theme`
- **oxlint** — fast linter, configured in `.oxlintrc.json`

## Structure

```
src/
  components/      # Section components (Hero, About, Skills, …)
  data/            # Single source of truth for content (profile, skills, projects, services)
  App.tsx          # Page shell
  main.tsx         # Entry point
  index.css        # Tailwind import + theme tokens
```

All page content lives in `src/data/*.ts`. To update copy, edit those files — no JSX changes needed.

## Scripts

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://127.0.0.1:5173
npm run build      # typecheck + production build to dist/
npm run preview    # preview the production build
npm run lint       # run oxlint
```

## Design notes

- Dark-only theme; uses CSS custom properties for color tokens (no Tailwind color extension).
- Section IDs match the navbar links so the smooth-scroll behavior works.
- No external assets are loaded — fonts use a system stack to keep the page light.
- Accessibility: skip-link, focus styles, semantic landmarks, aria labels on the navbar and form controls.

## License

Source: MIT. Content: © Aradhya Maheshwari.
