import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";
import { productCategories } from "@/data/products";
import { gallery } from "@/data/gallery";
import { processSteps, testimonials } from "@/data/social-proof";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-ink text-white">
        <Image
          src="/images/hero-white-kitchen.jpg"
          alt="White frameless kitchen cabinets"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,22,18,0.82),rgba(28,22,18,0.22))]" />
        <div className="container-site relative flex min-h-[70vh] flex-col justify-end pb-14 pt-24 md:justify-center md:pb-20">
          <p className="text-sm text-white/70">{company.promise}</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
            Cabinets, boxes, hardware, components.
          </h1>
          <p className="mt-4 max-w-md text-lg text-white/80">
            Cut to your list. Trade only.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button render={<Link href="/products" />} className="h-11 px-5 text-sm">
              View catalog
            </Button>
            <Button
              variant="outline"
              render={<Link href="/become-a-customer" />}
              className="h-11 border-white/40 bg-transparent px-5 text-sm text-white hover:bg-white/10 hover:text-white"
            >
              Apply
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container-site">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-3xl text-ink md:text-4xl">Catalog</h2>
            <Link href="/products" className="text-sm font-medium text-primary">
              All four lines →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {productCategories.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.short}</p>
                </div>
              </Link>
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
          <div className="relative min-h-[18rem] overflow-hidden rounded-xl">
            <Image
              src="/images/oak.jpg"
              alt="Millwork on the job"
              fill
              className="object-cover"
            />
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
                className="group relative block overflow-hidden rounded-xl"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={g.image}
                    alt={g.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
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
            <blockquote key={t.name} className="rounded-xl p-6 ring-1 ring-foreground/10">
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
            <p className="mt-1 text-primary-foreground/80">Cabinetmakers and contractors. Homeowners, we will name a shop.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              render={<Link href="/become-a-customer" />}
              className="h-11 bg-white px-5 text-primary hover:bg-white/90"
            >
              Apply
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
