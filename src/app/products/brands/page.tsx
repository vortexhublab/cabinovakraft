import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { company } from "@/data/site";

export const metadata: Metadata = { title: "Cabinova brands" };

export default function BrandsPage() {
  const brands = [
    {
      name: `${company.rtaName} cabinets`,
      href: "/products/cabinets",
      body: "Ready-to-assemble frameless cabinets. CNC-sized, assembly hardware in the crate, 6–10 days on stock materials.",
    },
    {
      name: "Ridge / Vale doors",
      href: "/products/doors",
      body: "Shaker, slab, miter, and raised fronts. Custom-sized. No moldings.",
    },
    {
      name: "KraftBox drawer boxes",
      href: "/products/drawer-boxes",
      body: "Dovetail and doweled boxes, assembled or KD. Maple, birch, and white melamine.",
    },
    {
      name: company.portalName,
      href: "/order",
      body: "Online quoting and ordering. Templates, live pricing, mill calendar, and job history for trade accounts.",
    },
    {
      name: "Hardware desk",
      href: "/products/hardware",
      body: "Hinges, glides, knobs, pulls, and kits specified with the cabinet so the install is hanging, not laying out a jig.",
    },
    {
      name: "Component shop",
      href: "/products/components",
      body: "Face frames, end panels, fillers, shelves, and toekicks cut to the same list as the cabinets.",
    },
  ];

  return (
    <>
      <PageHero
        title="Brands"
        lede="Linea, KraftBox, KraftDesk."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: "/products/brands", label: "Brands" },
        ]}
      />
      <section className="container-site grid gap-6 py-14 md:grid-cols-2">
        {brands.map((b) => (
          <Link key={b.name} href={b.href} className="rounded-xl bg-card p-8 ring-1 ring-foreground/10">
            <h2 className="font-display text-3xl text-ink">{b.name}</h2>
            <p className="mt-3 text-muted-foreground">{b.body}</p>
            <p className="mt-4 text-sm font-semibold text-primary">Learn more →</p>
          </Link>
        ))}
      </section>
    </>
  );
}
