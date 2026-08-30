import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { finishes } from "@/data/products";

export const metadata: Metadata = { title: "Finishes" };

export default function FinishesPage() {
  return (
    <>
      <PageHero
        title="Finishes"
        lede="Same lot on boxes, frames, and visible panels."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: "/products/finishes", label: "Finishes" },
        ]}
      />
      <section className="container-site grid gap-6 py-12 sm:grid-cols-2">
        {finishes.map((f) => (
          <article key={f.slug} className="spatial-card spatial-glass overflow-hidden rounded-2xl ring-1 ring-foreground/10">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={f.image}
                alt={f.name}
                fill
                className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05]"
              />
            </div>
            <div className="p-5">
              <h2 className="font-display text-2xl text-ink">{f.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{f.summary}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
