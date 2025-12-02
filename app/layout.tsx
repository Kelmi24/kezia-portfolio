import type { Metadata } from "next";
import { Poppins, Nunito, Dancing_Script } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kezia Estha | Project Manager & Virtual Assistant",
  description:
    "Portfolio of Kezia Estha - Project Manager & Virtual Assistant specializing in digital marketing and e-commerce operations.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${nunito.variable} ${dancingScript.variable} antialiased font-body flex flex-col min-h-screen bg-neutral-bg text-neutral-text`}
        suppressHydrationWarning
      >
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
