# Cabinova Kraft

Wholesale manufacturer of **cabinets, drawer boxes, hardware, and components** for cabinetmakers and contractors. Trade catalog with account application, KraftDesk quoting, gallery, and shop education.

**Trade only.** The site does not sell to homeowners. A homeowners page and contact form route consumers to a cabinet shop.

We do not sell cabinet doors or drawer fronts. Shops hang their own or source them separately.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43180](http://localhost:43180).

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

## Point cabinovakraft.com at this site

The domain is already registered at GoDaddy. It currently uses GoDaddy default nameservers and the apex **A** record is **WebsiteBuilder Site**. Visitors to cabinovakraft.com see GoDaddy’s builder, not this app, until you publish a host and change that record.

Keep these as they are:

- Nameservers: `ns03.domaincontrol.com`, `ns04.domaincontrol.com`
- Microsoft / Outlook CNAMEs (`autodiscover`, `lyncdiscover`, `msoid`, `sip`)
- `www` CNAME → `cabinovakraft.com`

The app is on GitHub and Vercel:

- Repo: https://github.com/vortexhublab/cabinovakraft
- Live now: https://cabinovakraft.vercel.app
- Custom domain (waiting on GoDaddy DNS): https://cabinovakraft.com

In GoDaddy → DNS, **do not** click Change Nameservers. Keep `ns03` / `ns04.domaincontrol.com`. Edit records only:

| Type | Name | Data | Action |
|---|---|---|---|
| A | `@` | WebsiteBuilder Site | Delete or replace |
| A | `@` | `216.198.79.1` | Add |
| A | `@` | `64.29.17.1` | Add |
| CNAME | `www` | `74c99ac4a8c5f98c.vercel-dns-017.com.` | Replace the current `cabinovakraft.com` CNAME |

Leave the Microsoft / Outlook CNAMEs (`autodiscover`, `lyncdiscover`, `msoid`, `sip`) alone. Propagation is about one hour.

This preview does not include real payments, ERP, or wholesale multipliers. Demo login: `demo@cabinovakraft.com` / `demo1234`.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.
