# Agents

## Cursor Cloud specific instructions

**Fanziz** is a self-contained Next.js 15 sports dashboard with no backend, no database, and no environment variables. All data is hardcoded in TypeScript files.

### Running the app

- `npm run dev` starts the dev server on `http://localhost:3000`.
- See `README.md` for full list of scripts (`dev`, `build`, `lint`, `start`).

### Gotchas

- ESLint is not included in `package.json` by default; the update script installs `eslint@^8` and `eslint-config-next@^15` alongside `npm install`. An `.eslintrc.json` with `next/core-web-vitals` is required for `npm run lint` to work non-interactively.
- You may see a `@next/swc` version mismatch warning — this is cosmetic and does not affect builds or dev server.
- The app uses `next-themes` for dark/light mode toggling (class-based via Tailwind `darkMode: 'class'`).
