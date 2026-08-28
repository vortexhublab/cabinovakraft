import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { learnArticles } from "@/data/content";

export const metadata: Metadata = { title: "Learn" };

const cats = Array.from(new Set(learnArticles.map((a) => a.category)));

export default function LearnIndex() {
  return (
    <>
      <PageHero
        title="Learn"
        lede="Account setup, sizing math, lead times, hinge boring, and the questions shops actually call about."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/learn", label: "Learn" },
        ]}
      />
      <section className="container-site py-14">
        {cats.map((cat) => (
          <div key={cat} className="mb-10">
            <h2 className="font-display text-2xl text-ink">{cat}</h2>
            <ul className="mt-3 divide-y">
              {learnArticles
                .filter((a) => a.category === cat)
                .map((a) => (
                  <li key={a.slug} className="py-3">
                    <Link href={`/learn/${a.slug}`} className="font-medium hover:text-primary">
                      {a.title}
                    </Link>
                    <p className="text-sm text-muted-foreground">{a.summary}</p>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
