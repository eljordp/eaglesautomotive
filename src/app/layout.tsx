import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eagles-automotive.vercel.app"),
  title: {
    default: "Eagles Automotive Inc | Used Cars in Murfreesboro, TN",
    template: "%s | Eagles Automotive Inc",
  },
  description:
    "Quality pre-owned vehicles at Eagles Automotive Inc in Murfreesboro, Tennessee. Browse our inventory, apply for financing, and schedule service. Call (347) 485-0898.",
  keywords: [
    "used cars Murfreesboro TN",
    "Eagles Automotive",
    "pre-owned vehicles",
    "car dealership Murfreesboro",
    "buy here pay here",
    "auto financing Tennessee",
    "used trucks Murfreesboro",
    "car service Murfreesboro",
  ],
  authors: [{ name: "Eagles Automotive Inc" }],
  icons: {
    icon: "/icon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Eagles Automotive Inc | Used Cars in Murfreesboro, TN",
    description:
      "Quality pre-owned vehicles, flexible financing, and expert service at Eagles Automotive Inc. Visit us at 2145 NW Broad St, Murfreesboro, TN.",
    url: "https://eagles-automotive.vercel.app",
    siteName: "Eagles Automotive Inc",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eagles Automotive Inc — Murfreesboro, TN",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eagles Automotive Inc | Used Cars in Murfreesboro, TN",
    description:
      "Quality pre-owned vehicles, flexible financing, and expert service in Murfreesboro, TN.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
