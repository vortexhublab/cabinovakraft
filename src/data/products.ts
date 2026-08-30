export const catalogOrder = [
  "cabinets",
  "doors",
  "drawer-boxes",
  "components",
  "accessories",
  "hardware",
  "specialty",
] as const;

export type ProductCategory = {
  slug: string;
  name: string;
  short: string;
  summary: string;
  leadTime: string;
  image: string;
  images: string[];
  highlights: string[];
  body: string;
  specs: { label: string; value: string }[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "cabinets",
    name: "Cabinets",
    short: "Linea RTA frameless, CNC-cut",
    summary: "Frameless boxes sized to your list. Bundle doors, boxes, and hardware on the same PO.",
    leadTime: "6–10 working days",
    image: "/images/cabinets-open.jpg",
    images: ["/images/cabinets-open.jpg", "/images/hero-white-kitchen.jpg", "/images/gallery-kitchen-work.jpg"],
    highlights: ["¾″ parts, full back", "Blind mortise and tenon", "Assembly hardware included"],
    body: "Linea is a frameless RTA box. Pick the configuration and material; we cut, edge, and pack it. Add Ridge or Vale fronts on the same ticket.",
    specs: [
      { label: "Construction", value: "Frameless, mortise & tenon" },
      { label: "Stock", value: "¾″ sides, ¼″ or ¾″ backs" },
      { label: "In the crate", value: "Confirmats, dowels, clips" },
      { label: "Types", value: "Base, wall, tall, vanity, corner" },
    ],
  },
  {
    slug: "drawer-boxes",
    name: "Drawer boxes",
    short: "Dovetail or doweled, assembled or KD",
    summary: "Maple, birch, or white melamine. Built to stay square.",
    leadTime: "5–8 working days",
    image: "/images/drawers-box.jpg",
    images: ["/images/drawers-box.jpg", "/images/gallery-cabinets.jpg", "/images/cabinets.jpg"],
    highlights: ["Dovetail or doweled", "½″ or ⅝″ sides", "Assembled or knocked down"],
    body: "Order assembled for speed or KD for freight. Heavier bottoms for file, pot, and pantry drawers.",
    specs: [
      { label: "Joinery", value: "Dovetail or doweled" },
      { label: "Sides", value: "½″ or ⅝″" },
      { label: "Bottom", value: "¼″ standard, ⅜″ heavy" },
      { label: "Finish", value: "Clear, UV, or color" },
    ],
  },
  {
    slug: "hardware",
    name: "Hardware",
    short: "Hinges, glides, knobs, pulls, kits",
    summary: "Specify it with the box so the install is hanging, not laying out a jig.",
    leadTime: "Ships with the job",
    image: "/images/gallery-cabinets.jpg",
    images: ["/images/gallery-cabinets.jpg", "/images/cabinets.jpg", "/images/gallery-wood.jpg"],
    highlights: ["Soft-close hinges", "Undermount and side-mount glides", "Knobs and bar pulls"],
    body: "We stock the hinge and glide patterns shops reorder, plus a short list of knobs and pulls.",
    specs: [
      { label: "Hinges", value: "Soft-close, overlay and inset" },
      { label: "Glides", value: "Full extension, 12″–21″" },
      { label: "Decorative", value: "Five finishes" },
      { label: "Kits", value: "Waste, tip-on, dampers" },
    ],
  },
  {
    slug: "components",
    name: "Components",
    short: "Frames, panels, fillers, shelves",
    summary: "The parts that finish a run, cut to the same list as the boxes.",
    leadTime: "6–10 working days",
    image: "/images/cabinets-open.jpg",
    images: ["/images/cabinets-open.jpg", "/images/gallery-interior.jpg", "/images/gallery-modern.jpg"],
    highlights: ["Face frames to opening", "End and refrigerator panels", "Fillers, shelves, toekicks"],
    body: "Shops that build their own cases still buy frames, panels, and fillers here so the millwork matches.",
    specs: [
      { label: "Frames", value: "Maple, poplar, painted MDF" },
      { label: "Panels", value: "End, fridge, finished backs" },
      { label: "Fillers", value: "Toekick, scribe, overlay" },
      { label: "Interior", value: "Shelves, stretchers, nailers" },
    ],
  },
  {
    slug: "doors",
    name: "Doors & fronts",
    short: "Shaker, slab, miter, raised, glass",
    summary: "Custom-sized doors and drawer fronts in wood, MDF, and TFL. No moldings.",
    leadTime: "6–10 working days",
    image: "/images/gallery-wood.jpg",
    images: ["/images/gallery-wood.jpg", "/images/cabinets.jpg", "/images/gallery-classic.jpg"],
    highlights: ["¾″ or ⅞″", "5-piece or slab fronts", "Clear, stain, or paint"],
    body: "Order by style, species, and finished size. Pair with a Linea box or send openings from your own cases.",
    specs: [
      { label: "Families", value: "Ridge, Vale, Meridian, Grove" },
      { label: "Thickness", value: "¾″ standard, ⅞″ miter" },
      { label: "Materials", value: "Maple, alder, oak, MDF, TFL" },
      { label: "Glass", value: "Ridge Lite and Grove Lite" },
    ],
  },
  {
    slug: "accessories",
    name: "Accessories",
    short: "Corbels, posts, racks, valances",
    summary: "The accents that finish a run. We do not mill crown, base, or other moldings.",
    leadTime: "6–12 working days",
    image: "/images/gallery-interior.jpg",
    images: ["/images/gallery-interior.jpg", "/images/gallery-classic.jpg", "/images/oak.jpg"],
    highlights: ["Corbels and island posts", "Bottle racks and valances", "Finish kits for field parts"],
    body: "Specify the same species and finish as the doors. Sheet stock and completion kits ship with the job.",
    specs: [
      { label: "Wood", value: "Corbels, posts, bottle racks" },
      { label: "TFL", value: "Valances and extra panels" },
      { label: "Finish", value: "Gallon kits for field parts" },
      { label: "Not offered", value: "Crown, base, or applied molding" },
    ],
  },
  {
    slug: "specialty",
    name: "Specialty",
    short: "Hoods, furniture bases, radius",
    summary: "Pieces that sit outside a standard box list.",
    leadTime: "Quoted with the job",
    image: "/images/gallery-marble.jpg",
    images: ["/images/gallery-marble.jpg", "/images/gallery-modern.jpg", "/images/cabinets-open.jpg"],
    highlights: ["Range hoods", "Furniture bases and bun feet", "Radius ends"],
    body: "Send a sketch or opening. We mill the part on the same line as the cabinets so color stays in one lot.",
    specs: [
      { label: "Hoods", value: "Wall and island, wood or TFL" },
      { label: "Bases", value: "Furniture toe, bun feet" },
      { label: "Radius", value: "Ends and open shelves" },
      { label: "Wine", value: "Cubbies and bottle lattices" },
    ],
  },
];

