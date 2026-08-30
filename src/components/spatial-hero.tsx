"use client";

import Image from "next/image";

export function SpatialHero({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="grid lg:grid-cols-2">
        <figure className="relative aspect-[3/2] overflow-hidden bg-ink">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </figure>
        <div className="flex flex-col justify-center border-t border-bronze/25 px-5 py-7 sm:px-8 sm:py-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-10 xl:px-14">
          <div className="hero-stack mx-auto w-full max-w-lg lg:mx-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
