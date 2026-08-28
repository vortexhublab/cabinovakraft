"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth";

const steps = ["Company", "License", "Entity", "Review"];

export function ApplyForm() {
  const router = useRouter();
  const { register } = useAuth();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    license: "",
    licenseState: "",
    entity: "LLC",
    resale: false,
    password: "",
  });

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  return (
    <div className="rounded-xl bg-card p-6 ring-1 ring-foreground/10">
      <div className="mb-6 flex gap-2 text-xs font-semibold uppercase tracking-wider">
        {steps.map((s, i) => (
          <span key={s} className={i === step ? "text-primary" : "text-muted-foreground"}>
            {i + 1}. {s}
          </span>
        ))}
      </div>

      {step === 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Company" value={form.company} onChange={(v) => set("company", v)} />
          <Field label="Your name" value={form.name} onChange={(v) => set("name", v)} />
          <Field label="Email" value={form.email} onChange={(v) => set("email", v)} />
          <Field label="Phone" value={form.phone} onChange={(v) => set("phone", v)} />
          <Field label="Street" className="sm:col-span-2" value={form.address} onChange={(v) => set("address", v)} />
          <Field label="City" value={form.city} onChange={(v) => set("city", v)} />
          <Field label="State" value={form.state} onChange={(v) => set("state", v)} />
          <Field label="ZIP" value={form.zip} onChange={(v) => set("zip", v)} />
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="License number" value={form.license} onChange={(v) => set("license", v)} />
          <Field label="License state" value={form.licenseState} onChange={(v) => set("licenseState", v)} />
          <p className="sm:col-span-2 text-sm text-muted-foreground">
            Cabinetmaker, contractor, or related trade license. We verify before KraftDesk goes live.
          </p>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <Label>Business entity</Label>
            <select
              className="mt-1 h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
              value={form.entity}
              onChange={(e) => set("entity", e.target.value)}
            >
              <option>LLC</option>
              <option>Corporation</option>
              <option>Sole proprietor</option>
              <option>Partnership</option>
            </select>
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={form.resale}
              onChange={(e) => set("resale", e.target.checked)}
            />
            We will provide a resale certificate (tax exempt)
          </label>
          <Field
            label="KraftDesk password"
            type="password"
            value={form.password}
            onChange={(v) => set("password", v)}
          />
        </div>
      )}

      {step === 3 && (
        <div className="space-y-2 text-sm">
          <p>
            <strong>{form.company}</strong> · {form.name}
          </p>
          <p>{form.email}</p>
          <p>
            License {form.license} ({form.licenseState}) · {form.entity}
          </p>
          <p className="text-muted-foreground">
            Submitting creates a pending account. You can log in immediately; wholesale pricing unlocks after review (this demo marks you pending).
          </p>
        </div>
      )}

      <div className="mt-8 flex gap-3">
        {step > 0 && (
          <Button type="button" variant="outline" className="h-10 px-4" onClick={() => setStep((s) => s - 1)}>
            Back
          </Button>
        )}
        {step < 3 && (
          <Button type="button" className="h-10 px-4" onClick={() => setStep((s) => s + 1)}>
            Continue
          </Button>
        )}
        {step === 3 && (
          <Button
            type="button"
            className="h-10 px-4"
            onClick={() => {
              const result = register({
                email: form.email || "newshop@example.com",
                password: form.password || "changeme",
                name: form.name || "New customer",
                company: form.company || "New shop",
              });
              if (!result.ok) {
                toast.error(result.error);
                return;
              }
              toast.success("Application submitted. Welcome to KraftDesk.");
              router.push("/account");
            }}
          >
            Submit application
          </Button>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  className,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
  type?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 h-10"
      />
    </div>
  );
}
