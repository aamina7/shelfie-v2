
import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Shelfie Books",
  description: "A boutique storytelling experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-[#f7f4ee] text-black [font-family:var(--font-inter)] md:cursor-none selection:bg-[#4b1d58] selection:text-white">
        {/* The SmoothScroll wrapper ensures all internal motion is fluid */}
        <SmoothScroll>
          {/* 1. Background Layer (Bottom-most) */}
          <BackgroundCanvas />
          
          {/* 2. Content Layer (Middle) */}
          <main className="relative z-10">
            {children}
          </main>

          {/* 3. Interaction Layer (Top-most) */}
          <CustomCursor />
        </SmoothScroll>
      </body>
    </html>
  );
}
