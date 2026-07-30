"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await login(email, password);
    if (res.ok) router.push("/");
    else setError(res.error || "Something went wrong.");
  };

  return (
    <div className="container-px py-16 lg:py-24 flex justify-center">
      <div className="w-full max-w-sm">
        <p className="eyebrow-tag text-xs text-clay mb-2 text-center">Welcome Back</p>
        <h1 className="font-display text-3xl tracking-tight text-center">Log in</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {error && <p className="text-sm text-clay">{error}</p>}
          <div>
            <label htmlFor="email" className="text-sm font-medium block mb-2">Email</label>
            <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" placeholder="your@email.com" />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium block mb-2">Password</label>
            <input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn-primary w-full">Log In</button>
        </form>

        <p className="text-center text-sm text-ink/55 dark:text-bone/55 mt-6">
          New here?{" "}
          <Link href="/register" className="text-clay hover:underline">Create an account</Link>
        </p>
        <p className="text-center text-xs text-ink/35 dark:text-bone/35 mt-4">
          Demo auth — no real account is created or verified.
        </p>
      </div>
    </div>
  );
}
