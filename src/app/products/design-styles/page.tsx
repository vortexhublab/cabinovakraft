import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { gallery, galleryStyles } from "@/data/gallery";

export const metadata: Metadata = { title: "Design styles" };

const styleImage: Record<string, string> = {
  craftsman: "/images/gallery-cabinets.jpg",
  contemporary: "/images/gallery-modern.jpg",
  transitional: "/images/hero-white-kitchen.jpg",
  estate: "/images/gallery-classic.jpg",
  coastal: "/images/gallery-open-plan.jpg",
  industrial: "/images/gallery-kitchen-2.jpg",
  cabin: "/images/gallery-rustic.jpg",
};

export default function DesignStylesPage() {
  return (
    <>
      <PageHero
        title="Design styles"
        lede="Find a look, then open the gallery for the cabinet, door, and box notes."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: "/products/design-styles", label: "Design styles" },
        ]}
      />
      <section className="container-site grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {galleryStyles.map((s) => {
          const count = gallery.filter((g) => g.style === s.slug).length;
          return (
            <Link
              key={s.slug}
              href="/gallery"
              className="look spatial-card group"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={styleImage[s.slug] ?? gallery[0].image}
                  alt={s.name}
                  fill
                  className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
              </div>
              <div className="p-5">
                <h2 className="font-display text-2xl text-ink">{s.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{count} installed jobs</p>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}
