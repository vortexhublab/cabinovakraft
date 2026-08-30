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
        lede="Jobs our shops photographed. Filter by design style, then open a project for cabinet, drawer-box, hardware, and material notes."
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
