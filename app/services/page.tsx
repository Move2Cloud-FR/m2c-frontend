import Services from "@/app/_components/pages/Services";
import { getDictionary } from "@/app/lang/dictionaries";
import { ILang } from "@/app/lang/dictionaries/ILang";
import { Metadata } from "next";
import React from "react";
export async function generateMetadata(): Promise<Metadata> {
  const lang: ILang = await getDictionary();
  return {
    title: lang.services.title,
    description: lang.services.description,
  };
}

export default async function Page() {
  const dict = await getDictionary();

  return <Services lang={dict} />;
}
