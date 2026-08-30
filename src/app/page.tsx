import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";
import { productCategories } from "@/data/products";
import { componentItems, drawerBoxes, hardwareItems } from "@/data/catalog";
import { gallery } from "@/data/gallery";
import { processSteps, serviceTiers, testimonials } from "@/data/social-proof";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-ink text-white">
        <Image
          src="/images/hero-white-kitchen.jpg"
          alt="Kitchen built with Cabinova Kraft cabinets and drawer boxes"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,22,18,0.78),rgba(28,22,18,0.28))]" />
        <div className="container-site relative flex min-h-[78vh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.28em] text-white/80">
            {company.promise}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Helping qualified cabinet professionals succeed
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            We manufacture cabinets, drawer boxes, hardware, and components —
            sized to your list, packed complete, and shipped on the day we named.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button render={<Link href="/become-a-customer" />} className="h-11 px-5 text-sm">
              Get started
            </Button>
            <Button
              variant="outline"
              render={<Link href="/contact" />}
              className="h-11 border-white/40 bg-transparent px-5 text-sm text-white hover:bg-white/10 hover:text-white"
            >
              Questions?
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="container-site grid md:grid-cols-3">
          {[
            {
              title: "Cut to spec",
              kicker: "Commitments matter",
              body: "CNC from your sizes. We do not round your cabinet or box list to what is convenient.",
              href: "/about",
              cta: "Our core focus",
            },
            {
              title: "Easy to do business",
              kicker: "Premier and Partner service",
              body: "An assigned CSR, KraftDesk 24/7, and a mill calendar you can actually schedule against.",
              href: "/contact",
              cta: "Contact us",
            },
            {
              title: "Four lines. One PO.",
              kicker: "Cabinets, boxes, hardware, components",
              body: "Linea cabinets, drawer boxes, hardware, and mill components on the same ticket. Request the book.",
              href: "/downloads",
              cta: "Free catalog",
            },
          ].map((col) => (
            <article key={col.title} className="border-border px-0 py-10 md:border-r md:px-8 md:py-14 last:border-r-0">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
                {col.kicker}
              </p>
              <h2 className="mt-2 font-display text-3xl text-ink">{col.title}</h2>
              <p className="mt-3 text-muted-foreground">{col.body}</p>
              <Link
                href={col.href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                {col.cta} <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-site">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
                Products
              </p>
              <h2 className="mt-1 font-display text-4xl text-ink">What we mill and stock</h2>
            </div>
            <Link href="/products" className="hidden text-sm font-semibold text-primary sm:inline">
              All products →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10"
              >
                <div className="relative h-40">
                  <Image src={p.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-xl text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-16 md:py-20">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div className="relative min-h-[22rem] overflow-hidden rounded-xl">
            <Image
              src="/images/shop-woodworking.jpg"
              alt="Cabinet component manufacturing"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
              Proven process
            </p>
            <h2 className="mt-1 font-display text-4xl text-ink">
              From your list to a crate on the dock
            </h2>
            <ol className="mt-8 space-y-5">
              {processSteps.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="font-display text-2xl text-primary">{s.n}</span>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="text-sm text-muted-foreground">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Button render={<Link href="/order" />} className="mt-8 h-10 px-4">
              Open {company.portalName}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-site">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-4xl text-ink">What shops specify</h2>
            <Link href="/products" className="text-sm font-semibold text-primary">
              Catalog →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <SpecColumn
              title="Drawer boxes"
              href="/products/drawer-boxes"
              items={drawerBoxes.map((b) => b.name)}
            />
            <SpecColumn
              title="Hardware"
              href="/products/hardware"
              items={hardwareItems.slice(0, 4).map((h) => h.name)}
            />
            <SpecColumn
              title="Components"
              href="/products/components"
              items={componentItems.slice(0, 4).map((c) => c.name)}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-ink py-16 text-paper md:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          {serviceTiers.map((t) => (
            <article key={t.name} className="rounded-xl border border-white/10 p-8">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/60">Service</p>
              <h2 className="mt-1 font-display text-3xl">{t.name}</h2>
              <p className="mt-3 text-white/75">{t.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                {t.points.map((p) => (
                  <li key={p}>— {p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-site">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-4xl text-ink">Gallery</h2>
            <Link href="/gallery" className="text-sm font-semibold text-primary">
              All projects →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.slice(0, 6).map((g) => (
              <Link key={g.slug} href={`/gallery/${g.slug}`} className="group relative block overflow-hidden rounded-xl">
                <div className="relative aspect-[4/3]">
                  <Image src={g.image} alt={g.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white">
                    <p className="font-display text-xl">{g.title}</p>
                    <p className="text-xs text-white/80">{g.boxes}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-16 md:py-20">
        <div className="container-site">
          <h2 className="font-display text-4xl text-ink">What shops tell us</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <blockquote key={t.name} className="rounded-xl p-6 ring-1 ring-foreground/10">
                <p className="text-[0.95rem] leading-relaxed">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-muted-foreground">
                  {t.name}, {t.shop} · {t.city}
                </footer>
              </blockquote>
            ))}
          </div>
          <Link href="/about/testimonials" className="mt-6 inline-block text-sm font-semibold text-primary">
            More testimonials →
          </Link>
        </div>
      </section>

      <section className="bg-primary py-14 text-primary-foreground">
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Ready to open a trade account?</h2>
            <p className="mt-2 max-w-xl text-primary-foreground/85">
              Cabinetmakers and contractors only. Homeowners, we will help you find a shop.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              render={<Link href="/become-a-customer" />}
              className="h-11 bg-white px-5 text-primary hover:bg-white/90"
            >
              Become a customer
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

function SpecColumn({
  title,
  href,
  items,
}: {
  title: string;
  href: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl bg-card p-5 ring-1 ring-foreground/10">
      <h3 className="font-display text-2xl text-ink">{title}</h3>
      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <Link href={href} className="mt-4 inline-block text-sm font-semibold text-primary">
        View lineup →
      </Link>
    </div>
  );
}
