import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Kitchens, baths, closets, and commercial interiors specified with Cabinova Kraft components.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        lede="Installed work. Filter by style."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/gallery", label: "Gallery" },
        ]}
      />
      <section className="container-site py-12">
        <GalleryGrid />
      </section>
    </>
  );
}
