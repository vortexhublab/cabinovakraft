export type CatalogItem = {
  slug: string;
  name: string;
  price: number;
  notes: string;
  image: string;
  group?: string;
  joinery?: string;
  assembled?: boolean;
  side?: string;
};

export const drawerBoxes: CatalogItem[] = [
  {
    slug: "dovetail-maple",
    name: "Maple dovetail",
    joinery: "Dovetail",
    assembled: true,
    side: "⅝″",
    price: 42,
    notes: "Clear UV, ¼″ bottom",
    image: "/images/drawers-box.jpg",
  },
  {
    slug: "dovetail-birch",
    name: "Birch dovetail",
    joinery: "Dovetail",
    assembled: true,
    side: "½″",
    price: 34,
    notes: "Volume box. Assembled or KD.",
    image: "/images/gallery-cabinets.jpg",
  },
  {
    slug: "doweled-melamine",
    name: "White melamine",
    joinery: "Doweled",
    assembled: false,
    side: "½″",
    price: 22,
    notes: "Pairs with white Linea. Ships KD.",
    image: "/images/hero-white-kitchen.jpg",
  },
  {
    slug: "doweled-maple",
    name: "Maple doweled",
    joinery: "Doweled",
    assembled: true,
    side: "½″",
    price: 28,
    notes: "Smoother interior, less show.",
    image: "/images/cabinets.jpg",
  },
];

export const hardwareItems: CatalogItem[] = [
  {
    slug: "hinge-overlay",
    name: "Overlay hinge",
    group: "Hinges",
    price: 4.8,
    notes: "Soft-close, ½″ overlay. Pair.",
    image: "/images/gallery-kitchen-work.jpg",
  },
  {
    slug: "hinge-inset",
    name: "Inset hinge",
    group: "Hinges",
    price: 5.4,
    notes: "Soft-close, 3mm tab. Pair.",
    image: "/images/maple.jpg",
  },
  {
    slug: "glide-undermount",
    name: "Undermount glide",
    group: "Glides",
    price: 28,
    notes: "Soft-close, 12″–21″. Pair.",
    image: "/images/drawers-box.jpg",
  },
  {
    slug: "glide-side",
    name: "Side-mount glide",
    group: "Glides",
    price: 16,
    notes: "100 lb class. Pair.",
    image: "/images/gallery-cabinets.jpg",
  },
  {
    slug: "pull-bar",
    name: "Bar pull",
    group: "Decorative",
    price: 6.5,
    notes: "5″ and 8″. Nickel, black, brass.",
    image: "/images/cabinets.jpg",
  },
  {
    slug: "knob-round",
    name: "Round knob",
    group: "Decorative",
    price: 3.2,
    notes: "1¼″. Matching finishes.",
    image: "/images/gallery-wood.jpg",
  },
  {
    slug: "kit-waste",
    name: "Waste / recycle kit",
    group: "Kits",
    price: 86,
    notes: "Fits an 18″ or 21″ Linea base.",
    image: "/images/gallery-kitchen-work.jpg",
  },
  {
    slug: "kit-tipon",
    name: "Tip-on latch",
    group: "Kits",
    price: 9,
    notes: "Handleless openings. Each.",
    image: "/images/cabinets-open.jpg",
  },
];

export const componentItems: CatalogItem[] = [
  {
    slug: "face-frame",
    name: "Face frame",
    group: "Frames",
    price: 48,
    notes: "Maple, poplar, or painted MDF.",
    image: "/images/gallery-classic.jpg",
  },
  {
    slug: "end-panel",
    name: "End panel",
    group: "Panels",
    price: 62,
    notes: "¾″, edged four sides.",
    image: "/images/cabinets-open.jpg",
  },
  {
    slug: "fridge-panel",
    name: "Refrigerator pack",
    group: "Panels",
    price: 180,
    notes: "Two sides + optional upper.",
    image: "/images/gallery-modern.jpg",
  },
  {
    slug: "toekick",
    name: "Toekick",
    group: "Fillers",
    price: 14,
    notes: "4½″ high, cut to run.",
    image: "/images/cabinets.jpg",
  },
  {
    slug: "filler",
    name: "Overlay filler",
    group: "Fillers",
    price: 18,
    notes: "1½″–6″. Same material as the run.",
    image: "/images/hero-white-kitchen.jpg",
  },
  {
    slug: "shelf",
    name: "Adjustable shelf",
    group: "Interior",
    price: 16,
    notes: "¾″, Linea 32mm pattern.",
    image: "/images/gallery-interior.jpg",
  },
  {
    slug: "stretcher",
    name: "Stretcher / nailer",
    group: "Interior",
    price: 9,
    notes: "Sink bases and fridge packs.",
    image: "/images/oak.jpg",
  },
  {
    slug: "finished-back",
    name: "Finished back",
    group: "Panels",
    price: 36,
    notes: "¾″ when the interior is visible.",
    image: "/images/gallery-interior.jpg",
  },
];
