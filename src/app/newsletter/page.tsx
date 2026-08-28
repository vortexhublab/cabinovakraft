"use client";

import { useState } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterPage() {
  const [done, setDone] = useState(false);
  return (
    <>
      <PageHero
        title="Newsletter"
        lede="Plant news, new Formex colors, and lead-time notes. A few times a year, not a weekly blast."
      />
      <section className="container-site max-w-md py-14">
        {done ? (
          <p>You are on the list. We will not sell the address.</p>
        ) : (
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
              toast.success("Subscribed.");
            }}
          >
            <Input type="email" required placeholder="you@shop.com" className="h-10" />
            <Button type="submit" className="h-10 px-4">
              Sign up
            </Button>
          </form>
        )}
      </section>
    </>
  );
}
