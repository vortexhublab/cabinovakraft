import Link from "next/link";
import { Logo } from "@/components/logo";
import { company, locations, navExplore, navProducts } from "@/data/site";

const about = [
  { href: "/about", label: "About us" },
  { href: "/about/locations", label: "Locations" },
  { href: "/about/careers", label: "Careers" },
  { href: "/about/testimonials", label: "Testimonials" },
  { href: "/about/associations", label: "Associations" },
  { href: "/environmental", label: "Environmental" },
];

const media = [
  { href: "/blog", label: "Blog" },
  { href: "/products/brands", label: "Brands" },
  { href: "/downloads", label: "Downloads" },
  { href: "/gallery", label: "Gallery" },
  { href: "/homeowners", label: "Homeowners" },
  { href: "/videos", label: "Videos" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-[#ece8e0] text-sm">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 font-display text-xl text-ink">About</h3>
          <ul className="space-y-2 text-foreground/80">
            {about.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-display text-xl text-ink">Products</h3>
          <ul className="space-y-2 text-foreground/80">
            {navProducts.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
            {navExplore.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-display text-xl text-ink">Media</h3>
          <ul className="space-y-2 text-foreground/80">
            {media.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-display text-xl text-ink">Connect</h3>
          <ul className="space-y-2 text-foreground/80">
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-primary">
                Login
              </Link>
            </li>
            <li>
              New customer:{" "}
              <Link href="/become-a-customer" className="font-medium text-primary">
                Sign up
              </Link>
            </li>
            <li>Orders: {company.phone.orders}</li>
            <li>
              Support:{" "}
              <a href={`mailto:${company.email.support}`} className="hover:text-primary">
                {company.email.support}
              </a>
            </li>
            <li>
              <Link href="/newsletter" className="hover:text-primary">
                Newsletter
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            {locations[0].address.join(", ")}
          </p>
        </div>
      </div>
      <div className="border-t border-border/80">
        <div className="container-site flex flex-col items-start justify-between gap-3 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Logo className="text-ink" markClassName="size-7" />
            <p>
              © 1998–{new Date().getFullYear()} {company.legal}
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-primary">
              Terms of use
            </Link>
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="/environmental" className="hover:text-primary">
              Environmental
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
