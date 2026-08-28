"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type User = {
  email: string;
  name: string;
  company: string;
  account: "pending" | "partner" | "premier";
};

type AuthContextValue = {
  user: User | null;
  ready: boolean;
  login: (email: string, password: string) => { ok: boolean; error?: string };
  register: (input: {
    email: string;
    password: string;
    name: string;
    company: string;
  }) => { ok: boolean; error?: string };
  logout: () => void;
};

const USER_KEY = "cabinova-user";
const ACCOUNTS_KEY = "cabinova-accounts";

type Stored = User & { password: string };

const demo: Stored = {
  email: "demo@cabinovakraft.com",
  password: "demo1234",
  name: "Alex Rivera",
  company: "Rivera Cabinets",
  account: "premier",
};

function readAccounts(): Stored[] {
  if (typeof window === "undefined") return [demo];
  try {
    const raw = localStorage.getItem(ACCOUNTS_KEY);
    const list: Stored[] = raw ? JSON.parse(raw) : [];
    if (!list.some((a) => a.email === demo.email)) list.unshift(demo);
    return list;
  } catch {
    return [demo];
  }
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(USER_KEY);
      if (raw) setUser(JSON.parse(raw) as User);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const login = useCallback((email: string, password: string) => {
    const accounts = readAccounts();
    const found = accounts.find(
      (a) => a.email.toLowerCase() === email.toLowerCase()
    );
    if (!found || found.password !== password) {
      return { ok: false, error: "Email or password is not right." };
    }
    const next: User = {
      email: found.email,
      name: found.name,
      company: found.company,
      account: found.account,
    };
    localStorage.setItem(USER_KEY, JSON.stringify(next));
    setUser(next);
    return { ok: true };
  }, []);

  const register = useCallback(
    (input: {
      email: string;
      password: string;
      name: string;
      company: string;
    }) => {
      const accounts = readAccounts();
      if (accounts.some((a) => a.email.toLowerCase() === input.email.toLowerCase())) {
        return { ok: false, error: "An account with that email already exists." };
      }
      const stored: Stored = {
        ...input,
        account: "pending",
      };
      accounts.push(stored);
      localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
      const next: User = {
        email: stored.email,
        name: stored.name,
        company: stored.company,
        account: stored.account,
      };
      localStorage.setItem(USER_KEY, JSON.stringify(next));
      setUser(next);
      return { ok: true };
    },
    []
  );

  const logout = useCallback(() => {
    localStorage.removeItem(USER_KEY);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, ready, login, register, logout }),
    [user, ready, login, register, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
