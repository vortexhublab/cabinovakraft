import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { company } from "@/data/site";

export const metadata: Metadata = { title: "Terms of use" };

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of use" />
      <section className="container-site max-w-3xl space-y-4 py-14 text-sm leading-relaxed text-muted-foreground">
        <p>
          This website is operated by {company.legal}. Content is for cabinet
          industry professionals considering a wholesale account. Product
          availability, lead times, and list prices on this preview are
          illustrative.
        </p>
        <p>
          Custom-sized products are made to order. They are not returnable except
          for documented mill error. KraftDesk quotes are not a contract until
          we accept the order and issue an acknowledgment.
        </p>
        <p>
          You may not scrape, republish, or resell catalog photography or
          cabinet drawings without written permission.
        </p>
      </section>
    </>
  );
}
