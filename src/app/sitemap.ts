import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.cabinovakraft.com";
  const paths = [
    "",
    "/products",
    "/products/cabinets",
    "/products/drawer-boxes",
    "/products/hardware",
    "/products/components",
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
