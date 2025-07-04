import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desi Bandhan - A Safe Space for Desi Couples & Friends",
  description: "Join Desi Bandhan, a safe and inclusive platform for desi couples and friends to connect, share, and grow together. Experience a community that celebrates love, diversity, and safety.",
  openGraph: {
    title: "Desi Bandhan - A Safe Space for Desi Couples & Friends",
    description: "Join Desi Bandhan, a safe and inclusive platform for desi couples and friends to connect, share, and grow together. Experience a community that celebrates love, diversity, and safety.",
    url: "https://nexconnectt.com",
    siteName: "Desi Bandhan",
    images: [
      {
        url: "https://nexconnectt.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Desi Bandhan - A Safe Space for Desi Couples & Friends",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Analytics />
        <SpeedInsights />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
