import Image from "next/image";
import Link from "next/link";
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
    <section className="border-b border-border bg-[linear-gradient(180deg,oklch(0.94_0.02_80),oklch(0.975_0.01_85))]">
      <div
        className={cn(
          "container-site py-10 md:py-12",
          image && "grid items-center gap-8 lg:grid-cols-2"
        )}
      >
        <div className="hero-stack">
          {crumbs && (
            <nav className="mb-3 text-xs text-muted-foreground">
              {crumbs.map((c, i) => (
                <span key={c.href}>
                  {i > 0 && <span className="mx-2">/</span>}
                  <Link href={c.href} className="hover:text-primary">
                    {c.label}
                  </Link>
                </span>
              ))}
            </nav>
          )}
          {eyebrow && <p className="mb-2 text-xs font-medium text-primary">{eyebrow}</p>}
          <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              {lede}
            </p>
          )}
        </div>
        {image && (
          <div className="spatial-card relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-foreground/10">
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              className="object-cover motion-safe:scale-[1.03] motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
