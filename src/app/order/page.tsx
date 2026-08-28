"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { doors, drawerBoxes } from "@/data/catalog";
import { rtaConfigs } from "@/data/products";
import { company } from "@/data/site";
import { doorPrice, useQuote } from "@/lib/quote";
import { useAuth } from "@/lib/auth";

export default function OrderPage() {
  const { user } = useAuth();
  const { lines, addLine, removeLine, setQty, setMeta, jobName, po, subtotal, clear } = useQuote();
  const [tab, setTab] = useState<"door" | "drawer" | "rta">("door");
  const [doorSlug, setDoorSlug] = useState(doors[0].slug);
  const [material, setMaterial] = useState(doors[0].materials[0]);
  const [w, setW] = useState("14");
  const [h, setH] = useState("30");
  const [qty, setLineQty] = useState("1");
  const [boxSlug, setBoxSlug] = useState(drawerBoxes[0].slug);
  const [rta, setRta] = useState(rtaConfigs[0].name);
  const [rtaW, setRtaW] = useState("24");
  const [submitted, setSubmitted] = useState(false);

  const door = useMemo(() => doors.find((d) => d.slug === doorSlug) ?? doors[0], [doorSlug]);
  const box = useMemo(
    () => drawerBoxes.find((b) => b.slug === boxSlug) ?? drawerBoxes[0],
    [boxSlug]
  );
  const doorUnit = doorPrice(door.pricePerSqFt, Number(w) || 0, Number(h) || 0);

  return (
    <>
      <PageHero
        eyebrow={company.portalName}
        title="Build a job"
        lede="Add doors, drawer boxes, and Linea cabinets. Pricing is the published list used for this preview — trade accounts see their multiplier after approval."
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

          <div className="mt-8 flex gap-2">
            {(
              [
                ["door", "Doors & fronts"],
                ["drawer", "Drawer boxes"],
                ["rta", "Linea RTA"],
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

          {tab === "door" && (
            <div className="mt-6 grid gap-4 rounded-xl bg-card p-5 ring-1 ring-foreground/10 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label>Door style</Label>
                <select
                  className="mt-1 h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
                  value={doorSlug}
                  onChange={(e) => {
                    const next = doors.find((d) => d.slug === e.target.value) ?? doors[0];
                    setDoorSlug(next.slug);
                    setMaterial(next.materials[0]);
                  }}
                >
                  {doors.map((d) => (
                    <option key={d.slug} value={d.slug}>
                      {d.name} ({d.code})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label>Material</Label>
                <select
                  className="mt-1 h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                >
                  {door.materials.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label>Qty</Label>
                <Input className="mt-1 h-10" value={qty} onChange={(e) => setLineQty(e.target.value)} />
              </div>
              <div>
                <Label>Width (in)</Label>
                <Input className="mt-1 h-10" value={w} onChange={(e) => setW(e.target.value)} />
              </div>
              <div>
                <Label>Height (in)</Label>
                <Input className="mt-1 h-10" value={h} onChange={(e) => setH(e.target.value)} />
              </div>
              <p className="sm:col-span-2 text-sm text-muted-foreground">
                Min {door.minW}″ × {door.minH}″ · ${door.pricePerSqFt}/sq ft · this size ${doorUnit.toFixed(2)} each
              </p>
              <Button
                className="h-10 px-4"
                onClick={() => {
                  const ww = Number(w);
                  const hh = Number(h);
                  if (ww < door.minW || hh < door.minH) {
                    toast.error("Below the minimum size for this style.");
                    return;
                  }
                  addLine({
                    kind: "door",
                    name: `${door.name} door`,
                    detail: `${ww}″ × ${hh}″ · ${material}`,
                    qty: Math.max(1, Number(qty) || 1),
                    unitPrice: doorPrice(door.pricePerSqFt, ww, hh),
                  });
                  toast.success("Door added.");
                }}
              >
                Add door
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

          {tab === "rta" && (
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
                    kind: "rta",
                    name: `Linea ${rta}`,
                    detail: `${width}″ wide · white TFL · hardware included`,
                    qty: 1,
                    unitPrice: Math.round(width * 9.5 * 100) / 100,
                  });
                  toast.success("Linea box added.");
                }}
              >
                Add cabinet
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
