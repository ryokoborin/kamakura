import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "鎌倉観光ガイド | 今、空いている鎌倉を見つけよう",
  description:
    "鎌倉の各スポットの混雑状況をリアルタイムに可視化。観光客がストレスなく鎌倉を楽しめるガイドサイト。",
  openGraph: {
    title: "鎌倉観光ガイド | 今、空いている鎌倉を見つけよう",
    description:
      "鎌倉の各スポットの混雑状況をリアルタイムに可視化。観光客がストレスなく鎌倉を楽しめるガイドサイト。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
