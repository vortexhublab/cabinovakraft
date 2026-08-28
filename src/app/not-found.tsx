import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">404</p>
      <h1 className="mt-2 font-display text-4xl text-ink">That page is not in the mill</h1>
      <p className="mt-3 text-muted-foreground">Check the URL, or start from products or KraftDesk.</p>
      <div className="mt-6 flex justify-center gap-4 text-sm font-semibold text-primary">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/order">KraftDesk</Link>
      </div>
    </section>
  );
}
