import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { blogPosts } from "@/data/content";

export const metadata: Metadata = { title: "Blog" };

export default function BlogIndex() {
  return (
    <>
      <PageHero
        title="Mill notes"
        lede="Product, plant, and process. Written for shops, not for a marketing calendar."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
        ]}
      />
      <section className="container-site grid gap-6 py-14 md:grid-cols-2">
        {blogPosts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-xl bg-card p-6 ring-1 ring-foreground/10">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-primary">{p.category}</p>
            <h2 className="mt-2 font-display text-2xl text-ink">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
