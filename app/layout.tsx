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
  metadataBase: new URL("https://chawlastudio.com"),

  title: {
    default: "Chawla Studio | Luxury Wedding Photography & Cinematic Films",
    template: "%s | Chawla Studio",
  },

  description:
    "Chawla Studio captures timeless weddings, pre-wedding shoots, cinematic films, engagements, and unforgettable celebrations with elegance and creativity.",

  keywords: [
    "Chawla Studio",
    "Wedding Photography",
    "Wedding Photographer",
    "Pre Wedding Shoot",
    "Wedding Cinematography",
    "Wedding Films",
    "Luxury Wedding Photography",
    "Indian Wedding Photographer",
    "Wedding Studio",
    "Photography Studio",
  ],

  authors: [{ name: "Chawla Studio" }],

  creator: "Chawla Studio",

  publisher: "Chawla Studio",

  openGraph: {
    title: "Chawla Studio",
    description:
      "Luxury wedding photography and cinematic storytelling crafted with elegance.",
    url: "https://chawlastudio.com",
    siteName: "Chawla Studio",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chawla Studio",
    description:
      "Luxury Wedding Photography & Cinematic Films.",
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
        {children}
      </body>
    </html>
  );
}