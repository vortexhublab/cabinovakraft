import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { markets } from "@/data/content";

export const metadata: Metadata = { title: "Markets" };

export default function MarketsPage() {
  return (
    <>
      <PageHero
        title="Markets"
        lede="Residential and specified commercial. Same mill."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/markets", label: "Markets" },
        ]}
      />
      <section className="container-site grid gap-5 py-8 md:py-10 lg:grid-cols-2">
        {markets.map((m) => (
          <Link key={m.slug} href={`/markets/${m.slug}`} className="look spatial-card">
            <div className="relative h-56">
              <Image src={m.image} alt="" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="font-display text-3xl text-ink">{m.name}</h2>
              <p className="mt-2 text-muted-foreground">{m.summary}</p>
              <p className="mt-4 text-sm font-semibold text-primary">More information →</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
