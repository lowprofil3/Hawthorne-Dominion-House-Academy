## Hawthorne Dominion House Academy

This repository hosts the marketing site for Hawthorne Dominion House Academy, built with the Next.js App Router.

### Tech stack

- **Framework:** Next.js 14 with the App Router
- **Styling:** Tailwind CSS with a small layer of custom design tokens in `app/globals.css`
- **TypeScript:** Strict mode enabled for type-safety across the project

### Local development

Install dependencies (only required on the first run):

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Project structure

- `app/layout.tsx` — shared layout, metadata, and font configuration
- `app/page.tsx` — landing page for the academy with the hero, pillar highlights, and admissions CTA
- `app/globals.css` — Tailwind directives plus custom design tokens used across the page

### Linting

Run the Next.js lint task to ensure code quality:

```bash
npm run lint
```

### Deployment

The project is ready to deploy on any platform that supports Next.js 14. Build the production bundle with:

```bash
npm run build
```

Then run `npm start` to serve the compiled output.
