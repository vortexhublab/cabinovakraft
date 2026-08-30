"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { company } from "@/data/site";
import { useAuth } from "@/lib/auth";

export function LoginForm() {
  const { login, user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = safeNext(searchParams.get("next"));
  const [email, setEmail] = useState("demo@cabinovakraft.com");
  const [password, setPassword] = useState("demo1234");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const result = login(email, password);
    if (!result.ok) {
      toast.error(result.error);
      return;
    }
    toast.success("Signed in.");
    router.push(next);
  }

  return (
    <>
      <PageHero
        title="Login"
        lede={`${company.name} is a wholesale manufacturer of cabinets, drawer boxes, hardware, and components. We sell to cabinetmakers and cabinet industry professionals.`}
      />
      <section className="container-site grid gap-8 py-8 md:py-10 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="space-y-4 rounded-xl bg-card p-6 ring-1 ring-foreground/10">
          {user && (
            <p className="text-sm">
              You are signed in as {user.email}.{" "}
              <Link href="/account" className="text-primary">
                Go to account
              </Link>
            </p>
          )}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" className="mt-1 h-10" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" className="mt-1 h-10" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit" className="h-10 px-4">
            Sign in
          </Button>
          <p className="text-xs text-muted-foreground">
            Demo account is prefilled: demo@cabinovakraft.com / demo1234. This preview stores accounts in your browser.
          </p>
        </form>
        <div className="text-sm leading-relaxed text-muted-foreground">
          <h2 className="font-display text-2xl text-ink">Welcome</h2>
          <p className="mt-3">
            If you are not a cabinetmaker or cabinet industry professional, email{" "}
            {company.email.support} and we will help you locate a shop near you. If you already have a cabinetmaker, tell them which Cabinova Kraft products you want and have them order.
          </p>
          <p className="mt-4">
            No account yet?{" "}
            <Link href="/become-a-customer" className="font-semibold text-primary">
              Sign up today
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

function safeNext(value: string | null) {
  if (!value) return "/account";
  if (!value.startsWith("/") || value.startsWith("//") || value.startsWith("/\\")) {
    return "/account";
  }
  return value;
}
