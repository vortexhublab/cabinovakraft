"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const KEY = "cabinova-cookie";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/96 text-paper backdrop-blur-md">
      <div className="container-site flex items-center justify-between gap-3 py-2.5">
        <p className="min-w-0 text-xs leading-snug text-paper/75 sm:text-sm">
          Cookies keep your quote and account session on this device.
        </p>
        <Button
          className="h-8 shrink-0 bg-bronze px-3 text-xs text-ink hover:bg-bronze/90"
          onClick={() => {
            localStorage.setItem(KEY, "1");
            setShow(false);
          }}
        >
          OK
        </Button>
      </div>
    </div>
  );
}
