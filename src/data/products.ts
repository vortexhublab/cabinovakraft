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
    slug: "rta-cabinets",
    name: "Linea RTA Cabinets",
    short: "Frameless boxes, CNC-cut, hardware in the crate",
    summary:
      "Ready-to-assemble frameless cabinet boxes you can quote and bundle with doors, fronts, and drawer boxes in KraftDesk.",
    leadTime: "6–10 working days on stock materials",
    image: "/images/gallery-kitchen-work.jpg",
    highlights: [
      "¾″ cabinet parts with ¼″ or ¾″ full backs",
      "Blind mortise and tenon joinery, CNC-sized",
      "Assembly hardware included with every box",
      "Ships from Portland and Charlotte",
    ],
    body: [
      "Linea is a simplified way to order frameless, ready-to-assemble cabinet boxes. Choose configuration, edge banding, and material. KraftDesk sizes the parts, prices the job, and lets you bundle doors, drawer fronts, drawer boxes, and pullouts on the same order.",
      "Boxes are cut on CNC from ¾″ stock with a full back. Blind mortise and tenon construction keeps the case square on the jobsite. Stock materials ship in 6 to 10 working days.",
    ],
    specs: [
      { label: "Construction", value: "Frameless, blind mortise & tenon" },
      { label: "Material thickness", value: "¾″ sides, ¼″ or ¾″ backs" },
      { label: "Hardware", value: "Confirmat, dowels, and clips included" },
      { label: "Configurations", value: "Base, wall, tall, vanity, corner, blind, pantry" },
    ],
  },
  {
    slug: "doors-and-drawer-fronts",
    name: "Doors & Drawer Fronts",
    short: "250+ styles, custom sized, wood to acrylic",
    summary:
      "Custom-sized doors and drawer fronts in wood, MDF, RTF, laminate, veneer, and Formex 3D laminate.",
    leadTime: "6–7 working days on stock wood and Formex",
    image: "/images/gallery-cabinets.jpg",
    highlights: [
      "Shaker, slab, mitered, raised panel, cathedral, and glass",
      "¾″, ⅞″, and 1⅛″ thicknesses",
      "Hinge boring and matching drawer fronts",
      "Custom Design Series profile mixing",
    ],
    body: [
      "Cabinova Kraft started as a door shop. That is still the core of the plant. You specify style, material, grain, finish, and size. We cut, sand, finish, and bore to your hinge pattern.",
      "Browse by construction, material, thickness, or design style. Pair a five-piece maple shaker with a Formex slab on the island, or run the same profile through kitchen, bath, and closet.",
    ],
    specs: [
      { label: "Styles", value: "250+ door and front designs" },
      { label: "Thickness", value: "¾″, ⅞″, up to 1⅛″" },
      { label: "Min / max", value: "Style-specific; listed on each door" },
      { label: "Options", value: "Glass, French lite, matching grain, applied molding" },
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
    slug: "molding",
    name: "Molding",
    short: "Crown to light rail, wood and Formex",
    summary:
      "Crown, light rail, scribe, base, and applied molding milled to match your door profile and finish.",
    leadTime: "7–10 working days",
    image: "/images/gallery-classic.jpg",
    highlights: [
      "Wood and Formex matching profiles",
      "Crown, light rail, scribe, base, and panel mold",
      "Finished to your door stain or paint",
      "Random lengths or cut-to-size",
    ],
    body: [
      "Molding is how a kitchen reads as one piece of furniture. We mill crown, light rail, scribe, and base to sit with your door profile, then finish it on the same line as the doors.",
      "Formex moldings are wrapped to match 3D laminate doors so the island, hood, and filler do not flash a different sheen.",
    ],
    specs: [
      { label: "Profiles", value: "Crown, cove, ogee, shaker, contemporary" },
      { label: "Materials", value: "Maple, poplar, MDF, Formex" },
      { label: "Finish", value: "Raw, stained, painted, or wrapped" },
      { label: "Length", value: "8' random or cut to your list" },
    ],
  },
  {
    slug: "accessories",
    name: "Accessories",
    short: "Valances, corbels, bottle racks, fillers",
    summary:
      "The pieces that finish a job — valances, corbels, bottle racks, shelves, fillers, and matching extra finish.",
    leadTime: "7–12 working days",
    image: "/images/gallery-marble.jpg",
    highlights: [
      "Valances, corbels, and appliqués",
      "Bottle racks, plate racks, and open shelves",
      "Matching extra finish by the gallon",
      "Loose foil for field repairs on Formex",
    ],
    body: [
      "Accessories are what a homeowner notices after the doors go up. We mill them from the same lot as the doors so grain and color land in the same family.",
      "Need a gallon of the job’s spray-to-color stain for a field scribe? Order it on the same PO.",
    ],
    specs: [
      { label: "Wood accessories", value: "Valance, corbel, bun foot, appliqué" },
      { label: "Storage", value: "Bottle rack, plate rack, stemware" },
      { label: "Formex extras", value: "Loose foil, wrapped shelves, fillers" },
      { label: "Finish", value: "Quarts and gallons of matching spray" },
    ],
  },
  {
    slug: "hardware",
    name: "Hardware",
    short: "Hinges, glides, knobs, and pulls",
    summary:
      "Functional and decorative hardware — hinges, undermount and side-mount glides, knobs, and pulls.",
    leadTime: "Ships with the job or next-day on stock",
    image: "/images/gallery-open-plan.jpg",
    highlights: [
      "Soft-close hinges bored to your pattern",
      "Undermount and side-mount drawer glides",
      "Knobs and pulls in common finishes",
      "Waste and recycle kits for Linea bases",
    ],
    body: [
      "Hardware is specified with the box, not after. We stock Salice and Blum patterns for doors and drawers, plus a short list of knobs and pulls that cabinet shops actually reorder.",
      "Hinge boring is done in the plant to your overlay. You hang doors, you do not lay out a jig on a finished face.",
    ],
    specs: [
      { label: "Hinges", value: "Soft-close, 6-way, overlay and inset" },
      { label: "Glides", value: "Undermount and side-mount, full extension" },
      { label: "Decorative", value: "Knobs and bar pulls, 5 finishes" },
      { label: "Kits", value: "Waste/recycle, tip-on, and dampers" },
    ],
  },
  {
    slug: "specialty-items",
    name: "Specialty Items",
    short: "Radius, refacing, panels, and one-offs",
    summary:
      "Radius doors, refacing skins, wall panels, and specialty shop work for jobs that will not fit a catalog page.",
    leadTime: "Quoted per job, typically 10–15 working days",
    image: "/images/gallery-house.jpg",
    highlights: [
      "Convex and concave radius doors and frames",
      "Refacing skins and end panels",
      "Wall and back panels cut to opening",
      "Specialty shop for truly unique parts",
    ],
    body: [
      "Not every kitchen is a rectangle. The specialty shop in Portland runs radius work, oversize panels, and refacing packs that a production cell cannot.",
      "Send a drawing. We will tell you if we can mill it, and what it will cost, before you promise a date to your client.",
    ],
    specs: [
      { label: "Radius", value: "Convex and concave doors, frames, boxes" },
      { label: "Refacing", value: "Formex and wood skins, end panels" },
      { label: "Panels", value: "Wainscot, refrigerator, and wall skins" },
      { label: "Shop", value: "One-off millwork quoted from drawings" },
    ],
  },
];

