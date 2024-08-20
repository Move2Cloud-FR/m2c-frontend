"use client";

import DevOpPracticeCard from "@/app/_components/_cards/Services/DevOpPracticeCard";
import ServiceCard from "@/app/_components/_cards/Services/ServiceCard";
import Banner from "@/app/_components/Banner";
import Colors from "@/app/_utils/Colors";
import { devices } from "@/app/_utils/Responsive";
import { ILang } from "@/app/lang/dictionaries/ILang";
import React from "react";

// Styled
import styled from "styled-components";

// Components

// Utils

interface ServicesProps {
  lang: ILang;
}

export default function Services({ lang }: ServicesProps) {
  // Data
  const devOpPractices = lang.services.devOpPractices;
  const services = lang.services.services;

  return (
    <StyledPage>
      <Main>
        <Section>
          <SectionHeader>
            <SectionHeaderTitle>{services.header.title}</SectionHeaderTitle>
            {services.header.description.length ? (
              <SectionHeaderDescriptions>
                {services.header.description.map((description, index) => {
                  return (
                    <SectionHeaderDescription key={index}>
                      {description}
                    </SectionHeaderDescription>
                  );
                })}
              </SectionHeaderDescriptions>
            ) : null}
          </SectionHeader>
          <SectionContent>
            {services.content.cards.length ? (
              <ServiceContainer>
                {services.content.cards.map((service, index) => {
                  return <ServiceCard key={index} data={service} />;
                })}
              </ServiceContainer>
            ) : null}
          </SectionContent>
        </Section>

        <Section style={{ backgroundColor: Colors.primary }}>
          <SectionHeader>
            <SectionHeaderTitle style={{ color: "white" }}>
              {devOpPractices.header.title}
            </SectionHeaderTitle>
          </SectionHeader>
          <SectionContent>
            {devOpPractices.content.cards.length ? (
              <DevOpPractices>
                {devOpPractices.content.cards.map((devOpPractice, index) => {
                  return <DevOpPracticeCard key={index} data={devOpPractice} />;
                })}
              </DevOpPractices>
            ) : null}
          </SectionContent>
        </Section>

        <Banner lang={lang} />
      </Main>
    </StyledPage>
  );
}

const StyledPage = styled.div``;

const Main = styled.main``;

const Section = styled.section`
  padding: 30px 20px;
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
const SectionHeaderDescriptions = styled.div``;
const SectionHeaderDescription = styled.p`
  text-align: center;
  color: ${Colors.extremeGray};
`;

const SectionContent = styled.div`
  margin: 30px auto 0 auto;
`;

const DevOpPractices = styled.div`
  display: grid;
  grid-gap: 10px;
  max-width: 90%;
  margin: 0 auto;

  @media screen and (${devices.md}) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media screen and (${devices.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ServiceContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  max-width: 90%;
  margin: 60px auto 0 auto;
`;
