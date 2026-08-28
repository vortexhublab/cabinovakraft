import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { company } from "@/data/site";

export const metadata: Metadata = { title: "Cabinova brands" };

export default function BrandsPage() {
  const brands = [
    {
      name: company.rtaName,
      href: "/products/rta-cabinets",
      body: "Ready-to-assemble frameless cabinet boxes. CNC-sized, hardware in the crate, 6–10 days on stock materials.",
    },
    {
      name: company.laminateName,
      href: "/products/doors-and-drawer-fronts",
      body: "3D laminate wrapped over a profiled MDF core. Seamless edges, stocked colors, no spray booth required.",
    },
    {
      name: company.portalName,
      href: "/order",
      body: "Online quoting and ordering. Templates, live pricing, mill calendar, and job history for trade accounts.",
    },
    {
      name: "Custom Design Series",
      href: "/products/doors-and-drawer-fronts",
      body: "Mix inner, outer, and panel profiles on ¾″ butt-joint wood doors. Square, soft, and cathedral arches.",
    },
  ];

  return (
    <>
      <PageHero
        title="Cabinova brands"
        lede="Names we put on the work so a shop can specify a system, not a pile of SKUs."
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
