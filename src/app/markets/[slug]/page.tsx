import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { getMarket, markets } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: getMarket(slug)?.name ?? "Market" };
}

export default async function MarketPage({ params }: Props) {
  const { slug } = await params;
  const m = getMarket(slug);
  if (!m) notFound();
  return (
    <>
      <PageHero
        title={m.name}
        lede={m.summary}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/markets", label: "Markets" },
          { href: `/markets/${m.slug}`, label: m.name },
        ]}
      />
      <section className="container-site grid gap-10 py-14 lg:grid-cols-2">
        <div className="relative min-h-[16rem] overflow-hidden rounded-xl">
          <Image src={m.image} alt="" fill className="object-cover" />
        </div>
        <div>
          {m.body.map((p) => (
            <p key={p.slice(0, 30)} className="mt-4 leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          <Link href="/become-a-customer" className="mt-6 inline-block text-sm font-semibold text-primary">
            Open a trade account →
          </Link>
        </div>
      </section>
    </>
  );
}
