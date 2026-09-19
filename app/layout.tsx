import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chintuchawlaphotography.in"),

  title: {
    default: "Chintu Chawla Photography | Wedding Photographer in Jamshedpur",
    template: "%s | Chintu Chawla Photography",
  },

  description:
    "Chintu Chawla Photography is a wedding photography studio in Jamshedpur offering wedding photography, pre-wedding shoots, cinematic wedding films, maternity shoots, model shoots, baby shoots and premium albums.",

  keywords: [
    "Chintu Chawla Photography",
    "Wedding Photographer in Jamshedpur",
    "Wedding Photography in Jamshedpur",
    "Pre Wedding Photographer in Jamshedpur",
    "Pre Wedding Shoot in Jamshedpur",
    "Wedding Cinematography in Jamshedpur",
    "Wedding Films in Jamshedpur",
    "Photography Studio in Jamshedpur",
  ],

  authors: [{ name: "Chintu Chawla Photography" }],

  creator: "Chintu Chawla Photography",

  publisher: "Chintu Chawla Photography",

  openGraph: {
    title: "Chintu Chawla Photography | Wedding Photographer in Jamshedpur",
    description:
      "Wedding photography, pre-wedding shoots and cinematic wedding films in Jamshedpur.",
    url: "https://www.chintuchawlaphotography.in",
    siteName: "Chintu Chawla Photography",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chintu Chawla Photography | Wedding Photographer in Jamshedpur",
    description:
      "Wedding photography, pre-wedding shoots and cinematic wedding films in Jamshedpur.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
 <body className="min-h-full bg-white text-black">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Chintu Chawla Photography",
        url: "https://www.chintuchawlaphotography.in/",
        telephone: "+91-86031-95242",
        email: "info@chintuchawlaphotography.in",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "1st Floor, near Bangal Club, SNP Area, Ambagan, Sakchi",
          addressLocality: "Jamshedpur",
          addressRegion: "Jharkhand",
          postalCode: "831001",
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "City",
          name: "Jamshedpur",
        },
      }),
    }}
  />

  {children}
</body>
    </html>
  );
}