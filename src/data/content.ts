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
      "Homeowners: email admin@cabinovakraft.com. We will help you find a cabinetmaker in your area. If you already have a shop, send them this site.",
    ],
  },
  {
    slug: "kraftdesk-overview",
    title: "KraftDesk: quoting and ordering online",
    category: "Ordering",
    summary: "Build jobs, save templates, and submit orders 24/7.",
    body: [
      "KraftDesk is the account portal. After you log in you can start a job, add Linea cabinets, drawer boxes, hardware, and components, and see pricing as you build.",
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
      "Face-frame cabinets use a solid wood frame on the front of the box. The shop’s doors overlay or inset that frame. Many custom shops still build this way in house.",
      "Frameless (European) cabinets have no face frame. The shop’s door covers the front edge of the box. You get more interior width and a contemporary reveal.",
      "Linea RTA is frameless: ¾″ parts, full back, blind mortise and tenon, hardware in the crate. Add Ridge or Vale doors on the same PO, or hang your own. Shops that build face-frame cases still buy our frames, boxes, and components.",
    ],
  },
  {
    slug: "door-size-math",
    title: "How to size cabinets, drawer boxes, and components",
    category: "Ordering",
    summary: "Overlay, inset, and the numbers KraftDesk expects.",
    body: [
      "Linea cabinet width is the finished box width you want on the wall, including any specified overlay of neighboring fillers. Height is box height including toekick unless you order the toekick separately.",
      "If you order Ridge or Vale fronts with the box, KraftDesk sizes overlay and inset from the opening. For shop-hung fronts, door width is typically opening − 2 × reveal (often 3/32″ or ⅛″ each side).",
      "Drawer boxes: width is usually opening minus 1″ for undermount slides (check the slide). Height is opening minus 1″, depth is box interior minus 1″ for the back.",
      "KraftDesk will not let you submit a cabinet or box size below the construction minimum. If a corner or blind needs more width, the form will say so.",
    ],
  },
  {
    slug: "lead-times",
    title: "What is the lead time?",
    category: "Ordering",
    summary: "Working days, not calendar days, from the day the order is released to the mill.",
    body: [
      "Drawer boxes: 5–8 working days. Linea cabinets and stock doors: 6–10 working days. Hardware ships with the job. Frames, panels, and accessories quote with the list.",
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
      "CARB Phase 2 and TSCA Title VI limit formaldehyde in composite wood. Our MDF, particleboard, and plywood used in Linea cabinets and drawer boxes are purchased as compliant stock. That is the default, not an upcharge.",
      "FSC (Forest Stewardship Council) is a chain-of-custody claim on specific lots of lumber and panel. Ask when a job requires it; not every species is on the floor as FSC at all times.",
      "NAUF means no added urea formaldehyde. Available on designated cores.",
      "We do not sell a “LEED-certified cabinet.” We sell products that can contribute to LEED credits when the design team documents them. See the Environmental page for the recycling and yield program.",
    ],
  },
  {
    slug: "hinge-boring",
    title: "Hinge and glide patterns",
    category: "Hardware",
    summary: "Specify the hardware with the box and the door.",
    body: [
      "Ridge and Vale doors bore for a 35mm cup, 45mm from the top and bottom, 3–6mm tab depending on overlay. Shop-hung fronts use the same plates from our hardware list.",
      "If you leave the hinge SKU blank we will call. We will not guess a 3mm plate on a 6mm overlay.",
      "Drawer boxes are notched for the undermount or side-mount glides you pick. Send the slide spec if you are using another brand.",
    ],
  },
  {
    slug: "wood-grade",
    title: "Finish grade vs. value grade",
    category: "Materials",
    summary: "What you are paying for in the board.",
    body: [
      "Finish grade is selected for even color and limited mineral streak. It is what you want on a clear or light stain.",
      "Value grade allows more color variation, small tight knots on designated species, and is the right call on a painted frame or a rustic package.",
      "Cherry will darken. Hickory will contrast. We do not bleach those facts out of the board. If a client wants a uniform walnut, specify sequenced veneer, not a mixed solid run.",
    ],
  },
  {
    slug: "returns-and-warranty",
    title: "Returns, warranty, and care",
    category: "Policy",
    summary: "Custom-sized parts are made for your job.",
    body: [
      "Custom-sized cabinets, drawer boxes, and components are not returnable except for mill error. If we cut it wrong, we remake it. If the size on the PO was wrong, we need a new PO.",
      "Warranty covers manufacturing defects in materials and workmanship. It does not cover field finish, site moisture, or finished cabinets stored in an unfinished house.",
      "Clean finished frames and interiors with a damp cloth and a mild soap. Do not use silicone polish or abrasive powder. Melamine and HPL wipe with the same care as a laminate counter.",
    ],
  },
  {
    slug: "sample-doors",
    title: "How to order finish and hardware samples",
    category: "Ordering",
    summary: "Door corners, finish chips, and hardware kits.",
    body: [
      "Premier accounts can request a Ridge or Vale corner, a finish chip, and a hinge or glide kit. Partner accounts are billed at the sample rate in KraftDesk.",
      "Samples ship in 5 working days on stock. Custom stain chips follow the stain-match queue.",
    ],
  },
  {
    slug: "packaging-and-freight",
    title: "How orders are packed and shipped",
    category: "Shipping",
    summary: "Cabinets flat, boxes nested, hardware in a labeled bag.",
    body: [
      "Linea parts ship flat, nested, with a packing list on the long side. Drawer boxes ship nested or KD. Hardware is bagged and labeled to the cabinet or box it belongs to.",
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
      "Cabinova Kraft manufactures cabinets, drawer boxes, hardware, and components. A local cabinetmaker designs, measures, orders, and installs.",
      "If you are early in a remodel, find a shop first. Bring photos, a budget range, and whether you want painted, stained, or laminate. The shop will specify cabinets and boxes from this catalog.",
      "Ask the shop whether they build face-frame in house or use Linea RTA. Both are legitimate. The lead time and the look will differ.",
    ],
  },
];

