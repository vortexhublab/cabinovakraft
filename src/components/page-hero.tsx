import Link from "next/link";
import { CatalogImage } from "@/components/catalog-image";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  crumbs?: { href: string; label: string }[];
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative border-b border-border/80 bg-[linear-gradient(180deg,oklch(0.945_0.02_78),transparent)]">
      <div className="rule-gold absolute inset-x-0 top-0" />
      <div
        className={cn(
          "container-site py-6 md:py-8",
          image && "grid items-center gap-5 lg:grid-cols-2"
        )}
      >
        <div className="hero-stack border-l border-bronze/40 pl-4 sm:pl-5">
          {crumbs && (
            <nav className="mb-2 text-xs text-muted-foreground">
              {crumbs.map((c, i) => (
                <span key={c.href}>
                  {i > 0 && <span className="mx-2 text-bronze/50">/</span>}
                  <Link href={c.href} className="hover:text-bronze">
                    {c.label}
                  </Link>
                </span>
              ))}
            </nav>
          )}
          {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
          <h1 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {lede}
            </p>
          )}
        </div>
        {image && (
          <div className="look spatial-card relative aspect-[16/9] sm:aspect-[16/10]">
            <CatalogImage
              src={image}
              alt={imageAlt ?? title}
              fill
              className="object-cover motion-safe:scale-[1.03] motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
