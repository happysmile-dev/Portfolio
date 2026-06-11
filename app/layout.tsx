import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Portfolio`,
  description: siteConfig.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#050505] text-white antialiased">
        <BackgroundEffects />
        <ParticleCanvas />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <CustomCursor />
      </body>
    </html>
  );
}
