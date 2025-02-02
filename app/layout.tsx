import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import MousePointer from "@/components/MousePointer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
  title: "amagami.",
  description: "Japanese developer portfolios.",
  openGraph: {
    title: 'amagami.',
    description: 'Japanese developer portfolios.',
    images: '/assets/meta-image.png',
    url: 'https://www.amagami.xyz',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'amagami.',
    description: 'Japanese developer portfolios.',
    images: '/assets/meta-image.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <MousePointer />
        <PageTransition>{children}</PageTransition>
        <Footer />
        </body>
    </html>
  );
}
