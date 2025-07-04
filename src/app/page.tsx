import Landing from "@/components/global/landing";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desi Bandhan - A Safe Space for Desi Couples & Friends",
  description:
    "Join Desi Bandhan, a safe and inclusive platform for desi couples and friends to connect, share, and grow together. Experience a community that celebrates love, diversity, and safety.",
  openGraph: {
    title: "Desi Bandhan - A Safe Space for Desi Couples & Friends",
    description:
      "Join Desi Bandhan, a safe and inclusive platform for desi couples and friends to connect, share, and grow together. Experience a community that celebrates love, diversity, and safety.",
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

export default function Page() {
  return (
    <>
      <Landing />
    </>
  );
}
