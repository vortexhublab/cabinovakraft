"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type QuoteLine = {
  id: string;
  kind: "door" | "drawer" | "rta" | "molding";
  name: string;
  detail: string;
  qty: number;
  unitPrice: number;
};

type QuoteState = {
  lines: QuoteLine[];
  jobName: string;
  po: string;
};

const KEY = "cabinova-quote";

const empty: QuoteState = { lines: [], jobName: "", po: "" };

function load(): QuoteState {
  if (typeof window === "undefined") return empty;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as QuoteState) : empty;
  } catch {
    return empty;
  }
}

type QuoteContextValue = QuoteState & {
  addLine: (line: Omit<QuoteLine, "id">) => void;
  removeLine: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  setMeta: (jobName: string, po: string) => void;
  clear: () => void;
  subtotal: number;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<QuoteState>(empty);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(load());
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(KEY, JSON.stringify(state));
  }, [state, ready]);

  const addLine = useCallback((line: Omit<QuoteLine, "id">) => {
    setState((s) => ({
      ...s,
      lines: [...s.lines, { ...line, id: crypto.randomUUID() }],
    }));
  }, []);

  const removeLine = useCallback((id: string) => {
    setState((s) => ({ ...s, lines: s.lines.filter((l) => l.id !== id) }));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setState((s) => ({
      ...s,
      lines: s.lines.map((l) =>
        l.id === id ? { ...l, qty: Math.max(1, qty) } : l
      ),
    }));
  }, []);

  const setMeta = useCallback((jobName: string, po: string) => {
    setState((s) => ({ ...s, jobName, po }));
  }, []);

  const clear = useCallback(() => setState(empty), []);

  const subtotal = useMemo(
    () => state.lines.reduce((n, l) => n + l.qty * l.unitPrice, 0),
    [state.lines]
  );

  const value = useMemo(
    () => ({ ...state, addLine, removeLine, setQty, setMeta, clear, subtotal }),
    [state, addLine, removeLine, setQty, setMeta, clear, subtotal]
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}

export function doorPrice(sqftPrice: number, w: number, h: number) {
  const sqft = Math.max((w * h) / 144, 1);
  return Math.round(sqft * sqftPrice * 100) / 100;
}
