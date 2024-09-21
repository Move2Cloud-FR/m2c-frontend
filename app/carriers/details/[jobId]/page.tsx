import CarrierDetails from "@/app/_components/pages/CarrierDetails";
import { CarrierEntity } from "@/app/_types";
import { AppRoutes } from "@/app/_utils/Router";
import { getDictionary } from "@/app/lang/dictionaries";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

interface PageProps {
  params: {
    jobId: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { jobId } = params;
  const dict = await getDictionary();
  const language = dict.name;
  let job: CarrierEntity;
  try {
    const response = await fetch(
      "http://localhost:8080/m2c-backend/v1/public/carrier/" + jobId
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    job = data.body;
  } catch (error) {
    console.error("Fetch failed:", error);
    job = {} as CarrierEntity;
  }

  return {
    title: job.name[language],
  };
}

export default async function Page({ params }: PageProps) {
  const dict = await getDictionary();

  const { jobId } = params;
  // const parsedId = parseInt(jobId);
  let job: CarrierEntity;
  try {
    const response = await fetch(
      "http://localhost:8080/m2c-backend/v1/public/carrier/" + jobId
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    job = data.body;
  } catch (error) {
    console.error("Fetch failed:", error);
    job = {} as CarrierEntity;
  }

  if (!job) redirect(AppRoutes.Carriers);
  return <CarrierDetails lang={dict} job={job} />;
}
