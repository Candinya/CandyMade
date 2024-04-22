import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CandyMade",
  description: "Projects made by Candy",
  icons: "/assets/logos/candymade.svg",
  metadataBase: new URL("https://candymade.net"),
  authors: {
    name: "Nya Candy",
    url: "https://ncd.moe",
  },
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="zh">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
