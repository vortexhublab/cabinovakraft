import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { finishes } from "@/data/products";

export const metadata: Metadata = { title: "Finishes" };

export default function FinishesPage() {
  return (
    <>
      <PageHero
        title="Finishes"
        lede="Doors, boxes, and molding finished in the same lot. Spray-to-color stain, catalyzed paint, glaze, and UV for interiors."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: "/products/finishes", label: "Finishes" },
        ]}
      />
      <section className="container-site grid gap-6 py-14 md:grid-cols-2">
        {finishes.map((f) => (
          <article key={f.slug} className="rounded-xl bg-card p-6 ring-1 ring-foreground/10">
            <h2 className="font-display text-2xl text-ink">{f.name}</h2>
            <p className="mt-2 text-muted-foreground">{f.summary}</p>
          </article>
        ))}
      </section>
    </>
  );
}
