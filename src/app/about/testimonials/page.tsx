import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { testimonials } from "@/data/social-proof";

export const metadata: Metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="What shops tell us"
        lede="From trade accounts."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/about/testimonials", label: "Testimonials" },
        ]}
      />
      <section className="container-site grid gap-6 py-14 md:grid-cols-2">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="look p-5">
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
