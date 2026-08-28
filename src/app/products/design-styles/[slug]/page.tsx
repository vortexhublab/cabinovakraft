import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DoorPreview } from "@/components/door-preview";
import { PageHero } from "@/components/page-hero";
import { designStyles } from "@/data/products";
import { doorsForStyle, getDoor } from "@/data/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return designStyles.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = designStyles.find((x) => x.slug === slug);
  return { title: s?.name ?? "Style" };
}

export default async function StylePage({ params }: Props) {
  const { slug } = await params;
  const s = designStyles.find((x) => x.slug === slug);
  if (!s) notFound();
  const related = doorsForStyle(s.slug);

  return (
    <>
      <PageHero
        title={s.name}
        lede={s.summary}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products/design-styles", label: "Design styles" },
          { href: `/products/design-styles/${s.slug}`, label: s.name },
        ]}
      />
      <section className="container-site grid gap-10 py-14 lg:grid-cols-2">
        <div className="relative min-h-[16rem] overflow-hidden rounded-xl">
          <Image src={s.image} alt="" fill className="object-cover" />
        </div>
        <div>
          <h2 className="font-display text-2xl text-ink">Doors in this family</h2>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {related.map((d) => (
              <Link key={d.slug} href={`/products/doors/${d.slug}`} className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
                <DoorPreview type={d.doorType} className="h-36" />
                <p className="p-3 text-sm font-medium">{d.name}</p>
              </Link>
            ))}
            {related.length === 0 &&
              s.doors.map((slug) => {
                const d = getDoor(slug);
                if (!d) return null;
                return (
                  <Link key={d.slug} href={`/products/doors/${d.slug}`} className="p-3 text-sm">
                    {d.name}
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
