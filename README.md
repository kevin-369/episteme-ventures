# Episteme Digital

**Digital architecture practice — Nairobi, Kenya**

Built with Next.js 14 (App Router), Tailwind CSS v3, GSAP, and Lenis smooth scroll.

---

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

---

## Environment variables

Create a `.env.local` file in the project root (never commit this file):

```env
# ── Notion integration (required for /work client cards) ─────────
# Create an integration at https://www.notion.so/my-integrations
# Share the Portfolio database with the integration
NOTION_TOKEN=secret_xxxxxxxxxxxx

# ── Booking calendar (optional) ──────────────────────────────────
# Comma-separated ISO date strings to block on the /schedule calendar
# Example: BLOCKED_DATES=2026-12-25,2026-01-01
BLOCKED_DATES=

# ── Confirmation emails — option A: Gmail API ────────────────────
GMAIL_TOKEN=

# ── Confirmation emails — option B: SMTP (nodemailer fallback) ───
SMTP_HOST=smtp.example.com
SMTP_USER=studio@episteme.ventures
SMTP_PASS=your_smtp_password

# ── Google Calendar event creation (optional) ────────────────────
GOOGLE_CALENDAR_TOKEN=
```

### Setting variables on Vercel

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add each variable above for **Production**, **Preview**, and **Development** as appropriate
3. `NOTION_TOKEN` is the only required variable for full functionality
4. The booking system always writes to `data/bookings.json` as a fallback — no booking is ever lost even without email/calendar credentials

### Notion setup

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations) and create an integration
2. Copy the **Internal Integration Token** → set as `NOTION_TOKEN`
3. In your Notion workspace, open the Portfolio database → **Share** → invite the integration
4. The work page will automatically discover databases named "Portfolio", "Projects", "Work", or "Clients"

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — opening statement, thesis, pillars, metrics, CTA |
| `/work` | Services grid + Notion-powered client work |
| `/practice` | Philosophy — thesis, values, disciplines |
| `/studio` | Commercial — capabilities accordion, engagements, founder |
| `/intelligence` | Editorial posts |
| `/contact` | Contact form + booking prompt |
| `/schedule` | Custom 5-step booking flow |

## Brand tokens

```css
--obsidian:   #1C1917   /* type, dark sections (marquee, footer, loader) */
--terracotta: #C8512A   /* accent — lines, borders, active states */
--limestone:  #E7DED2   /* primary background */
--ghost:      #7C6A58   /* secondary text, labels */
--card:       #D4CAB8   /* card/panel background */
```

## Non-negotiables

- Zero border radius everywhere (`border-radius: 0 !important` in global reset)
- No shadows anywhere
- No gradients in the site body
- No icon libraries — all SVGs inline
- No stock photos — diagonal terracotta rule on `--card` background
- Barlow Condensed for display/headings, Barlow for body/UI
