import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LiveCatalogLines } from "@/components/live-catalog";
import { SectionHeading } from "@/components/section-heading";
import { SpatialHero } from "@/components/spatial-hero";
import { gallery } from "@/data/gallery";
import { testimonials } from "@/data/social-proof";

export default function HomePage() {
  return (
    <>
      <SpatialHero
        src="/images/gallery-classic.jpg"
        alt="Installed kitchen with Linea cabinets and flat-panel fronts from Cabinova Kraft"
      >
        <p className="eyebrow text-[0.68rem] text-bronze">
          Wholesale mill · Lake Elsinore, CA
        </p>
        <h1 className="mt-3 font-display text-[1.85rem] font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.65rem]">
          Cabinets and doors,{" "}
          <em className="font-normal italic text-white/90">ready for the hang.</em>
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/72 sm:text-base">
          Linea RTA, fronts, drawer boxes, and hardware — cut to the widths on
          your list, packed on one mill ticket.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button
            render={<Link href="/become-a-customer" />}
            className="h-10 bg-bronze px-4 text-sm text-ink hover:bg-bronze/90"
          >
            Open a trade account
          </Button>
          <Button
            variant="outline"
            render={<Link href="/products" />}
            className="h-10 border-white/35 bg-white/8 px-4 text-sm text-white backdrop-blur-sm hover:bg-white/16 hover:text-white"
          >
            Browse the catalog
          </Button>
        </div>
      </SpatialHero>

      <section className="py-8 md:py-10">
        <div className="container-site">
          <SectionHeading
            kicker="01 — Catalog"
            title="The lines we keep on the floor"
            action={
              <Link href="/products" className="text-sm font-medium text-bronze hover:text-primary">
                All lines →
              </Link>
            }
          />
          <LiveCatalogLines compact />
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="container-site">
          <SectionHeading
            kicker="02 — Installed"
            title="Jobs hung from this mill"
            action={
              <Link href="/gallery" className="text-sm font-medium text-bronze hover:text-primary">
                Gallery →
              </Link>
            }
          />
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
            {gallery.slice(0, 3).map((g, i) => (
              <Link
                key={g.slug}
                href={`/gallery/${g.slug}`}
                className={`spatial-card look group relative block ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/9] md:aspect-[4/3]" : "aspect-[4/3]"}`}>
                  <Image
                    src={g.image}
                    alt={`${g.title} — ${g.location}`}
                    fill
                    className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 33vw" : "33vw"}
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-3 md:p-4">
                  <div className="min-w-0 text-white">
                    <p className="line-clamp-2 font-display text-sm leading-tight md:text-lg">
                      {g.title}
                    </p>
                    <p className="mt-0.5 text-[10px] tracking-wide text-white/70 sm:text-xs">
                      {g.location}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/50 py-8 md:py-10">
        <div className="container-site">
          <SectionHeading kicker="03 — Trade desk" title="After the first ticket" />
          <div className="grid gap-3 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="look spatial-card relative p-5">
                <span
                  aria-hidden
                  className="font-display text-5xl leading-none text-bronze/35"
                >
                  “
                </span>
                <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-ink">
                  {t.quote}
                </p>
                <footer className="mt-4 text-xs text-muted-foreground">
                  <span className="font-medium text-ink">{t.name}</span>
                  <span className="mx-1.5 text-bronze">·</span>
                  {t.shop}, {t.city}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-9 text-paper md:py-11">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(80% 80% at 90% 20%, color-mix(in oklab, var(--bronze) 28%, transparent), transparent 58%)",
          }}
        />
        <div className="container-site relative flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow">Trade accounts only</p>
            <h2 className="mt-1 font-display text-2xl tracking-tight md:text-3xl">
              KraftDesk is for licensed shops
            </h2>
            <p className="mt-1 max-w-md text-sm text-paper/65">
              Apply with a trade license. Homeowners, we will point you to a shop.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              render={<Link href="/become-a-customer" />}
              className="h-10 bg-bronze px-4 text-sm text-ink hover:bg-bronze/90"
            >
              Open an account
            </Button>
            <Button
              variant="outline"
              render={<Link href="/homeowners" />}
              className="h-10 border-white/25 bg-transparent px-4 text-sm text-paper hover:bg-white/10 hover:text-paper"
            >
              I am a homeowner
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
