"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="container-px py-16 lg:py-24 flex justify-center">
      <div className="w-full max-w-sm text-center">
        <p className="eyebrow-tag text-xs text-clay mb-2">Your Account</p>
        <h1 className="font-display text-3xl tracking-tight">Hi, {user.name}</h1>
        <p className="text-ink/55 dark:text-bone/55 mt-2 text-sm">{user.email}</p>
        <button
          onClick={() => {
            logout();
            router.push("/");
          }}
          className="btn-secondary mt-8"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
