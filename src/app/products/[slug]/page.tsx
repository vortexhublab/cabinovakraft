import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { productCategories, rtaConfigs } from "@/data/products";
import {
  accessoryItems,
  componentItems,
  doorItems,
  drawerBoxes,
  hardwareItems,
  specialtyItems,
  type CatalogItem,
} from "@/data/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productCategories.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = productCategories.find((c) => c.slug === slug);
  return { title: p?.name ?? "Product" };
}

export default async function ProductCategoryPage({ params }: Props) {
  const { slug } = await params;
  const p = productCategories.find((c) => c.slug === slug);
  if (!p) notFound();

  const lineup =
    slug === "drawer-boxes"
      ? drawerBoxes
      : slug === "hardware"
        ? hardwareItems
        : slug === "components"
          ? componentItems
          : slug === "doors"
            ? doorItems
            : slug === "accessories"
              ? accessoryItems
              : slug === "specialty"
                ? specialtyItems
                : null;

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
      <section className="container-site py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_18rem]">
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
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {p.images.map((src) => (
              <div key={src} className="spatial-card relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </section>

      {lineup && <Lineup title="Lineup" rows={lineup} />}

      {slug === "cabinets" && (
        <section className="container-site pb-14">
          <h2 className="font-display text-3xl text-ink">Configurations</h2>
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

function Lineup({ title, rows }: { title: string; rows: CatalogItem[] }) {
  return (
    <section className="container-site pb-14">
      <h2 className="font-display text-3xl text-ink">{title}</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {rows.map((item) => (
          <article key={item.slug} className="spatial-card spatial-glass overflow-hidden rounded-2xl ring-1 ring-foreground/10">
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05]"
              />
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
  );
}
