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
    <div className="fixed bottom-0 left-0 z-50 m-4 max-w-md rounded-lg bg-primary p-5 text-sm text-primary-foreground shadow-lg">
      <p>
        We use cookies for analytics and to keep your quote and account session
        on this device. Continuing means you are fine with that.
      </p>
      <Button
        className="mt-3 h-8 bg-white px-3 text-primary hover:bg-white/90"
        onClick={() => {
          localStorage.setItem(KEY, "1");
          setShow(false);
        }}
      >
        OK
      </Button>
    </div>
  );
}
