# Hand Crafted Jams & Sauces (Template 3)

Next.js 16 storefront for **[PLAN-03-JAMS-AND-SAUCES.md](../PLAN-03-JAMS-AND-SAUCES.md)**. Forked from the `honey` / `wire-and-bead` stack with themes **Farmhouse** (default), **Modern Condiment**, and **Garden**. Dev server uses port **3004** so it does not clash with other local storefronts. Default company slug: **`jams-and-sauces`**.

## Quick start

```bash
cd jams-and-sauces
npm install
cp .env.example .env.local
# Set NEXT_PUBLIC_API_URL and NEXT_PUBLIC_COMPANY_SLUG as needed
npm run dev
```

Open [http://localhost:3004](http://localhost:3004).

## Backend

Same django-crm API as other templates. Provision a company (slug `jams-and-sauces` or your choice) via `/admin/setup`. First-party catalog products use blank `supplier_slug`; checkout uses `isCourierGuyCartItem` — see PLAN-03 pitfall section.

## Themes

`data-theme`: `farmhouse` (default), `modern-condiment`, `garden`. Cookie / localStorage key: `site_theme`.

## Scripts

- `npm run dev` — dev server (port 3004)
- `npm run build` — production build
- `npm test` — Vitest
