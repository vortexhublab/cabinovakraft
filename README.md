# Cabinova Kraft

Wholesale manufacturer of **RTA cabinets, doors, drawer boxes, hardware, components, and accessories** for cabinetmakers and contractors. Trade catalog, account application, KraftDesk quoting, gallery, and shop education. We do not mill moldings.

This project is its own folder, its own GitHub repository, and its own Vercel project. It is not nested inside another website.

- GitHub: https://github.com/vortexhublab/cabinovakraft
- Vercel: https://cabinovakraft.vercel.app
- Domain: https://cabinovakraft.com

**Trade only.** The site does not sell to homeowners. A homeowners page routes consumers to a cabinet shop.

Door families are Ridge, Vale, Meridian, and Grove — Cabinova styles, not another mill’s catalog.

## Own folder on your computer

Clone this repo into a folder that is **not** inside another project:

```bash
git clone https://github.com/vortexhublab/cabinovakraft.git
cd cabinovakraft
npm install
npm run dev
```

Open [http://localhost:43180](http://localhost:43180).

On Windows (PowerShell):

```powershell
git clone https://github.com/vortexhublab/cabinovakraft.git
cd cabinovakraft
npm install
npm run dev
```

```bash
npm run build
npm start
```

## What is included

- Catalog: Linea cabinets, doors and fronts, drawer boxes, components, accessories, hardware, specialty (no moldings)
- Materials and finishes for boxes, frames, and interiors
- Project gallery with style filters
- Learn library and mill blog
- Locations, careers, testimonials, environmental notes, downloads
- Multi-step **Become a customer** application
- **KraftDesk** quote builder stored in the browser
- **Catalog Desk** at `/admin` to change prices, photos, and copy
- Demo login: `demo@cabinovakraft.com` / `demo1234`

## Update the catalog (no code)

1. Sign in with the demo account (or your mill login).
2. Open **Catalog Desk** from the account page, the top bar, or [cabinovakraft.com/admin](https://cabinovakraft.com/admin).
3. Edit a price, name, note, or photo. Or **Download CSV**, edit in Excel, and **Import CSV**.
4. Click **Save catalog**. Product pages and KraftDesk pick up the book immediately in this browser.

To publish the same book for every visitor:

- On your computer (`npm run dev`): Save writes `public/catalog-book.json`. Commit and push that file.
- On the live Vercel host: the server cannot write files. **Download JSON**, replace `public/catalog-book.json` in the repo, commit, and push (or send the file and ask for a deploy).

Photos: pick an existing `/images/…` file or upload a JPG/PNG/WebP under 2.5 MB. Use your own licensed shop photos — not another mill’s catalog shots.

Set `CATALOG_ADMIN_KEY` in the environment before taking real orders. The demo key matches the demo password (`demo1234`).

Pricing on this preview is published list for demonstration. A production plant would attach real multipliers, mill calendars, and ERP after account approval.

## Domain

`cabinovakraft.com` is already pointed at this Vercel project. Keep GoDaddy nameservers (`ns03` / `ns04.domaincontrol.com`). The records that serve the site:

| Type | Name | Data |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cabinovakraft.com.` |

Leave Microsoft / Outlook CNAMEs (`autodiscover`, `lyncdiscover`, `msoid`, `sip`) if you use Outlook.

## Originality

This is not a copy of another mill’s catalog. Product families (Linea, Ridge, Vale, Meridian, Grove, KraftDesk) and site copy are original to Cabinova Kraft. Category names such as drawer boxes or RTA cabinets are ordinary trade terms. Kitchen and shop photographs are stock images used under license, not another manufacturer’s shots. There is no affiliation with other component mills.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.
