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
          <article key={f.slug} className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
            <div className="relative aspect-[16/10]">
              <Image src={f.image} alt={f.name} fill className="object-cover" />
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
