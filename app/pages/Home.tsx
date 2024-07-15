"use client";
import BenefitCard from "@/app/_components/_cards/Home/BenefitCard";
import CloudStepCard from "@/app/_components/_cards/Home/CloudStepCard";
import FaqCard from "@/app/_components/_cards/Home/FaqCard";
import ToolCard from "@/app/_components/_cards/Home/ToolCard";
import Colors from "@/app/_utils/Colors";
import { getImage } from "@/app/_utils/Media";
import { devices } from "@/app/_utils/Responsive";
import { ILang } from "@/app/lang/dictionaries/ILang";
import React from "react";
import styled from "styled-components";

interface HomeProps {
  lang: ILang;
}
export default function Home({ lang }: HomeProps) {
  // Data
  const cloudProviders = lang.home.cloudProviders;
  const benefits = lang.home.benefits;
  const cloudSteps = lang.home.cloudSteps;
  const tools = lang.home.tools;
  const faq = lang.home.faq;

  const firstRowCloudSteps = cloudSteps.content.cards.slice(0, 3);
  const secondRowCloudSteps = cloudSteps.content.cards.slice(3);

  return (
    <StyledPage>
      <Main>
        <Section style={{ backgroundColor: Colors.lightGray }}>
          <SectionHeader>
            <SectionHeaderTitle>
              {cloudProviders.header.title}
            </SectionHeaderTitle>
          </SectionHeader>
          <SectionContent>
            <SectionCloudProvidersLogo
              src={getImage("images", cloudProviders.content.logo.image)}
              alt={cloudProviders.content.logo.alt}
            />
            {cloudProviders.content.texts.length ? (
              <SectionCloudProvidersTexts>
                {cloudProviders.content.texts.map((text, index) => {
                  return (
                    <SectionCloudProvidersText
                      key={index}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  );
                })}
              </SectionCloudProvidersTexts>
            ) : null}
          </SectionContent>
        </Section>

        {benefits.content.cards.length ? (
          <Section style={{ backgroundColor: Colors.primary }}>
            <SectionHeader>
              <SectionHeaderTitle style={{ color: "white" }}>
                {benefits.header.title}
              </SectionHeaderTitle>
            </SectionHeader>
            <SectionContent>
              <Benefits>
                <BenefitList>
                  {benefits.content.cards.map((benefit, index) => {
                    return <BenefitCard key={index} data={benefit} />;
                  })}
                </BenefitList>
                <BenefitMain
                  src={getImage("images", benefits.content.main.image)}
                  alt={benefits.header.title}
                />
                <BenefitMainSpan>{benefits.header.title}</BenefitMainSpan>
              </Benefits>
            </SectionContent>
          </Section>
        ) : null}

        {cloudSteps.content.cards.length ? (
          <Section>
            <SectionHeader>
              <SectionHeaderTitle>{cloudSteps.header.title}</SectionHeaderTitle>
            </SectionHeader>
            <SectionContent>
              <CloudSteps>
                <CloudStepsRow>
                  {firstRowCloudSteps.map((cloudStep, index) => {
                    return (
                      <CloudStepCard
                        key={index}
                        step={index + 1}
                        data={cloudStep}
                      />
                    );
                  })}
                </CloudStepsRow>
                <CloudStepsRow>
                  {secondRowCloudSteps.map((cloudStep, index) => {
                    const i = firstRowCloudSteps.length++;
                    return (
                      <CloudStepCard
                        key={index}
                        step={i + 1}
                        data={cloudStep}
                      />
                    );
                  })}
                </CloudStepsRow>
              </CloudSteps>
            </SectionContent>
          </Section>
        ) : null}

        {tools.content.cards.length ? (
          <Section style={{ backgroundColor: Colors.lightGray }}>
            <SectionHeader>
              <SectionHeaderTitle>{tools.header.title}</SectionHeaderTitle>
            </SectionHeader>
            <SectionContent>
              <Tools>
                {tools.content.cards.map((tool, index) => {
                  return <ToolCard key={index} data={tool} />;
                })}
              </Tools>
            </SectionContent>
          </Section>
        ) : null}

        {faq.content.length ? (
          <Section>
            <SectionHeader>
              <SectionHeaderTitle>{faq.header.title}</SectionHeaderTitle>
            </SectionHeader>
            <SectionContent>
              <Faq>
                {faq.content.map((faq, index) => {
                  return <FaqCard key={index} data={faq} />;
                })}
              </Faq>
            </SectionContent>
          </Section>
        ) : null}
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

const SectionContent = styled.div`
  margin: 30px auto 0 auto;
  max-width: 1440px;
`;
const SectionCloudProvidersLogo = styled.img`
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
const SectionCloudProvidersTexts = styled.div`
  display: grid;
  grid-gap: 20px;
  margin: 30px auto 0 auto;
  max-width: 1280px;
`;
const SectionCloudProvidersText = styled.p`
  margin: 0;
  text-align: center;
`;
const Benefits = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media screen and (${devices.md}) {
    height: 500px;
    margin: 130px auto 90px auto;
  }
`;
const BenefitMain = styled.img`
  display: none;

  @media screen and (${devices.md}) {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 250px;
    transform: translate(-50%, -50%);
  }
`;
const BenefitMainSpan = styled.span`
  display: none;

  @media screen and (${devices.md}) {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    margin: 30px 0 0 0;
    text-align: center;
    width: 200px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }
`;
const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;
const CloudSteps = styled.div`
  display: grid;
  grid-gap: 20px;

  @media screen and (${devices.lg}) {
    grid-gap: 5px;
  }
`;
const CloudStepsRow = styled.div`
  display: grid;
  grid-gap: 20px;

  @media screen and (${devices.lg}) {
    &:first-child {
      grid-template-columns: repeat(3, 1fr);
    }
    &:last-child {
      grid-template-columns: repeat(2, 1fr);
      max-width: 70%;
      margin: 0 auto;
    }
    grid-template-rows: auto auto;
    justify-content: center;
  }
`;
const Tools = styled.div`
  display: grid;
  grid-gap: 20px;
  padding-bottom: 30px;

  @media screen and (${devices.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (${devices.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (${devices.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Faq = styled.div`
  max-width: 1440px;
  margin: 0 auto 30px auto;
`;
