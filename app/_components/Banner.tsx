import React from "react";

// Styled
import styled from "styled-components";
import { ILang } from "@/app/lang/dictionaries/ILang";
import { AppRoutes } from "@/app/_utils/Router";
import { getImage } from "@/app/_utils/Media";
import { devices } from "@/app/_utils/Responsive";
import Colors from "@/app/_utils/Colors";
import Link from "next/link";

// Utils

interface BannerProps {
  lang: ILang;
}

export default function Banner({ lang }: BannerProps) {
  // Data
  const banner = lang.banner;

  return (
    <StyledComponent>
      <BannerAbout>
        <BannerAboutTitle>{banner.title}</BannerAboutTitle>
        <BannerAboutDescription>{banner.description}</BannerAboutDescription>
        <BannerAboutButtonLink href={AppRoutes.Contact}>
          {banner.button}
        </BannerAboutButtonLink>
      </BannerAbout>
      <BannerImage src={getImage("images", banner.image)} alt={banner.title} />
    </StyledComponent>
  );
}

const StyledComponent = styled.div`
  padding: 30px;
  margin: 30px 0;

  @media screen and (${devices.lg}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const BannerAbout = styled.div`
  margin-bottom: 30px;
  @media screen and (${devices.lg}) {
    margin-right: 30px;
    margin-bottom: 0;
    max-width: 50%;
  }
`;
const BannerAboutTitle = styled.h2`
  color: ${Colors.extremeGray};
  transition: font-size ease-in-out 0.1s;
  margin: 0;

  @media screen and (${devices.lg}) {
    font-size: 2.5em;
    transition: font-size ease-in-out 0.1s;
  }
`;
const BannerAboutDescription = styled.p`
  color: ${Colors.darkGray};
  font-weight: 500;
`;
const BannerAboutButtonLink = styled(Link)`
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid ${Colors.extremeGray};
  font-family: inherit;
  font-size: inherit;
  color: ${Colors.extremeGray};
  margin-top: 20px;
  display: block;
  width: max-content;
`;
const BannerImage = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (${devices.lg}) {
    max-width: 50%;
    max-height: 500px;
  }
`;
