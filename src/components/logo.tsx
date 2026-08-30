import { cn } from "@/lib/utils";

/** Closed cabinet case: outer carcass, two drawers, short pulls. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("size-9 shrink-0 text-bronze", className)}
      aria-hidden
    >
      <rect
        x="3.5"
        y="3.5"
        width="33"
        height="33"
        rx="3.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect
        x="8"
        y="8"
        width="24"
        height="24"
        rx="1.15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path d="M8 20h24" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M17.1 13.65h5.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
      <path
        d="M17.1 26.35h5.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
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
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn(invert && "text-bronze", markClassName)} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[1.12rem] font-semibold tracking-[-0.025em]",
            invert ? "text-paper" : "text-ink"
          )}
        >
          Cabinova
        </span>
        <span className="mt-0.5 font-display text-[1.02rem] font-medium tracking-tight text-bronze">
          Kraft
        </span>
      </span>
    </span>
  );
}
