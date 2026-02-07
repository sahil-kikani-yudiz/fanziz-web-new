# Fanziz – Next.js App

Immersive sports dashboard built with **Next.js 15** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS** with a custom design system.

## Prerequisites

- **Node.js** `^18.18.0` or `^19.8.0` or `>= 20.0.0` (required for Next.js 15)

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Run ESLint

## Project structure

- **`app/`** – App Router: `layout.tsx`, `page.tsx`, `globals.css`
- **`components/`**
  - **`layout/`** – `Nav.tsx`, `BottomBar.tsx`
  - **`lingo/`** – `LingoSelection.tsx`
  - **`score/`** – `CricketScoreCard.tsx`, `LiveScoresSection.tsx`
  - **`hub/`** – `ContentTabs.tsx`, `HubSection.tsx`
  - **`ui/`** – `constants.ts` (types and shared data)
- **`tailwind.config.ts`** – Custom theme (primary, neutral, secondary, tertiary, state, accent)
- **`next.config.ts`** – Next.js config and image `remotePatterns`

Tailwind uses your custom color palette (primary, neutral, secondary, tertiary, state, accent) with `darkMode: 'class'`.
