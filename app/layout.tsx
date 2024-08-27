import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "JVR | Limpeza de Estofados",
  description: "Limpeza de estofados e higienização em Campinas, São Paulo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId="AW-16683064677" />
      <body className={poppins.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=AW-16683064677"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
