export type DoorStyle = {
  slug: string;
  name: string;
  code: string;
  construction:
    | "Shaker"
    | "Slab"
    | "Raised panel"
    | "Mitered"
    | "Beaded"
    | "Cathedral"
    | "Glass"
    | "Formex"
    | "Specialty";
  thickness: string;
  materials: string[];
  styles: string[];
  minW: number;
  minH: number;
  pricePerSqFt: number;
  description: string;
  doorType: "shaker" | "slab" | "raised" | "bead" | "arch" | "glass" | "groove" | "plank";
};

export const doors: DoorStyle[] = [
  {
    slug: "hemlock-shaker",
    name: "Hemlock Shaker",
    code: "CK-101",
    construction: "Shaker",
    thickness: "¾″",
    materials: ["Maple", "Painted MDF", "Cherry", "White oak"],
    styles: ["craftsman", "coastal", "transitional", "country"],
    minW: 7.5,
    minH: 7.5,
    pricePerSqFt: 28,
    description:
      "A 2¼″ rail and stile shaker with a flat center panel. The door most shops sell first — clean, paint-friendly, and easy to pair with a five-piece drawer front.",
    doorType: "shaker",
  },
  {
    slug: "slim-shaker",
    name: "Slim Shaker",
    code: "CK-108",
    construction: "Shaker",
    thickness: "¾″",
    materials: ["Maple", "Painted MDF", "Walnut"],
    styles: ["transitional", "contemporary", "coastal"],
    minW: 7,
    minH: 7,
    pricePerSqFt: 30,
    description:
      "A 1¾″ rail shaker for kitchens that want the shaker language without the craftsman weight. Popular on painted perimeters with a walnut slab island.",
    doorType: "shaker",
  },
  {
    slug: "ridge-bead",
    name: "Ridge Bead",
    code: "CK-214",
    construction: "Beaded",
    thickness: "¾″",
    materials: ["Maple", "Alder", "White oak"],
    styles: ["craftsman", "western", "cabin"],
    minW: 8,
    minH: 8,
    pricePerSqFt: 32,
    description:
      "An inner bead on a shaker frame. Reads handmade without the cost of a true cope-and-stick custom mill.",
    doorType: "bead",
  },
  {
    slug: "willow-bead",
    name: "Willow Bead",
    code: "CK-218",
    construction: "Beaded",
    thickness: "¾″",
    materials: ["Painted MDF", "Alder", "Maple"],
    styles: ["country", "coastal", "mediterranean"],
    minW: 8,
    minH: 8,
    pricePerSqFt: 33,
    description:
      "A softer inner bead and a slightly wider rail. Painted country and coastal kitchens.",
    doorType: "bead",
  },
  {
    slug: "nova-slab",
    name: "Nova Slab",
    code: "CK-301",
    construction: "Slab",
    thickness: "¾″",
    materials: ["Walnut veneer", "Maple veneer", "Painted MDF", "Acrylic"],
    styles: ["contemporary", "industrial", "transitional"],
    minW: 5,
    minH: 5,
    pricePerSqFt: 24,
    description:
      "A flat slab with eased edges. Grain-matched across a run of doors when you order sequence veneer.",
    doorType: "slab",
  },
  {
    slug: "line-groove",
    name: "Line Groove",
    code: "CK-309",
    construction: "Slab",
    thickness: "¾″",
    materials: ["Painted MDF", "Walnut veneer", "Formex"],
    styles: ["contemporary", "industrial"],
    minW: 6,
    minH: 8,
    pricePerSqFt: 27,
    description:
      "A slab with a single routed horizontal groove. Used as a drawer-front language on handleless kitchens.",
    doorType: "groove",
  },
  {
    slug: "formex-matte",
    name: "Formex Matte",
    code: "FX-410",
    construction: "Formex",
    thickness: "¾″",
    materials: ["Formex 3D laminate"],
    styles: ["contemporary", "industrial", "transitional"],
    minW: 5.5,
    minH: 5.5,
    pricePerSqFt: 22,
    description:
      "A wrapped slab in super-matte Formex. Fingerprint-resistant, seamless edges, no spray booth required.",
    doorType: "slab",
  },
  {
    slug: "formex-shaker",
    name: "Formex Shaker",
    code: "FX-422",
    construction: "Formex",
    thickness: "¾″",
    materials: ["Formex 3D laminate"],
    styles: ["transitional", "contemporary", "coastal"],
    minW: 8,
    minH: 8,
    pricePerSqFt: 26,
    description:
      "A wrapped shaker. The foil takes the inner step so you get a five-piece look without a wood frame.",
    doorType: "shaker",
  },
  {
    slug: "estate-raised",
    name: "Estate Raised",
    code: "CK-501",
    construction: "Raised panel",
    thickness: "⅞″",
    materials: ["Cherry", "Maple", "Walnut"],
    styles: ["traditional", "estate", "british-colonial"],
    minW: 9,
    minH: 9,
    pricePerSqFt: 38,
    description:
      "A raised center panel with an ogee inner profile. The traditional kitchen door, cut to your size.",
    doorType: "raised",
  },
  {
    slug: "sutter-square",
    name: "Sutter Square",
    code: "CK-508",
    construction: "Mitered",
    thickness: "¾″",
    materials: ["Maple", "Cherry", "White oak"],
    styles: ["craftsman", "traditional", "western"],
    minW: 8.5,
    minH: 8.5,
    pricePerSqFt: 36,
    description:
      "A mitered frame with a flat panel. Tighter corners than a cope-and-stick shaker; preferred on stained work.",
    doorType: "shaker",
  },
  {
    slug: "crest-arch",
    name: "Crest Arch",
    code: "CK-530",
    construction: "Cathedral",
    thickness: "⅞″",
    materials: ["Cherry", "Maple", "Alder"],
    styles: ["traditional", "estate", "mediterranean"],
    minW: 10,
    minH: 14,
    pricePerSqFt: 42,
    description:
      "A cathedral top rail over a raised panel. Used on wall cabinets with a square base door of the same profile.",
    doorType: "arch",
  },
  {
    slug: "applied-ogee",
    name: "Applied Ogee",
    code: "CK-544",
    construction: "Specialty",
    thickness: "1⅛″",
    materials: ["Maple", "Cherry"],
    styles: ["estate", "british-colonial", "traditional"],
    minW: 10,
    minH: 10,
    pricePerSqFt: 48,
    description:
      "A raised panel with applied molding. Heavy, formal, and meant for libraries and estate kitchens.",
    doorType: "raised",
  },
  {
    slug: "lite-six",
    name: "Lite Six",
    code: "CK-610",
    construction: "Glass",
    thickness: "¾″",
    materials: ["Maple", "Cherry", "Painted MDF"],
    styles: ["traditional", "craftsman", "coastal"],
    minW: 10,
    minH: 16,
    pricePerSqFt: 40,
    description:
      "A six-lite French door. Mullions are ¾″. Glass is by others unless you order our tempered pack.",
    doorType: "glass",
  },
  {
    slug: "lite-open",
    name: "Open Frame",
    code: "CK-601",
    construction: "Glass",
    thickness: "¾″",
    materials: ["Maple", "Walnut", "Painted MDF"],
    styles: ["contemporary", "transitional", "coastal"],
    minW: 8,
    minH: 12,
    pricePerSqFt: 34,
    description:
      "A glass door without mullions. Specify rabbet for ⅛″ or 5/32″ glass.",
    doorType: "glass",
  },
  {
    slug: "knotty-plank",
    name: "Knotty Plank",
    code: "CK-720",
    construction: "Slab",
    thickness: "¾″",
    materials: ["Knotty alder", "Hickory"],
    styles: ["cabin", "western"],
    minW: 8,
    minH: 8,
    pricePerSqFt: 29,
    description:
      "A plank-look slab with a V-groove. Knots are sound and filled. Not for a painted contemporary kitchen.",
    doorType: "plank",
  },
  {
    slug: "louver-panel",
    name: "Louver Panel",
    code: "CK-733",
    construction: "Specialty",
    thickness: "¾″",
    materials: ["Maple", "Teak stain on maple"],
    styles: ["british-colonial"],
    minW: 10,
    minH: 14,
    pricePerSqFt: 46,
    description:
      "Fixed louvers in a frame. Used on pantry and laundry doors where ventilation is part of the look.",
    doorType: "plank",
  },
  {
    slug: "radius-convex",
    name: "Radius Convex",
    code: "CK-801",
    construction: "Specialty",
    thickness: "¾″",
    materials: ["Maple", "Painted MDF", "Formex"],
    styles: ["contemporary", "traditional"],
    minW: 12,
    minH: 12,
    pricePerSqFt: 72,
    description:
      "A convex radius door milled to your radius. Pair with our convex drawer box and radius face frame.",
    doorType: "slab",
  },
  {
    slug: "skinny-shaker",
    name: "Skinny Shaker",
    code: "CK-112",
    construction: "Shaker",
    thickness: "¾″",
    materials: ["Painted MDF", "Maple", "Formex"],
    styles: ["contemporary", "transitional"],
    minW: 6.5,
    minH: 6.5,
    pricePerSqFt: 31,
    description:
      "A 1¼″ rail shaker. The current default for new construction kitchens that still want a frame.",
    doorType: "shaker",
  },
];

export const drawerBoxes = [
  {
    slug: "dovetail-maple",
    name: "Maple dovetail",
    joinery: "Dovetail",
    assembled: true,
    side: "⅝″",
    price: 42,
    notes: "Clear UV, ¼″ bottom, scoop optional",
  },
  {
    slug: "dovetail-birch",
    name: "Birch dovetail",
    joinery: "Dovetail",
    assembled: true,
    side: "½″",
    price: 34,
    notes: "The volume box. Assembled or KD.",
  },
  {
    slug: "doweled-melamine",
    name: "White melamine doweled",
    joinery: "Doweled",
    assembled: false,
    side: "½″",
    price: 22,
    notes: "Pairs with white Linea boxes. Ships KD.",
  },
  {
    slug: "doweled-maple",
    name: "Maple doweled",
    joinery: "Doweled",
    assembled: true,
    side: "½″",
    price: 28,
    notes: "Smoother interior than dovetail, slightly less show.",
  },
];

export function getDoor(slug: string) {
  return doors.find((d) => d.slug === slug);
}

export function doorsForStyle(styleSlug: string) {
  return doors.filter((d) => d.styles.includes(styleSlug));
}
