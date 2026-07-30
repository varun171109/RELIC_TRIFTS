"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type User = { name: string; email: string };

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const STORAGE_KEY = "abc-user";

// NOTE: This is a demo-only auth flow with no real backend or password checks.
// Wire this up to your real auth provider (NextAuth, Clerk, Supabase, a custom API, etc.)
// before shipping — do not use this in production as-is.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  const persist = (u: User | null) => {
    setUser(u);
    if (u) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    else window.localStorage.removeItem(STORAGE_KEY);
  };

  const login: AuthContextType["login"] = async (email, password) => {
    if (!email || !password) return { ok: false, error: "Enter your email and password." };
    persist({ name: email.split("@")[0], email });
    return { ok: true };
  };

  const register: AuthContextType["register"] = async (name, email, password) => {
    if (!name || !email || !password) return { ok: false, error: "Fill in every field to continue." };
    persist({ name, email });
    return { ok: true };
  };

  const logout = () => persist(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
