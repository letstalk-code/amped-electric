import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Amped Electric, LLC | Licensed Electricians You Can Trust",
  description:
    "Amped Electric provides expert residential electrical services for homeowners. Licensed, insured, and award-winning. Get your free quote today.",
  keywords: "electrician, electrical services, home electrical, panel upgrade, licensed electrician",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-dark`}>
        {children}
      </body>
    </html>
  );
}
