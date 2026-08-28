import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { company } from "@/data/site";

export const metadata: Metadata = { title: "Homeowners" };

export default function HomeownersPage() {
  return (
    <>
      <PageHero
        title="For homeowners"
        lede="We manufacture components for cabinet shops. We do not design, sell, or install kitchens for the public."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/homeowners", label: "Homeowners" },
        ]}
      />
      <section className="container-site max-w-3xl py-14 text-muted-foreground leading-relaxed">
        <p>
          If you want Cabinova Kraft doors on your remodel, hire a cabinetmaker or
          contractor and have them open an account — or use an existing one. That
          shop measures, specifies, orders, and installs.
        </p>
        <p className="mt-4">
          Call {company.phone.support} or email {company.email.support} with your
          city. We will try to name a shop in your area that already buys from us.
        </p>
        <p className="mt-4">
          Browse the{" "}
          <Link href="/gallery" className="text-primary">
            gallery
          </Link>{" "}
          and{" "}
          <Link href="/products/design-styles" className="text-primary">
            design styles
          </Link>{" "}
          so you can walk into that meeting with a door in mind, not a Pinterest
          board of seven kitchens.
        </p>
        <p className="mt-8">
          <Link href="/learn/homeowner-planning" className="font-semibold text-primary">
            Planning a kitchen remodel →
          </Link>
        </p>
      </section>
    </>
  );
}
