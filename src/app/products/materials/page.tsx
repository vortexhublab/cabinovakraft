import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { materials } from "@/data/products";

export const metadata: Metadata = { title: "Materials" };

export default function MaterialsPage() {
  return (
    <>
      <PageHero
        title="Materials"
        lede="From common maple to Formex 3D laminate and high-gloss acrylic. Specify the species or core on the PO — we will not substitute without a call."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: "/products/materials", label: "Materials" },
        ]}
      />
      <section className="container-site grid gap-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {materials.map((m) => (
          <article id={m.slug} key={m.slug} className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
            <div className="relative h-40">
              <Image src={m.image} alt="" fill className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-primary">{m.group}</p>
              <h2 className="mt-1 font-display text-2xl text-ink">{m.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{m.summary}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
