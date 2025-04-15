import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanga Systems",
  description: "From start to finish",
  openGraph: {
    title: "Tanga Systems",
    description:
      "From start to finish",
    url: "https://tanga-systems.netlify.app",
    siteName: "Tanga Systems",
    images: [
      {
        url: "https://tanga-systems.netlify.app/logo-color.svg", // <-- Replace with your image URL
        width: 1200,
        height: 630,
        alt: "From start to finish",
      },
    ],
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
      >
        {children}
      </body>
    </html>
  );
}
