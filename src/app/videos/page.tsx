import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { videos } from "@/data/content";

export const metadata: Metadata = { title: "Videos" };

export default function VideosPage() {
  return (
    <>
      <PageHero
        title="Videos"
        lede="Short walks through KraftDesk and Linea. Recorded for shop owners, not for a trade-show booth."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/videos", label: "Videos" },
        ]}
      />
      <section className="container-site grid gap-5 py-8 md:py-10 md:grid-cols-2">
        {videos.map((v) => (
          <article key={v.slug} className="look">
            <div className="flex aspect-video items-center justify-center bg-ink text-paper">
              <p className="font-display text-2xl">{v.length}</p>
            </div>
            <div className="p-5">
              <h2 className="font-display text-2xl text-ink">{v.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{v.summary}</p>
              <Link href="/learn/kraftdesk-overview" className="mt-3 inline-block text-sm font-semibold text-primary">
                Related article →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
