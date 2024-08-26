"use client";
import ConsultantsCard from "@/app/_components/_cards/consultants/ConsultantsCard";
import TagCard from "@/app/_components/_cards/consultants/TagCard";
import { ConsultantEntity, TagEntity } from "@/app/_types";
import Colors from "@/app/_utils/Colors";
import { devices } from "@/app/_utils/Responsive";
import { fetchConsultantsByTags } from "@/app/actions";
import { ILang } from "@/app/lang/dictionaries/ILang";
import React, { useState } from "react";
import styled from "styled-components";
interface ConsultantsProps {
  lang: ILang;
  consultants: ConsultantEntity[];
  tags: TagEntity[];
}
export default function Consultants({
  lang,
  consultants,
  tags,
}: ConsultantsProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([""]);
  const [filteredConsultants, setFilteredConsultants] =
    useState<ConsultantEntity[]>(consultants);

  const handleTagSelection = async (tagId: string) => {
    const updatedTags =
      tagId === "" || (selectedTags.includes(tagId) && selectedTags.length == 1)
        ? [""]
        : selectedTags.includes(tagId)
        ? selectedTags.filter((item) => item !== tagId)
        : [...selectedTags.filter((item) => item !== ""), tagId];
    setSelectedTags(updatedTags);

    const consultants = await fetchConsultantsByTags(updatedTags);
    setFilteredConsultants(consultants);
  };
  return (
    <StyledPage>
      <Main>
        <Section>
          <SectionHeader>
            <SectionHeaderTitle>
              {lang.consultants.consultants.header.title}
            </SectionHeaderTitle>
          </SectionHeader>
          <SectionContent>
            <TagGrid>
              <TagCard
                onClick={() => {
                  handleTagSelection("");
                }}
                key={""}
                data={{
                  id: "",
                  tagName: {
                    en: "",
                    fr: "",
                    [lang.name]: lang.consultants.defaultTag,
                  },
                  visible: true,
                }}
                lang={lang}
                selected={selectedTags.includes("")}
              />
              {tags.map((tag, index) => {
                return (
                  <TagCard
                    key={tag.id}
                    onClick={(tag) => {
                      handleTagSelection(tag.id);
                    }}
                    data={tag}
                    lang={lang}
                    selected={selectedTags.includes(tag.id)}
                  />
                );
              })}
            </TagGrid>
          </SectionContent>
          <SectionContent>
            {filteredConsultants.length ? (
              <ConsultantsGrid>
                {filteredConsultants.map((consultant, index) => {
                  return (
                    <ConsultantsCard
                      key={index}
                      data={consultant}
                      lang={lang}
                    />
                  );
                })}
              </ConsultantsGrid>
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
const TagGrid = styled.div`
  padding-right: 20%;
  padding-left: 20%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;

  align-items: center;
  justify-content: center;
  height: fit-content;
`;

const ConsultantsGrid = styled.ul`
  padding: 0;
  display: grid;
  grid-gap: 30px;

  @media screen and (${devices.md}) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }

  @media screen and (${devices.lg}) {
    grid-template-columns: repeat(4, minmax(250px, 1fr));
  }
`;
