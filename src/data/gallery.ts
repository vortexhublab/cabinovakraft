export type GalleryProject = {
  slug: string;
  title: string;
  location: string;
  door: string;
  material: string;
  boxes: string;
  drawers: string;
  style: string;
  photographer: string;
  image: string;
  images: string[];
  summary: string;
};

export const gallery: GalleryProject[] = [
  {
    slug: "willamette-shaker",
    title: "Willamette Shaker Kitchen",
    location: "Portland, OR",
    door: "Hemlock Shaker (CK-101)",
    material: "Painted maple, Cloud White",
    boxes: "Linea RTA, white melamine",
    drawers: "Birch dovetail, clear UV",
    style: "transitional",
    photographer: "N. Ellis",
    image: "/images/hero-white-kitchen.jpg",
    images: ["/images/hero-white-kitchen.jpg", "/images/gallery-classic.jpg", "/images/gallery-open-plan.jpg"],
    summary:
      "A painted perimeter with a walnut Nova slab island. Linea boxes kept the install to two days on a tight remodel.",
  },
  {
    slug: "cape-fear-walnut",
    title: "Cape Fear Walnut",
    location: "Wilmington, NC",
    door: "Nova Slab (CK-301)",
    material: "Walnut select veneer, clear",
    boxes: "Linea RTA, walnut-edge white",
    drawers: "Maple dovetail",
    style: "contemporary",
    photographer: "J. Hart",
    image: "/images/gallery-wood.jpg",
    images: ["/images/gallery-wood.jpg", "/images/material-walnut.jpg", "/images/gallery-marble.jpg"],
    summary:
      "Sequence-matched walnut slabs across a long galley. The grain runs through the refrigerator panels.",
  },
  {
    slug: "sonoran-formex",
    title: "Sonoran Formex",
    location: "Scottsdale, AZ",
    door: "Formex Matte (FX-410)",
    material: "Formex, Warm Concrete",
    boxes: "Linea RTA, graphite melamine",
    drawers: "White melamine doweled",
    style: "contemporary",
    photographer: "A. Ruiz",
    image: "/images/gallery-modern.jpg",
    images: ["/images/gallery-modern.jpg", "/images/hero-island.jpg", "/images/gallery-interior.jpg"],
    summary:
      "A desert house that needed fingerprint-resistant doors and a six-day lead. Formex wrapped in Portland, boxes from Charlotte.",
  },
  {
    slug: "blue-ridge-craftsman",
    title: "Blue Ridge Craftsman",
    location: "Asheville, NC",
    door: "Ridge Bead (CK-214)",
    material: "Quarter-sawn white oak, amber stain",
    boxes: "Face frame, by shop",
    drawers: "Maple dovetail, ⅝″",
    style: "craftsman",
    photographer: "C. Boone",
    image: "/images/gallery-rustic.jpg",
    images: ["/images/gallery-rustic.jpg", "/images/gallery-living.jpg", "/images/gallery-neutral.jpg"],
    summary:
      "A shop-built face frame kitchen with our doors and boxes. The bead reads handmade next to the original millwork.",
  },
  {
    slug: "lake-ouse-estate",
    title: "Lake House Estate",
    location: "Lake Oswego, OR",
    door: "Estate Raised (CK-501)",
    material: "Cherry, espresso stain with glaze",
    boxes: "Linea RTA, natural maple",
    drawers: "Maple dovetail",
    style: "estate",
    photographer: "N. Ellis",
    image: "/images/gallery-classic.jpg",
    images: ["/images/gallery-classic.jpg", "/images/gallery-house.jpg", "/images/gallery-living-2.jpg"],
    summary:
      "Cathedral wall doors over square bases. Glaze applied in Charlotte so the island and the perimeter came from one lot.",
  },
  {
    slug: "pearl-bath",
    title: "Pearl District Vanity",
    location: "Portland, OR",
    door: "Slim Shaker (CK-108)",
    material: "Painted MDF, Deep Sea",
    boxes: "Linea vanity, white",
    drawers: "Birch dovetail, scoop",
    style: "transitional",
    photographer: "M. Cho",
    image: "/images/gallery-bath.jpg",
    images: ["/images/gallery-bath.jpg", "/images/gallery-vanity.jpg", "/images/gallery-bath-3.jpg"],
    summary:
      "A 72″ double vanity with scoop drawers and a false front at the sink. Hardware bored for overlay hinges.",
  },
  {
    slug: "triad-closet",
    title: "Triad Walk-in",
    location: "Greensboro, NC",
    door: "Skinny Shaker (CK-112)",
    material: "Painted MDF, Putty",
    boxes: "Linea RTA, white",
    drawers: "Melamine doweled",
    style: "transitional",
    photographer: "J. Hart",
    image: "/images/gallery-interior.jpg",
    images: ["/images/gallery-interior.jpg", "/images/gallery-living-2.jpg", "/images/gallery-neutral.jpg"],
    summary:
      "A closet run of skinny shakers and open boxes. Same door as the kitchen, smaller reveals.",
  },
  {
    slug: "industrial-loft",
    title: "Industrial Loft Kitchen",
    location: "Charlotte, NC",
    door: "Line Groove (CK-309)",
    material: "Formex, Charcoal Oak",
    boxes: "Linea RTA, black edge",
    drawers: "Melamine doweled",
    style: "industrial",
    photographer: "A. Ruiz",
    image: "/images/gallery-kitchen-2.jpg",
    images: ["/images/gallery-kitchen-2.jpg", "/images/market-office.jpg", "/images/gallery-kitchen-work.jpg"],
    summary:
      "Handleless grooves instead of pulls. The shop installed in a day because the boxes landed bored and edged.",
  },
  {
    slug: "coastal-white",
    title: "Coastal White",
    location: "Newport, OR",
    door: "Willow Bead (CK-218)",
    material: "Painted maple, Salt",
    boxes: "Linea RTA, white",
    drawers: "Birch dovetail",
    style: "coastal",
    photographer: "N. Ellis",
    image: "/images/gallery-open-plan.jpg",
    images: ["/images/gallery-open-plan.jpg", "/images/hero-white-kitchen.jpg", "/images/gallery-cabinets.jpg"],
    summary:
      "A rental kitchen that needed to look custom. Painted willow bead doors, stock Linea boxes, one PO.",
  },
  {
    slug: "commercial-break",
    title: "Clinic Break Room",
    location: "Phoenix, AZ",
    door: "Formex Matte (FX-410)",
    material: "Formex, Soft White",
    boxes: "Linea RTA, white TFL",
    drawers: "Melamine doweled",
    style: "contemporary",
    photographer: "A. Ruiz",
    image: "/images/market-commercial.jpg",
    images: ["/images/market-commercial.jpg", "/images/market-office.jpg", "/images/gallery-kitchen-work.jpg"],
    summary:
      "Healthcare spec: CARB Phase 2, wipeable faces, 10-day lead. Formex and TFL, no field finish.",
  },
  {
    slug: "hickory-cabin",
    title: "Cascade Cabin",
    location: "Bend, OR",
    door: "Knotty Plank (CK-720)",
    material: "Hickory, natural",
    boxes: "Shop-built face frame",
    drawers: "Maple dovetail, ⅝″",
    style: "cabin",
    photographer: "C. Boone",
    image: "/images/gallery-living.jpg",
    images: ["/images/gallery-living.jpg", "/images/gallery-rustic.jpg", "/images/material-walnut.jpg"],
    summary:
      "Knotty hickory slabs with a V-groove. The shop kept the face frames; we ran doors and boxes to match the existing mill.",
  },
  {
    slug: "marble-island",
    title: "Marble & Walnut Island",
    location: "Palo Alto, CA",
    door: "Nova Slab (CK-301)",
    material: "Walnut veneer, oil-rub look conversion",
    boxes: "Linea RTA, walnut edge",
    drawers: "Maple dovetail",
    style: "contemporary",
    photographer: "M. Cho",
    image: "/images/gallery-marble.jpg",
    images: ["/images/gallery-marble.jpg", "/images/gallery-wood.jpg", "/images/hero-island.jpg"],
    summary:
      "An island-only order: walnut slabs, matching end panels, and a furniture base. The perimeter was existing.",
  },
];

export function getProject(slug: string) {
  return gallery.find((g) => g.slug === slug);
}

export const galleryStyles = [
  { slug: "craftsman", name: "Craftsman" },
  { slug: "contemporary", name: "Contemporary" },
  { slug: "transitional", name: "Transitional" },
  { slug: "estate", name: "Estate" },
  { slug: "coastal", name: "Coastal" },
  { slug: "industrial", name: "Industrial" },
  { slug: "cabin", name: "Cabin" },
];
