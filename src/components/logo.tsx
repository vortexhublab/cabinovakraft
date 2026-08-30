import { cn } from "@/lib/utils";

/** Open case in elevation — a maker’s C, not a drawer illustration. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("size-8 shrink-0 text-bronze", className)}
      aria-hidden
    >
      <rect
        x="3.2"
        y="3.2"
        width="33.6"
        height="33.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
      />
      <path
        d="M27.2 12.2H13.1v15.6h14.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="miter"
      />
      <rect x="29.1" y="29.1" width="3.4" height="3.4" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  invert = false,
}: {
  className?: string;
  markClassName?: string;
  invert?: boolean;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-2.5 sm:gap-3", className)}
      aria-label="Cabinova Kraft"
    >
      <LogoMark className={cn(invert && "text-bronze", markClassName)} />
      <span className="flex items-center gap-2 whitespace-nowrap sm:gap-2.5">
        <span
          className={cn(
            "text-[0.75rem] font-medium uppercase leading-none tracking-[0.2em] sm:text-[0.8125rem] sm:tracking-[0.22em]",
            invert ? "text-paper" : "text-ink"
          )}
        >
          Cabinova
        </span>
        <span
          aria-hidden
          className={cn("h-3 w-px", invert ? "bg-bronze/55" : "bg-bronze/70")}
        />
        <span className="text-[0.75rem] font-medium uppercase leading-none tracking-[0.26em] text-bronze sm:text-[0.8125rem] sm:tracking-[0.28em]">
          Kraft
        </span>
      </span>
    </span>
  );
}
