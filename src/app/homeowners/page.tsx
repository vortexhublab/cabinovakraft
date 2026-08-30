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
        lede="We sell to shops, not to the public."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/homeowners", label: "Homeowners" },
        ]}
      />
      <section className="container-site max-w-3xl py-14 text-muted-foreground leading-relaxed">
        <p>
          Hire a cabinetmaker. They measure, order, and install. Call {company.phone.support} or
          email {company.email.support} with your city and we will name a shop.
        </p>
        <p className="mt-4">
          See the{" "}
          <Link href="/gallery" className="text-primary">
            gallery
          </Link>{" "}
          and{" "}
          <Link href="/products" className="text-primary">
            catalog
          </Link>{" "}
          before that meeting.
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
