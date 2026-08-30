import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LiveCatalogLines } from "@/components/live-catalog";
import { SpatialHero } from "@/components/spatial-hero";
import { gallery } from "@/data/gallery";
import { testimonials } from "@/data/social-proof";

export default function HomePage() {
  return (
    <>
      <SpatialHero
        src="/images/hero-white-kitchen.jpg"
        alt="Kitchen specified with Cabinova Kraft cabinets and doors"
      >
        <h1 className="max-w-3xl font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
          Custom components for cabinet shops.
        </h1>
        <p className="mt-3 max-w-lg text-sm text-white/80 sm:text-base">
          Cabinets, doors, boxes, hardware, and accessories — sized to your list.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button render={<Link href="/become-a-customer" />} className="h-10 px-4 text-sm">
            Open an account
          </Button>
          <Button
            variant="outline"
            render={<Link href="/contact" />}
            className="h-10 border-white/40 bg-transparent px-4 text-sm text-white hover:bg-white/10 hover:text-white"
          >
            Talk to the mill
          </Button>
        </div>
      </SpatialHero>

      <section className="py-8 md:py-10">
        <div className="container-site">
          <div className="mb-5 flex items-end justify-between gap-3">
            <h2 className="font-display text-2xl text-ink md:text-3xl">Catalog</h2>
            <Link href="/products" className="shrink-0 text-sm font-medium text-primary">
              All products →
            </Link>
          </div>
          <LiveCatalogLines compact />
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="container-site">
          <div className="mb-5 flex items-end justify-between gap-3">
            <h2 className="font-display text-2xl text-ink md:text-3xl">Installed work</h2>
            <Link href="/gallery" className="shrink-0 text-sm font-medium text-primary">
              Gallery →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {gallery.slice(0, 3).map((g) => (
              <Link
                key={g.slug}
                href={`/gallery/${g.slug}`}
                className="spatial-card group relative block overflow-hidden rounded-xl md:rounded-2xl"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={g.image}
                    alt={g.title}
                    fill
                    className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    sizes="33vw"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-2 md:p-3">
                  <div className="min-w-0 text-white">
                    <p className="line-clamp-2 font-display text-xs leading-tight md:text-lg">
                      {g.title}
                    </p>
                    <p className="mt-0.5 hidden text-[10px] text-white/75 sm:block">
                      {g.location}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-8 md:py-10">
        <div className="container-site grid gap-3 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="spatial-card spatial-glass rounded-xl p-4 ring-1 ring-foreground/10 md:rounded-2xl"
            >
              <p className="line-clamp-3 text-sm leading-relaxed">“{t.quote}”</p>
              <footer className="mt-3 text-xs text-muted-foreground">
                {t.name}, {t.shop}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-primary py-8 text-primary-foreground md:py-10">
        <div className="container-site flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">Trade accounts only</h2>
            <p className="mt-1 text-sm text-primary-foreground/80">
              Cabinetmakers and contractors. Homeowners, we will name a shop.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              render={<Link href="/become-a-customer" />}
              className="h-10 bg-white px-4 text-sm text-primary hover:bg-white/90"
            >
              Open an account
            </Button>
            <Button
              variant="outline"
              render={<Link href="/homeowners" />}
              className="h-10 border-white/40 bg-transparent px-4 text-sm text-white hover:bg-white/10 hover:text-white"
            >
              I am a homeowner
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
