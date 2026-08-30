export const company = {
  name: "Cabinova Kraft",
  legal: "Cabinova Kraft, Inc.",
  domain: "cabinovakraft.com",
  tagline: "Cabinets, drawer boxes, hardware, and components.",
  promise: "Cut to spec. Packed complete.",
  founded: 1998,
  description:
    "Wholesale cabinets, drawer boxes, hardware, and components for cabinetmakers and contractors. Trade only.",
  phone: {
    support: "800-555-1842",
    orders: "503-555-2210",
    fax: "800-555-2211",
    newAccounts: "855-555-7490",
  },
  email: {
    support: "hello@cabinovakraft.com",
    orders: "orders@cabinovakraft.com",
    newAccounts: "new@cabinovakraft.com",
    careers: "careers@cabinovakraft.com",
  },
  hours: "Mon–Fri, 6:30 a.m.–4:00 p.m. Pacific",
  portalName: "KraftDesk",
  rtaName: "Linea",
} as const;

export const locations = [
  {
    slug: "portland",
    name: "Portland, Oregon",
    role: "HQ, manufacturing, Will Call",
    address: ["1840 N Columbia Blvd", "Portland, OR 97217"],
    phone: "503-555-2210",
    willCall: "Mon–Fri, 6:30 a.m.–2:30 p.m.",
    notes: "Cabinets, drawer boxes, frames, and hardware ship from this plant.",
  },
  {
    slug: "charlotte",
    name: "Charlotte, North Carolina",
    role: "East Coast manufacturing, Will Call",
    address: ["920 Commerce Drive", "Charlotte, NC 28206"],
    phone: "704-555-3388",
    willCall: "Mon–Fri, 8:00 a.m.–4:00 p.m.",
    notes: "Serves shops east of the Mississippi.",
  },
  {
    slug: "phoenix",
    name: "Phoenix, Arizona",
    role: "Southwest Will Call",
    address: ["4415 W Van Buren St, Suite 110", "Phoenix, AZ 85043"],
    phone: "602-555-9104",
    willCall: "Mon–Fri, 8:00 a.m.–12:00 p.m. by appointment",
    notes: "Stage pickup the day before.",
  },
] as const;

export const navProducts = [
  { href: "/products/cabinets", label: "Cabinets" },
  { href: "/products/drawer-boxes", label: "Drawer boxes" },
  { href: "/products/hardware", label: "Hardware" },
  { href: "/products/components", label: "Components" },
];

export const navExplore = [
  { href: "/products/materials", label: "Materials" },
  { href: "/products/finishes", label: "Finishes" },
];

export const mainNav = [
  { href: "/products", label: "Products", mega: true },
  { href: "/gallery", label: "Gallery" },
  { href: "/learn", label: "Learn" },
  { href: "/about", label: "About" },
] as const;
