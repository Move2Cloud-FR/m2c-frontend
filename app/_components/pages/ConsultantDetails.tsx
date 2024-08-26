"use client";
import { ConsultantEntity, possibleLang, TagEntity } from "@/app/_types";
import Colors from "@/app/_utils/Colors";
import { getImage } from "@/app/_utils/Media";
import { devices } from "@/app/_utils/Responsive";
import { AppRoutes } from "@/app/_utils/Router";
import { ILang } from "@/app/lang/dictionaries/ILang";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
interface ConsultantProps {
  lang: ILang;
  consultant: ConsultantEntity;
}

export default function ConsultantDetails({
  lang,
  consultant,
}: ConsultantProps) {
  const language: possibleLang = lang.name;
  const [tags, setTags] = useState<TagEntity[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/public/tag/multiple",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(consultant.tags),
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTags(data.body);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };
    fetchTags();
  }, [consultant.tags]);

  return (
    <StyledPage>
      <Main>
        <Backlink href={AppRoutes.Consultants}>
          {"<" + lang.consultantDetails.backlink}
        </Backlink>
        <About>
          <Flex>
            <AboutHeader>
              <AboutHeaderTitle>
                {consultant.name &&
                  consultant.name[language] &&
                  `${consultant.name[language]} : `}{" "}
                {consultant.title && `${consultant.title[language]}`}
              </AboutHeaderTitle>
              <AboutHeaderTags>
                {tags &&
                  tags.map((tag) => (
                    <AboutHeaderTag key={tag.id}>
                      {tag.tagName[language]}
                    </AboutHeaderTag>
                  ))}
              </AboutHeaderTags>
              {consultant.description && (
                <AboutSection>
                  <AboutSectionTitle>
                    {lang.consultantDetails.content.descriptionTitle}
                  </AboutSectionTitle>
                  <AboutSectionDescription>
                    <AboutSectionDescriptionText>
                      {consultant.description[language]}
                    </AboutSectionDescriptionText>
                  </AboutSectionDescription>
                </AboutSection>
              )}
            </AboutHeader>
            <Avatar
              src={
                consultant.avatar || getImage("images/avatars", "unknown.jpeg")
              }
            />
          </Flex>
          <AboutContent>
            {consultant.sections && (
              <AboutSection>
                <AboutSectionTitle>
                  {lang.consultantDetails.content.experienceTitle}
                </AboutSectionTitle>
                {consultant.sections.map((section, index) => (
                  <div key={`${language}-section-${index}`}>
                    <AboutSectionSubTitle>
                      {section.sectionTitle[language] + " : "}
                    </AboutSectionSubTitle>
                    <AboutSectionDescription>
                      <AboutSectionDescriptionText>
                        {section.sectionDescription[language]}
                      </AboutSectionDescriptionText>
                    </AboutSectionDescription>
                  </div>
                ))}
              </AboutSection>
            )}
            {consultant.cv && consultant.cv[language] && (
              <AboutSection>
                <AboutSectionCVButton
                  href={consultant.cv[language]}
                  target="_blank"
                >
                  <AboutSectionCVButtonImg
                    src={getImage("images/icons", "download.svg")}
                    alt="cv"
                  />
                  {lang.consultantDetails.content.cv}
                </AboutSectionCVButton>
              </AboutSection>
            )}
          </AboutContent>
        </About>
      </Main>
    </StyledPage>
  );
}
const StyledPage = styled.div``;

const Main = styled.main`
  padding: 30px;
  display: grid;

  @media screen and (${devices.lg}) {
    max-width: 90%;
    margin: 30px auto;
  }
`;
const Backlink = styled(Link)`
  color: ${Colors.primary};
  font-weight: 600;
  font-size: 0.8em;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  transition: 0.2s;

  &:hover {
    color: ${Colors.primary};
    text-decoration: underline;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Avatar = styled.img`
  display: none;

  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 0 0 200px;
  @media screen and (${devices.lg}) {
    display: block;
  }
`;

const About = styled.div``;

const AboutHeader = styled.div``;
const AboutHeaderTitle = styled.h1`
  margin: 0;
  color: ${Colors.extremeGray};
`;

const AboutHeaderTags = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  align-items: center;
`;
const AboutHeaderTag = styled.li`
  background-color: ${Colors.gray};
  color: ${Colors.extremeGray};
  font-weight: 600;
  font-size: 0.8em;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const AboutContent = styled.div`
  margin: 60px 0;
`;
const AboutSection = styled.div``;
const AboutSectionTitle = styled.h2`
  margin: 0;
  color: ${Colors.extremeGray};
`;
const AboutSectionSubTitle = styled.li`
  font-weight: 600;
  font-size: 1.2em;
  margin: 25px 0 10px 0;
  color: ${Colors.extremeGray};
`;
const AboutSectionDescription = styled.div``;
const AboutSectionDescriptionText = styled.p`
  color: ${Colors.extremeGray};
  text-align: justify;
`;

const AboutSectionCVButton = styled(Link)`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid ${Colors.primary};
  color: ${Colors.primary};
  font-size: 0.8em;
  font-weight: 600;
  font-family: inherit;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  cursor: pointer;
  transition: font-size ease-in-out 0.1s;
  margin-top: 10px;

  &:hover {
    transition: 0.2s;
    background-color: ${Colors.primary};
    color: white;
  }

  @media screen and (${devices.lg}) {
    font-size: 1em;
    transition: font-size ease-in-out 0.1s;
  }
`;
const AboutSectionCVButtonImg = styled.img`
  display: block;
  width: 18px;
  height: 18px;
  margin-right: 10px;
  filter: invert(10%) sepia(100%) saturate(6909%) hue-rotate(233deg)
    brightness(93%) contrast(90%);

  ${AboutSectionCVButton}:hover & {
    filter: invert(100%) sepia(8%) saturate(7424%) hue-rotate(308deg)
      brightness(116%) contrast(124%);
  }
`;