export const blogPosts: Article[] = [
  {
    slug: "skinny-shaker-year",
    title: "Why builder packages are still Linea plus birch dovetails",
    category: "Product",
    summary: "A white frameless box and a clear UV drawer still hang a kitchen in two days.",
    body: [
      "Five years ago every contemporary job wanted a slab perimeter and a custom box shop. Then labor, freight, and a wave of painted work pulled shops back to a system they can schedule.",
      "Linea white cabinets and birch dovetail drawers are that system. The box is square. The hardware is in the crate. The shop hangs its own fronts and bills the finish they already own.",
      "If you are writing a spec for a builder package, put Linea white boxes, Vale or Ridge fronts, and birch dovetails on the same page. That kitchen hangs in two days.",
    ],
  },
  {
    slug: "tfl-without-a-booth",
    title: "Finished cabinets when you do not have a booth",
    category: "Product",
    summary: "TFL and melamine are not a downgrade. They are a different plant.",
    body: [
      "Shops without a spray booth used to apologize for buying laminate. Linea TFL and white melamine cabinets are thermally fused in the plant. The edge is banded. There is no orange peel because there is no film from a gun.",
      "Lead time is the same as stock wood interiors. Colors are stocked in whites, greiges, and two woodgrains that actually look like wood under jobsite lighting.",
      "Use them on rental, healthcare, and any job where the client will wipe the interior with a grocery bag in year three. Hang your own fronts, or leave the boxes open.",
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
    summary: "Stop rebuilding the same twelve-cabinet kitchen.",
    body: [
      "Template one: your builder-grade Linea white run, standard hinge plates, birch boxes. Template two: the walnut-edge island you upsell. Template three: the vanity you install every week.",
      "Copy, change widths, submit. The shops that do this stop sending us spreadsheets with a missing glide length.",
    ],
  },
  {
    slug: "moisture-and-doors",
    title: "Do not store finished cabinets in an unfinished house",
    category: "How-to",
    summary: "A reminder we still have to send.",
    body: [
      "A painted maple frame and a finished drawer box are wood products. If they sit in a house with wet drywall and no HVAC, they will move. That is not a mill defect.",
      "Hold the crate in your shop or a climate-controlled unit until the site is at living humidity. We will remake a cabinet we cut wrong. We will not remake a box the jobsite steamed.",
    ],
  },
  {
    slug: "25-years-portland",
    title: "Twenty-five years from a one-bay box shop",
    category: "Company",
    summary: "Mira Novak opened Cabinova Kraft in 1998. The promise has not changed.",
    body: [
      "The first invoices were written on a counter in a leased bay on Columbia Boulevard. Drawer boxes only. No Linea, no hardware kits, no website.",
      "What we told shops then is what we tell them now: we will cut what you ordered, we will pack all of it, and it will leave on the day we named. The plant is larger. The promise is the same size.",
    ],
  },
];

export const careers = [
  {
    title: "Manufacturing engineer",
    location: "Lake Elsinore, CA",
    type: "Full-time",
    summary: "Own CNC programs, yield, and the Linea cell. Shop-floor time required, not optional.",
  },
  {
    title: "Production wood supervisor",
    location: "Lake Elsinore, CA",
    type: "Full-time",
    summary: "Second shift on the cabinet and drawer-box line. You have run a crew in a mill. You like a clean cell.",
  },
  {
    title: "Purchasing manager",
    location: "Lake Elsinore, CA",
    type: "Full-time",
    summary: "Lumber, panel, foil, and hardware. Forecast with the plants, not against them.",
  },
  {
    title: "Inside sales / customer service",
    location: "Lake Elsinore, CA",
    type: "Full-time",
    summary: "The desk is the product. Know the catalog or be willing to learn it faster than our shops do.",
  },
  {
    title: "Finishing technician",
    location: "Lake Elsinore, CA",
    type: "Full-time",
    summary: "Spray to color, glaze, and conversion varnish. Samples and production.",
  },
];

export const markets = [
  {
    slug: "residential",
    name: "Residential",
    image: "/images/cabinets.jpg",
    summary: "Kitchens, baths, closets, laundry. New work and refacing.",
    body: [
      "A shop measures, specifies, and installs. We mill the cabinets, boxes, and hardware.",
    ],
  },
  {
    slug: "commercial",
    name: "Commercial",
    image: "/images/office.jpg",
    summary: "Offices, healthcare, hospitality, multi-family.",
    body: [
      "Work arrives as a spec: species, core, formaldehyde, hardware, and a date. TFL and HPL interiors are typical.",
    ],
  },
];

export const videos = [
  {
    slug: "kraftdesk-tour",
    title: "KraftDesk: start a job",
    length: "4:20",
    summary: "Login, name a PO, add a Linea base, and save.",
  },
  {
    slug: "linea-base",
    title: "Adding a Linea base cabinet",
    length: "6:05",
    summary: "Width, height, toekick, shelves, and pairing hardware.",
  },
  {
    slug: "quick-edit",
    title: "Quick Edit from a spreadsheet",
    length: "5:40",
    summary: "Paste cabinet and box lists without retyping sizes.",
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
