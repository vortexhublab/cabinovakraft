import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { associations } from "@/data/content";

export const metadata: Metadata = { title: "Associations" };

export default function AssociationsPage() {
  return (
    <>
      <PageHero
        title="Associations"
        lede="We partner with industry groups because shops do not work in a vacuum, and neither should a mill."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/about/associations", label: "Associations" },
        ]}
      />
      <section className="container-site grid gap-6 py-14 md:grid-cols-3">
        {associations.map((a) => (
          <article key={a.name} className="rounded-xl bg-card p-6 ring-1 ring-foreground/10">
            <h2 className="font-display text-2xl text-ink">{a.name}</h2>
            <p className="mt-2 text-muted-foreground">{a.note}</p>
          </article>
        ))}
      </section>
    </>
  );
}
