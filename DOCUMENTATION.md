# The Flour Jar — Technical Documentation

> Detailed technical documentation covering architecture, component APIs, data flow, design system internals, and deployment.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Data Flow](#data-flow)
3. [Component API Reference](#component-api-reference)
4. [Page Components](#page-components)
5. [Design System Deep Dive](#design-system-deep-dive)
6. [Routing & Navigation](#routing--navigation)
7. [Animation System](#animation-system)
8. [Form Handling](#form-handling)
9. [Accessibility](#accessibility)
10. [Performance Optimisations](#performance-optimisations)
11. [Testing](#testing)
12. [Deployment Guide](#deployment-guide)
13. [Future Enhancements](#future-enhancements)

---

## Architecture Overview

The application follows a **component-driven architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────────┐
│                  App.tsx                     │
│         (Providers + Router)                │
├─────────────────────────────────────────────┤
│  QueryClientProvider                        │
│  └── TooltipProvider                        │
│      └── BrowserRouter                      │
│          └── Routes                         │
│              ├── / ──────► Index.tsx         │
│              ├── /menu ──► Menu.tsx          │
│              ├── /about ─► About.tsx         │
│              ├── /contact► Contact.tsx       │
│              └── * ──────► NotFound.tsx      │
└─────────────────────────────────────────────┘
```

### Provider Stack

| Provider | Purpose |
|----------|---------|
| `QueryClientProvider` | TanStack React Query — client-side cache & async state (ready for API integration) |
| `TooltipProvider` | Radix tooltip context for shadcn/ui components |
| `Toaster` / `Sonner` | Toast notification systems |
| `BrowserRouter` | Client-side routing via React Router v6 |

### Layered Component Hierarchy

```
App.tsx (providers + router)
└── Layout.tsx (shared shell)
    ├── Header.tsx (sticky nav + mobile menu)
    ├── <main> (page content)
    │   └── Page Component (Index / Menu / About / Contact)
    └── Footer.tsx (site info + links)
```

---

## Data Flow

### Static Data Architecture

All content is centralised in `src/data/siteData.ts` and consumed by page components via ES module imports. This pattern was chosen deliberately to:

1. **Simulate an API contract** — TypeScript interfaces define the shape, making migration to a real API seamless
2. **Enable single-source updates** — Change a price once, it updates everywhere
3. **Support type safety** — All consumers get full IntelliSense and compile-time checks

```
┌──────────────────────┐
│   siteData.ts        │
│                      │
│  menuData ───────────┼──► Menu.tsx (full menu)
│                      │──► Index.tsx (featured items subset)
│                      │
│  featuredItems ──────┼──► Index.tsx (hero carousel)
│                      │
│  teamMembers ────────┼──► About.tsx (team section)
│                      │
│  openingHours ───────┼──► Index.tsx (hours widget)
│                      │──► Contact.tsx (hours section)
└──────────────────────┘
```

### Form Data Flow (Contact Page)

```
User Input
  │
  ▼
useState (formData) ──► Controlled Inputs
  │
  ▼
handleSubmit (onSubmit)
  │
  ├── Validate (HTML5 required)
  ├── Show toast notification
  └── Reset form state
```

### Future API Integration Path

When connecting to a backend, the migration is minimal:

```typescript
// Current (static)
import { menuData } from "@/data/siteData";

// Future (API via React Query)
const { data: menuData } = useQuery({
  queryKey: ["menu"],
  queryFn: () => fetch("/api/menu").then(r => r.json()),
});
```

---

## Component API Reference

### `<Layout>`

Shared page wrapper providing consistent header/footer.

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `React.ReactNode` | ✅ | Page content rendered inside `<main>` |

**Usage:**
```tsx
<Layout>
  <section>Page content here</section>
</Layout>
```

**Renders:**
```
<div class="flex flex-col min-h-screen">
  <Header />
  <main class="flex-1">{children}</main>
  <Footer />
</div>
```

---

### `<Header>`

Sticky navigation bar with responsive mobile menu.

| Feature | Implementation |
|---------|---------------|
| Sticky positioning | `sticky top-0 z-50` with backdrop blur |
| Mobile menu | Framer Motion `AnimatePresence` toggle |
| Active link highlight | `useLocation()` pathname comparison |
| Background | Semi-transparent with `backdrop-blur-md` |

**Internal State:**
- `mobileOpen: boolean` — controls hamburger menu visibility

**Navigation Links (hardcoded):**
```typescript
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Find Us" },
];
```

---

### `<Footer>`

Three-column responsive footer.

| Column | Content |
|--------|---------|
| Brand | Logo text + tagline |
| Quick Links | Navigation links to all pages |
| Visit Us | Address, phone, email |

**No props** — fully self-contained.

---

## Page Components

### `Index.tsx` (Home)

| Section | Description | Data Source |
|---------|-------------|-------------|
| Hero | Full-bleed background image, headline, CTAs | Static |
| About Snippet | Brief intro paragraph | Static |
| Featured Items | 4-card grid with images | `featuredItems` |
| Hours & Location | Two-column: opening hours + Google Maps | `openingHours` |

**Animation:** `fadeUp` variant with staggered `custom` delay index.

---

### `Menu.tsx`

| Section | Description | Data Source |
|---------|-------------|-------------|
| Hero | Title + dietary tag legend | Static |
| Categories | Iterates `menuData` categories → items grid | `menuData` |

**Dietary Tag Rendering:**
```typescript
const tagColors: Record<string, string> = {
  V: "bg-accent/20 text-accent",        // Vegetarian — olive green
  VE: "bg-accent/20 text-accent",       // Vegan — olive green
  GF: "bg-warm-terracotta/20 text-warm-terracotta", // Gluten Free — terracotta
};
```

---

### `About.tsx`

| Section | Description | Data Source |
|---------|-------------|-------------|
| Hero | Title + subtitle | Static |
| Brand Story | Two paragraphs of origin narrative | Static |
| Values | 3-column grid of principles | Static (inline array) |
| Team | 3-column grid with avatars, names, roles, bios | `teamMembers` |

---

### `Contact.tsx`

| Section | Description | Data Source |
|---------|-------------|-------------|
| Hero | Title + subtitle | Static |
| Info Column | Address, phone, email, hours, embedded map | `openingHours` |
| Form Column | Name, email, subject, message + submit | Local state |

**Form Fields:**

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `name` | `text` | ✅ | HTML5 required |
| `email` | `email` | ✅ | HTML5 email + required |
| `subject` | `text` | ❌ | Optional |
| `message` | `textarea` | ✅ | HTML5 required |

---

## Design System Deep Dive

### Token Architecture

All colours are defined as HSL channel values (without `hsl()` wrapper) in CSS custom properties, consumed by Tailwind via `hsl(var(--token))`.

```css
/* Example: --primary: 24 60% 30% */
/* Usage:  bg-primary → background-color: hsl(24 60% 30%) */
```

### Complete Token Map

#### Semantic Tokens

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `--background` | `36 33% 97%` | `24 10% 10%` | Page background |
| `--foreground` | `24 10% 15%` | `36 30% 92%` | Primary text |
| `--primary` | `24 60% 30%` | `30 55% 50%` | Brand accent (CTA, links) |
| `--primary-foreground` | `36 33% 97%` | `24 10% 10%` | Text on primary bg |
| `--secondary` | `36 25% 88%` | `24 15% 20%` | Secondary surfaces |
| `--muted` | `36 20% 92%` | `24 10% 18%` | Subdued backgrounds |
| `--muted-foreground` | `24 8% 45%` | `30 12% 55%` | Secondary text |
| `--accent` | `145 25% 36%` | `145 20% 32%` | Highlight (dietary tags) |
| `--card` | `36 30% 95%` | `24 10% 14%` | Card surfaces |
| `--border` | `30 18% 85%` | `24 10% 22%` | Borders & dividers |

#### Decorative Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--warm-gold` | `38 70% 55%` | Decorative highlights |
| `--warm-cream` | `40 40% 94%` | Soft backgrounds |
| `--warm-terracotta` | `16 55% 50%` | GF dietary tag |
| `--warm-olive` | `80 20% 40%` | Nature accent |
| `--warm-charcoal` | `24 10% 20%` | Deep text |

### Typography Scale

| Element | Font Family | Weight | Size (mobile → desktop) |
|---------|------------|--------|------------------------|
| H1 | Playfair Display | 700 (bold) | `text-4xl` → `text-5xl` / `text-7xl` |
| H2 | Playfair Display | 600 (semibold) | `text-2xl` → `text-3xl` / `text-4xl` |
| H3 | Playfair Display | 600 (semibold) | `text-base` → `text-lg` |
| Body | Source Sans 3 | 400 (regular) | `text-sm` → `text-base` |
| Small / Tags | Source Sans 3 | 600 (semibold) | `text-xs` / `text-[10px]` |

### Spacing System

| Context | Value | Tailwind Class |
|---------|-------|---------------|
| Section vertical padding | 64px / 96px | `py-16 md:py-24` |
| Container horizontal padding | 16px / 24px | `px-4 md:px-6` |
| Grid gaps | 24px / 32px / 48px | `gap-6` / `gap-8` / `gap-12` |
| Card internal padding | 20px | `p-5` |

---

## Routing & Navigation

### Route Configuration

```typescript
<Routes>
  <Route path="/"        element={<Index />} />
  <Route path="/menu"    element={<MenuPage />} />
  <Route path="/about"   element={<AboutPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="*"        element={<NotFound />} />
</Routes>
```

### Navigation Flow

```
Header NavLinks ──► React Router <Link> ──► Route match ──► Page Component
                                                               │
                                                               └──► Layout wrapper (Header + Footer persist)
```

Active state detection:
```typescript
location.pathname === link.to ? "text-primary" : "text-muted-foreground"
```

---

## Animation System

### Shared `fadeUp` Variant

Used across Index, About, and Menu pages:

```typescript
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};
```

**Stagger pattern:** Each element receives `custom={i}` where `i` is the element index, creating sequential reveal.

### Trigger: `whileInView`

```tsx
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}  // Only animate once
  custom={0}                 // Delay multiplier
>
```

### Mobile Menu Animation

```typescript
initial={{ height: 0, opacity: 0 }}
animate={{ height: "auto", opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
// Wrapped in <AnimatePresence> for exit animations
```

---

## Form Handling

### Contact Form Implementation

**State management:** React `useState` with controlled inputs

```typescript
const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: ""
});
```

**Submission flow:**
1. HTML5 native validation (`required`, `type="email"`)
2. `handleSubmit` prevents default
3. Toast notification displayed
4. Form state reset to empty

**UI Components used:**
- `<Input>` — shadcn/ui text input (Radix-based)
- `<Textarea>` — shadcn/ui multi-line input
- `<Label>` — accessible form labels
- `<Button>` — styled submit button

---

## Accessibility

| Feature | Implementation |
|---------|---------------|
| Semantic HTML | `<header>`, `<main>`, `<footer>`, `<nav>`, `<address>`, `<section>` |
| Landmarks | All major page regions use proper elements |
| Alt text | All `<img>` tags have descriptive `alt` attributes |
| Form labels | Every input has an associated `<Label>` with `htmlFor` |
| ARIA | `aria-label="Toggle menu"` on hamburger button |
| Keyboard nav | All interactive elements are focusable and operable |
| Colour contrast | WCAG AA compliant token pairs (dark foreground on light background) |
| Reduced motion | Framer Motion respects `prefers-reduced-motion` by default |
| Touch targets | Minimum 44px tap targets on mobile nav links |

---

## Performance Optimisations

| Technique | Where | Benefit |
|-----------|-------|---------|
| `loading="lazy"` | All images + iframe | Defers off-screen resources |
| `viewport={{ once: true }}` | All scroll animations | Prevents re-triggering |
| Font `display=swap` | Google Fonts URL | Shows fallback text immediately |
| Vite code splitting | Route-level (React Router) | Smaller initial bundle |
| Tailwind purge | Production build | Removes unused CSS |
| Image `fit=crop` params | Unsplash URLs | Serves correctly-sized images |

---

## Testing

### Setup

- **Runner:** Vitest (Vite-native, Jest-compatible)
- **DOM:** jsdom
- **Utilities:** @testing-library/react, @testing-library/jest-dom

### Commands

```bash
# Run all tests once
npm run test

# Watch mode (re-run on file changes)
npm run test:watch
```

### Test File Convention

```
src/
  test/
    setup.ts          # Global test setup (jest-dom matchers)
    example.test.ts   # Example test file
  components/
    __tests__/        # Co-located component tests (recommended)
```

### Recommended Test Coverage

| Component | What to test |
|-----------|-------------|
| `Header` | Desktop links render, mobile menu toggles, active state |
| `Footer` | All links present, copyright year |
| `Menu` | All categories render, dietary tags display correctly |
| `Contact` | Form validation, submission resets fields, toast appears |
| `Layout` | Children render between header and footer |

---

## Deployment Guide

### Option 1: Lovable Publish (Recommended)

1. Open the project in Lovable
2. Click **Publish** (top-right)
3. Click **Update** to deploy frontend changes
4. Optionally connect a custom domain in **Settings → Domains**

### Option 2: Static Hosting (Netlify / Vercel / GitHub Pages)

#### Build

```bash
npm run build
```

Output: `dist/` directory with static assets.

#### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add `_redirects` file for SPA routing:
   ```
   /*    /index.html   200
   ```

#### Vercel

1. Import GitHub repository
2. Framework preset: Vite
3. SPA routing handled automatically

#### GitHub Pages

1. Install `gh-pages`: `npm install -D gh-pages`
2. Add to `vite.config.ts`: `base: "/<repo-name>/"`
3. Add script: `"deploy": "npm run build && gh-pages -d dist"`
4. Run: `npm run deploy`

### Environment Variables

Currently none required. For future API integration:

```bash
# .env.local
VITE_API_URL=https://api.example.com
VITE_MAPS_KEY=your_google_maps_key
```

Access in code: `import.meta.env.VITE_API_URL`

---

## Future Enhancements

| Feature | Complexity | Description |
|---------|-----------|-------------|
| Dark mode toggle | Low | Add theme switcher in Header using `next-themes` (already installed) |
| Menu category tabs | Low | Sticky tab bar for quick-jump between menu sections |
| Online ordering | High | Cart system + Stripe checkout via Lovable Cloud |
| CMS integration | Medium | Move `siteData.ts` to database tables via Lovable Cloud |
| Blog / News | Medium | New route with markdown posts or CMS |
| Image gallery | Low | Masonry grid of café photos with lightbox |
| Newsletter signup | Medium | Email capture form + backend integration |
| SEO meta tags | Low | Per-page `<title>` and `<meta>` via react-helmet |

---

## Data Type Reference

### `MenuItem`
```typescript
interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags?: ('V' | 'VE' | 'GF')[];
  image?: string;
}
```

### `MenuCategory`
```typescript
interface MenuCategory {
  name: string;
  items: MenuItem[];
}
```

### `TeamMember` (implicit)
```typescript
{
  name: string;
  role: string;
  bio: string;
  image: string;
}
```

### `OpeningHours` (implicit)
```typescript
{
  day: string;
  hours: string;
}
```

---

*Generated for The Flour Jar frontend assignment. Last updated: March 2026.*
