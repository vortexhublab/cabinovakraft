"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CATALOG_ADMIN_KEY_STORAGE,
  newerBook,
  parseCatalogBook,
  readStoredBook,
  seedBook,
  stampBook,
  writeStoredBook,
  type CatalogBook,
} from "@/lib/catalog-book";

type CatalogContextValue = {
  book: CatalogBook;
  ready: boolean;
  publishMode: "files" | "device" | "unknown";
  replaceBook: (book: CatalogBook) => Promise<{ wroteFiles: boolean }>;
};

const CatalogContext = createContext<CatalogContextValue | null>(null);

export function CatalogProvider({ children }: { children: React.ReactNode }) {
  const [book, setBook] = useState<CatalogBook>(seedBook);
  const [ready, setReady] = useState(false);
  const [publishMode, setPublishMode] = useState<CatalogContextValue["publishMode"]>("unknown");

  useEffect(() => {
    let cancelled = false;
    const stored = readStoredBook();
    if (stored) setBook(stored);

    fetch("/catalog-book.json", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((raw) => {
        if (cancelled) return;
        const remote = parseCatalogBook(raw);
        const next = newerBook(stored, remote) ?? seedBook();
        setBook(next);
        if (stored && (!remote || Date.parse(stored.updatedAt) > Date.parse(remote.updatedAt))) {
          setPublishMode("device");
        } else {
          setPublishMode(remote ? "files" : "unknown");
        }
      })
      .catch(() => {
        if (!cancelled) setBook(stored ?? seedBook());
      })
      .finally(() => {
        if (!cancelled) setReady(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const replaceBook = useCallback(async (incoming: CatalogBook) => {
    const next = stampBook(incoming);
    writeStoredBook(next);
    setBook(next);

    const key = localStorage.getItem(CATALOG_ADMIN_KEY_STORAGE) ?? "demo1234";
    try {
      const res = await fetch("/api/admin/catalog", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": key,
        },
        body: JSON.stringify(next),
      });
      const data = (await res.json()) as { wroteFiles?: boolean };
      const wroteFiles = Boolean(data.wroteFiles);
      setPublishMode(wroteFiles ? "files" : "device");
      return { wroteFiles };
    } catch {
      setPublishMode("device");
      return { wroteFiles: false };
    }
  }, []);

  const value = useMemo(
    () => ({ book, ready, publishMode, replaceBook }),
    [book, ready, publishMode, replaceBook]
  );

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalogBook() {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error("useCatalogBook must be used within CatalogProvider");
  return ctx;
}
