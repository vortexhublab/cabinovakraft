"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { DoorStyle } from "@/data/catalog";
import { doorPrice, useQuote } from "@/lib/quote";

export function AddDoorButton({ door }: { door: DoorStyle }) {
  const { addLine } = useQuote();
  return (
    <Button
      className="h-10 px-4"
      onClick={() => {
        const w = 14;
        const h = 30;
        addLine({
          kind: "door",
          name: `${door.name} door`,
          detail: `${w}″ × ${h}″ · ${door.materials[0]} · sample size`,
          qty: 1,
          unitPrice: doorPrice(door.pricePerSqFt, w, h),
        });
        toast.success("Added a 14×30 sample-size door to your quote.");
      }}
    >
      Add 14×30 to quote
    </Button>
  );
}
