import type { Metadata } from "next";
import { Montserrat, Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Home Link Africa — Your Trusted Representative in Kenya",
    template: "%s | Home Link Africa",
  },
  description:
    "Home Link Africa provides reliable on-the-ground support for Kenyans living abroad. Property management, family welfare checks, concierge services, and more.",
  keywords: [
    "Kenya diaspora services",
    "property management Kenya",
    "diaspora concierge",
    "family welfare checks Kenya",
    "Kenya investment support",
    "Kenyans abroad",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${montserrat.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 min-h-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
