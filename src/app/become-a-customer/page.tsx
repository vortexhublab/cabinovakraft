import type { Metadata } from "next";
import { ApplyForm } from "@/components/apply-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Become a customer" };

export default function ApplyPage() {
  return (
    <>
      <PageHero
        title="Become a customer"
        lede="Wholesale accounts for cabinetmakers and general contractors. Once approved you get KraftDesk, a price book, and an assigned CSR."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/become-a-customer", label: "Become a customer" },
        ]}
      />
      <section className="container-site grid gap-10 py-14 lg:grid-cols-[1fr_20rem]">
        <ApplyForm />
        <aside className="h-fit rounded-xl bg-card p-5 text-sm ring-1 ring-foreground/10">
          <h2 className="font-display text-xl text-ink">What we need</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-4 text-muted-foreground">
            <li>Company and shipping information</li>
            <li>Cabinetmaker or contractor license</li>
            <li>Business entity</li>
            <li>Payment preference (set after approval)</li>
            <li>Resale certificate if tax exempt</li>
          </ol>
          <p className="mt-4 text-muted-foreground">
            We do not collect card or bank numbers on this form. Homeowners cannot open an account — use Contact and we will find a shop.
          </p>
        </aside>
      </section>
    </>
  );
}
