"use client";
import CustomerCard from "@/app/_components/_cards/about/CustomerCard";
import TeamCard from "@/app/_components/_cards/about/TeamCard";
import { ClientEntity, TeamEntity } from "@/app/_types";
import Colors from "@/app/_utils/Colors";
import { devices } from "@/app/_utils/Responsive";
import { AppRoutes } from "@/app/_utils/Router";
import { ILang } from "@/app/lang/dictionaries/ILang";
import Link from "next/link";
import React from "react";

// Styled
import styled from "styled-components";

interface AboutProps {
  lang: ILang;
  team: TeamEntity[];
  clients: ClientEntity[];
}

export default function About({ lang, team, clients }: AboutProps) {
  // Data
  const customers = lang.aboutUs.customers;

  return (
    <StyledPage>
      <Main>
        <Section style={{ backgroundColor: Colors.primary }}>
          <SectionHeader>
            <SectionHeaderTitle style={{ color: "white" }}>
              {lang.aboutUs.team.header.title}
            </SectionHeaderTitle>
          </SectionHeader>
          <SectionContent>
            {team.length ? (
              <TeamList>
                {team.map((team, index) => {
                  return <TeamCard key={index} data={team} lang={lang} />;
                })}
              </TeamList>
            ) : null}
            <ButtonLink href={AppRoutes.Carriers}>
              {lang.aboutUs.team.content.button}
            </ButtonLink>
          </SectionContent>
        </Section>

        {customers.content.cards.length ? (
          <Section style={{ backgroundColor: Colors.lightGray }}>
            <SectionHeader>
              <SectionHeaderTitle>{customers.header.title}</SectionHeaderTitle>
            </SectionHeader>
            <SectionContent>
              <Customers>
                {clients.map((client, index) => {
                  return <CustomerCard key={index} data={client} />;
                })}
              </Customers>
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
  padding: 30px 0;
`;

const SectionHeader = styled.div``;
const SectionHeaderTitle = styled.h1`
  text-align: center;
  color: ${Colors.extremeGray};
  font-weight: 700;
  font-size: 2em;
  margin: 0;
  transition: font-size ease-in-out 0.1s;

  @media screen and (${devices.md}) {
    font-size: 2.5em;
    transition: font-size ease-in-out 0.1s;
  }
`;

const SectionContent = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 30px 20px;
`;

const TeamList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 60px 0;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 1024px;
  margin: 0 auto;

  @media screen and (${devices.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Customers = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-content: center;

  @media screen and (${devices.md}) {
    grid-template-columns: repeat(3, 150px);
  }
  @media screen and (${devices.lg}) {
    grid-template-columns: repeat(5, 150px);
  }
`;

const ButtonLink = styled(Link)`
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px 20px;
  display: block;
  width: max-content;
  margin: 60px auto 0 auto;
  transition: 0.2s;
  font-weight: 600;

  &:hover {
    transition: 0.2s;
    transform: scale(1.05);
  }
`;
