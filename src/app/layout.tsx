import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* App Router のルートレイアウトで全ページに適用されるため、no-page-custom-font は無効化 */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
