import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { productCategories, materials } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Wholesale cabinets, drawer boxes, hardware, and cabinet components for trade shops.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalog"
        title="Products by Cabinova Kraft"
        lede="Four lines for trade accounts: Linea cabinets, drawer boxes, hardware, and mill components — custom-sized, packed complete."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
        ]}
      />
      <section className="container-site py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {productCategories.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10"
            >
              <div className="relative h-48">
                <Image src={p.image} alt="" fill className="object-cover" />
              </div>
              <div className="p-5">
                <h2 className="font-display text-2xl text-ink">{p.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                <p className="mt-3 text-sm font-semibold text-primary">More details →</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { href: "/products/materials", title: "Materials", items: materials.slice(0, 4).map((m) => m.name) },
            { href: "/products/finishes", title: "Finishes", items: ["Clear", "Stain", "Paint", "UV"] },
            { href: "/products/brands", title: "Brands", items: ["Linea cabinets", "KraftBox", "KraftDesk"] },
          ].map((b) => (
            <Link key={b.href} href={b.href} className="rounded-xl bg-card p-6 ring-1 ring-foreground/10">
              <h3 className="font-display text-2xl text-ink">{b.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {b.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary">Explore →</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
