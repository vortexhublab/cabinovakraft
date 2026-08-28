import Link from "next/link";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  crumbs?: { href: string; label: string }[];
}) {
  return (
    <section className="border-b border-border bg-[linear-gradient(180deg,oklch(0.94_0.02_80),oklch(0.975_0.01_85))]">
      <div className="container-site py-10 md:py-14">
        {crumbs && (
          <nav className="mb-4 text-xs text-muted-foreground">
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
        {eyebrow && (
          <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
        {lede && (
          <p className={cn("mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg")}>
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
