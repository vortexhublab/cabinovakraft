import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { testimonials } from "@/data/social-proof";

export const metadata: Metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="What shops tell us"
        lede="If a job went well and you want it on this page, email hello@cabinovakraft.com. We will leave your name off if you ask."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/about/testimonials", label: "Testimonials" },
        ]}
      />
      <section className="container-site grid gap-6 py-14 md:grid-cols-2">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="rounded-xl bg-card p-6 ring-1 ring-foreground/10">
            <p className="leading-relaxed">“{t.quote}”</p>
            <footer className="mt-4 text-sm text-muted-foreground">
              {t.name} · {t.shop} · {t.city}
            </footer>
          </blockquote>
        ))}
      </section>
    </>
  );
}
