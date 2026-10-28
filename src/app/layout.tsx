import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import Script from "next/script";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { BRAND } from "@/lib/brand";

import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-nomos-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const display = Source_Serif_4({
  variable: "--font-nomos-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

const themeInitScript = `(function(){try{var t=localStorage.getItem('nomos-theme');if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark'}}catch(e){}})();`;

export const metadata: Metadata = {
  title: `${BRAND.name} | ${BRAND.tagline}`,
  description:
    "Gestão jurídica para escritórios: clientes, processos, equipe e estimativa de tempo de tramitação com dados do DataJud.",
  keywords: ["Nomos", "gestão jurídica", "escritório de advocacia", "jurimetria", "DataJud"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${display.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-nm-surface text-nm-ink antialiased">
        <Script id="nomos-theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
