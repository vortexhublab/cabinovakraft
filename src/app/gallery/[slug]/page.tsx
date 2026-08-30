import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { gallery, getProject } from "@/data/gallery";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return gallery.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getProject(slug);
  return { title: g?.title ?? "Project" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const g = getProject(slug);
  if (!g) notFound();

  return (
    <>
      <PageHero
        title={g.title}
        lede={g.summary}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/gallery", label: "Gallery" },
          { href: `/gallery/${g.slug}`, label: g.title },
        ]}
      />
      <section className="container-site py-12">
        <div className="grid gap-4 md:grid-cols-2">
          {g.images.map((src) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          {[
            ["Location", g.location],
            ["Cabinets", g.boxes],
            ["Material", g.material],
            ["Drawer boxes", g.drawers],
            ["Finish note", g.door],
            ["Photographer", g.photographer],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <Link href="/gallery" className="mt-8 inline-block text-sm font-semibold text-primary">
          ← All projects
        </Link>
      </section>
    </>
  );
}
