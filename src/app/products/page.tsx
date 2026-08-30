import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { productCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Cabinets, drawer boxes, hardware, and components.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        lede="Four lines. One PO."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
        ]}
      />
      <section className="container-site py-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {productCategories.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10"
            >
              <div className="relative aspect-[16/10]">
                <Image src={p.image} alt={p.name} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <h2 className="font-display text-2xl text-ink">{p.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.summary}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium text-primary">
          <Link href="/products/materials">Materials →</Link>
          <Link href="/products/finishes">Finishes →</Link>
        </div>
      </section>
    </>
  );
}
