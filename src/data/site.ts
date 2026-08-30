export const company = {
  name: "Cabinova Kraft",
  legal: "Cabinova Kraft, Inc.",
  domain: "cabinovakraft.com",
  tagline: "Cabinets, drawer boxes, hardware, and components for qualified professionals",
  promise: "Cut to spec. Packed complete. Shipped on schedule.",
  founded: 1998,
  description:
    "Cabinova Kraft is a wholesale manufacturer of cabinets, drawer boxes, hardware, and cabinet components. We sell to cabinetmakers, remodelers, and cabinet industry professionals. We do not sell directly to the public.",
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
  hours: "Monday–Friday, 6:30 a.m.–4:00 p.m. Pacific",
  portalName: "KraftDesk",
  rtaName: "Linea",
  laminateName: "Formex",
} as const;

export const locations = [
  {
    slug: "portland",
    name: "Portland, Oregon",
    role: "Headquarters, cabinet manufacturing & Will Call",
    address: ["1840 N Columbia Blvd", "Portland, OR 97217"],
    phone: "503-555-2210",
    willCall: "Monday–Friday, 6:30 a.m.–2:30 p.m.",
    notes:
      "Our original shop and corporate office. Linea cabinets, dovetail drawer boxes, face frames, and hardware kits ship from this plant. Will Call pickup is on the west dock.",
  },
  {
    slug: "charlotte",
    name: "Charlotte, North Carolina",
    role: "East Coast manufacturing & Will Call",
    address: ["920 Commerce Drive", "Charlotte, NC 28206"],
    phone: "704-555-3388",
    willCall: "Monday–Friday, 8:00 a.m.–4:00 p.m.",
    notes:
      "Serves shops east of the Mississippi. Linea cabinets, drawer boxes, components, and finishing for interiors run from this plant.",
  },
  {
    slug: "phoenix",
    name: "Phoenix, Arizona",
    role: "Southwest distribution & Will Call",
    address: ["4415 W Van Buren St, Suite 110", "Phoenix, AZ 85043"],
    phone: "602-555-9104",
    willCall: "Monday–Friday, 8:00 a.m.–12:00 p.m. by appointment",
    notes:
      "A shipping and Will Call location for Southwest shops. Schedule pickup the day before so we can stage your order.",
  },
] as const;

export const navProducts = [
  { href: "/products/cabinets", label: "Cabinets" },
  { href: "/products/drawer-boxes", label: "Drawer Boxes" },
  { href: "/products/hardware", label: "Hardware" },
  { href: "/products/components", label: "Components" },
];

export const navExplore = [
  { href: "/products/materials", label: "Materials" },
  { href: "/products/finishes", label: "Finishes" },
  { href: "/products/brands", label: "Cabinova Brands" },
];

export const mainNav = [
  { href: "/products", label: "Products", mega: true },
  { href: "/markets", label: "Markets" },
  { href: "/gallery", label: "Gallery" },
  { href: "/learn", label: "Learn" },
  { href: "/videos", label: "Video" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
] as const;
