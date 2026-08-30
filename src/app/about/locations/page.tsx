import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { locations } from "@/data/site";

export const metadata: Metadata = { title: "Locations" };

export default function LocationsPage() {
  return (
    <>
      <PageHero
        title="Plant and Will Call"
        lede="Lake Elsinore mill. Email ahead for Will Call."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/about/locations", label: "Locations" },
        ]}
      />
      <section className="container-site grid gap-6 py-14 lg:max-w-xl">
        {locations.map((l) => (
          <article key={l.slug} className="look p-5">
            <h2 className="font-display text-2xl text-ink">{l.name}</h2>
            <p className="mt-1 text-sm text-primary">{l.role}</p>
            <p className="mt-4 text-sm">
              {l.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-3 text-sm">Will Call: {l.willCall}</p>
            <p className="mt-4 text-sm text-muted-foreground">{l.notes}</p>
          </article>
        ))}
      </section>
    </>
  );
}
