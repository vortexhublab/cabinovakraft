import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { company, locations } from "@/data/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        lede="A wholesale mill. Trade accounts only."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
      />
      <section className="container-site grid gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="text-lg leading-relaxed">
            Founded in {company.founded}. Headquarters on Rostrata Ave in Lake Elsinore. Drawer boxes first. The same promise now: cut to spec, packed complete.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The mill is in Lake Elsinore. We mill cabinets, boxes, hardware, and components so shops can sell custom without owning every machine.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-primary">
            <Link href="/become-a-customer">Apply →</Link>
            <Link href="/about/locations">Locations →</Link>
            <Link href="/about/careers">Careers →</Link>
          </div>
        </div>
        <div className="relative min-h-[16rem] overflow-hidden rounded-xl">
          <Image src="/images/oak.jpg" alt="Millwork" fill className="object-cover" />
        </div>
      </section>
      <section className="border-t border-border bg-card">
        <div className="container-site grid gap-8 py-12 md:max-w-xl">
          {locations.map((l) => (
            <article key={l.slug}>
              <h2 className="font-display text-2xl text-ink">{l.name}</h2>
              <p className="mt-1 text-sm text-primary">{l.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l.notes}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
