import {
  accessoryItems,
  componentItems,
  doorItems,
  drawerBoxes,
  hardwareItems,
  specialtyItems,
  type CatalogItem,
} from "@/data/catalog";
import {
  finishes,
  materials,
  productCategories,
  type Finish,
  type Material,
  type ProductCategory,
} from "@/data/products";

export const SKU_KINDS = [
  "doors",
  "drawer-boxes",
  "hardware",
  "components",
  "accessories",
  "specialty",
] as const;

export type SkuKind = (typeof SKU_KINDS)[number];

export const SKU_LABELS: Record<SkuKind, string> = {
  doors: "Doors & fronts",
  "drawer-boxes": "Drawer boxes",
  hardware: "Hardware",
  components: "Components",
  accessories: "Accessories",
  specialty: "Specialty",
};

export const CATALOG_STORAGE_KEY = "cabinova-catalog-book";
export const CATALOG_ADMIN_KEY_STORAGE = "cabinova-catalog-admin-key";

export type CatalogBook = {
  version: 1;
  updatedAt: string;
  cabinetRate: number;
  lines: ProductCategory[];
  skus: Record<SkuKind, CatalogItem[]>;
  materials: Material[];
  finishes: Finish[];
};

export function seedBook(): CatalogBook {
  return {
    version: 1,
    updatedAt: "2026-08-30T00:00:00.000Z",
    cabinetRate: 9.5,
    lines: structuredClone(productCategories),
    skus: {
      doors: structuredClone(doorItems),
      "drawer-boxes": structuredClone(drawerBoxes),
      hardware: structuredClone(hardwareItems),
      components: structuredClone(componentItems),
      accessories: structuredClone(accessoryItems),
      specialty: structuredClone(specialtyItems),
    },
    materials: structuredClone(materials),
    finishes: structuredClone(finishes),
  };
}

function isItem(value: unknown): value is CatalogItem {
  if (!value || typeof value !== "object") return false;
  const item = value as CatalogItem;
  return (
    typeof item.slug === "string" &&
    typeof item.name === "string" &&
    typeof item.price === "number" &&
    Number.isFinite(item.price) &&
    typeof item.notes === "string" &&
    typeof item.image === "string"
  );
}

export function parseCatalogBook(raw: unknown): CatalogBook | null {
  if (!raw || typeof raw !== "object") return null;
  const data = raw as Partial<CatalogBook>;
  if (!data.skus || typeof data.skus !== "object") return null;
  if (!Array.isArray(data.lines) || data.lines.length === 0) return null;

  const skus = {} as Record<SkuKind, CatalogItem[]>;
  for (const kind of SKU_KINDS) {
    const rows = data.skus[kind];
    if (!Array.isArray(rows) || !rows.every(isItem)) return null;
    skus[kind] = rows.map((row) => ({ ...row, price: Number(row.price) }));
  }

  const cabinetRate = Number(data.cabinetRate);
  if (!Number.isFinite(cabinetRate) || cabinetRate <= 0) return null;

  return {
    version: 1,
    updatedAt: typeof data.updatedAt === "string" ? data.updatedAt : new Date().toISOString(),
    cabinetRate,
    lines: data.lines as ProductCategory[],
    skus,
    materials: Array.isArray(data.materials) ? (data.materials as Material[]) : structuredClone(materials),
    finishes: Array.isArray(data.finishes) ? (data.finishes as Finish[]) : structuredClone(finishes),
  };
}

export function stampBook(book: CatalogBook): CatalogBook {
  return { ...book, version: 1, updatedAt: new Date().toISOString() };
}

export function readStoredBook(): CatalogBook | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CATALOG_STORAGE_KEY);
    return raw ? parseCatalogBook(JSON.parse(raw)) : null;
  } catch {
    return null;
  }
}

export function writeStoredBook(book: CatalogBook) {
  localStorage.setItem(CATALOG_STORAGE_KEY, JSON.stringify(book));
}

export function newerBook(a: CatalogBook | null, b: CatalogBook | null): CatalogBook | null {
  if (!a) return b;
  if (!b) return a;
  return Date.parse(a.updatedAt) >= Date.parse(b.updatedAt) ? a : b;
}

export function skuHref(kind: SkuKind) {
  return `/products/${kind}`;
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
}

export function catalogToCsv(book: CatalogBook) {
  const header = ["kind", "slug", "name", "price", "notes", "image", "group"];
  const rows = [header.join(",")];
  for (const kind of SKU_KINDS) {
    for (const item of book.skus[kind]) {
      rows.push(
        [
          kind,
          item.slug,
          csvEscape(item.name),
          String(item.price),
          csvEscape(item.notes),
          csvEscape(item.image),
          csvEscape(item.group ?? item.joinery ?? ""),
        ].join(",")
      );
    }
  }
  return rows.join("\n");
}

function csvEscape(value: string) {
  if (/[",\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

function splitCsvLine(line: string) {
  const cells: string[] = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (quoted && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
    } else if (ch === "," && !quoted) {
      cells.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  cells.push(current);
  return cells;
}

export function applyCsvToBook(book: CatalogBook, csv: string): CatalogBook {
  const next = structuredClone(book);
  const lines = csv.split(/\r?\n/).filter((line) => line.trim());
  if (lines.length < 2) return next;

  const header = splitCsvLine(lines[0]).map((h) => h.trim().toLowerCase());
  const idx = (name: string) => header.indexOf(name);

  for (const line of lines.slice(1)) {
    const cells = splitCsvLine(line);
    const kind = cells[idx("kind")] as SkuKind;
    if (!SKU_KINDS.includes(kind)) continue;
    const slug = slugify(cells[idx("slug")] || cells[idx("name")] || "");
    if (!slug) continue;
    const price = Number(cells[idx("price")]);
    const incoming: CatalogItem = {
      slug,
      name: cells[idx("name")] || slug,
      price: Number.isFinite(price) ? price : 0,
      notes: cells[idx("notes")] || "",
      image: cells[idx("image")] || "/images/cabinets.jpg",
      group: cells[idx("group")] || undefined,
    };
    const list = next.skus[kind];
    const existing = list.findIndex((item) => item.slug === slug);
    if (existing >= 0) list[existing] = { ...list[existing], ...incoming };
    else list.push(incoming);
  }

  return stampBook(next);
}

export function downloadText(filename: string, text: string, type = "text/plain") {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
