"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { useQuote } from "@/lib/quote";

export default function AccountPage() {
  const { user, ready, logout } = useAuth();
  const { lines, subtotal, jobName, po } = useQuote();
  const router = useRouter();

  if (!ready) return null;

  if (!user) {
    return (
      <>
        <PageHero title="Account" lede="Sign in to KraftDesk to see quotes and account status." />
        <section className="container-site py-14">
          <Button render={<Link href="/login" />} className="h-10 px-4">
            Login
          </Button>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title={user.company}
        lede={`${user.name} · ${user.email} · ${user.account} account`}
      />
      <section className="container-site grid gap-6 py-14 md:grid-cols-3">
        <article className="rounded-xl bg-card p-6 ring-1 ring-foreground/10">
          <h2 className="font-display text-xl">Open quote</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {jobName || "Untitled job"} {po && `· PO ${po}`}
          </p>
          <p className="mt-4 font-display text-3xl">${subtotal.toFixed(2)}</p>
          <p className="text-sm text-muted-foreground">{lines.length} line{lines.length === 1 ? "" : "s"}</p>
          <Button render={<Link href="/order" />} className="mt-4 h-9 px-3">
            Continue in KraftDesk
          </Button>
        </article>
        <article className="rounded-xl bg-card p-6 ring-1 ring-foreground/10">
          <h2 className="font-display text-xl">Recent mill work</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>PO 4821 · Willamette kitchen · Shipped Aug 12</li>
            <li>PO 4790 · Pearl vanity · Will Call Aug 4</li>
            <li>PO 4712 · Sample doors · Delivered Jul 22</li>
          </ul>
        </article>
        <article className="rounded-xl bg-card p-6 ring-1 ring-foreground/10">
          <h2 className="font-display text-xl">Account</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {user.account === "pending"
              ? "Pending review. You can build quotes; pricing is list until we verify your license."
              : "Wholesale pricing is on. Assigned CSR: Dana (ext. 214)."}
          </p>
          <Button
            variant="outline"
            className="mt-4 h-9 px-3"
            onClick={() => {
              logout();
              router.push("/");
            }}
          >
            Sign out
          </Button>
        </article>
      </section>
    </>
  );
}
