"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function SpatialHero({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
}) {
  const media = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = media.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 720);
        el.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(1.07)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="relative min-h-[38vh] overflow-hidden bg-ink text-white sm:min-h-[42vh] lg:min-h-[46vh]">
      <div ref={media} className="absolute inset-0 will-change-transform">
        <Image src={src} alt={alt} fill priority className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(18,14,11,0.88)_0%,rgba(18,14,11,0.42)_48%,rgba(18,14,11,0.22)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/40 to-transparent" />
      <div className="container-site relative flex min-h-[38vh] flex-col justify-end border-l border-bronze/35 py-8 sm:min-h-[42vh] sm:py-10 lg:min-h-[46vh] lg:justify-center lg:py-12">
        <div className="hero-stack max-w-3xl pl-4 sm:pl-6">{children}</div>
      </div>
    </section>
  );
}
