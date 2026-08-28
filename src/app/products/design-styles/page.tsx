import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { designStyles } from "@/data/products";

export const metadata: Metadata = { title: "Design styles" };

export default function DesignStylesPage() {
  return (
    <>
      <PageHero
        title="Design styles"
        lede="Help a client name the look, then pick doors that stay in that family across kitchen, bath, and closet."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: "/products/design-styles", label: "Design styles" },
        ]}
      />
      <section className="container-site grid gap-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {designStyles.map((s) => (
          <Link
            key={s.slug}
            href={`/products/design-styles/${s.slug}`}
            className="group overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10"
          >
            <div className="relative h-44">
              <Image src={s.image} alt="" fill className="object-cover" />
            </div>
            <div className="p-5">
              <h2 className="font-display text-2xl text-ink">{s.name}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{s.summary}</p>
              <p className="mt-3 text-sm font-semibold text-primary">View doors →</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