export const materials = [
  {
    slug: "maple",
    name: "Maple",
    group: "Hardwood",
    summary:
      "Hard, even grain. The default for painted and clear kitchens that need a clean, contemporary read.",
    image: "/images/gallery-classic.jpg",
  },
  {
    slug: "cherry",
    name: "Cherry",
    group: "Hardwood",
    summary:
      "Warm, darkens with light. Traditional and estate kitchens that want age in the first year.",
    image: "/images/gallery-wood.jpg",
  },
  {
    slug: "walnut",
    name: "Walnut",
    group: "Hardwood",
    summary:
      "Chocolate to purple-brown. Used for islands, offices, and contemporary slabs where the grain is the finish.",
    image: "/images/material-walnut.jpg",
  },
  {
    slug: "white-oak",
    name: "White Oak",
    group: "Hardwood",
    summary:
      "Open grain, quarter-sawn available. Craftsman, coastal, and whitewashed looks.",
    image: "/images/gallery-rustic.jpg",
  },
  {
    slug: "alder",
    name: "Alder",
    group: "Hardwood",
    summary:
      "Soft, even color. Takes stain like cherry at a lower price. Country and cabin work.",
    image: "/images/gallery-neutral.jpg",
  },
  {
    slug: "hickory",
    name: "Hickory",
    group: "Hardwood",
    summary:
      "Dramatic color variation. Western and rustic kitchens that want the grain to show.",
    image: "/images/gallery-living.jpg",
  },
  {
    slug: "mdf",
    name: "MDF",
    group: "Composite",
    summary:
      "Medium-density fiberboard. Stable under paint. Preferred core for painted five-piece and slab doors.",
    image: "/images/hero-white-kitchen.jpg",
  },
  {
    slug: "melamine",
    name: "Melamine / TFL",
    group: "Composite",
    summary:
      "Thermally fused laminate on particleboard or MDF. Linea boxes, drawer boxes, and commercial work.",
    image: "/images/gallery-kitchen-work.jpg",
  },
  {
    slug: "laminate",
    name: "High-pressure laminate",
    group: "Composite",
    summary:
      "Decorative laminate on composite core. High-wear commercial and healthcare interiors.",
    image: "/images/market-commercial.jpg",
  },
  {
    slug: "formex",
    name: "Formex 3D laminate",
    group: "Acrylic / RTF",
    summary:
      "Rigid thermoform foil wrapped over a profiled MDF core. Seamless edges, texture, and color without a spray booth.",
    image: "/images/gallery-modern.jpg",
  },
  {
    slug: "veneer",
    name: "Wood veneer",
    group: "Veneer",
    summary:
      "Sliced hardwood on MDF or plywood. Book, slip, and sequence matching for wide panels and slabs.",
    image: "/images/gallery-marble.jpg",
  },
  {
    slug: "acrylic",
    name: "Acrylic",
    group: "Acrylic / RTF",
    summary:
      "High-gloss and super-matte acrylic slabs. Contemporary kitchens that want a lacquer look without the booth time.",
    image: "/images/hero-island.jpg",
  },
];

