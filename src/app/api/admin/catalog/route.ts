import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { parseCatalogBook } from "@/lib/catalog-book";

export const runtime = "nodejs";

function authorized(request: Request) {
  const expected = process.env.CATALOG_ADMIN_KEY ?? "demo1234";
  return request.headers.get("x-admin-key") === expected;
}

export async function PUT(request: Request) {
  if (!authorized(request)) {
    return Response.json({ error: "Sign in with the mill key to save." }, { status: 401 });
  }

  const book = parseCatalogBook(await request.json());
  if (!book) {
    return Response.json({ error: "That catalog file is not valid." }, { status: 400 });
  }

  const payload = `${JSON.stringify(book, null, 2)}\n`;
  const dest = path.join(process.cwd(), "public", "catalog-book.json");

  try {
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, payload, "utf8");
    return Response.json({ wroteFiles: true, updatedAt: book.updatedAt });
  } catch {
    return Response.json({
      wroteFiles: false,
      updatedAt: book.updatedAt,
      note: "This host cannot write files. The book is saved in this browser.",
    });
  }
}
