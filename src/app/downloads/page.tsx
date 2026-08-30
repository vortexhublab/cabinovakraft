import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Downloads" };

const groups = [
  {
    name: "Literature",
    files: [
      "Cabinets & components catalog (PDF)",
      "Linea cabinet brochure",
      "Drawer box brochure",
      "Hardware one-pager",
    ],
  },
  {
    name: "Order forms",
    files: [
      "Linea cabinet form",
      "Drawer box form",
      "Face frame form",
      "Component / panel form",
      "Hardware — hinge & glide form",
      "Knobs & pulls form",
    ],
  },
  {
    name: "Account",
    files: ["New customer qualifying survey", "Resale certificate", "Wood warranty"],
  },
];

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Downloads"
        lede="Catalogs and forms. Pricing unlocks after you sign in."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/downloads", label: "Downloads" },
        ]}
      />
      <section className="container-site grid gap-8 py-14 md:grid-cols-3">
        {groups.map((g) => (
          <div key={g.name}>
            <h2 className="font-display text-2xl text-ink">{g.name}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {g.files.map((f) => (
                <li key={f} className="rounded-lg bg-card px-3 py-2 ring-1 ring-foreground/10">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
