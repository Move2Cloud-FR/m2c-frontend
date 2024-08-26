import { possibleLang, TeamEntity } from "@/app/_types";
import { openExternalLink } from "@/app/_utils/Link";
import { getImage } from "@/app/_utils/Media";
import { Card4, ILang } from "@/app/lang/dictionaries/ILang";
import Image from "next/image";
import React from "react";

// Styled
import styled from "styled-components";

// Utils

export default function TeamCard({
  data,
  lang,
}: {
  data: TeamEntity;
  lang: ILang;
}) {
  const language: possibleLang = lang.name;

  return (
    <StyledComponent>
      <Avatar
        src={data?.avatar || getImage("images/avatars", "unknown.jpeg")}
        alt={data.fullName[`${language}`]}
        width={160}
        height={160}
      />
      {data.fullName && <FullName>{data.fullName[`${language}`]}</FullName>}
      {data.job && <Job>{data.job[`${language}`]}</Job>}
      <Socials>
        {data.linkedin && (
          <SocialItem>
            <SocialItemLink
              onClick={(event) => openExternalLink(event, data.linkedin)}
            >
              <SocialItemLinkIcon
                src={getImage("images/icons/socials", "linkedin.svg")}
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </SocialItemLink>
          </SocialItem>
        )}
      </Socials>
    </StyledComponent>
  );
}

const StyledComponent = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Avatar = styled(Image)`
  max-width: 100%;
  width: 160px;
  height: 160px;
  border-radius: 100px;
  object-fit: cover;
`;
const FullName = styled.h3`
  color: white;
  margin: 20px 0 0 0;
`;
const Job = styled.p`
  margin: 0;
  color: white;
  font-weight: 600;
`;

const Socials = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;
const SocialItem = styled.li``;
const SocialItemLink = styled.div`
  cursor: pointer;
`;
const SocialItemLinkIcon = styled(Image)`
  display: block;
  width: 24px;
  height: 24px;
`;
