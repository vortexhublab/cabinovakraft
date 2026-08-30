import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { catalogLines } from "@/data/products";

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
      <section className="container-site py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalogLines.map((p) => (
            <ProductCard key={p.slug} product={p} detail="summary" />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium text-primary">
          <Link href="/products/materials">Materials →</Link>
          <Link href="/products/finishes">Finishes →</Link>
          <Link href="/products/design-styles">Design styles →</Link>
        </div>
      </section>
    </>
  );
}
