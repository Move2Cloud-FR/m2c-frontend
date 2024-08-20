"use client";
import JobCard from "@/app/_components/_cards/carriers/JobCard";
import { CarrierEntity } from "@/app/_types";
import Colors from "@/app/_utils/Colors";
import { devices } from "@/app/_utils/Responsive";
import { ILang } from "@/app/lang/dictionaries/ILang";
import React from "react";

// Styled
import styled from "styled-components";

interface CarriersProps {
  lang: ILang;
  jobs: CarrierEntity[];
}

export default function Carriers({ lang, jobs }: CarriersProps) {
  // Data

  return (
    <StyledPage>
      <Main>
        <Section>
          <SectionHeader>
            <SectionHeaderTitle>
              {lang.carriers.jobs.header.title}
            </SectionHeaderTitle>
          </SectionHeader>
          <SectionContent>
            {jobs.length ? (
              <Jobs>
                {jobs.map((job, index) => {
                  return <JobCard key={index} data={job} lang={lang} />;
                })}
              </Jobs>
            ) : null}
          </SectionContent>
        </Section>
      </Main>
    </StyledPage>
  );
}

const StyledPage = styled.div``;

const Main = styled.main``;

const Section = styled.section`
  padding: 30px 20px;
  margin: 30px 0;
`;

const SectionHeader = styled.div``;
const SectionHeaderTitle = styled.h2`
  text-align: center;
  color: ${Colors.extremeGray};
  font-weight: 700;
  margin: 0;
  transition: font-size ease-in-out 0.1s;

  @media screen and (${devices.md}) {
    font-size: 2.5em;
    transition: font-size ease-in-out 0.1s;
  }
`;

const SectionContent = styled.div`
  margin: 30px auto 0 auto;
  max-width: 1440px;
`;

const Jobs = styled.ul`
  padding: 0;
  display: grid;
  grid-gap: 30px;

  @media screen and (${devices.md}) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media screen and (${devices.lg}) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
`;
