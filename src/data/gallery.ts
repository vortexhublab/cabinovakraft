export type GalleryProject = {
  slug: string;
  title: string;
  location: string;
  shopDoors: string;
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
    title: "Willamette Kitchen",
    location: "Portland, OR",
    shopDoors: "Shop-hung painted shaker",
    material: "Painted maple frames, Cloud White",
    boxes: "Linea RTA, white melamine",
    drawers: "Birch dovetail, clear UV",
    style: "transitional",
    photographer: "N. Ellis",
    image: "/images/hero-white-kitchen.jpg",
    images: ["/images/hero-white-kitchen.jpg", "/images/gallery-classic.jpg", "/images/gallery-open-plan.jpg"],
    summary:
      "A painted perimeter with a walnut-edge island. Linea boxes and birch drawers kept the install to two days on a tight remodel.",
  },
  {
    slug: "cape-fear-walnut",
    title: "Cape Fear Walnut",
    location: "Wilmington, NC",
    shopDoors: "Shop-hung walnut slabs",
    material: "Walnut select veneer, clear",
    boxes: "Linea RTA, walnut-edge white",
    drawers: "Maple dovetail",
    style: "contemporary",
    photographer: "J. Hart",
    image: "/images/gallery-wood.jpg",
    images: ["/images/gallery-wood.jpg", "/images/material-walnut.jpg", "/images/gallery-marble.jpg"],
    summary:
      "Sequence-matched walnut end panels across a long galley. The grain runs through the refrigerator panels we cut.",
  },
  {
    slug: "sonoran-formex",
    title: "Sonoran TFL Kitchen",
    location: "Scottsdale, AZ",
    shopDoors: "Shop-hung matte laminate",
    material: "Graphite TFL interiors",
    boxes: "Linea RTA, graphite melamine",
    drawers: "White melamine doweled",
    style: "contemporary",
    photographer: "A. Ruiz",
    image: "/images/gallery-modern.jpg",
    images: ["/images/gallery-modern.jpg", "/images/hero-island.jpg", "/images/gallery-interior.jpg"],
    summary:
      "A desert house that needed wipeable interiors and a six-day lead. TFL cabinets from Portland, boxes from Charlotte.",
  },
  {
    slug: "blue-ridge-craftsman",
    title: "Blue Ridge Craftsman",
    location: "Asheville, NC",
    shopDoors: "Shop-built bead fronts",
    material: "Quarter-sawn white oak, amber stain",
    boxes: "Face frame, by shop",
    drawers: "Maple dovetail, ⅝″",
    style: "craftsman",
    photographer: "C. Boone",
    image: "/images/gallery-rustic.jpg",
    images: ["/images/gallery-rustic.jpg", "/images/gallery-living.jpg", "/images/gallery-neutral.jpg"],
    summary:
      "A shop-built face-frame kitchen with our drawer boxes and hardware. The bead reads handmade next to the original millwork.",
  },
  {
    slug: "lake-ouse-estate",
    title: "Lake House Estate",
    location: "Lake Oswego, OR",
    shopDoors: "Shop-hung raised panels",
    material: "Cherry frames, espresso stain with glaze",
    boxes: "Linea RTA, natural maple",
    drawers: "Maple dovetail",
    style: "estate",
    photographer: "N. Ellis",
    image: "/images/gallery-classic.jpg",
    images: ["/images/gallery-classic.jpg", "/images/gallery-house.jpg", "/images/gallery-living-2.jpg"],
    summary:
      "Cathedral wall openings over square bases. Glaze on the frames applied in Charlotte so the island and the perimeter came from one lot.",
  },
  {
    slug: "pearl-bath",
    title: "Pearl District Vanity",
    location: "Portland, OR",
    shopDoors: "Shop-hung slim shaker",
    material: "Painted MDF frames, Deep Sea",
    boxes: "Linea vanity, white",
    drawers: "Birch dovetail, scoop",
    style: "transitional",
    photographer: "M. Cho",
    image: "/images/gallery-bath.jpg",
    images: ["/images/gallery-bath.jpg", "/images/gallery-vanity.jpg", "/images/gallery-bath-3.jpg"],
    summary:
      "A 72″ double vanity with scoop drawers and a false front at the sink. Hardware kits packed for overlay hinges.",
  },
  {
    slug: "triad-closet",
    title: "Triad Walk-in",
    location: "Greensboro, NC",
    shopDoors: "Shop-hung painted fronts",
    material: "Painted MDF frames, Putty",
    boxes: "Linea RTA, white",
    drawers: "Melamine doweled",
    style: "transitional",
    photographer: "J. Hart",
    image: "/images/gallery-interior.jpg",
    images: ["/images/gallery-interior.jpg", "/images/gallery-living-2.jpg", "/images/gallery-neutral.jpg"],
    summary:
      "A closet run of open boxes and a few shop-hung fronts. Same Linea interior as the kitchen, smaller openings.",
  },
  {
    slug: "industrial-loft",
    title: "Industrial Loft Kitchen",
    location: "Charlotte, NC",
    shopDoors: "Shop-hung groove fronts",
    material: "Charcoal oak TFL",
    boxes: "Linea RTA, black edge",
    drawers: "Melamine doweled",
    style: "industrial",
    photographer: "A. Ruiz",
    image: "/images/gallery-kitchen-2.jpg",
    images: ["/images/gallery-kitchen-2.jpg", "/images/market-office.jpg", "/images/gallery-kitchen-work.jpg"],
    summary:
      "Handleless grooves instead of pulls. The shop installed in a day because the boxes landed edged and the glides were in the crate.",
  },
  {
    slug: "coastal-white",
    title: "Coastal White",
    location: "Newport, OR",
    shopDoors: "Shop-hung painted bead",
    material: "Painted maple frames, Salt",
    boxes: "Linea RTA, white",
    drawers: "Birch dovetail",
    style: "coastal",
    photographer: "N. Ellis",
    image: "/images/gallery-open-plan.jpg",
    images: ["/images/gallery-open-plan.jpg", "/images/hero-white-kitchen.jpg", "/images/gallery-cabinets.jpg"],
    summary:
      "A rental kitchen that needed to look custom. Stock Linea boxes, birch drawers, and hardware on one PO. The shop hung the fronts.",
  },
  {
    slug: "commercial-break",
    title: "Clinic Break Room",
    location: "Phoenix, AZ",
    shopDoors: "Shop-hung laminate",
    material: "Soft white TFL",
    boxes: "Linea RTA, white TFL",
    drawers: "Melamine doweled",
    style: "contemporary",
    photographer: "A. Ruiz",
    image: "/images/market-commercial.jpg",
    images: ["/images/market-commercial.jpg", "/images/market-office.jpg", "/images/gallery-kitchen-work.jpg"],
    summary:
      "Healthcare spec: CARB Phase 2, wipeable interiors, 10-day lead. TFL cabinets and doweled boxes, no field finish.",
  },
  {
    slug: "hickory-cabin",
    title: "Cascade Cabin",
    location: "Bend, OR",
    shopDoors: "Shop-built knotty slabs",
    material: "Hickory, natural",
    boxes: "Shop-built face frame",
    drawers: "Maple dovetail, ⅝″",
    style: "cabin",
    photographer: "C. Boone",
    image: "/images/gallery-living.jpg",
    images: ["/images/gallery-living.jpg", "/images/gallery-rustic.jpg", "/images/material-walnut.jpg"],
    summary:
      "The shop kept the face frames and fronts. We ran drawer boxes and hardware to match the existing mill.",
  },
  {
    slug: "marble-island",
    title: "Marble & Walnut Island",
    location: "Palo Alto, CA",
    shopDoors: "Shop-hung walnut slabs",
    material: "Walnut veneer, oil-rub look conversion",
    boxes: "Linea RTA, walnut edge",
    drawers: "Maple dovetail",
    style: "contemporary",
    photographer: "M. Cho",
    image: "/images/gallery-marble.jpg",
    images: ["/images/gallery-marble.jpg", "/images/gallery-wood.jpg", "/images/hero-island.jpg"],
    summary:
      "An island-only order: walnut-edge Linea, matching end panels, and a furniture base. The perimeter was existing.",
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
