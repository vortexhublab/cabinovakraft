"use client";

import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { CatalogImage } from "@/components/catalog-image";
import { useCatalogBook } from "@/components/catalog-provider";
import { Button } from "@/components/ui/button";
import { catalogOrder, rtaConfigs } from "@/data/products";
import { SKU_KINDS, type SkuKind } from "@/lib/catalog-book";
import { cn } from "@/lib/utils";

export function LiveCatalogLines({
  detail = "short",
  compact = false,
}: {
  detail?: "short" | "summary";
  compact?: boolean;
}) {
  const { book } = useCatalogBook();
  const lines = catalogOrder
    .map((slug) => book.lines.find((line) => line.slug === slug))
    .filter((line): line is NonNullable<typeof line> => Boolean(line));

  return (
    <div
      className={cn(
        "grid",
        compact ? "grid-cols-2 gap-3 lg:grid-cols-4" : "gap-5 sm:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {lines.map((line) => (
        <ProductCard key={line.slug} product={line} detail={detail} compact={compact} />
      ))}
    </div>
  );
}

export function LiveMaterials() {
  const { book } = useCatalogBook();
  return (
    <section className="container-site grid gap-4 py-8 sm:grid-cols-2 md:py-10 lg:grid-cols-3">
      {book.materials.map((m) => (
        <article
          id={m.slug}
          key={m.slug}
          className="spatial-card spatial-glass overflow-hidden rounded-2xl ring-1 ring-foreground/10"
        >
          <div className="relative h-40 overflow-hidden">
            <CatalogImage src={m.image} alt={m.name} fill className="object-cover" />
          </div>
          <div className="p-5">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-primary">{m.group}</p>
            <h2 className="mt-1 font-display text-2xl text-ink">{m.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{m.summary}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export function LiveFinishes() {
  const { book } = useCatalogBook();
  return (
    <section className="container-site grid gap-4 py-8 sm:grid-cols-2 md:py-10">
      {book.finishes.map((f) => (
        <article key={f.slug} className="spatial-card spatial-glass overflow-hidden rounded-2xl ring-1 ring-foreground/10">
          <div className="relative aspect-[16/10] overflow-hidden">
            <CatalogImage src={f.image} alt={f.name} fill className="object-cover" />
          </div>
          <div className="p-5">
            <h2 className="font-display text-2xl text-ink">{f.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{f.summary}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export function LiveProductLine({ slug }: { slug: string }) {
  const { book } = useCatalogBook();
  const p = book.lines.find((line) => line.slug === slug);
  if (!p) return null;

  const kind = slug as SkuKind;
  const lineup = SKU_KINDS.includes(kind) ? book.skus[kind] : null;

  return (
    <>
      <PageHero
        title={p.name}
        lede={p.summary}
        image={p.image}
        imageAlt={p.name}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: `/products/${p.slug}`, label: p.name },
        ]}
      />
      <section className="container-site py-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_18rem]">
          <div>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-primary">·</span>
                  {h}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-primary">Lead time: {p.leadTime}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button render={<Link href="/order" />} className="h-10 px-4">
                Add to quote
              </Button>
              <Button variant="outline" render={<Link href="/downloads" />} className="h-10 px-4">
                Catalog
              </Button>
            </div>
          </div>
          <dl className="spatial-glass grid gap-4 self-start rounded-2xl p-5 ring-1 ring-foreground/10">
            {p.specs.map((s) => (
              <div key={s.label}>
                <dt className="text-xs text-muted-foreground">{s.label}</dt>
                <dd className="mt-0.5 text-sm font-medium">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {p.images.length > 1 && (
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {p.images.map((src) => (
              <div key={src} className="spatial-card relative aspect-[4/3] overflow-hidden rounded-2xl">
                <CatalogImage src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </section>

      {lineup && (
        <section className="container-site pb-10">
          <h2 className="font-display text-2xl text-ink md:text-3xl">Lineup</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {lineup.map((item) => (
              <article
                key={item.slug}
                className="spatial-card spatial-glass overflow-hidden rounded-2xl ring-1 ring-foreground/10"
              >
                <div className="relative aspect-[4/3]">
                  <CatalogImage src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground">{item.group ?? item.joinery}</p>
                  <h3 className="mt-1 font-medium text-ink">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.notes}</p>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span>From ${item.price}</span>
                    <Link href="/order" className="font-medium text-primary">
                      Quote
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {slug === "cabinets" && (
        <section className="container-site pb-10">
          <h2 className="font-display text-2xl text-ink md:text-3xl">Configurations</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {rtaConfigs.map((c) => (
              <div key={c.name} className="spatial-card spatial-glass rounded-2xl p-4 ring-1 ring-foreground/10">
                <p className="font-medium">{c.name}</p>
                <p className="text-sm text-muted-foreground">{c.note}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
