"use client";

import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/lib/auth";
import { QuoteProvider } from "@/lib/quote";
import { CookieBanner } from "@/components/cookie-banner";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <AuthProvider>
        <QuoteProvider>
          {children}
          <CookieBanner />
          <Toaster />
        </QuoteProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
