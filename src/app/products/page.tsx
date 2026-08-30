import type { Metadata } from "next";
import Link from "next/link";
import { LiveCatalogLines } from "@/components/live-catalog";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Products",
  description: "RTA cabinets, doors, drawer boxes, components, accessories, and hardware.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        lede="The mill catalog, except moldings."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
        ]}
      />
      <section className="container-site py-8 md:py-10">
        <LiveCatalogLines detail="summary" compact />
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-bronze">
          <Link href="/products/materials">Materials →</Link>
          <Link href="/products/finishes">Finishes →</Link>
          <Link href="/products/design-styles">Design styles →</Link>
        </div>
      </section>
    </>
  );
}
