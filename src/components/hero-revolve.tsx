"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    src: "/images/gallery-classic.jpg",
    alt: "White flat-panel kitchen with Linea cabinets",
  },
  {
    src: "/images/hero-white-kitchen.jpg",
    alt: "Marble island kitchen specified with mill cabinets",
  },
  {
    src: "/images/gallery-kitchen-2.jpg",
    alt: "Open living kitchen with custom millwork",
  },
  {
    src: "/images/gallery-cabinets.jpg",
    alt: "Black base cabinets and wood counters from the mill",
  },
  {
    src: "/images/gallery-modern.jpg",
    alt: "Contemporary kitchen and fronts in an open plan",
  },
] as const;

const STEP = 360 / SLIDES.length;
const EASE = "transform 1.35s cubic-bezier(0.22, 1, 0.36, 1)";

export function HeroRevolve() {
  const stage = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; from: number } | null>(null);
  const [index, setIndex] = useState(0);
  const [radius, setRadius] = useState(210);
  const [reduce, setReduce] = useState(false);

  const wrap = useCallback((next: number) => {
    const total = SLIDES.length;
    return ((next % total) + total) % total;
  }, []);

  const go = useCallback(
    (next: number) => {
      setIndex(wrap(next));
    },
    [wrap]
  );

  const step = useCallback((delta: number) => {
    setIndex((current) => wrap(current + delta));
  }, [wrap]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const measure = () => {
      const width = el.clientWidth * 0.58;
      setRadius(width / (2 * Math.tan(Math.PI / SLIDES.length)));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => {
      if (document.hidden || drag.current) return;
      step(1);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [reduce, step]);

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("button")) return;
    drag.current = { x: event.clientX, from: index };
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    const delta = event.clientX - drag.current.x;
    if (Math.abs(delta) > 36) step(delta < 0 ? 1 : -1);
    drag.current = null;
  }

  if (reduce) {
    return (
      <figure className="relative aspect-[3/2] overflow-hidden bg-ink">
        <Image
          src={SLIDES[0].src}
          alt={SLIDES[0].alt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </figure>
    );
  }

  return (
    <div
      ref={stage}
      className="relative aspect-[3/2] select-none overflow-hidden bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--bronze)_18%,transparent),transparent_58%),#14110e] [touch-action:pan-y]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Installed mill kitchens"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        drag.current = null;
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[12%] bottom-[7%] h-10 rounded-[100%] bg-black/45 blur-xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[18%] bottom-[9%] h-px bg-gradient-to-r from-transparent via-bronze/50 to-transparent"
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{ perspective: "1180px", perspectiveOrigin: "50% 46%" }}
      >
        <div
          className="absolute left-1/2 top-[46%] h-[72%] w-[58%]"
          style={{
            transformStyle: "preserve-3d",
            transform: `translate3d(-50%, -50%, 0) rotateY(${-index * STEP}deg)`,
            transition: EASE,
          }}
        >
          {SLIDES.map((slide, i) => {
            const front = wrap(i - index) === 0;
            return (
              <figure
                key={slide.src}
                className="absolute inset-0 overflow-hidden rounded-[0.9rem]"
                style={{
                  transform: `rotateY(${i * STEP}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                  boxShadow: front
                    ? "0 28px 48px -22px rgba(0,0,0,0.62), 0 0 0 1px rgba(176,137,79,0.35)"
                    : "0 18px 36px -24px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)",
                }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="(max-width: 1024px) 70vw, 36vw"
                  draggable={false}
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-ink/45 transition-opacity duration-700",
                    front && "opacity-0"
                  )}
                />
              </figure>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink/55 to-transparent lg:w-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink/55 to-transparent lg:w-10" />

      <button
        type="button"
        aria-label="Previous kitchen"
        className="absolute left-2 top-1/2 z-20 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/45 text-paper backdrop-blur-sm hover:border-bronze/50 hover:text-bronze sm:left-3"
        onClick={() => step(-1)}
      >
        <ChevronLeft className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Next kitchen"
        className="absolute right-2 top-1/2 z-20 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/45 text-paper backdrop-blur-sm hover:border-bronze/50 hover:text-bronze sm:right-3"
        onClick={() => step(1)}
      >
        <ChevronRight className="size-4" />
      </button>

      <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center gap-1.5">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show ${slide.alt}`}
            aria-current={i === index}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              i === index ? "w-6 bg-bronze" : "w-2 bg-white/35 hover:bg-white/60"
            )}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  );
}
