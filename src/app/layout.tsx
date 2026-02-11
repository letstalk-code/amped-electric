import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "I made something special for you.",
  description: "Click to see what I built for you. I think you'll really like it.",
  openGraph: {
    title: "I made something special for you.",
    description: "Click to see what I built for you. I think you'll really like it.",
    type: "website",
    url: "https://amped-electric.vercel.app/quick-video",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Amped Electric Website Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amped Electric - Website Update",
    description: "Watch your 60-second website update now.",
    images: ["/preview.png"],
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
