import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vishwajeet | Data-Driven Marketing Expert",
  description:
    "Driving scalable growth with expert Meta Ads strategy. 10,000+ leads generated in 90 days. 4.6x average ROAS. Scaling brands globally.",
  keywords: ["Vishwajeet", "Meta Ads", "Digital Marketing", "ROAS", "Growth Marketing"],
  openGraph: {
    title: "Vishwajeet | Data-Driven Marketing",
    description: "Scale your revenue predictably with expert Meta Ads campaigns.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased noise">{children}</body>
    </html>
  );
}
