import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  action,
  light = false,
  className,
}: {
  kicker?: string;
  title: string;
  action?: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-5 flex items-end justify-between gap-3", className)}>
      <div className="min-w-0">
        {kicker ? <p className={cn("eyebrow", light && "text-bronze/80")}>{kicker}</p> : null}
        <h2
          className={cn(
            "type-title",
            kicker && "mt-1",
            light ? "text-paper" : "text-ink"
          )}
        >
          {title}
        </h2>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
