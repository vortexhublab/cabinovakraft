import { cn } from "@/lib/utils";

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        className={cn("size-9 shrink-0", markClassName)}
        aria-hidden
      >
        <rect width="40" height="40" rx="3" fill="currentColor" />
        <rect x="7" y="7" width="26" height="26" rx="1" fill="none" stroke="#f6f1e8" strokeWidth="1.6" />
        <rect x="11" y="11" width="18" height="18" fill="none" stroke="#f6f1e8" strokeWidth="1.4" />
        <path d="M11 20h18" stroke="#f6f1e8" strokeWidth="1.2" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-[1.35rem] font-semibold tracking-tight">
          Cabinova
        </span>
        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-primary">
          Kraft
        </span>
      </span>
    </span>
  );
}
