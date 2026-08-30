export type ProductCategory = {
  slug: string;
  name: string;
  short: string;
  summary: string;
  leadTime: string;
  image: string;
  highlights: string[];
  body: string[];
  specs: { label: string; value: string }[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "cabinets",
    name: "Cabinets",
    short: "Linea RTA — frameless boxes, CNC-cut, hardware in the crate",
    summary:
      "Ready-to-assemble frameless cabinets you quote and bundle with drawer boxes, hardware, and components in KraftDesk.",
    leadTime: "6–10 working days on stock materials",
    image: "/images/gallery-kitchen-work.jpg",
    highlights: [
      "¾″ cabinet parts with ¼″ or ¾″ full backs",
      "Blind mortise and tenon joinery, CNC-sized",
      "Assembly hardware included with every box",
      "Ships from Portland and Charlotte",
    ],
    body: [
      "Linea is how shops order frameless cabinets without owning a CNC cell. Choose configuration, edge banding, and material. KraftDesk sizes the parts, prices the job, and lets you add drawer boxes, hardware, and components on the same PO.",
      "Boxes are cut from ¾″ stock with a full back. Blind mortise and tenon construction keeps the case square on the jobsite. Stock materials ship in 6 to 10 working days. We do not sell cabinet doors — hang your own or source them separately.",
    ],
    specs: [
      { label: "Construction", value: "Frameless, blind mortise & tenon" },
      { label: "Material thickness", value: "¾″ sides, ¼″ or ¾″ backs" },
      { label: "Included", value: "Confirmat, dowels, and clips in the crate" },
      { label: "Configurations", value: "Base, wall, tall, vanity, corner, blind, pantry" },
    ],
  },
  {
    slug: "drawer-boxes",
    name: "Drawer Boxes",
    short: "Dovetail or doweled, assembled or knocked down",
    summary:
      "Drawer boxes built for daily use — dovetail or doweled, ½″ or ⅝″ sides, with finish and scoop options.",
    leadTime: "5–8 working days",
    image: "/images/gallery-wood.jpg",
    highlights: [
      "Dovetail or doweled joinery",
      "Assembled or unassembled",
      "½″ and ⅝″ sides, ¼″ or ⅜″ bottoms",
      "Scoop, notch, and corner / U-shape boxes",
    ],
    body: [
      "A drawer that racks after six months is a callback. Our boxes are cut from maple, birch, or white melamine with joinery that stays square under load.",
      "Order assembled for install speed or knocked down to save freight. Heavier bottoms are available for file drawers, pot-and-pan bases, and pantry pullouts.",
    ],
    specs: [
      { label: "Joinery", value: "Dovetail or doweled" },
      { label: "Side thickness", value: "½″ or ⅝″" },
      { label: "Bottom", value: "¼″ standard, ⅜″ heavy-duty" },
      { label: "Finish", value: "Clear, UV, or matching color" },
    ],
  },
  {
    slug: "hardware",
    name: "Hardware",
    short: "Hinges, glides, knobs, pulls, and kits",
    summary:
      "Functional and decorative hardware specified with the cabinet — hinges, undermount and side-mount glides, knobs, and pulls.",
    leadTime: "Ships with the job or next-day on stock",
    image: "/images/gallery-open-plan.jpg",
    highlights: [
      "Soft-close hinges, overlay and inset",
      "Undermount and side-mount drawer glides",
      "Knobs and pulls in common finishes",
      "Waste, recycle, and tip-on kits for Linea bases",
    ],
    body: [
      "Hardware is specified with the box, not after. We stock hinge and glide patterns shops actually reorder, plus a short list of knobs and pulls.",
      "Pair a Linea cabinet with the matching hinge plate and an undermount glide so the install is hanging, not laying out a jig.",
    ],
    specs: [
      { label: "Hinges", value: "Soft-close, 6-way, overlay and inset" },
      { label: "Glides", value: "Undermount and side-mount, full extension" },
      { label: "Decorative", value: "Knobs and bar pulls, 5 finishes" },
      { label: "Kits", value: "Waste/recycle, tip-on, and dampers" },
    ],
  },
  {
    slug: "components",
    name: "Components",
    short: "Face frames, panels, fillers, shelves, and toekicks",
    summary:
      "The parts that finish a cabinet run — face frames, end panels, fillers, stretchers, shelves, and toekicks, cut to your list.",
    leadTime: "6–10 working days",
    image: "/images/gallery-house.jpg",
    highlights: [
      "Face frames in maple, poplar, and painted MDF",
      "Finished end panels and refrigerator panels",
      "Fillers, toekicks, and stretchers cut to width",
      "Adjustable shelves bored to the Linea pattern",
    ],
    body: [
      "Not every job is a full Linea run. Shops that build their own cases still buy our frames, panels, and fillers so the millwork matches the boxes they hang next to it.",
      "Send openings and thicknesses. We cut, edge, and finish components on the same line as the cabinets so color and grain stay in one lot.",
    ],
    specs: [
      { label: "Frames", value: "Standard and special face-frame styles" },
      { label: "Panels", value: "End, wall, refrigerator, and finished backs" },
      { label: "Fillers", value: "Toekick, scribe, and overlay fillers" },
      { label: "Interior", value: "Shelves, stretchers, and nailers" },
    ],
  },
];

