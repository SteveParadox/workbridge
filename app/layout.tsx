import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://workbridgeconsultingng.com"),
  title: {
    default:
      "WorkBridge Consulting NG | Reliable Staffing & Workforce Solutions in Nigeria",
    template: "%s | WorkBridge Consulting NG"
  },
  description:
    "WorkBridge Consulting NG connects businesses in Nigeria with reliable, pre-screened and job-ready staff across multiple roles and sectors.",
  openGraph: {
    title:
      "WorkBridge Consulting NG | Reliable Staffing & Workforce Solutions in Nigeria",
    description:
      "Professional staffing and workforce placement for businesses in Nigeria.",
    url: "https://workbridgeconsultingng.com",
    siteName: "WorkBridge Consulting NG",
    locale: "en_NG",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
