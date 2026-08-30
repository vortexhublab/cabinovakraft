"use client";

import { useState } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { company, locations } from "@/data/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        title="Contact"
        lede="Trade desk, new accounts, or find a shop."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      />
      <section className="container-site grid gap-12 py-14 lg:grid-cols-2">
        <div>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-muted-foreground">Support</dt>
              <dd>
                {company.phone.support} · {company.email.support}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Orders</dt>
              <dd>
                {company.phone.orders} · {company.email.orders}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">New accounts</dt>
              <dd>
                {company.phone.newAccounts} · {company.email.newAccounts}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Hours</dt>
              <dd>{company.hours}</dd>
            </div>
          </dl>
          <div className="mt-8 space-y-4">
            {locations.map((l) => (
              <p key={l.slug} className="text-sm">
                <span className="font-medium">{l.name}</span>
                <span className="block text-muted-foreground">
                  {l.address.join(", ")} · {l.phone}
                </span>
              </p>
            ))}
          </div>
        </div>
        <form
          className="space-y-4 rounded-xl bg-card p-6 ring-1 ring-foreground/10"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Message received. A CSR will reply on a business day.");
          }}
        >
          {sent ? (
            <p>Thanks. If you are a homeowner, we will point you to a shop. If you have an account, check KraftDesk for order questions.</p>
          ) : (
            <>
              <div>
                <Label htmlFor="who">I am</Label>
                <select id="who" className="mt-1 h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm" required>
                  <option>Cabinetmaker / contractor</option>
                  <option>Homeowner looking for a shop</option>
                  <option>Specifier / architect</option>
                </select>
              </div>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required className="mt-1 h-10" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required className="mt-1 h-10" />
              </div>
              <div>
                <Label htmlFor="msg">Message</Label>
                <Textarea id="msg" required className="mt-1" rows={5} />
              </div>
              <Button type="submit" className="h-10 px-4">
                Send
              </Button>
            </>
          )}
        </form>
      </section>
    </>
  );
}
