import ConsultantDetails from "@/app/_components/pages/ConsultantDetails";
import { ConsultantEntity } from "@/app/_types";
import { AppRoutes } from "@/app/_utils/Router";
import { getDictionary } from "@/app/lang/dictionaries";
import { redirect } from "next/navigation";
import React from "react";
interface PageProps {
  params: {
    consultantId: string;
  };
}
export default async function Page({ params }: PageProps) {
  const dict = await getDictionary();
  const { consultantId } = params;
  let consultant: ConsultantEntity;
  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/public/consultant/" + consultantId
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    consultant = data.body;
  } catch (error) {
    console.error("Fetch failed:", error);
    consultant = {} as ConsultantEntity;
  }

  if (!consultant) redirect(AppRoutes.Consultants);
  return <ConsultantDetails lang={dict} consultant={consultant} />;
}
