import Consultants from "@/app/_components/pages/Consultants";
import { ConsultantEntity, TagEntity } from "@/app/_types";
import { getDictionary } from "@/app/lang/dictionaries";
import { ILang } from "@/app/lang/dictionaries/ILang";
import { Metadata } from "next";
import React from "react";
export async function generateMetadata(): Promise<Metadata> {
  const lang: ILang = await getDictionary();
  return {
    title: lang.consultants.title,
    description: lang.consultants.description,
  };
}
export default async function Page() {
  const dict = await getDictionary();
  let consultants: ConsultantEntity[];
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/public/consultant"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    consultants = data.body;
  } catch (error) {
    console.error("Fetch failed:", error);
    consultants = [];
  }

  let tags: TagEntity[];

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/public/tag"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    tags = data.body;
  } catch (error) {
    console.error("Fetch failed:", error);
    tags = [];
  }

  return <Consultants lang={dict} consultants={consultants} tags={tags} />;
}
