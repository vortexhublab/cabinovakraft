import { productCategories, materials } from "@/data/products";
import {
  accessoryItems,
  componentItems,
  doorItems,
  drawerBoxes,
  hardwareItems,
  specialtyItems,
} from "@/data/catalog";
import { gallery } from "@/data/gallery";
import { learnArticles, blogPosts } from "@/data/content";
import { locations } from "@/data/site";

export type SearchHit = {
  href: string;
  title: string;
  kind: string;
  summary: string;
};

export function searchSite(query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const hits: SearchHit[] = [];

  const push = (href: string, title: string, kind: string, summary: string) => {
    const hay = `${title} ${summary} ${kind}`.toLowerCase();
    if (hay.includes(q)) hits.push({ href, title, kind, summary });
  };

  productCategories.forEach((p) =>
    push(`/products/${p.slug}`, p.name, "Product", p.summary)
  );
  materials.forEach((m) =>
    push(`/products/materials#${m.slug}`, m.name, "Material", m.summary)
  );
  drawerBoxes.forEach((b) =>
    push("/products/drawer-boxes", b.name, "Drawer box", b.notes)
  );
  hardwareItems.forEach((h) =>
    push("/products/hardware", h.name, "Hardware", h.notes)
  );
  componentItems.forEach((c) =>
    push("/products/components", c.name, "Component", c.notes)
  );
  doorItems.forEach((d) => push("/products/doors", d.name, "Door", d.notes));
  accessoryItems.forEach((a) =>
    push("/products/accessories", a.name, "Accessory", a.notes)
  );
  specialtyItems.forEach((s) =>
    push("/products/specialty", s.name, "Specialty", s.notes)
  );
  gallery.forEach((g) =>
    push(`/gallery/${g.slug}`, g.title, "Gallery", g.summary)
  );
  learnArticles.forEach((a) =>
    push(`/learn/${a.slug}`, a.title, "Learn", a.summary)
  );
  blogPosts.forEach((a) =>
    push(`/blog/${a.slug}`, a.title, "Blog", a.summary)
  );
  locations.forEach((l) =>
    push(`/about/locations`, l.name, "Location", l.role)
  );

  return hits.slice(0, 24);
}
