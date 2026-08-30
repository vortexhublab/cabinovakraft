import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

function authorized(request: Request) {
  const expected = process.env.CATALOG_ADMIN_KEY ?? "demo1234";
  return request.headers.get("x-admin-key") === expected;
}

const ALLOWED = new Set([".jpg", ".jpeg", ".png", ".webp"]);

export async function GET() {
  const dir = path.join(process.cwd(), "public", "images");
  try {
    const names = (await readdir(dir))
      .filter((name) => ALLOWED.has(path.extname(name).toLowerCase()))
      .sort()
      .map((name) => `/images/${name}`);
    return Response.json({ images: names });
  } catch {
    return Response.json({ images: [] });
  }
}

export async function POST(request: Request) {
  if (!authorized(request)) {
    return Response.json({ error: "Sign in with the mill key to upload." }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return Response.json({ error: "Choose a photo." }, { status: 400 });
  }
  if (file.size > 2_500_000) {
    return Response.json({ error: "Keep photos under 2.5 MB." }, { status: 400 });
  }

  const ext = path.extname(file.name).toLowerCase();
  if (!ALLOWED.has(ext)) {
    return Response.json({ error: "Use JPG, PNG, or WebP." }, { status: 400 });
  }

  const base = file.name
    .toLowerCase()
    .replace(ext, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || "photo";
  const filename = `${base}-${Date.now().toString(36)}${ext}`;
  const dest = path.join(process.cwd(), "public", "images", filename);

  try {
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, Buffer.from(await file.arrayBuffer()));
    return Response.json({ path: `/images/${filename}`, wroteFiles: true });
  } catch {
    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.byteLength > 350_000) {
      return Response.json(
        { error: "This host cannot store files. Use a smaller JPG (under 350 KB) or add the photo to public/images on your computer." },
        { status: 413 }
      );
    }
    const mime = ext === ".png" ? "image/png" : ext === ".webp" ? "image/webp" : "image/jpeg";
    return Response.json({
      path: `data:${mime};base64,${buffer.toString("base64")}`,
      wroteFiles: false,
    });
  }
}
