export type Article = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  body: string[];
};

export const learnArticles: Article[] = [
  {
    slug: "how-to-become-a-customer",
    title: "How to become a Cabinova Kraft customer",
    category: "Account",
    summary: "We sell to cabinetmakers and contractors. Here is what we need to open an account.",
    body: [
      "Cabinova Kraft is a wholesale manufacturer. We do not sell to homeowners. If you hold a cabinet, contractor, or related trade license and resell or install cabinetry, you can apply.",
      "The application asks for company information, a license, business entity, payment method, and a resale certificate if you are tax exempt. Credit card and bank numbers are not collected on the web form — we set payment after the account is approved.",
      "Most accounts are reviewed within two business days. You will receive KraftDesk login credentials and a price book once approved.",
      "Homeowners: call 800-555-1842 or email hello@cabinovakraft.com. We will help you find a cabinetmaker in your area. If you already have a shop, send them this site.",
    ],
  },
  {
    slug: "kraftdesk-overview",
    title: "KraftDesk: quoting and ordering online",
    category: "Ordering",
    summary: "Build jobs, save templates, and submit orders 24/7.",
    body: [
      "KraftDesk is the account portal. After you log in you can start a job, add doors, drawer fronts, drawer boxes, Linea cabinets, molding, and hardware, and see pricing as you build.",
      "Leave a job half-finished. Come back. Use templates for the three kitchens you already sell. Copy a previous order and change widths.",
      "When the list is right, schedule a ship date from the calendar of open mill capacity, review, and submit. Customer service only calls if a note is unclear.",
    ],
  },
  {
    slug: "frameless-vs-face-frame",
    title: "Frameless vs. face-frame construction",
    category: "Cabinets",
    summary: "What Linea RTA is, and what we do not build.",
    body: [
      "Face-frame cabinets use a solid wood frame on the front of the box. Doors overlay or inset that frame. Many custom shops still build this way in the shop.",
      "Frameless (European) cabinets have no face frame. The door covers the front edge of the box. You get more interior width and a contemporary reveal.",
      "Linea RTA is frameless: ¾″ parts, full back, blind mortise and tenon, hardware in the crate. We do not sell assembled face-frame boxes. We do sell doors, drawer boxes, and molding for shops that build their own frames.",
    ],
  },
  {
    slug: "door-size-math",
    title: "How to size doors, fronts, and boxes",
    category: "Ordering",
    summary: "Overlay, inset, and the numbers KraftDesk expects.",
    body: [
      "For overlay doors, door width = opening + overlay left + overlay right. Height = opening + overlay top + overlay bottom. A standard ½″ overlay on a 21″ opening is a 22″ door.",
      "For inset, door width = opening − 2 × reveal (often 3/32″ or ⅛″ each side).",
      "Drawer boxes: width is usually opening minus 1″ for undermount slides (check the slide). Height is opening minus 1″, depth is box interior minus 1″ for the back.",
      "KraftDesk will not let you submit a size below the style minimum. If a French lite or arch needs more width, the form will say so.",
    ],
  },
  {
    slug: "lead-times",
    title: "What is the lead time?",
    category: "Ordering",
    summary: "Working days, not calendar days, from the day the order is released to the mill.",
    body: [
      "Stock wood doors and Formex: 6–7 working days. Linea RTA on stock materials: 6–10 working days. Drawer boxes: 5–8. Specialty, radius, and custom stain: quoted.",
      "A working day is a plant day. Orders released after 2 p.m. Pacific start the next morning. Holidays and mill shutdowns are marked on the KraftDesk calendar.",
      "Complete and accurate orders ship on the date we name. Incomplete sizes or missing hinge notes get a call, not a guess.",
    ],
  },
  {
    slug: "carb-and-green",
    title: "CARB, TSCA Title VI, FSC, NAUF, and LEED",
    category: "Environment",
    summary: "What the acronyms mean on a spec sheet.",
    body: [
      "CARB Phase 2 and TSCA Title VI limit formaldehyde in composite wood. Our MDF, particleboard, and plywood used in doors and Linea boxes are purchased as compliant stock. That is the default, not an upcharge.",
      "FSC (Forest Stewardship Council) is a chain-of-custody claim on specific lots of lumber and panel. Ask when a job requires it; not every species is on the floor as FSC at all times.",
      "NAUF means no added urea formaldehyde. Available on designated cores.",
      "We do not sell a “LEED-certified door.” We sell products that can contribute to LEED credits when the design team documents them. See the Environmental page for the recycling and yield program.",
    ],
  },
  {
    slug: "hinge-boring",
    title: "Hinge boring patterns",
    category: "Doors",
    summary: "We bore in the plant. Send the pattern.",
    body: [
      "Most shops use a 35mm cup, 45mm from the top and bottom, 3–6mm tab depending on overlay. Tell us cup diameter, tab, and locations.",
      "Inset, thick doors, and aluminum frames need a different tab. If you leave boring blank we will call. We will not guess a 3mm tab on a 6mm door.",
      "Linea doors can be bored for the hinge plates we sell. If you use another brand, send the spec sheet.",
    ],
  },
  {
    slug: "wood-grade",
    title: "Finish grade vs. value grade",
    category: "Materials",
    summary: "What you are paying for in the board.",
    body: [
      "Finish grade is selected for even color and limited mineral streak. It is what you want on a clear or light stain.",
      "Value grade allows more color variation, small tight knots on designated species, and is the right call on a painted door or a rustic package.",
      "Cherry will darken. Hickory will contrast. We do not bleach those facts out of the board. If a client wants a uniform walnut, specify sequenced veneer, not a mixed solid run.",
    ],
  },
  {
    slug: "returns-and-warranty",
    title: "Returns, warranty, and care",
    category: "Policy",
    summary: "Custom-sized parts are made for your job.",
    body: [
      "Custom-sized doors, fronts, and boxes are not returnable except for mill error. If we cut it wrong, we remake it. If the size on the PO was wrong, we need a new PO.",
      "Warranty covers manufacturing defects in materials and workmanship. It does not cover field finish, site moisture, or doors stored in an unfinished house.",
      "Clean finished doors with a damp cloth and a mild soap. Do not use silicone polish or abrasive powder. Formex wipes with the same care as a laminate counter.",
    ],
  },
  {
    slug: "sample-doors",
    title: "Sample door size and how to order one",
    category: "Ordering",
    summary: "Standard sample is 12″ × 15″ unless you ask otherwise.",
    body: [
      "A sample door is 12″ wide by 15″ high in the style, material, and finish you name. Premier accounts have a sample allowance; Partner accounts are billed at the sample rate in KraftDesk.",
      "Samples ship in 5 working days on stock. Custom stain samples follow the stain-match queue.",
    ],
  },
  {
    slug: "packaging-and-freight",
    title: "How orders are packed and shipped",
    category: "Shipping",
    summary: "Doors on edge, boxes flat, hardware in a labeled bag.",
    body: [
      "Doors ship vertical in a crate with corner protection. Linea parts ship flat, nested, with a packing list on the long side. Drawer boxes ship nested or KD.",
      "We use common carriers and FedEx Freight depending on weight and region. Tracking is in KraftDesk. Will Call orders are staged the morning of your appointment.",
      "Photograph damage on the dock before you sign. Concealed damage has 5 calendar days.",
    ],
  },
  {
    slug: "homeowner-planning",
    title: "Planning a kitchen remodel (for homeowners)",
    category: "Homeowners",
    summary: "We do not install. Here is how to work with a shop that uses our parts.",
    body: [
      "Cabinova Kraft manufactures components. A local cabinetmaker designs, measures, orders, and installs. That split is why the doors fit.",
      "If you are early in a remodel, find a shop first. Bring photos, a budget range, and whether you want painted, stained, or laminate. The shop will specify doors and boxes from this catalog.",
      "Ask the shop whether they build face-frame in house or use Linea RTA. Both are legitimate. The lead time and the look will differ.",
    ],
  },
];

