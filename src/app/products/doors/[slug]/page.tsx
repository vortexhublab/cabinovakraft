import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DoorPreview } from "@/components/door-preview";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { doors, getDoor } from "@/data/catalog";
import { AddDoorButton } from "@/components/add-door-button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return doors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = getDoor(slug);
  return { title: d ? `${d.name} (${d.code})` : "Door" };
}

export default async function DoorPage({ params }: Props) {
  const { slug } = await params;
  const d = getDoor(slug);
  if (!d) notFound();

  return (
    <>
      <PageHero
        eyebrow={d.construction}
        title={d.name}
        lede={d.description}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: "/products/doors-and-drawer-fronts", label: "Doors" },
          { href: `/products/doors/${d.slug}`, label: d.name },
        ]}
      />
      <section className="container-site grid gap-10 py-14 lg:grid-cols-[minmax(0,18rem)_1fr]">
        <DoorPreview type={d.doorType} className="rounded-xl" />
        <div>
          <p className="text-sm text-primary">{d.code}</p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 text-sm">
            <div>
              <dt className="text-muted-foreground">Thickness</dt>
              <dd className="font-medium">{d.thickness}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Min size</dt>
              <dd className="font-medium">
                {d.minW}″ × {d.minH}″
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">From</dt>
              <dd className="font-medium">${d.pricePerSqFt} / sq ft</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Materials</dt>
              <dd className="font-medium">{d.materials.join(", ")}</dd>
            </div>
          </dl>
          <p className="mt-6 text-sm text-muted-foreground">
            Design styles:{" "}
            {d.styles.map((s, i) => (
              <span key={s}>
                {i > 0 && ", "}
                <Link href={`/products/design-styles/${s}`} className="text-primary capitalize">
                  {s.replace("-", " ")}
                </Link>
              </span>
            ))}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AddDoorButton door={d} />
            <Button variant="outline" render={<Link href="/order" />} className="h-10 px-4">
              Open KraftDesk
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
