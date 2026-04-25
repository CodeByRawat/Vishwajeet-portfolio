import type { Metadata } from "next";
import { Outfit, Inter, Playfair_Display } from "next/font/google";
import FloatingWidgets from "@/components/FloatingWidgets";
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

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Vishwajeet | Meta Ads Performance Specialist",
  description:
    "Driving scalable growth through Performance-Driven Meta Ads. Trusted by 60+ Global Businesses.",
  keywords: ["Vishwajeet", "Meta Ads", "Digital Marketing", "ROAS", "Growth Marketing"],
  openGraph: {
    title: "Vishwajeet | Meta Ads Performance Specialist",
    description: "Scale your revenue predictably with expert Meta Ads campaigns.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased noise">
        {children}
        <FloatingWidgets />
      </body>
    </html>
  );
}
