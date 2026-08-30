import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { company, locations } from "@/data/site";
import { associations } from "@/data/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Cabinova Kraft"
        lede="A wholesale manufacturer of custom cabinet components. We sell to cabinetmakers and cabinet industry professionals. We do not sell to the public."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
      />
      <section className="container-site grid gap-10 py-14 lg:grid-cols-2">
        <div>
          <p className="text-lg leading-relaxed">
            Cabinova Kraft was founded in {company.founded} by Mira Novak, a
            cabinetmaker’s daughter, in a leased bay on Columbia Boulevard in
            Portland. The first invoices were drawer boxes. The promise on those
            invoices is still the one we print: cut to spec, packed complete,
            shipped on schedule.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Today her son, Elias Novak, runs plants in Portland and Charlotte,
            with a Will Call dock in Phoenix. We mill cabinets, drawer boxes,
            hardware kits, and components so shops can sell custom without
            owning every machine. The work is still for trade accounts.
          </p>
          <p className="mt-6 font-display text-xl text-ink">— Elias Novak, President</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/become-a-customer" className="text-sm font-semibold text-primary">
              Become a customer →
            </Link>
            <Link href="/about/locations" className="text-sm font-semibold text-primary">
              Locations →
            </Link>
            <Link href="/about/careers" className="text-sm font-semibold text-primary">
              Careers →
            </Link>
          </div>
        </div>
        <div className="relative min-h-[18rem] overflow-hidden rounded-xl">
          <Image src="/images/shop-woodworking.jpg" alt="The Portland mill" fill className="object-cover" />
        </div>
      </section>
      <section className="border-t border-border bg-card">
        <div className="container-site grid gap-8 py-14 md:grid-cols-3">
          {locations.map((l) => (
            <article key={l.slug}>
              <h2 className="font-display text-2xl text-ink">{l.name}</h2>
              <p className="mt-1 text-sm text-primary">{l.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{l.notes}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container-site py-14">
        <h2 className="font-display text-3xl text-ink">Associations</h2>
        <ul className="mt-6 space-y-4">
          {associations.map((a) => (
            <li key={a.name}>
              <p className="font-medium">{a.name}</p>
              <p className="text-sm text-muted-foreground">{a.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
