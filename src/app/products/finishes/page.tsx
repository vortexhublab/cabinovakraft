import type { Metadata } from "next";
import { LiveFinishes } from "@/components/live-catalog";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Finishes" };

export default function FinishesPage() {
  return (
    <>
      <PageHero
        title="Finishes"
        lede="Same lot on boxes, frames, and visible panels."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: "/products/finishes", label: "Finishes" },
        ]}
      />
      <LiveFinishes />
    </>
  );
}
