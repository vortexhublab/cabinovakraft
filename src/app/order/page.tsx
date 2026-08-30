"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCatalogBook } from "@/components/catalog-provider";
import { rtaConfigs } from "@/data/products";
import { company } from "@/data/site";
import { useQuote } from "@/lib/quote";
import { useAuth } from "@/lib/auth";

export default function OrderPage() {
  const { user } = useAuth();
  const { book } = useCatalogBook();
  const doorItems = book.skus.doors;
  const drawerBoxes = book.skus["drawer-boxes"];
  const hardwareItems = book.skus.hardware;
  const componentItems = book.skus.components;
  const accessoryItems = book.skus.accessories;
  const specialtyItems = book.skus.specialty;
  const { lines, addLine, removeLine, setQty, setMeta, jobName, po, subtotal, clear } = useQuote();
  const [tab, setTab] = useState<
    "cabinet" | "door" | "drawer" | "hardware" | "component" | "accessory" | "specialty"
  >("cabinet");
  const [boxSlug, setBoxSlug] = useState(drawerBoxes[0]?.slug ?? "");
  const [rta, setRta] = useState(rtaConfigs[0].name);
  const [rtaW, setRtaW] = useState("24");
  const [hwSlug, setHwSlug] = useState(hardwareItems[0]?.slug ?? "");
  const [compSlug, setCompSlug] = useState(componentItems[0]?.slug ?? "");
  const [doorSlug, setDoorSlug] = useState(doorItems[0]?.slug ?? "");
  const [accSlug, setAccSlug] = useState(accessoryItems[0]?.slug ?? "");
  const [specSlug, setSpecSlug] = useState(specialtyItems[0]?.slug ?? "");
  const [submitted, setSubmitted] = useState(false);

  const box = useMemo(
    () => drawerBoxes.find((b) => b.slug === boxSlug) ?? drawerBoxes[0],
    [boxSlug, drawerBoxes]
  );
  const hw = useMemo(
    () => hardwareItems.find((h) => h.slug === hwSlug) ?? hardwareItems[0],
    [hwSlug, hardwareItems]
  );
  const comp = useMemo(
    () => componentItems.find((c) => c.slug === compSlug) ?? componentItems[0],
    [compSlug, componentItems]
  );
  const door = useMemo(
    () => doorItems.find((d) => d.slug === doorSlug) ?? doorItems[0],
    [doorSlug, doorItems]
  );
  const acc = useMemo(
    () => accessoryItems.find((a) => a.slug === accSlug) ?? accessoryItems[0],
    [accSlug, accessoryItems]
  );
  const spec = useMemo(
    () => specialtyItems.find((s) => s.slug === specSlug) ?? specialtyItems[0],
    [specSlug, specialtyItems]
  );

  return (
    <>
      <PageHero
        eyebrow={company.portalName}
        title="Build a job"
        lede="List pricing on this preview. Trade accounts see their multiplier after approval."
      />
      <section className="container-site grid gap-8 py-8 md:py-10 lg:grid-cols-[1fr_22rem]">
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
                ["door", "Doors"],
                ["drawer", "Boxes"],
                ["hardware", "Hardware"],
                ["component", "Components"],
                ["accessory", "Accessories"],
                ["specialty", "Specialty"],
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
            <div className="mt-6 grid gap-4 look p-5 sm:grid-cols-2">
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
                    unitPrice: Math.round(width * book.cabinetRate * 100) / 100,
                  });
                  toast.success("Cabinet added.");
                }}
              >
                Add cabinet
              </Button>
            </div>
          )}

          {tab === "door" && !door && <EmptySku />}
          {tab === "door" && door && (
            <div className="mt-6 space-y-4 look p-5">
              <div>
                <Label>Door / front</Label>
                <select
                  className="mt-1 h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
                  value={doorSlug}
                  onChange={(e) => setDoorSlug(e.target.value)}
                >
                  {doorItems.map((d) => (
                    <option key={d.slug} value={d.slug}>
                      {d.name} — ${d.price}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-sm text-muted-foreground">
                  {door.group} · {door.notes}
                </p>
              </div>
              <Button
                className="h-10 px-4"
                onClick={() => {
                  addLine({
                    kind: "door",
                    name: door.name,
                    detail: door.notes,
                    qty: 1,
                    unitPrice: door.price,
                  });
                  toast.success("Door added.");
                }}
              >
                Add door
              </Button>
            </div>
          )}

          {tab === "drawer" && !box && <EmptySku />}
          {tab === "drawer" && box && (
            <div className="mt-6 space-y-4 look p-5">
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
                    detail: `${box.joinery ?? "Box"} · ${box.side ?? ""} sides`,
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

          {tab === "hardware" && !hw && <EmptySku />}
          {tab === "hardware" && hw && (
            <div className="mt-6 space-y-4 look p-5">
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

          {tab === "component" && !comp && <EmptySku />}
          {tab === "component" && comp && (
            <div className="mt-6 space-y-4 look p-5">
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

          {tab === "accessory" && !acc && <EmptySku />}
          {tab === "accessory" && acc && (
            <div className="mt-6 space-y-4 look p-5">
              <div>
                <Label>Accessory</Label>
                <select
                  className="mt-1 h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
                  value={accSlug}
                  onChange={(e) => setAccSlug(e.target.value)}
                >
                  {accessoryItems.map((a) => (
                    <option key={a.slug} value={a.slug}>
                      {a.name} — ${a.price}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-sm text-muted-foreground">
                  {acc.group} · {acc.notes}
                </p>
              </div>
              <Button
                className="h-10 px-4"
                onClick={() => {
                  addLine({
                    kind: "accessory",
                    name: acc.name,
                    detail: acc.notes,
                    qty: 1,
                    unitPrice: acc.price,
                  });
                  toast.success("Accessory added.");
                }}
              >
                Add accessory
              </Button>
            </div>
          )}

          {tab === "specialty" && !spec && <EmptySku />}
          {tab === "specialty" && spec && (
            <div className="mt-6 space-y-4 look p-5">
              <div>
                <Label>Specialty</Label>
                <select
                  className="mt-1 h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
                  value={specSlug}
                  onChange={(e) => setSpecSlug(e.target.value)}
                >
                  {specialtyItems.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.name} — ${s.price}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-sm text-muted-foreground">
                  {spec.group} · {spec.notes}
                </p>
              </div>
              <Button
                className="h-10 px-4"
                onClick={() => {
                  addLine({
                    kind: "specialty",
                    name: spec.name,
                    detail: spec.notes,
                    qty: 1,
                    unitPrice: spec.price,
                  });
                  toast.success("Specialty added.");
                }}
              >
                Add specialty
              </Button>
            </div>
          )}
        </div>

        <aside className="look h-fit p-5">
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

function EmptySku() {
  return (
    <p className="mt-6 text-sm text-muted-foreground">
      No SKUs in this line. Add them in{" "}
      <Link href="/admin" className="font-medium text-primary">
        Catalog Desk
      </Link>
      .
    </p>
  );
}
