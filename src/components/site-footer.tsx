import Link from "next/link";
import { Logo } from "@/components/logo";
import { company, locations, navProducts } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-sm text-paper">
      <div className="rule-gold" />
      <div className="container-site grid gap-6 py-8 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:py-10">
        <div className="sm:col-span-2 md:col-span-1">
          <Logo invert markClassName="size-8" />
          <p className="type-lede mt-3 max-w-xs text-paper/65">{company.tagline}</p>
          <p className="mt-2 text-xs text-paper/45">{locations[0].address.join(", ")}</p>
        </div>
        <div>
          <h3 className="eyebrow mb-3">Catalog</h3>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-paper/75 sm:grid-cols-1">
            {navProducts.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-bronze">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/products/materials" className="hover:text-bronze">
                Materials
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-bronze">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="eyebrow mb-3">Company</h3>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-paper/75 sm:grid-cols-1">
            <li>
              <Link href="/about" className="hover:text-bronze">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-bronze">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/become-a-customer" className="hover:text-bronze">
                Apply
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-bronze">
                Login
              </Link>
            </li>
            <li>
              <Link href="/learn" className="hover:text-bronze">
                Learn
              </Link>
            </li>
            <li>
              <a href={`mailto:${company.email.orders}`} className="hover:text-bronze">
                {company.email.orders}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="container-site flex flex-col items-start justify-between gap-2 py-3 text-xs text-paper/45 sm:flex-row sm:items-center">
          <p>
            © 1998–{new Date().getFullYear()} {company.legal}
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-bronze">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-bronze">
              Privacy
            </Link>
            <Link href="/homeowners" className="hover:text-bronze">
              Homeowners
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
