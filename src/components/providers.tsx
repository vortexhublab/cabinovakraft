"use client";

import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/lib/auth";
import { QuoteProvider } from "@/lib/quote";
import { CatalogProvider } from "@/components/catalog-provider";
import { CookieBanner } from "@/components/cookie-banner";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <AuthProvider>
        <CatalogProvider>
          <QuoteProvider>
            {children}
            <CookieBanner />
            <Toaster />
          </QuoteProvider>
        </CatalogProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
