import About from "@/app/_components/pages/About";
import { TeamEntity } from "@/app/_types";
import { getDictionary } from "@/app/lang/dictionaries";
import { ILang } from "@/app/lang/dictionaries/ILang";
import { Metadata } from "next";
import React from "react";
// export const metadata: Metadata = {
//   title: "About Us",
// };

export async function generateMetadata(): Promise<Metadata> {
  const lang: ILang = await getDictionary();
  return {
    title: lang.aboutUs.title,
    description: lang.aboutUs.description,
  };
}

export default async function Page() {
  const dict = await getDictionary();
  let team: TeamEntity[];
  try {
    const response = await fetch("http://localhost:8080/api/v1/public/team");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    team = data.body;
  } catch (error) {
    console.error("Fetch failed:", error);
    team = [];
  }

  return <About lang={dict} team={team}></About>;
}
