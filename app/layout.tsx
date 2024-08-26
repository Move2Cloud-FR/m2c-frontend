import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import { getDictionary } from "@/app/lang/dictionaries";
import Navbar from "@/app/_components/Navbar";
import { ILang } from "@/app/lang/dictionaries/ILang";
import StyledComponentsRegistry from "@/app/_lib/registry";
import Lang from "@/app/_components/_utils/Lang";
import Header from "@/app/_components/Header";
import Scroll from "@/app/_components/_utils/Scroll";
import Footer from "@/app/_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE || ""),

  title: {
    default: "Move2Cloud",
    template: "Move2Cloud - %s",
  },
  description:
    "Move2Cloud is a company of experts specializing in Data, Cloud, and DevOps, offering top solutions in cloud migration, data management, and DevOps consulting.",
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang: ILang = await getDictionary();
  return (
    <html lang="fr">
      <body>
        <StyledComponentsRegistry>
          <div></div>
          <Navbar lang={lang} />
          <Header lang={lang} />

          <Lang lang={lang} />
          <Scroll />
          {children}
          <Footer lang={lang} />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
