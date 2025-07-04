import WaitlistFormPage from "./_components/form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Waitlist - Desi Bandhan",
  description:
    "Be the first to know when Desi Bandhan launches. Join our waitlist for exclusive updates and early access.",
  openGraph: {
    title: "Join the Waitlist - Desi Bandhan",
    description:
      "Be the first to know when Desi Bandhan launches. Join our waitlist for exclusive updates and early access.",
    url: "https://nexconnectt.com/waitlist",
    siteName: "Desi Bandhan",
    images: [
      {
        url: "https://nexconnectt.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Join the Waitlist - Desi Bandhan",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <WaitlistFormPage />;
}
