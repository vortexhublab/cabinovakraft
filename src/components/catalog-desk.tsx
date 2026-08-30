"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { CatalogImage } from "@/components/catalog-image";
import { useCatalogBook } from "@/components/catalog-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/lib/auth";
import {
  applyCsvToBook,
  CATALOG_ADMIN_KEY_STORAGE,
  catalogToCsv,
  downloadText,
  parseCatalogBook,
  SKU_KINDS,
  SKU_LABELS,
  slugify,
  stampBook,
  type CatalogBook,
  type SkuKind,
} from "@/lib/catalog-book";
import type { CatalogItem } from "@/data/catalog";

type Tab = "skus" | "lines" | "materials" | "finishes";

export function CatalogDesk() {
  const { user, ready } = useAuth();
  const { book, replaceBook, publishMode } = useCatalogBook();
  const [draft, setDraft] = useState<CatalogBook>(book);
  const [tab, setTab] = useState<Tab>("skus");
  const [kind, setKind] = useState<SkuKind>("doors");
  const [images, setImages] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (!dirty) setDraft(book);
  }, [book, dirty]);

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem(CATALOG_ADMIN_KEY_STORAGE)) {
      localStorage.setItem(CATALOG_ADMIN_KEY_STORAGE, "demo1234");
    }
    fetch("/api/admin/images")
      .then((res) => res.json())
      .then((data: { images?: string[] }) => setImages(data.images ?? []))
      .catch(() => setImages([]));
  }, []);

  const library = useMemo(() => {
    const used = [
      ...draft.lines.flatMap((line) => [line.image, ...line.images]),
      ...SKU_KINDS.flatMap((k) => draft.skus[k].map((item) => item.image)),
      ...draft.materials.map((m) => m.image),
      ...draft.finishes.map((f) => f.image),
    ];
    return [...new Set([...images, ...used.filter((src) => src.startsWith("/images/"))])].sort();
  }, [draft, images]);

  function update(next: CatalogBook) {
    setDraft(next);
    setDirty(true);
  }

  async function save() {
    setSaving(true);
    const result = await replaceBook(draft);
    setSaving(false);
    setDirty(false);
    if (result.wroteFiles) {
      toast.success("Catalog saved. The live pages on this server will use it.");
    } else {
      toast.success("Saved on this computer. Download JSON to publish for every visitor.");
    }
  }

  async function uploadPhoto(file: File, apply: (path: string) => void) {
    const key = localStorage.getItem(CATALOG_ADMIN_KEY_STORAGE) ?? "demo1234";
    const body = new FormData();
    body.set("file", file);
    const res = await fetch("/api/admin/images", {
      method: "POST",
      headers: { "x-admin-key": key },
      body,
    });
    const data = (await res.json()) as { path?: string; error?: string };
    if (!res.ok || !data.path) {
      toast.error(data.error ?? "Could not add that photo.");
      return;
    }
    if (data.path.startsWith("/images/")) {
      setImages((list) => [...new Set([...list, data.path!])].sort());
    }
    apply(data.path);
    toast.success("Photo attached.");
  }

  if (!ready) return null;

  if (!user) {
    return (
      <>
        <PageHero title="Catalog Desk" lede="Sign in to change prices, photos, and product copy." />
        <section className="container-site py-14">
          <Button render={<Link href="/login?next=/admin" />} className="h-10 px-4">
            Login
          </Button>
        </section>
      </>
    );
  }

  const rows = draft.skus[kind];

  return (
    <>
      <PageHero
        eyebrow="KraftDesk"
        title="Catalog Desk"
        lede="Change a price, swap a photo, or paste an Excel export. No code."
      />
      <section className="container-site space-y-6 py-10">
        <div className="spatial-glass flex flex-col gap-4 rounded-2xl p-4 ring-1 ring-foreground/10 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            {publishMode === "files"
              ? "This computer can write the catalog file. Save, then push to GitHub if you want cabinovakraft.com updated."
              : publishMode === "device"
                ? "Edits stay on this browser until you download the JSON (or CSV) and replace public/catalog-book.json, then deploy."
                : "Save to preview immediately. Download JSON when you want every visitor to see the same book."}
          </p>
          <div className="flex flex-wrap gap-2">
            <Button className="h-9 px-4" disabled={saving} onClick={() => void save()}>
              {saving ? "Saving…" : dirty ? "Save catalog" : "Saved"}
            </Button>
            <Button
              variant="outline"
              className="h-9 px-3"
              onClick={() =>
                downloadText("catalog-book.json", `${JSON.stringify(stampBook(draft), null, 2)}\n`, "application/json")
              }
            >
              Download JSON
            </Button>
            <Button
              variant="outline"
              className="h-9 px-3"
              onClick={() => downloadText("catalog-prices.csv", catalogToCsv(draft), "text/csv")}
            >
              Download CSV
            </Button>
            <label className="inline-flex h-9 cursor-pointer items-center rounded-lg border border-border px-3 text-sm">
              Import JSON
              <input
                type="file"
                accept="application/json"
                className="sr-only"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  e.target.value = "";
                  if (!file) return;
                  const parsed = parseCatalogBook(JSON.parse(await file.text()));
                  if (!parsed) {
                    toast.error("That JSON is not a catalog book.");
                    return;
                  }
                  update(parsed);
                  toast.success("JSON loaded. Click Save.");
                }}
              />
            </label>
            <label className="inline-flex h-9 cursor-pointer items-center rounded-lg border border-border px-3 text-sm">
              Import CSV
              <input
                type="file"
                accept=".csv,text/csv"
                className="sr-only"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  e.target.value = "";
                  if (!file) return;
                  update(applyCsvToBook(draft, await file.text()));
                  toast.success("CSV merged. Click Save.");
                }}
              />
            </label>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {(
            [
              ["skus", "Prices & SKUs"],
              ["lines", "Product lines"],
              ["materials", "Materials"],
              ["finishes", "Finishes"],
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

        {tab === "skus" && (
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-[12rem_1fr]">
              <div>
                <Label>Linea cabinet rate ($ / inch)</Label>
                <Input
                  className="mt-1 h-10"
                  type="number"
                  min="0"
                  step="0.1"
                  value={draft.cabinetRate}
                  onChange={(e) => update({ ...draft, cabinetRate: Number(e.target.value) || 0 })}
                />
              </div>
              <p className="self-end text-sm text-muted-foreground">
                KraftDesk prices a Linea box as width × this number. SKU list prices are below.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKU_KINDS.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setKind(id)}
                  className={`rounded-full px-3 py-1.5 text-sm ${kind === id ? "bg-primary text-primary-foreground" : "bg-card ring-1 ring-foreground/10"}`}
                >
                  {SKU_LABELS[id]}
                </button>
              ))}
            </div>
            <div className="overflow-x-auto rounded-2xl ring-1 ring-foreground/10">
              <table className="min-w-[52rem] w-full text-left text-sm">
                <thead className="bg-secondary/70 text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-3 py-2 font-medium">Photo</th>
                    <th className="px-3 py-2 font-medium">Name</th>
                    <th className="px-3 py-2 font-medium">Price</th>
                    <th className="px-3 py-2 font-medium">Notes</th>
                    <th className="px-3 py-2 font-medium"> </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((item, index) => (
                    <SkuRow
                      key={`${item.slug}-${index}`}
                      item={item}
                      library={library}
                      onChange={(next) => {
                        const list = draft.skus[kind].slice();
                        list[index] = next;
                        update({ ...draft, skus: { ...draft.skus, [kind]: list } });
                      }}
                      onRemove={() => {
                        update({
                          ...draft,
                          skus: { ...draft.skus, [kind]: draft.skus[kind].filter((_, i) => i !== index) },
                        });
                      }}
                      onUpload={(file) =>
                        void uploadPhoto(file, (path) => {
                          const list = draft.skus[kind].slice();
                          list[index] = { ...list[index], image: path };
                          update({ ...draft, skus: { ...draft.skus, [kind]: list } });
                        })
                      }
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <Button
              variant="outline"
              className="h-9 px-3"
              onClick={() => {
                const name = `New ${SKU_LABELS[kind].slice(0, -1)}`;
                const item: CatalogItem = {
                  slug: slugify(`${name}-${rows.length + 1}`),
                  name,
                  price: 0,
                  notes: "",
                  image: library[0] ?? "/images/cabinets.jpg",
                  group: "New",
                };
                update({ ...draft, skus: { ...draft.skus, [kind]: [...rows, item] } });
              }}
            >
              Add SKU
            </Button>
          </div>
        )}

        {tab === "lines" && (
          <div className="grid gap-5">
            {draft.lines.map((line, index) => (
              <article key={line.slug} className="spatial-glass grid gap-4 rounded-2xl p-5 ring-1 ring-foreground/10 lg:grid-cols-[12rem_1fr]">
                <div>
                  <CatalogImage src={line.image} alt={line.name} className="aspect-[16/10] w-full rounded-xl object-cover" />
                  <ImageField
                    value={line.image}
                    library={library}
                    onChange={(image) => {
                      const lines = draft.lines.slice();
                      lines[index] = { ...line, image, images: [image, ...line.images.filter((s) => s !== image)] };
                      update({ ...draft, lines });
                    }}
                    onUpload={(file) =>
                      void uploadPhoto(file, (image) => {
                        const lines = draft.lines.slice();
                        lines[index] = { ...line, image, images: [image, ...line.images.filter((s) => s !== image)] };
                        update({ ...draft, lines });
                      })
                    }
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Name" value={line.name} onChange={(name) => patchLine(draft, index, { name }, update)} />
                  <Field label="Short line" value={line.short} onChange={(short) => patchLine(draft, index, { short }, update)} />
                  <Field
                    label="Lead time"
                    value={line.leadTime}
                    onChange={(leadTime) => patchLine(draft, index, { leadTime }, update)}
                  />
                  <div className="sm:col-span-2">
                    <Label>Summary</Label>
                    <Textarea
                      className="mt-1"
                      value={line.summary}
                      onChange={(e) => patchLine(draft, index, { summary: e.target.value }, update)}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {tab === "materials" && (
          <div className="grid gap-5 sm:grid-cols-2">
            {draft.materials.map((item, index) => (
              <article key={item.slug} className="spatial-glass space-y-3 rounded-2xl p-4 ring-1 ring-foreground/10">
                <CatalogImage src={item.image} alt={item.name} className="aspect-[16/10] w-full rounded-xl object-cover" />
                <ImageField
                  value={item.image}
                  library={library}
                  onChange={(image) => {
                    const materials = draft.materials.slice();
                    materials[index] = { ...item, image };
                    update({ ...draft, materials });
                  }}
                  onUpload={(file) =>
                    void uploadPhoto(file, (image) => {
                      const materials = draft.materials.slice();
                      materials[index] = { ...item, image };
                      update({ ...draft, materials });
                    })
                  }
                />
                <Field
                  label="Name"
                  value={item.name}
                  onChange={(name) => {
                    const materials = draft.materials.slice();
                    materials[index] = { ...item, name };
                    update({ ...draft, materials });
                  }}
                />
                <Field
                  label="Summary"
                  value={item.summary}
                  onChange={(summary) => {
                    const materials = draft.materials.slice();
                    materials[index] = { ...item, summary };
                    update({ ...draft, materials });
                  }}
                />
              </article>
            ))}
          </div>
        )}

        {tab === "finishes" && (
          <div className="grid gap-5 sm:grid-cols-2">
            {draft.finishes.map((item, index) => (
              <article key={item.slug} className="spatial-glass space-y-3 rounded-2xl p-4 ring-1 ring-foreground/10">
                <CatalogImage src={item.image} alt={item.name} className="aspect-[16/10] w-full rounded-xl object-cover" />
                <ImageField
                  value={item.image}
                  library={library}
                  onChange={(image) => {
                    const finishes = draft.finishes.slice();
                    finishes[index] = { ...item, image };
                    update({ ...draft, finishes });
                  }}
                  onUpload={(file) =>
                    void uploadPhoto(file, (image) => {
                      const finishes = draft.finishes.slice();
                      finishes[index] = { ...item, image };
                      update({ ...draft, finishes });
                    })
                  }
                />
                <Field
                  label="Name"
                  value={item.name}
                  onChange={(name) => {
                    const finishes = draft.finishes.slice();
                    finishes[index] = { ...item, name };
                    update({ ...draft, finishes });
                  }}
                />
                <Field
                  label="Summary"
                  value={item.summary}
                  onChange={(summary) => {
                    const finishes = draft.finishes.slice();
                    finishes[index] = { ...item, summary };
                    update({ ...draft, finishes });
                  }}
                />
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function patchLine(
  draft: CatalogBook,
  index: number,
  patch: Partial<CatalogBook["lines"][number]>,
  update: (book: CatalogBook) => void
) {
  const lines = draft.lines.slice();
  lines[index] = { ...lines[index], ...patch };
  update({ ...draft, lines });
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <Input className="mt-1 h-10" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function ImageField({
  value,
  library,
  onChange,
  onUpload,
}: {
  value: string;
  library: string[];
  onChange: (value: string) => void;
  onUpload: (file: File) => void;
}) {
  return (
    <div className="mt-2 space-y-2">
      <select
        className="h-9 w-full rounded-lg border border-input bg-transparent px-2 text-xs"
        value={library.includes(value) ? value : ""}
        onChange={(e) => onChange(e.target.value)}
      >
        {!library.includes(value) && <option value="">Current photo</option>}
        {library.map((src) => (
          <option key={src} value={src}>
            {src.replace("/images/", "")}
          </option>
        ))}
      </select>
      <label className="block cursor-pointer text-xs font-medium text-primary">
        Upload photo
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="sr-only"
          onChange={(e) => {
            const file = e.target.files?.[0];
            e.target.value = "";
            if (file) onUpload(file);
          }}
        />
      </label>
    </div>
  );
}

function SkuRow({
  item,
  library,
  onChange,
  onRemove,
  onUpload,
}: {
  item: CatalogItem;
  library: string[];
  onChange: (item: CatalogItem) => void;
  onRemove: () => void;
  onUpload: (file: File) => void;
}) {
  return (
    <tr className="border-t border-border align-top">
      <td className="w-40 px-3 py-3">
        <CatalogImage src={item.image} alt={item.name} className="aspect-[4/3] w-full rounded-lg object-cover" />
        <ImageField
          value={item.image}
          library={library}
          onChange={(image) => onChange({ ...item, image })}
          onUpload={onUpload}
        />
      </td>
      <td className="px-3 py-3">
        <Input className="h-9" value={item.name} onChange={(e) => onChange({ ...item, name: e.target.value })} />
        <Input
          className="mt-2 h-8 text-xs"
          value={item.group ?? ""}
          placeholder="Group"
          onChange={(e) => onChange({ ...item, group: e.target.value })}
        />
      </td>
      <td className="w-28 px-3 py-3">
        <Input
          className="h-9"
          type="number"
          min="0"
          step="0.1"
          value={item.price}
          onChange={(e) => onChange({ ...item, price: Number(e.target.value) || 0 })}
        />
      </td>
      <td className="px-3 py-3">
        <Textarea className="min-h-16" value={item.notes} onChange={(e) => onChange({ ...item, notes: e.target.value })} />
      </td>
      <td className="px-3 py-3">
        <button type="button" className="text-xs text-muted-foreground hover:text-destructive" onClick={onRemove}>
          Remove
        </button>
      </td>
    </tr>
  );
}
