import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Amped Electric | Licensed Electricians You Can Trust",
  description: "Expert home electrical services. Licensed, insured, and committed to your safety. Watch our quick video update.",
  openGraph: {
    title: "Amped Electric | Licensed Electricians",
    description: "Expert home electrical services. Licensed, insured, and committed to your safety. Watch our quick video update.",
    type: "website",
    url: "https://amped-electric.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amped Electric | Licensed Electricians",
    description: "Expert home electrical services.",
  }
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
