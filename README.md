# Cabinova Kraft

Wholesale manufacturer of **cabinets, drawer boxes, hardware, and components** for cabinetmakers and contractors. Trade catalog, account application, KraftDesk quoting, gallery, and shop education.

This project is its own folder, its own GitHub repository, and its own Vercel project. It is not nested inside another website.

- GitHub: https://github.com/vortexhublab/cabinovakraft
- Vercel: https://cabinovakraft.vercel.app
- Domain: https://cabinovakraft.com

**Trade only.** The site does not sell to homeowners. A homeowners page routes consumers to a cabinet shop.

We do not sell cabinet doors or drawer fronts. Shops hang their own or source them separately.

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

- Four product lines: Linea cabinets, drawer boxes, hardware, components
- Materials and finishes for boxes, frames, and interiors
- Project gallery with style filters
- Learn library and mill blog
- Locations, careers, testimonials, environmental notes, downloads
- Multi-step **Become a customer** application
- **KraftDesk** quote builder stored in the browser
- Demo login: `demo@cabinovakraft.com` / `demo1234`

Pricing on this preview is published list for demonstration. A production plant would attach real multipliers, mill calendars, and ERP after account approval.

## Domain

`cabinovakraft.com` is already pointed at this Vercel project. Keep GoDaddy nameservers (`ns03` / `ns04.domaincontrol.com`). The records that serve the site:

| Type | Name | Data |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cabinovakraft.com.` |

Leave Microsoft / Outlook CNAMEs (`autodiscover`, `lyncdiscover`, `msoid`, `sip`) if you use Outlook.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.
