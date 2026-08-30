import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Environmental" };

export default function EnvironmentalPage() {
  return (
    <>
      <PageHero
        title="Environmental program"
        lede="Yield, compliance, and recycling are part of running a mill — not a separate brochure line."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/environmental", label: "Environmental" },
        ]}
      />
      <section className="container-site max-w-3xl py-14 space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Composite cores used in Linea cabinets and drawer boxes are purchased as CARB
          Phase 2 / TSCA Title VI compliant. FSC chain-of-custody and NAUF cores
          are available on designated lots — ask when a spec requires them.
        </p>
        <p>
          We recycle paper, cans, bottles, cardboard, steel banding from lumber
          and sheet goods, printer cartridges, and unused electronics. Offcuts
          go to a hogger; optimizing software is there to keep them small.
        </p>
        <p>
          We invested in machinery that cuts energy per cabinet and improves
          material yield. Continuous improvement is how a 1998 box shop still
          quotes six-day leads on stock wood.
        </p>
      </section>
    </>
  );
}
