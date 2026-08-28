import { company } from "@/data/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.cabinovakraft.com";
  const paths = [
    "",
    "/products",
    "/products/rta-cabinets",
    "/products/doors-and-drawer-fronts",
    "/gallery",
    "/learn",
    "/about",
    "/contact",
    "/become-a-customer",
    "/order",
    "/blog",
    "/markets",
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
