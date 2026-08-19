import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-raw",
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans-raw",
});

export const metadata: Metadata = {
  title: "GoldSky — Phone Parts & Repair, Eheliyagoda",
  description:
    "GoldSky sells OEM-grade phone parts and offers professional repair services in Eheliyagoda, Sri Lanka. Islandwide delivery, wholesale rates available.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
