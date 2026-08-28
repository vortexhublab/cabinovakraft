import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/data/products";
import { doors, drawerBoxes } from "@/data/catalog";
import { rtaConfigs } from "@/data/products";

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

  return (
    <>
      <PageHero
        title={p.name}
        lede={p.summary}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: `/products/${p.slug}`, label: p.name },
        ]}
      />
      <section className="container-site grid gap-10 py-14 lg:grid-cols-2">
        <div className="relative min-h-[18rem] overflow-hidden rounded-xl">
          <Image src={p.image} alt="" fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-medium text-primary">Lead time: {p.leadTime}</p>
          {p.body.map((para) => (
            <p key={para.slice(0, 24)} className="mt-4 text-muted-foreground leading-relaxed">
              {para}
            </p>
          ))}
          <ul className="mt-6 space-y-2 text-sm">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-primary">▸</span>
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button render={<Link href="/order" />} className="h-10 px-4">
              Quote in KraftDesk
            </Button>
            <Button variant="outline" render={<Link href="/downloads" />} className="h-10 px-4">
              Catalog & forms
            </Button>
          </div>
        </div>
      </section>
      <section className="border-t border-border bg-card">
        <div className="container-site grid gap-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {p.specs.map((s) => (
            <div key={s.label}>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{s.label}</p>
              <p className="mt-1 text-sm">{s.value}</p>
            </div>
          ))}
        </div>
      </section>
      {slug === "doors-and-drawer-fronts" && (
        <section className="container-site py-14">
          <h2 className="font-display text-3xl text-ink">Find a door</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {doors.map((d) => (
              <Link
                key={d.slug}
                href={`/products/doors/${d.slug}`}
                className="rounded-xl bg-card p-4 ring-1 ring-foreground/10"
              >
                <p className="text-xs text-primary">{d.code}</p>
                <p className="font-medium">{d.name}</p>
                <p className="text-xs text-muted-foreground">{d.construction}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
      {slug === "drawer-boxes" && (
        <section className="container-site py-14">
          <h2 className="font-display text-3xl text-ink">Drawer box lineup</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead className="border-b text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="py-2">Box</th>
                  <th>Joinery</th>
                  <th>Side</th>
                  <th>From</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {drawerBoxes.map((b) => (
                  <tr key={b.slug} className="border-b border-border/70">
                    <td className="py-3 font-medium">{b.name}</td>
                    <td>{b.joinery}</td>
                    <td>{b.side}</td>
                    <td>${b.price}</td>
                    <td>
                      <Link href="/order" className="text-primary">
                        Add to quote
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
      {slug === "rta-cabinets" && (
        <section className="container-site py-14">
          <h2 className="font-display text-3xl text-ink">Linea configurations</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {rtaConfigs.map((c) => (
              <div key={c.name} className="rounded-xl bg-card p-5 ring-1 ring-foreground/10">
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
