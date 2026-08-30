"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { componentItems, drawerBoxes, hardwareItems } from "@/data/catalog";
import { rtaConfigs } from "@/data/products";
import { company } from "@/data/site";
import { useQuote } from "@/lib/quote";
import { useAuth } from "@/lib/auth";

export default function OrderPage() {
  const { user } = useAuth();
  const { lines, addLine, removeLine, setQty, setMeta, jobName, po, subtotal, clear } = useQuote();
  const [tab, setTab] = useState<"cabinet" | "drawer" | "hardware" | "component">("cabinet");
  const [boxSlug, setBoxSlug] = useState(drawerBoxes[0].slug);
  const [rta, setRta] = useState(rtaConfigs[0].name);
  const [rtaW, setRtaW] = useState("24");
  const [hwSlug, setHwSlug] = useState(hardwareItems[0].slug);
  const [compSlug, setCompSlug] = useState(componentItems[0].slug);
  const [submitted, setSubmitted] = useState(false);

  const box = useMemo(
    () => drawerBoxes.find((b) => b.slug === boxSlug) ?? drawerBoxes[0],
    [boxSlug]
  );
  const hw = useMemo(
    () => hardwareItems.find((h) => h.slug === hwSlug) ?? hardwareItems[0],
    [hwSlug]
  );
  const comp = useMemo(
    () => componentItems.find((c) => c.slug === compSlug) ?? componentItems[0],
    [compSlug]
  );

  return (
    <>
      <PageHero
        eyebrow={company.portalName}
        title="Build a job"
        lede="Add cabinets, drawer boxes, hardware, and components. Pricing is the published list for this preview — trade accounts see their multiplier after approval."
      />
      <section className="container-site grid gap-10 py-12 lg:grid-cols-[1fr_22rem]">
        <div>
          {!user && (
            <p className="mb-6 rounded-lg bg-secondary p-3 text-sm">
              You can quote as a guest.{" "}
              <Link href="/login" className="font-semibold text-primary">
                Sign in
              </Link>{" "}
              to save the job to an account.
            </p>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="job">Job name</Label>
              <Input
                id="job"
                className="mt-1 h-10"
                value={jobName}
                onChange={(e) => setMeta(e.target.value, po)}
                placeholder="Willamette kitchen"
              />
            </div>
            <div>
              <Label htmlFor="po">Purchase order</Label>
              <Input
                id="po"
                className="mt-1 h-10"
                value={po}
                onChange={(e) => setMeta(jobName, e.target.value)}
                placeholder="PO-1042"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {(
              [
                ["cabinet", "Cabinets"],
                ["drawer", "Drawer boxes"],
                ["hardware", "Hardware"],
                ["component", "Components"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                className={`rounded-full px-3 py-1.5 text-sm ${tab === id ? "bg-primary text-primary-foreground" : "bg-card ring-1 ring-foreground/10"}`}
              >
                {label}
              </button>
            ))}
          </div>

          {tab === "cabinet" && (
            <div className="mt-6 grid gap-4 rounded-xl bg-card p-5 ring-1 ring-foreground/10 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label>Configuration</Label>
                <select
                  className="mt-1 h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
                  value={rta}
                  onChange={(e) => setRta(e.target.value)}
                >
                  {rtaConfigs.map((c) => (
                    <option key={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label>Width (in)</Label>
                <Input className="mt-1 h-10" value={rtaW} onChange={(e) => setRtaW(e.target.value)} />
              </div>
              <Button
                className="h-10 px-4 self-end"
                onClick={() => {
                  const width = Number(rtaW) || 24;
                  addLine({
                    kind: "cabinet",
                    name: `Linea ${rta}`,
                    detail: `${width}″ wide · white TFL · assembly hardware included`,
                    qty: 1,
                    unitPrice: Math.round(width * 9.5 * 100) / 100,
                  });
                  toast.success("Cabinet added.");
                }}
              >
                Add cabinet
              </Button>
            </div>
          )}

          {tab === "drawer" && (
            <div className="mt-6 space-y-4 rounded-xl bg-card p-5 ring-1 ring-foreground/10">
              <div>
                <Label>Box</Label>
                <select
                  className="mt-1 h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
                  value={boxSlug}
                  onChange={(e) => setBoxSlug(e.target.value)}
                >
                  {drawerBoxes.map((b) => (
                    <option key={b.slug} value={b.slug}>
                      {b.name} — ${b.price}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-sm text-muted-foreground">{box.notes}</p>
              </div>
              <Button
                className="h-10 px-4"
                onClick={() => {
                  addLine({
                    kind: "drawer",
                    name: box.name,
                    detail: `${box.joinery} · ${box.side} sides`,
                    qty: 1,
                    unitPrice: box.price,
                  });
                  toast.success("Drawer box added.");
                }}
              >
                Add drawer box
              </Button>
            </div>
          )}

          {tab === "hardware" && (
            <div className="mt-6 space-y-4 rounded-xl bg-card p-5 ring-1 ring-foreground/10">
              <div>
                <Label>Hardware</Label>
                <select
                  className="mt-1 h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
                  value={hwSlug}
                  onChange={(e) => setHwSlug(e.target.value)}
                >
                  {hardwareItems.map((h) => (
                    <option key={h.slug} value={h.slug}>
                      {h.name} — ${h.price}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-sm text-muted-foreground">
                  {hw.group} · {hw.notes}
                </p>
              </div>
              <Button
                className="h-10 px-4"
                onClick={() => {
                  addLine({
                    kind: "hardware",
                    name: hw.name,
                    detail: hw.notes,
                    qty: 1,
                    unitPrice: hw.price,
                  });
                  toast.success("Hardware added.");
                }}
              >
                Add hardware
              </Button>
            </div>
          )}

          {tab === "component" && (
            <div className="mt-6 space-y-4 rounded-xl bg-card p-5 ring-1 ring-foreground/10">
              <div>
                <Label>Component</Label>
                <select
                  className="mt-1 h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
                  value={compSlug}
                  onChange={(e) => setCompSlug(e.target.value)}
                >
                  {componentItems.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name} — ${c.price}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-sm text-muted-foreground">
                  {comp.group} · {comp.notes}
                </p>
              </div>
              <Button
                className="h-10 px-4"
                onClick={() => {
                  addLine({
                    kind: "component",
                    name: comp.name,
                    detail: comp.notes,
                    qty: 1,
                    unitPrice: comp.price,
                  });
                  toast.success("Component added.");
                }}
              >
                Add component
              </Button>
            </div>
          )}
        </div>

        <aside className="h-fit rounded-xl bg-card p-5 ring-1 ring-foreground/10">
          <h2 className="font-display text-2xl text-ink">Job ticket</h2>
          {lines.length === 0 && (
            <p className="mt-3 text-sm text-muted-foreground">No lines yet.</p>
          )}
          <ul className="mt-4 space-y-3">
            {lines.map((l) => (
              <li key={l.id} className="border-b border-border pb-3 text-sm">
                <div className="flex justify-between gap-2">
                  <span className="font-medium">{l.name}</span>
                  <span>${(l.unitPrice * l.qty).toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground">{l.detail}</p>
                <div className="mt-1 flex items-center gap-2">
                  <Input
                    className="h-7 w-16"
                    value={String(l.qty)}
                    onChange={(e) => setQty(l.id, Number(e.target.value) || 1)}
                  />
                  <button type="button" className="text-xs text-primary" onClick={() => removeLine(l.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 flex justify-between font-display text-2xl">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </p>
          {submitted ? (
            <p className="mt-4 text-sm">
              Quote submitted. In production this would go to a CSR. This preview stores the ticket in your browser.
            </p>
          ) : (
            <Button
              className="mt-4 h-10 w-full"
              disabled={lines.length === 0}
              onClick={() => {
                setSubmitted(true);
                toast.success("Quote submitted for review.");
              }}
            >
              Schedule & submit
            </Button>
          )}
          {lines.length > 0 && (
            <button type="button" className="mt-3 text-xs text-muted-foreground" onClick={clear}>
              Clear ticket
            </button>
          )}
        </aside>
      </section>
    </>
  );
}
