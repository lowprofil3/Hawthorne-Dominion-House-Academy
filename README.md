# Hawthorne Dominion House Academy

A formal Next.js 14 frontend representing the storied Hawthorne Dominion House Academy. The site presents the academy's
traditions, academic pillars, admissions process, and faculty with an authoritative, serif-driven visual language inspired by
historic institutions.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the experience locally.

## Project Structure

```
/app
  layout.tsx       // Global layout, navigation, footer, and font configuration
  page.tsx         // Landing page with hero, programme highlights, admissions, and faculty sections
  login/page.tsx   // Classical student login form
  dashboard/page.tsx // Mock dashboard with messages, assignments, and grades panels
/lib
  api.ts           // Helper for performing JSON API requests
```

## Deployment

This project is optimised for deployment on [Vercel](https://vercel.com/):

1. Push the repository to your Git provider (GitHub, GitLab, or Bitbucket).
2. Create a new Vercel project and import the repository.
3. Ensure the `NEXT_PUBLIC_` environment variables you require are configured (none are needed for the static mockup).
4. Trigger a deployment — Vercel will build the Next.js application and host it globally.

## License

This project is licensed under the [MIT License](LICENSE).