export const catalogLines = catalogOrder
  .map((slug) => productCategories.find((p) => p.slug === slug))
  .filter((p): p is ProductCategory => Boolean(p));

export type Material = {
  slug: string;
  name: string;
  group: string;
  summary: string;
  image: string;
};

export type Finish = {
  slug: string;
  name: string;
  summary: string;
  image: string;
};

export const materials: Material[] = [
  {
    slug: "maple",
    name: "Maple",
    group: "Hardwood",
    summary: "Even grain. Default for clear frames and drawer boxes.",
    image: "/images/drawers-box.jpg",
  },
  {
    slug: "cherry",
    name: "Cherry",
    group: "Hardwood",
    summary: "Warm. Darkens with light.",
    image: "/images/gallery-wood.jpg",
  },
  {
    slug: "walnut",
    name: "Walnut",
    group: "Hardwood",
    summary: "Dark grain for islands and office work.",
    image: "/images/wood-close.jpg",
  },
  {
    slug: "white-oak",
    name: "White oak",
    group: "Hardwood",
    summary: "Open grain. Quarter-sawn available.",
    image: "/images/cabinets-open.jpg",
  },
  {
    slug: "alder",
    name: "Alder",
    group: "Hardwood",
    summary: "Takes stain like cherry at a lower price.",
    image: "/images/gallery-classic.jpg",
  },
  {
    slug: "birch",
    name: "Birch",
    group: "Hardwood",
    summary: "The volume drawer-box species.",
    image: "/images/hero-white-kitchen.jpg",
  },
  {
    slug: "mdf",
    name: "MDF",
    group: "Composite",
    summary: "Stable under paint.",
    image: "/images/maple.jpg",
  },
  {
    slug: "melamine",
    name: "Melamine / TFL",
    group: "Composite",
    summary: "Linea interiors and commercial work.",
    image: "/images/gallery-kitchen-work.jpg",
  },
  {
    slug: "laminate",
    name: "High-pressure laminate",
    group: "Composite",
    summary: "High-wear commercial interiors.",
    image: "/images/office.jpg",
  },
  {
    slug: "plywood",
    name: "Plywood",
    group: "Composite",
    summary: "Heavy-duty boxes, shelves, finished interiors.",
    image: "/images/oak.jpg",
  },
];

export const finishes = [
  {
    slug: "clear",
    name: "Clear",
    summary: "Low-amber film for maple and birch.",
    image: "/images/cabinets-open.jpg",
  },
  {
    slug: "stain",
    name: "Stain",
    summary: "Matched to a chip. Same lot on the visible parts.",
    image: "/images/gallery-wood.jpg",
  },
  {
    slug: "paint",
    name: "Paint",
    summary: "Catalyzed enamel on MDF or maple. Stocked whites and grays.",
    image: "/images/hero-white-kitchen.jpg",
  },
  {
    slug: "uv",
    name: "UV",
    summary: "Hard, low-VOC topcoat for boxes and interiors.",
    image: "/images/maple.jpg",
  },
];

export const rtaConfigs = [
  { name: "Base", note: "Single or double opening" },
  { name: "Wall", note: "12″–42″ high" },
  { name: "Tall pantry", note: "84″, 90″, 96″" },
  { name: "Sink / vanity", note: "False front, plumbing chase" },
  { name: "Blind corner", note: "Left or right" },
  { name: "Diagonal corner", note: "Lazy susan ready" },
  { name: "Right-angle corner", note: "Pie-cut or lazy" },
  { name: "Refrigerator pack", note: "Sides + optional upper" },
];
