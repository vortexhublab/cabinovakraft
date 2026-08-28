import { productCategories, materials, designStyles } from "@/data/products";
import { doors } from "@/data/catalog";
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
  designStyles.forEach((s) =>
    push(`/products/design-styles/${s.slug}`, s.name, "Design style", s.summary)
  );
  doors.forEach((d) =>
    push(
      `/products/doors/${d.slug}`,
      `${d.name} (${d.code})`,
      "Door",
      d.description
    )
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
