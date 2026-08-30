"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { searchSite } from "@/lib/search";
import { Suspense } from "react";

function Results() {
  const params = useSearchParams();
  const q = params.get("q") ?? "";
  const hits = useMemo(() => searchSite(q), [q]);

  return (
    <>
      <PageHero title="Search" lede={q ? `Results for “${q}”` : "Type a query in the header, or use ?q="} />
      <section className="container-site py-12">
        {q.length < 2 && <p className="text-muted-foreground">Enter at least two characters.</p>}
        {q.length >= 2 && hits.length === 0 && (
          <p className="text-muted-foreground">Nothing matched. Try a cabinet, drawer box, material, or “Linea”.</p>
        )}
        <ul className="divide-y">
          {hits.map((h) => (
            <li key={h.href} className="py-4">
              <p className="text-[0.65rem] uppercase tracking-wider text-primary">{h.kind}</p>
              <Link href={h.href} className="font-medium hover:text-primary">
                {h.title}
              </Link>
              <p className="text-sm text-muted-foreground">{h.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense>
      <Results />
    </Suspense>
  );
}
