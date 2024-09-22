import About from "@/app/_components/pages/About";
import { ClientEntity, TeamEntity } from "@/app/_types";
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
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/public/team"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    team = data.body;
  } catch (error) {
    console.error("Fetch failed:", error);
    team = [];
  }
  let clients: ClientEntity[];
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/public/client"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    clients = data.body;
  } catch (error) {
    console.error("Fetch failed:", error);
    clients = [];
  }

  return <About lang={dict} team={team} clients={clients} />;
}
