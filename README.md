[README.md](https://github.com/user-attachments/files/25747860/README.md)
# The Flour Jar

A family café website built as a frontend assignment. Four pages, fully responsive, no backend.

---

## Brand Concept

**The Flour Jar** is a family-run café on Fitzroy Road, Primrose Hill, London. Ruth and Tom Hargreaves started it in 2019 — Ruth bakes, Tom keeps things running, their daughter Lily works front of house. Sam Okonkwo joined early on as head chef and has been there since.

The personality is cosy and neighbourhood-y. Not artisan-precious, not corporate-warm. Just a place that feels like someone's kitchen, happens to do very good coffee, and knows your name after two visits.

**Type:** Café  
**Location:** Primrose Hill, London NW1  
**Personality:** Warm, unpretentious, family-run  
**Menu style:** Scratch-made daily — sourdough, seasonal food, proper coffee

---

## Pages

- **Home** — Hero, about snippet, featured items, opening hours, find us
- **Menu** — Categorised (Breakfast, Light Bites, Sandwiches, Sweet Things, Drinks) with dietary tags
- **About** — Brand story, values, team
- **Contact** — Address, hours, map, enquiry form

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS + CSS variables |
| Components | shadcn/ui |
| Animation | Framer Motion |
| Routing | React Router DOM v6 |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Fonts | Google Fonts (Playfair Display, Source Sans 3) |

---

## Setup Instructions

**Requirements:** Node.js 18+ and npm

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/the-flour-jar.git
cd the-flour-jar

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

```bash
# Run tests
npm run test

# Production build
npm run build

# Preview production build
npm run preview
```

No environment variables required. No backend. Opens and runs from the above commands alone.

---

## Design Decisions

### Colour Palette

All colours are defined as HSL CSS variables in `src/index.css` and consumed via Tailwind tokens. The palette was chosen to feel warm and inviting without being loud.

| Token | Value | Use |
|-------|-------|-----|
| `--background` | Warm off-white (`36 33% 97%`) | Page background |
| `--primary` | Deep warm brown (`24 60% 30%`) | CTAs, headings, key UI |
| `--warm-gold` | Amber (`38 70% 55%`) | Accents, highlights |
| `--warm-terracotta` | Terracotta (`16 55% 50%`) | GF dietary tag, secondary accents |
| `--accent` | Muted olive green (`145 25% 36%`) | V/VE dietary tags |
| `--card` | Slightly deeper cream (`36 30% 95%`) | Section backgrounds |
| `--muted-foreground` | Warm grey (`24 8% 45%`) | Body text, descriptions |

Dark mode is supported — all variables remap automatically via the `.dark` class.

### Typography

Two fonts, clear roles:

- **Playfair Display** (serif) — all headings. Chosen for its editorial warmth and slight formality. Feels handcrafted without being novelty.
- **Source Sans 3** (sans-serif) — body text, labels, UI. Clean and readable at small sizes. Pairs well with Playfair without competing.

Font weight range: 300–700 loaded to keep hierarchy options open while avoiding bloat.

### Layout

- Menu page uses a 2-column grid on tablet and desktop — scannable at a glance, single column on mobile
- About page stacks vertically on mobile, side-by-side on desktop
- Hero is full viewport height on desktop, reduced on mobile
- All spacing uses Tailwind's scale consistently — no magic numbers

### Motion

Framer Motion `fadeUp` variants used on all content sections — `opacity: 0 → 1`, `y: 24 → 0`, staggered by index. Kept subtle. No motion on the hero (loads immediately). No motion that blocks content or distracts from reading.

### Data

All site content lives in `src/data/siteData.ts` — menu items, featured dishes, team members, opening hours. Changing copy or adding menu items requires editing one file only.

---

## Assumptions

- No real reservation or payment system required — this is a brand website only
- Map embed uses a placeholder iframe pointing to the Primrose Hill area — not a pinned business listing
- Contact form submits locally (toast confirmation) — no backend or email service wired up
- Images sourced from Unsplash — free to use, consistent warm-lit food photography tone
- Opening hours are static — no live updates

---

## Known Limitations

- Contact form does not send emails — would need a service like Resend, EmailJS, or a backend endpoint in production
- Map embed is approximate — a real deployment would use a proper Google Maps embed with a pinned address
- No CMS — content updates require editing `siteData.ts` directly
- Images are remote Unsplash URLs — a production site would use locally optimised assets

---

## Project Structure

```
src/
├── components/       # Layout, Navbar, UI primitives (shadcn)
├── data/
│   └── siteData.ts   # All site content — menu, team, hours
├── pages/
│   ├── Index.tsx     # Home
│   ├── Menu.tsx      # Menu
│   ├── About.tsx     # About
│   └── Contact.tsx   # Contact / Find Us
├── hooks/            # useToast and other shadcn hooks
├── lib/              # Tailwind utility helpers
└── index.css         # CSS variables, base styles, font imports
```
