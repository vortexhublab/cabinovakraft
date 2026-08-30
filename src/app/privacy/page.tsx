import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { company } from "@/data/site";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy" />
      <section className="container-site max-w-3xl space-y-4 py-14 text-sm leading-relaxed text-muted-foreground">
        <p>
          {company.legal} collects the information you type into contact,
          application, newsletter, and KraftDesk forms in order to quote, sell,
          and support cabinet components.
        </p>
        <p>
          This preview stores quotes and demo accounts in your browser
          (localStorage). It does not send payment data to a server. A
          production deployment would keep applications, orders, and resale
          certificates on secured systems and would not put card or bank
          numbers on the public application form.
        </p>
        <p>
          Questions: {company.email.support}. Mail: {company.address.join(", ")}.
        </p>
      </section>
    </>
  );
}
