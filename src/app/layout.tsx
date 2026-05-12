import SmoothScroll from "@/components/SmoothScroll";
import type { Metadata } from "next";
import { Domine, IBM_Plex_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cuộn Sách Đấu Tranh Giai Cấp",
  description: "Phân tích quan hệ giai cấp trong kỷ nguyên số",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${domine.variable} ${ibmPlexSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col m-0 p-0 overflow-x-hidden selection:bg-primary selection:text-on-primary">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}