export const materials = [
  {
    slug: "maple",
    name: "Maple",
    group: "Hardwood",
    summary:
      "Hard, even grain. The default for painted and clear face frames, drawer boxes, and finished interiors.",
    image: "/images/gallery-classic.jpg",
  },
  {
    slug: "cherry",
    name: "Cherry",
    group: "Hardwood",
    summary:
      "Warm, darkens with light. Used on frames and visible panels for traditional kitchens.",
    image: "/images/gallery-wood.jpg",
  },
  {
    slug: "walnut",
    name: "Walnut",
    group: "Hardwood",
    summary:
      "Chocolate to purple-brown. Specified on island panels and office cabinets where the grain is the finish.",
    image: "/images/material-walnut.jpg",
  },
  {
    slug: "white-oak",
    name: "White Oak",
    group: "Hardwood",
    summary: "Open grain, quarter-sawn available. Craftsman frames and exposed interiors.",
    image: "/images/gallery-rustic.jpg",
  },
  {
    slug: "alder",
    name: "Alder",
    group: "Hardwood",
    summary: "Soft, even color. Takes stain like cherry at a lower price. Country and cabin frames.",
    image: "/images/gallery-neutral.jpg",
  },
  {
    slug: "birch",
    name: "Birch",
    group: "Hardwood",
    summary: "The volume drawer-box species. Clear UV, consistent, and easy to pair with white Linea interiors.",
    image: "/images/gallery-wood.jpg",
  },
  {
    slug: "mdf",
    name: "MDF",
    group: "Composite",
    summary: "Stable under paint. Used for painted face frames, fillers, and finished panels.",
    image: "/images/hero-white-kitchen.jpg",
  },
  {
    slug: "melamine",
    name: "Melamine / TFL",
    group: "Composite",
    summary: "Thermally fused laminate on particleboard or MDF. Linea cabinets, drawer boxes, and commercial work.",
    image: "/images/gallery-kitchen-work.jpg",
  },
  {
    slug: "laminate",
    name: "High-pressure laminate",
    group: "Composite",
    summary: "Decorative laminate on composite core. High-wear commercial and healthcare interiors.",
    image: "/images/market-commercial.jpg",
  },
  {
    slug: "plywood",
    name: "Plywood",
    group: "Composite",
    summary: "Hardwood plywood for heavy-duty boxes, shelves, and finished interiors.",
    image: "/images/shop-woodworking.jpg",
  },
];

export const finishes = [
  {
    slug: "clear",
    name: "Clear conversion varnish",
    summary: "A durable, low-amber film for maple and birch drawer boxes and frames.",
  },
  {
    slug: "stain",
    name: "Spray-to-color stain",
    summary: "Matched to a chip. Same lot on frames, panels, and visible box sides.",
  },
  {
    slug: "paint",
    name: "Painted enamel",
    summary: "Catalyzed paint on MDF or maple frames and fillers. Stocked in the whites and grays shops sell.",
  },
  {
    slug: "uv",
    name: "UV topcoat",
    summary: "Fast-cure UV for drawer boxes and interiors that need a hard, low-VOC film.",
  },
];

export const rtaConfigs = [
  { name: "Base cabinet", note: "Single or double opening, drawer stack optional" },
  { name: "Wall cabinet", note: "12″–42″ high, adjustable shelves" },
  { name: "Tall pantry", note: "84″, 90″, 96″ with split openings" },
  { name: "Sink base / vanity", note: "False front, plumbing chase" },
  { name: "Blind corner", note: "Left or right, with filler pull" },
  { name: "Diagonal corner", note: "Upper or base, lazy susan ready" },
  { name: "Right-angle corner", note: "Base or wall, pie-cut or lazy" },
  { name: "Refrigerator panel pack", note: "Upper + panel stock or pantry + panel" },
];
