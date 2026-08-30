import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { SpatialHero } from "@/components/spatial-hero";
import { company } from "@/data/site";
import { catalogLines } from "@/data/products";
import { gallery } from "@/data/gallery";
import { processSteps, testimonials } from "@/data/social-proof";

const pillars = [
  {
    title: "Sized on the PO",
    kicker: "No rounding",
    body: "You send widths. We cut those widths.",
    href: "/about",
    cta: "How we mill",
  },
  {
    title: "One ticket",
    kicker: "KraftDesk",
    body: "Cabinets, doors, boxes, and hardware on the same acknowledgment.",
    href: "/order",
    cta: "Open KraftDesk",
  },
  {
    title: "Trade desk only",
    kicker: "Wholesale",
    body: "Cabinetmakers and contractors. We do not sell to the public.",
    href: "/become-a-customer",
    cta: "Open an account",
  },
];

export default function HomePage() {
  return (
    <>
      <SpatialHero
        src="/images/hero-white-kitchen.jpg"
        alt="Kitchen specified with Cabinova Kraft cabinets and doors"
      >
        <p className="text-sm text-white/70">{company.promise}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
          Custom components for cabinet shops.
        </h1>
        <p className="mt-4 max-w-lg text-lg text-white/80">
          Cabinets, doors, boxes, hardware, and accessories — sized to your list.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button render={<Link href="/become-a-customer" />} className="h-11 px-5 text-sm">
            Open an account
          </Button>
          <Button
            variant="outline"
            render={<Link href="/contact" />}
            className="h-11 border-white/40 bg-transparent px-5 text-sm text-white hover:bg-white/10 hover:text-white"
          >
            Talk to the mill
          </Button>
        </div>
      </SpatialHero>

      <section className="border-b border-border bg-card">
        <div className="container-site grid md:grid-cols-3">
          {pillars.map((col) => (
            <article
              key={col.title}
              className="border-border px-0 py-10 md:border-r md:px-8 md:py-14 last:border-r-0"
            >
              <p className="text-xs font-medium text-primary">{col.kicker}</p>
              <h2 className="mt-2 font-display text-3xl text-ink">{col.title}</h2>
              <p className="mt-3 text-muted-foreground">{col.body}</p>
              <Link href={col.href} className="mt-5 inline-block text-sm font-medium text-primary">
                {col.cta} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container-site">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-3xl text-ink md:text-4xl">Catalog</h2>
            <Link href="/products" className="text-sm font-medium text-primary">
              All products →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {catalogLines.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-14 md:py-16">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl text-ink md:text-4xl">How a job runs</h2>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2">
              {processSteps.map((s) => (
                <li key={s.n}>
                  <p className="font-display text-2xl text-primary">{s.n}</p>
                  <p className="mt-1 font-medium">{s.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                </li>
              ))}
            </ol>
            <Button render={<Link href="/order" />} className="mt-8 h-10 px-4">
              Open {company.portalName}
            </Button>
          </div>
          <div className="spatial-card relative min-h-[18rem] overflow-hidden rounded-2xl ring-1 ring-foreground/10">
            <Image src="/images/oak.jpg" alt="Millwork on the job" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container-site">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-3xl text-ink md:text-4xl">Installed work</h2>
            <Link href="/gallery" className="text-sm font-medium text-primary">
              Gallery →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.slice(0, 6).map((g) => (
              <Link
                key={g.slug}
                href={`/gallery/${g.slug}`}
                className="spatial-card group relative block overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={g.image}
                    alt={g.title}
                    fill
                    className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white">
                    <p className="font-display text-xl">{g.title}</p>
                    <p className="text-xs text-white/75">{g.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-14">
        <div className="container-site grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="spatial-card spatial-glass rounded-2xl p-6 ring-1 ring-foreground/10">
              <p className="leading-relaxed">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-muted-foreground">
                {t.name}, {t.shop}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-primary py-12 text-primary-foreground">
        <div className="container-site flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl">Trade accounts only</h2>
            <p className="mt-1 text-primary-foreground/80">
              Cabinetmakers and contractors. Homeowners, we will name a shop.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              render={<Link href="/become-a-customer" />}
              className="h-11 bg-white px-5 text-primary hover:bg-white/90"
            >
              Open an account
            </Button>
            <Button
              variant="outline"
              render={<Link href="/homeowners" />}
              className="h-11 border-white/40 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
            >
              I am a homeowner
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
