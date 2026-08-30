import type { Metadata } from "next";
import { CatalogDesk } from "@/components/catalog-desk";

export const metadata: Metadata = {
  title: "Catalog Desk",
  description: "Update mill catalog prices, photos, and product copy.",
};

export default function AdminPage() {
  return <CatalogDesk />;
}
