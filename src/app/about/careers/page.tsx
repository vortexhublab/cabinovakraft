import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { company } from "@/data/site";
import { careers } from "@/data/content";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        lede="A mill, not a campus. We hire people who like a clean cell, a real lead time, and a phone that rings."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/about/careers", label: "Careers" },
        ]}
      />
      <section className="container-site py-14">
        <div className="grid gap-4">
          {careers.map((c) => (
            <article key={c.title} className="rounded-xl bg-card p-6 ring-1 ring-foreground/10 md:flex md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-2xl text-ink">{c.title}</h2>
                <p className="text-sm text-primary">
                  {c.location} · {c.type}
                </p>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{c.summary}</p>
              </div>
              <a
                href={`mailto:${company.email.careers}?subject=${encodeURIComponent(c.title)}`}
                className="mt-4 inline-block text-sm font-semibold text-primary md:mt-0"
              >
                Inquire →
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Send a résumé to {company.email.careers}. Walk-ins at the mill are not interviews.
        </p>
      </section>
    </>
  );
}
