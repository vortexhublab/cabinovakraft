import type { Metadata } from "next";
import { LiveMaterials } from "@/components/live-catalog";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Materials" };

export default function MaterialsPage() {
  return (
    <>
      <PageHero
        title="Materials"
        lede="Name the species or core on the PO. We will not substitute without a call."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
          { href: "/products/materials", label: "Materials" },
        ]}
      />
      <LiveMaterials />
    </>
  );
}
