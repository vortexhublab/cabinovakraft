"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { company, mainNav, navExplore, navProducts } from "@/data/site";
import { useAuth } from "@/lib/auth";
import { useQuote } from "@/lib/quote";
import { searchSite, type SearchHit } from "@/lib/search";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { user } = useAuth();
  const { lines } = useQuote();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const hits = useMemo(() => searchSite(q), [q]);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="hidden border-b border-border/70 bg-ink text-[0.7rem] font-medium tracking-wide text-paper md:block">
        <div className="container-site flex items-center justify-between py-1.5">
          <p className="text-paper/80">
            Wholesale only · Cabinetmakers &amp; contractors · {company.hours}
          </p>
          <nav className="flex items-center gap-5">
            <Link href="/downloads" className="hover:text-white">
              Downloads
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href={user ? "/account" : "/login"} className="hover:text-white">
              {user ? "Account" : "Login / Sign up"}
            </Link>
            <Link href="/order" className="text-white">
              {company.portalName}
            </Link>
          </nav>
        </div>
      </div>

      <div className="container-site flex h-16 items-center gap-4 md:h-[4.5rem]">
        <Link href="/" className="text-ink shrink-0">
          <Logo />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {mainNav.map((item) =>
            "mega" in item && item.mega ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex h-10 items-center px-3 text-[0.8rem] font-semibold tracking-[0.12em] uppercase",
                    pathname.startsWith(item.href)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
                <div className="invisible absolute left-1/2 top-full z-40 w-[34rem] -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-8 rounded-xl border border-border bg-card p-6 shadow-lg">
                    <div>
                      <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary">
                        Product categories
                      </p>
                      <ul className="space-y-1.5 text-sm">
                        {navProducts.map((p) => (
                          <li key={p.href}>
                            <Link href={p.href} className="hover:text-primary">
                              {p.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary">
                        Explore
                      </p>
                      <ul className="space-y-1.5 text-sm">
                        {navExplore.map((p) => (
                          <li key={p.href}>
                            <Link href={p.href} className="hover:text-primary">
                              {p.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex h-10 items-center px-3 text-[0.8rem] font-semibold tracking-[0.12em] uppercase",
                  pathname.startsWith(item.href)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
          >
            {searchOpen ? <X /> : <Search />}
          </Button>
          <Button variant="ghost" size="icon" render={<Link href="/order" />} aria-label="Quote">
            <span className="relative">
              <ShoppingBag />
              {lines.length > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-primary text-[0.6rem] text-primary-foreground">
                  {lines.length}
                </span>
              )}
            </span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:inline-flex"
            render={<Link href={user ? "/account" : "/login"} />}
            aria-label="Account"
          >
            <UserRound />
          </Button>
          <Button
            render={<Link href="/become-a-customer" />}
            className="hidden h-9 px-3 md:inline-flex"
          >
            Get started
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu" />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,22rem)]">
              <SheetHeader>
                <SheetTitle className="font-display text-2xl">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-1 px-4 pb-8">
                <Link href="/" className="py-2 text-sm font-medium">
                  Home
                </Link>
                {mainNav.map((item) => (
                  <Link key={item.href} href={item.href} className="py-2 text-sm font-medium">
                    {item.label}
                  </Link>
                ))}
                <div className="my-3 border-t" />
                {navProducts.map((p) => (
                  <Link key={p.href} href={p.href} className="py-1.5 text-sm text-muted-foreground">
                    {p.label}
                  </Link>
                ))}
                <div className="my-3 border-t" />
                <Link href="/login" className="py-2 text-sm font-medium">
                  Login
                </Link>
                <Link href="/become-a-customer" className="py-2 text-sm font-medium">
                  Become a customer
                </Link>
                <Link href="/order" className="py-2 text-sm font-medium">
                  {company.portalName}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {searchOpen && (
        <SearchPanel q={q} setQ={setQ} hits={hits} onClose={() => setSearchOpen(false)} />
      )}
    </header>
  );
}

function SearchPanel({
  q,
  setQ,
  hits,
  onClose,
}: {
  q: string;
  setQ: (v: string) => void;
  hits: SearchHit[];
  onClose: () => void;
}) {
  const router = useRouter();
  return (
    <div className="border-t border-border bg-card">
      <div className="container-site py-4">
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (q.trim()) {
              router.push(`/search?q=${encodeURIComponent(q.trim())}`);
              onClose();
            }
          }}
        >
          <Input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search doors, materials, articles…"
            className="h-11"
          />
          <Button type="submit" className="h-11 px-4">
            Search
          </Button>
        </form>
        {q.length >= 2 && (
          <ul className="mt-3 max-h-72 overflow-auto divide-y">
            {hits.length === 0 && (
              <li className="py-3 text-sm text-muted-foreground">No matches.</li>
            )}
            {hits.map((h) => (
              <li key={h.href}>
                <Link
                  href={h.href}
                  className="flex flex-col py-2.5 hover:text-primary"
                  onClick={onClose}
                >
                  <span className="text-[0.65rem] uppercase tracking-wider text-primary">
                    {h.kind}
                  </span>
                  <span className="text-sm font-medium">{h.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
