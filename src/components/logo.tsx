import { cn } from "@/lib/utils";

function ChevronA({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 22 32"
      className={cn("inline-block h-[0.9em] w-[0.68em] align-[-0.06em]", className)}
      aria-hidden
    >
      <path
        d="M11 2.2 20.6 29.4M11 2.2 1.4 29.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.05"
        strokeLinecap="butt"
      />
    </svg>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("size-10 shrink-0 text-gold", className)}
      aria-hidden
    >
      {/* Open circle — reads as a C, gap on the right like a cabinet reveal */}
      <path
        d="M47.8 14.6a24.2 24.2 0 1 0 0 34.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
      {/* Two drawer rails with centered pulls */}
      <path
        d="M26.5 25.2h22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.35"
        strokeLinecap="round"
      />
      <path
        d="M37.5 25.2v4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
      <path
        d="M26.5 38.8h20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.35"
        strokeLinecap="round"
      />
      <path
        d="M36.5 38.8v4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      <span className="flex min-w-[8.4rem] flex-col">
        <span className="font-brand text-[1.12rem] font-medium uppercase leading-none tracking-[0.14em] text-ink">
          C
          <ChevronA />
          BINOV
          <ChevronA />
        </span>
        <span
          className="mt-1.5 flex justify-between font-brand text-[0.58rem] font-medium uppercase leading-none text-gold"
          aria-hidden
        >
          {"KRAFT".split("").map((letter) => (
            <span key={letter}>{letter}</span>
          ))}
        </span>
      </span>
      <span className="sr-only">Cabinova Kraft</span>
    </span>
  );
}
