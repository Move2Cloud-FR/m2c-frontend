import Carriers from "@/app/_components/pages/Carriers";
import { CarrierEntity } from "@/app/_types";
import { getDictionary } from "@/app/lang/dictionaries";
import { ILang } from "@/app/lang/dictionaries/ILang";
import { Metadata } from "next";
import React from "react";
export async function generateMetadata(): Promise<Metadata> {
  const lang: ILang = await getDictionary();
  return {
    title: lang.carriers.title,
    description: lang.carriers.description,
  };
}

export default async function Page() {
  const dict = await getDictionary();
  let jobs: CarrierEntity[];
  try {
    const response = await fetch("http://localhost:8080/api/v1/public/carrier");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    jobs = data.body;
  } catch (error) {
    console.error("Fetch failed:", error);
    jobs = [];
  }

  return <Carriers lang={dict} jobs={jobs} />;
}
