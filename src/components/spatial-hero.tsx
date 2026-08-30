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
        el.style.transform = `translate3d(0, ${y * 0.22}px, 0) scale(1.08)`;
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
    <section className="relative min-h-[36vh] overflow-hidden bg-ink text-white sm:min-h-[40vh] lg:min-h-[44vh]">
      <div ref={media} className="absolute inset-0 will-change-transform">
        <Image src={src} alt={alt} fill priority className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(24,20,16,0.82),rgba(24,20,16,0.18))]" />
      <div className="container-site relative flex min-h-[36vh] flex-col justify-end py-8 sm:min-h-[40vh] sm:py-10 lg:min-h-[44vh] lg:justify-center lg:py-12">
        <div className="hero-stack max-w-3xl">{children}</div>
      </div>
    </section>
  );
}
