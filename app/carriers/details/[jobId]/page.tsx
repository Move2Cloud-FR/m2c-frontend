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

  const response = await fetch("http://localhost:8080/api/v1/carrier/" + jobId);
  const data = await response.json();

  const job : CarrierEntity = data.body || null;

  return {
    title: job.name[language],
  };
}

export default async function Page({ params }: PageProps) {
  const dict = await getDictionary();

  const { jobId } = params;
  // const parsedId = parseInt(jobId);

  const response = await fetch("http://localhost:8080/api/v1/carrier/" + jobId);
  const data = await response.json();

  const job : CarrierEntity = data.body || null;

  if (!job) redirect(AppRoutes.Carriers);
  return <CarrierDetails lang={dict} job={job} />;
}
