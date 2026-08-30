import type { Metadata } from "next";
import { Cormorant_Garamond, Geist_Mono, Source_Sans_3 } from "next/font/google";
import { RouteFade } from "@/components/route-fade";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Providers } from "@/components/providers";
import { company } from "@/data/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Custom cabinet components`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  metadataBase: new URL("https://www.cabinovakraft.com"),
  openGraph: {
    title: company.name,
    description: company.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sourceSans.variable} ${cormorant.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <SiteHeader />
          <main className="flex-1">
            <RouteFade>{children}</RouteFade>
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