export const finishes = [
  {
    slug: "clear",
    name: "Clear conversion varnish",
    summary: "A durable, low-amber film that lets the species read as itself.",
  },
  {
    slug: "stain",
    name: "Spray-to-color stain",
    summary: "Wiped and sprayed stains matched to a chip or a sample door. Same lot on doors, boxes, and molding.",
  },
  {
    slug: "paint",
    name: "Painted enamel",
    summary: "Catalyzed paint on MDF or maple. Smooth, repairable, and stocked in the whites and grays shops actually sell.",
  },
  {
    slug: "glaze",
    name: "Glaze and distress",
    summary: "Optional glaze, highlight, and light distressing for estate and country packages.",
  },
  {
    slug: "uv",
    name: "UV topcoat",
    summary: "Fast-cure UV for drawer boxes and interiors that need a hard, low-VOC film.",
  },
];

export const designStyles = [
  {
    slug: "craftsman",
    name: "Craftsman",
    summary:
      "Elegantly uncomplicated. Practical, functional, and in harmony with the room around it. Shaker profiles, quartersawn oak, and honest joinery.",
    image: "/images/gallery-rustic.jpg",
    doors: ["hemlock-shaker", "ridge-bead", "sutter-square"],
  },
  {
    slug: "contemporary",
    name: "Contemporary",
    summary:
      "Simple use of space, color, and texture. Slab doors, thin reveals, and quiet hardware.",
    image: "/images/gallery-modern.jpg",
    doors: ["nova-slab", "line-groove", "formex-matte"],
  },
  {
    slug: "country",
    name: "Country",
    summary:
      "Comfort with a little flourish. Beaded insets, painted alder, and a softer edge.",
    image: "/images/gallery-classic.jpg",
    doors: ["willow-bead", "hemlock-shaker", "crest-arch"],
  },
  {
    slug: "traditional",
    name: "Traditional",
    summary:
      "Classic and useful. Raised panels, mitered frames, and cherry or maple under a warm stain.",
    image: "/images/gallery-wood.jpg",
    doors: ["estate-raised", "sutter-square", "crest-arch"],
  },
  {
    slug: "estate",
    name: "Estate",
    summary:
      "Dark woods, rich palettes, and applied molding. Kitchens that are meant to look inherited.",
    image: "/images/material-walnut.jpg",
    doors: ["estate-raised", "crest-arch", "applied-ogee"],
  },
  {
    slug: "coastal",
    name: "Coastal",
    summary:
      "Casual ease. Painted maple, light oak, and hardware that does not shout.",
    image: "/images/hero-white-kitchen.jpg",
    doors: ["hemlock-shaker", "nova-slab", "willow-bead"],
  },
  {
    slug: "western",
    name: "Western",
    summary:
      "Natural elements and rustic comfort. Hickory, knotty alder, and heavier profiles.",
    image: "/images/gallery-living.jpg",
    doors: ["ridge-bead", "knotty-plank", "sutter-square"],
  },
  {
    slug: "cabin",
    name: "Cabin",
    summary:
      "Rustic charm without looking like a theme park. Knotty species, simpler frames.",
    image: "/images/gallery-neutral.jpg",
    doors: ["knotty-plank", "ridge-bead", "hemlock-shaker"],
  },
  {
    slug: "british-colonial",
    name: "British Colonial",
    summary:
      "Dark English furniture with lighter tropical notes. Louvered looks, teak stains, and louvered accents.",
    image: "/images/gallery-marble.jpg",
    doors: ["estate-raised", "louver-panel", "applied-ogee"],
  },
  {
    slug: "mediterranean",
    name: "Mediterranean",
    summary:
      "Breezy, simple, and a little sun-faded. Arched panels and warm paints.",
    image: "/images/gallery-bath.jpg",
    doors: ["crest-arch", "willow-bead", "estate-raised"],
  },
  {
    slug: "industrial",
    name: "Industrial",
    summary:
      "Clean, stark, never fussy. Slabs, metal-look Formex, and exposed grain.",
    image: "/images/market-office.jpg",
    doors: ["nova-slab", "line-groove", "formex-matte"],
  },
  {
    slug: "transitional",
    name: "Transitional",
    summary:
      "Traditional bones with contemporary restraint. Slim shakers, painted frames, and a quiet island.",
    image: "/images/gallery-open-plan.jpg",
    doors: ["hemlock-shaker", "slim-shaker", "nova-slab"],
  },
];

export const rtaConfigs = [
  { name: "Base cabinet", note: "Single or double door, drawer stack optional" },
  { name: "Wall cabinet", note: "12″–42″ high, adjustable shelves" },
  { name: "Tall pantry", note: "84″, 90″, 96″ with split openings" },
  { name: "Sink base / vanity", note: "False drawer, plumbing chase" },
  { name: "Blind corner", note: "Left or right, with filler pull" },
  { name: "Diagonal corner", note: "Upper or base, lazy susan ready" },
  { name: "Right-angle corner", note: "Base or wall, pie-cut or lazy" },
  { name: "Refrigerator panel pack", note: "Upper + panel stock or pantry + panel" },
];
