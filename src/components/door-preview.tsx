import { cn } from "@/lib/utils";
import type { DoorStyle } from "@/data/catalog";

export function DoorPreview({
  type,
  className,
}: {
  type: DoorStyle["doorType"];
  className?: string;
}) {
  const frame = "fill-none stroke-current";
  return (
    <div
      className={cn(
        "flex aspect-[4/5] items-center justify-center bg-[oklch(0.93_0.03_70)] text-[oklch(0.35_0.06_50)]",
        className
      )}
    >
      <svg viewBox="0 0 80 100" className="h-[82%] w-[70%]" aria-hidden>
        {type === "slab" && (
          <rect x="4" y="4" width="72" height="92" rx="1.5" className={frame} strokeWidth="2.2" />
        )}
        {type === "shaker" && (
          <>
            <rect x="4" y="4" width="72" height="92" rx="1" className={frame} strokeWidth="2.2" />
            <rect x="16" y="16" width="48" height="68" className={frame} strokeWidth="1.8" />
          </>
        )}
        {type === "bead" && (
          <>
            <rect x="4" y="4" width="72" height="92" rx="1" className={frame} strokeWidth="2.2" />
            <rect x="16" y="16" width="48" height="68" className={frame} strokeWidth="1.6" />
            <rect x="19" y="19" width="42" height="62" className={frame} strokeWidth="1" />
          </>
        )}
        {type === "raised" && (
          <>
            <rect x="4" y="4" width="72" height="92" rx="1" className={frame} strokeWidth="2.2" />
            <rect x="16" y="16" width="48" height="68" className={frame} strokeWidth="1.5" />
            <path d="M22 22 L58 22 L52 50 L28 50 Z" className={frame} strokeWidth="1.3" />
            <path d="M28 50 L52 50 L58 78 L22 78 Z" className={frame} strokeWidth="1.3" />
          </>
        )}
        {type === "arch" && (
          <>
            <rect x="4" y="4" width="72" height="92" rx="1" className={frame} strokeWidth="2.2" />
            <path
              d="M16 82 V40 Q40 14 64 40 V82 H16 Z"
              className={frame}
              strokeWidth="1.7"
            />
          </>
        )}
        {type === "glass" && (
          <>
            <rect x="4" y="4" width="72" height="92" rx="1" className={frame} strokeWidth="2.2" />
            <path d="M18 18 H62 V82 H18 Z M40 18 V82 M18 50 H62" className={frame} strokeWidth="1.5" />
          </>
        )}
        {type === "groove" && (
          <>
            <rect x="4" y="4" width="72" height="92" rx="1.5" className={frame} strokeWidth="2.2" />
            <path d="M10 38 H70" className={frame} strokeWidth="1.6" />
          </>
        )}
        {type === "plank" && (
          <>
            <rect x="4" y="4" width="72" height="92" rx="1" className={frame} strokeWidth="2.2" />
            <path d="M28 6 V94 M52 6 V94" className={frame} strokeWidth="1.4" />
          </>
        )}
      </svg>
    </div>
  );
}
