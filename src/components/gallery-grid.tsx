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
      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-3">
        {items.map((g) => (
          <Link
            key={g.slug}
            href={`/gallery/${g.slug}`}
            className="look spatial-card group"
          >
            <div className="relative aspect-[3/2]">
              <Image
                src={g.image}
                alt={g.title}
                fill
                className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-3 md:p-4">
              <h2 className="line-clamp-2 font-display text-base text-ink md:text-xl">{g.title}</h2>
              <p className="line-clamp-1 text-xs text-muted-foreground md:text-sm">
                {g.location} · {g.boxes}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
