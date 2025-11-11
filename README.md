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
- `app/login/page.tsx` — client-side login form that calls the `/api/auth/login` endpoint and redirects to the dashboard on success
- `app/dashboard/page.tsx` — placeholder dashboard shell that authenticated visitors reach after logging in
- `app/api/auth/register/route.ts` — registration endpoint that provisions users, hashes their passwords with bcrypt, and issues the session cookie
- `app/api/auth/login/route.ts` — login endpoint that validates credentials and refreshes the session cookie
- `app/globals.css` — Tailwind directives plus custom design tokens used across the page
- `lib/kv.js` — helper for interacting with the Vercel KV store

### Authentication flow

1. The registration endpoint accepts `name`, `email`, and `password` values, hashes the password with bcrypt, stores the user record in Vercel KV, and returns a signed JSON Web Token (JWT) inside an HTTP-only cookie named `hdha_token`.
2. The login endpoint accepts `email` and `password`, verifies the supplied credentials against the stored bcrypt hash, and issues a fresh JWT cookie on success.
3. Client-side pages such as `app/login/page.tsx` call the login API via `fetch`. A successful response triggers a redirect to `/dashboard`, where future authenticated experiences can be rendered.

Set the `JWT_SECRET` environment variable locally and in production to sign and verify the JWT session tokens. The Vercel KV client uses the standard `KV_REST_API_URL`, `KV_REST_API_TOKEN`, and `KV_URL` variables supplied by the platform.

### Data model

Users are stored in Vercel KV with two key patterns:

- `user:{id}` — JSON object containing `id`, `email`, `passwordHash`, and `name`
- `user:email:{email}` — string pointer to the user id, enabling efficient lookups by email address

Passwords are never stored in plain text. All user-facing responses omit the `passwordHash` field and instead return only the profile attributes required by the UI.

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