export const blogPosts: Article[] = [
  {
    slug: "skinny-shaker-year",
    title: "Why the skinny shaker is still the door shops are selling",
    category: "Product",
    summary: "A 1¼″ rail is doing the work a slab used to do — with a frame a painter can live with.",
    body: [
      "Five years ago every contemporary job wanted a slab. Then fingerprints, edge chips, and a wave of painted work pulled shops back to a frame. Not a 2¼″ craftsman shaker. A skinny one.",
      "CK-112 is 1¼″ rails on ¾″ MDF or maple. It photographs like a modern kitchen and finishes like a five-piece. We ran more skinny shakers last quarter than slabs for the first time.",
      "If you are writing a spec for a builder package, this is the door to put on the page. Pair it with Linea white boxes and birch dovetails and you have a kitchen that hangs in two days.",
    ],
  },
  {
    slug: "formex-without-a-booth",
    title: "Formex: a finished door when you do not have a booth",
    category: "Product",
    summary: "3D laminate is not a downgrade. It is a different plant.",
    body: [
      "Shops without a spray booth used to buy RTF and apologize. Formex is a rigid thermoform foil on a profiled MDF core. The edge is wrapped. The texture is in the foil. There is no orange peel because there is no film from a gun.",
      "Lead time is the same as stock wood. Colors are stocked in whites, greiges, and two woodgrains that actually look like wood under jobsite lighting.",
      "Use it on rental, healthcare, and any job where the client will wipe the door with a grocery bag in year three.",
    ],
  },
  {
    slug: "east-plant-capacity",
    title: "Charlotte mill adds a second finishing line",
    category: "Company",
    summary: "More stain capacity for shops east of the Mississippi.",
    body: [
      "The Charlotte plant now runs a second conversion-varnish line. That is stain and paint capacity, not just more sanding.",
      "If you are a Carolina, Georgia, or Ohio shop that has been waiting on a custom stain, the queue is shorter as of this month. Stock colors were already 6–7 days; custom matches should land closer to 8–9 instead of 12.",
    ],
  },
  {
    slug: "template-habit",
    title: "Three KraftDesk templates every shop should save",
    category: "How-to",
    summary: "Stop rebuilding the same 12-door kitchen.",
    body: [
      "Template one: your builder-grade painted shaker, ½″ overlay, standard boring, birch boxes. Template two: the walnut slab island you upsell. Template three: the vanity you install every week.",
      "Copy, change widths, submit. The shops that do this stop sending us spreadsheets with a missing hinge column.",
    ],
  },
  {
    slug: "moisture-and-doors",
    title: "Do not store finished doors in an unfinished house",
    category: "How-to",
    summary: "A reminder we still have to send.",
    body: [
      "A painted maple door is a wood product. If it sits in a house with wet drywall and no HVAC, it will move. That is not a mill defect.",
      "Hold the crate in your shop or a climate-controlled unit until the site is at living humidity. We will remake a door we cut wrong. We will not remake a door the jobsite steamed.",
    ],
  },
  {
    slug: "25-years-portland",
    title: "Twenty-five years from a one-bay door shop",
    category: "Company",
    summary: "Mira Novak opened Cabinova Kraft in 1998. The promise has not changed.",
    body: [
      "The first invoices were written on a counter in a leased bay on Columbia Boulevard. Doors only. No boxes, no Formex, no website.",
      "What we told shops then is what we tell them now: we will cut what you ordered, we will pack all of it, and it will leave on the day we named. The plant is larger. The promise is the same size.",
    ],
  },
];

