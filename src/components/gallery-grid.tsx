"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { gallery, galleryStyles } from "@/data/gallery";

export function GalleryGrid() {
  const [style, setStyle] = useState("all");
  const items = useMemo(
    () => (style === "all" ? gallery : gallery.filter((g) => g.style === style)),
    [style]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setStyle("all")}
          className={`rounded-full px-3 py-1 text-sm ${style === "all" ? "bg-primary text-primary-foreground" : "bg-card ring-1 ring-foreground/10"}`}
        >
          All
        </button>
        {galleryStyles.map((s) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setStyle(s.slug)}
            className={`rounded-full px-3 py-1 text-sm ${style === s.slug ? "bg-primary text-primary-foreground" : "bg-card ring-1 ring-foreground/10"}`}
          >
            {s.name}
          </button>
        ))}
      </div>
      {items.length === 0 && (
        <p className="mt-10 text-muted-foreground">No projects in that style yet. Try All.</p>
      )}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((g) => (
          <Link
            key={g.slug}
            href={`/gallery/${g.slug}`}
            className="spatial-card spatial-glass group overflow-hidden rounded-2xl ring-1 ring-foreground/10"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={g.image}
                alt={g.title}
                fill
                className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
            </div>
            <div className="p-4">
              <h2 className="font-display text-xl text-ink">{g.title}</h2>
              <p className="text-sm text-muted-foreground">
                {g.location} · {g.boxes}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
