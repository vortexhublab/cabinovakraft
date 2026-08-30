export const company = {
  name: "Cabinova Kraft",
  legal: "Cabinova Kraft, Inc.",
  domain: "cabinovakraft.com",
  tagline: "Built right. Built here. From our shop to your home.",
  promise: "Cut to spec. Packed complete.",
  founded: 1998,
  description:
    "Wholesale RTA cabinets, doors, drawer boxes, hardware, components, and accessories for cabinetmakers and contractors. Trade only. We do not mill moldings.",
  email: {
    support: "admin@cabinovakraft.com",
    orders: "admin@cabinovakraft.com",
    newAccounts: "admin@cabinovakraft.com",
    careers: "admin@cabinovakraft.com",
  },
  hours: "Mon–Fri, 6:30 a.m.–4:00 p.m. Pacific",
  portalName: "KraftDesk",
  rtaName: "Linea",
  address: ["Rostrata Ave", "Lake Elsinore, CA 92532"],
} as const;

export const locations = [
  {
    slug: "lake-elsinore",
    name: "Lake Elsinore, California",
    role: "HQ, manufacturing, Will Call",
    address: ["Rostrata Ave", "Lake Elsinore, CA 92532"],
    willCall: "Mon–Fri, 6:30 a.m.–2:30 p.m.",
    notes: "Cabinets, drawer boxes, frames, and hardware ship from this plant.",
  },
] as const;

export const navProducts = [
  { href: "/products/cabinets", label: "RTA cabinets" },
  { href: "/products/doors", label: "Doors & fronts" },
  { href: "/products/drawer-boxes", label: "Drawer boxes" },
  { href: "/products/components", label: "Components" },
  { href: "/products/accessories", label: "Accessories" },
  { href: "/products/hardware", label: "Hardware" },
  { href: "/products/specialty", label: "Specialty" },
];

export const navExplore = [
  { href: "/products/materials", label: "Materials" },
  { href: "/products/finishes", label: "Finishes" },
  { href: "/products/design-styles", label: "Design styles" },
];

export const mainNav = [
  { href: "/products", label: "Products", mega: true },
  { href: "/gallery", label: "Gallery" },
  { href: "/learn", label: "Learn" },
  { href: "/about", label: "About" },
] as const;
