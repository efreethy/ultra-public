import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const alliance = localFont({
  variable: "--font-alliance",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/AllianceNo2-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/AllianceNo2-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/AllianceNo2-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ultra AI — Radiology 2.0: AI‑Native Operating System for Radiology",
  description:
    "Agentic AI that assists segmentation, QC, and report drafting. UltraRad + UltraViewer help radiology centers expand capacity. Built for FDA pathways.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${alliance.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
