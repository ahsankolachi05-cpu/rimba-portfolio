import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RIMBA — Costume Designer",
    template: "%s — RIMBA",
  },
  description:
    "Exploring character, texture and storytelling through the art of costume design. Portfolio of Rimba, costume designer for film, television, theatre and period productions.",
  keywords: ["costume designer", "film costume", "theatre costume", "period costume", "wardrobe", "Rimba"],
  authors: [{ name: "Rimba" }],
  openGraph: {
    title: "RIMBA — Costume Designer",
    description: "Costume is where character comes to life.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIMBA — Costume Designer",
    description: "Costume is where character comes to life.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
