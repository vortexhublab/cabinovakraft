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
import { useCatalogBook } from "@/components/catalog-provider";
import { useAuth } from "@/lib/auth";
import { useQuote } from "@/lib/quote";
import { searchSite, type SearchHit } from "@/lib/search";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { user } = useAuth();
  const { book } = useCatalogBook();
  const { lines } = useQuote();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const hits = useMemo(() => searchSite(q, book), [q, book]);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/78 shadow-[0_10px_36px_-22px_color-mix(in_oklab,var(--ink)_28%,transparent)] backdrop-blur-2xl">
      <div className="rule-gold" />
      <div className="hidden bg-ink text-[0.68rem] font-medium tracking-[0.08em] text-paper md:block">
        <div className="container-site flex items-center justify-between py-1.5">
          <p className="text-paper/70">Wholesale · {company.hours}</p>
          <nav className="flex items-center gap-5">
            <Link href="/downloads" className="hover:text-bronze">
              Downloads
            </Link>
            <Link href="/contact" className="hover:text-bronze">
              Contact
            </Link>
            <Link href={user ? "/account" : "/login"} className="hover:text-bronze">
              {user ? "Account" : "Login / Sign up"}
            </Link>
            <Link href="/order" className="text-bronze">
              {company.portalName}
            </Link>
            {user ? (
              <Link href="/admin" className="hover:text-bronze">
                Catalog Desk
              </Link>
            ) : null}
          </nav>
        </div>
      </div>

      <div className="container-site flex h-14 items-center gap-3 md:h-16">
        <Link href="/" className="text-ink shrink-0">
          <Logo markClassName="size-6 sm:size-7" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {mainNav.map((item) =>
            "mega" in item && item.mega ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex h-10 items-center px-3 text-sm font-medium",
                    pathname.startsWith(item.href)
                      ? "text-bronze"
                      : "text-foreground/80 hover:text-bronze"
                  )}
                >
                  {item.label}
                </Link>
                <div className="invisible absolute left-1/2 top-full z-40 w-[38rem] -translate-x-1/2 pt-2 opacity-0 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:visible group-hover:opacity-100">
                  <div className="look spatial-glass grid grid-cols-2 gap-8 p-6">
                    <div>
                      <p className="eyebrow mb-3">
                        Product lines
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
                      <p className="eyebrow mb-3">
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
                  "inline-flex h-10 items-center px-3 text-sm font-medium",
                  pathname.startsWith(item.href)
                    ? "text-bronze"
                    : "text-foreground/80 hover:text-bronze"
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
            className="hidden h-9 bg-ink px-3 text-paper hover:bg-ink/90 md:inline-flex"
          >
            Apply
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Menu"
              className="inline-flex size-8 items-center justify-center rounded-lg text-foreground lg:hidden hover:bg-muted"
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,22rem)] bg-paper">
              <SheetHeader>
                <SheetTitle className="font-display text-2xl">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-2 flex flex-col gap-0.5 px-4 pb-8">
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
                {user ? (
                  <Link href="/admin" className="py-2 text-sm font-medium">
                    Catalog Desk
                  </Link>
                ) : null}
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
            placeholder="Search cabinets, boxes, hardware…"
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
              <li key={`${h.kind}-${h.href}-${h.title}`}>
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
