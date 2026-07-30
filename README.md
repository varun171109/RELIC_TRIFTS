# ABC Thrifting — Storefront

A modern, mobile-friendly thrift/secondhand fashion storefront built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build:

```bash
npm run build
npm start
```

## Rebranding — change everything from one file

Open **`config/site.ts`**. Every page reads from this file:

- `brandName` — shown in the navbar, footer, and page titles. Change `"ABC Thrifting"` to your real name and it updates everywhere.
- `tagline`, `description` — hero headline and SEO description.
- `logoImage` — currently `null`, which shows the "Logo Here" placeholder badge in the navbar/footer. Drop your logo file into `public/images/` and set `logoImage: "/images/your-logo.png"` to swap it in.
- `email`, `phone`, `address`, `socials` — contact details used on the Contact page and footer.
- `nav` — the navbar links.

## Where things live

```
app/                 Pages (App Router) — one folder per route
  page.tsx           Home
  shop/               Shop grid, search, filters, sort
  product/[id]/       Product detail (dynamic route)
  about/  contact/    Static content pages
  login/ register/    Demo auth pages
  cart/  wishlist/    Cart & wishlist pages
  admin/              Inventory dashboard placeholder
components/          Reusable UI (Navbar, Footer, ProductCard, CartDrawer, ...)
context/             React Context for cart, wishlist, theme, and demo auth
data/products.ts     Dummy product catalog — replace with your real data/API
config/site.ts       Brand configuration (see above)
```

## Replacing the placeholder data

- **Products**: edit `data/products.ts`. Each product has an `images` array (currently placeholder Picsum URLs) — swap in your own photo URLs or local paths.
- **Images**: any `picsum.photos` or `images.unsplash.com` URL is a stand-in. Replace with real product photography before launch.
- **Team photos / store map**: `app/about/page.tsx` and `app/contact/page.tsx` have clearly marked "Photo Here" / "Map Embed Here" placeholders.

## Notes on what's real vs. a placeholder

- **Cart, wishlist, dark mode** are fully functional client-side (persisted to `localStorage`).
- **Login/Register** is a demo-only flow with no real backend or password checks — swap in a real auth provider (NextAuth, Clerk, Supabase, etc.) before launch.
- **Checkout button** and **newsletter/contact forms** are UI-only — connect a payment provider (Stripe/Razorpay) and a form backend (Formspree, an API route, etc.) to make them functional.
- **Admin dashboard** (`/admin`) is a static preview of an inventory table — connect it to a real database or headless commerce backend to manage products live.

## Design system

- Colors, fonts, and the "hangtag" signature motif are defined in `tailwind.config.ts` and `app/globals.css`.
- Fonts: **Fraunces** (display), **Inter** (body), **Space Mono** (price tags / labels), loaded via Google Fonts in `app/layout.tsx`.
- Dark mode uses Tailwind's `class` strategy, toggled via `context/ThemeContext.tsx`.
