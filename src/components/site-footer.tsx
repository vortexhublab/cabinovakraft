import Link from "next/link";
import { Logo } from "@/components/logo";
import { company, locations, navProducts } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-[#ece8e0] text-sm">
      <div className="container-site grid gap-6 py-8 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:py-10">
        <div className="sm:col-span-2 md:col-span-1">
          <Logo markClassName="size-7" />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{company.tagline}</p>
          <p className="mt-2 text-xs text-muted-foreground">{locations[0].address.join(", ")}</p>
        </div>
        <div>
          <h3 className="mb-2 font-medium text-ink">Catalog</h3>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-foreground/80 sm:grid-cols-1">
            {navProducts.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/products/materials" className="hover:text-primary">
                Materials
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-primary">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-medium text-ink">Company</h3>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-foreground/80 sm:grid-cols-1">
            <li>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/become-a-customer" className="hover:text-primary">
                Apply
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-primary">
                Login
              </Link>
            </li>
            <li>
              <Link href="/learn" className="hover:text-primary">
                Learn
              </Link>
            </li>
            <li>
              <a href={`mailto:${company.email.orders}`} className="hover:text-primary">
                {company.email.orders}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/80">
        <div className="container-site flex flex-col items-start justify-between gap-2 py-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © 1998–{new Date().getFullYear()} {company.legal}
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="/homeowners" className="hover:text-primary">
              Homeowners
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