export const careers = [
  {
    title: "Manufacturing engineer",
    location: "Portland, OR",
    type: "Full-time",
    summary: "Own CNC programs, yield, and the Linea cell. Shop-floor time required, not optional.",
  },
  {
    title: "Production wood supervisor",
    location: "Portland, OR",
    type: "Full-time",
    summary: "Second shift on the door line. You have run a crew in a mill. You like a clean cell.",
  },
  {
    title: "Purchasing manager",
    location: "Portland, OR",
    type: "Full-time",
    summary: "Lumber, panel, foil, and hardware. Forecast with the plants, not against them.",
  },
  {
    title: "Inside sales / customer service",
    location: "Charlotte, NC",
    type: "Full-time",
    summary: "The phone is the product. Know the catalog or be willing to learn it faster than our shops do.",
  },
  {
    title: "Finishing technician",
    location: "Charlotte, NC",
    type: "Full-time",
    summary: "Spray to color, glaze, and conversion varnish. Samples and production.",
  },
];

export const markets = [
  {
    slug: "residential",
    name: "Residential",
    image: "/images/hero-modern-home.jpg",
    summary:
      "Kitchens, baths, closets, laundry, mudrooms, and garages. New construction and refacing.",
    body: [
      "Most of our volume is residential. A shop measures a house, specifies our doors and boxes, and installs. The job might be a 12-door laundry or a whole-house package with matching closets.",
      "We do not design the kitchen and we do not install it. We manufacture the parts so the shop can sell custom without owning a finishing line.",
    ],
  },
  {
    slug: "commercial",
    name: "Commercial",
    image: "/images/market-commercial.jpg",
    summary:
      "Offices, healthcare, hospitality, multi-family, store fixtures, and specified interiors.",
    body: [
      "Commercial work arrives as a spec: species, core, formaldehyde, hardware, and a date. We quote from that spec or help the millwork contractor write one that can actually be built.",
      "Formex, TFL, and high-pressure laminate are the usual faces. Linea boxes hold up in a break room. Ask for the multi-family one-pager if you are bidding units.",
    ],
  },
];

export const videos = [
  {
    slug: "kraftdesk-tour",
    title: "KraftDesk: start a job",
    length: "4:20",
    summary: "Login, name a PO, add a Hemlock Shaker, and save.",
  },
  {
    slug: "linea-base",
    title: "Adding a Linea base cabinet",
    length: "6:05",
    summary: "Width, height, toekick, shelves, and bundling a door.",
  },
  {
    slug: "quick-edit",
    title: "Quick Edit from a spreadsheet",
    length: "5:40",
    summary: "Paste door and box lists without retyping sizes.",
  },
  {
    slug: "hinge-boring",
    title: "Calling out hinge boring",
    length: "3:15",
    summary: "Cup, tab, and locations so we do not call you.",
  },
];

export const associations = [
  { name: "Kitchen & Bath Association trade members", note: "Plant tours and spec support for member shops." },
  { name: "Architectural Woodwork standards", note: "We mill to the grade you specify on the PO." },
  { name: "Composite panel compliance programs", note: "CARB Phase 2 / TSCA Title VI as standard purchasing." },
];

export function getLearn(slug: string) {
  return learnArticles.find((a) => a.slug === slug);
}

export function getPost(slug: string) {
  return blogPosts.find((a) => a.slug === slug);
}

export function getMarket(slug: string) {
  return markets.find((m) => m.slug === slug);
}
