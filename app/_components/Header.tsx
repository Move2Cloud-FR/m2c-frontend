"use client";
import { getImage } from "@/app/_utils/Media";
import { devices } from "@/app/_utils/Responsive";
import { AppRoutes } from "@/app/_utils/Router";
import { ILang } from "@/app/lang/dictionaries/ILang";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

// Styled
import { styled } from "styled-components";

interface HeaderProps {
  lang: ILang;
}

export default function Header({ lang }: HeaderProps) {
  // Router
  const location = usePathname();

  // Effects
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <StyledComponent>
      {location === AppRoutes.Home ? (
        <Content background={lang.home.header.content.image}>
          <ContentInfos>
            <ContentInfoTitle>
              {lang.home.header.content.infos.title}
            </ContentInfoTitle>
            <ContentInfoButtonLink href={AppRoutes.About}>
              {lang.home.header.content.infos.button}
            </ContentInfoButtonLink>
          </ContentInfos>
        </Content>
      ) : location === AppRoutes.Carriers ? (
        <Banner>
          <BannerContent>
            <BannerContentTitle>
              {lang.carriers.header.title}
            </BannerContentTitle>
            <BannerContentDescription>
              {lang.carriers.header.description}
            </BannerContentDescription>
          </BannerContent>
        </Banner>
      ) : location === AppRoutes.Consultants ? (
        <Banner>
          <BannerContent>
            <BannerContentTitle>
              {lang.consultants.header.title}
            </BannerContentTitle>
            <BannerContentDescription>
              {lang.consultants.header.description}
            </BannerContentDescription>
          </BannerContent>
        </Banner>
      ) : null}
    </StyledComponent>
  );
}

const StyledComponent = styled.header``;

interface ContentProps {
  background: string;
}

const Content = styled.div<ContentProps>`
  background-image: linear-gradient(
      to bottom,
      rgba(13, 65, 225, 0.5),
      rgba(13, 65, 225, 0.5)
    ),
    url(${(props) => getImage("images", props.background)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
  transition: padding ease-in-out 0.1s;

  @media screen and (${devices.lg}) {
    padding: 300px 30px;
    transition: padding ease-in-out 0.1s;
  }
`;
const ContentInfos = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;
const ContentInfoTitle = styled.h1`
  margin: 0;
  color: white;
  max-width: 768px;
`;
const ContentInfoButtonLink = styled(Link)`
  border: 1px solid white;
  color: white;
  padding: 10px 20px;
  display: block;
  width: max-content;
  margin-top: 30px;
  border-radius: 5px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }
`;

const Banner = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(13, 65, 225, 0.9),
      rgba(13, 65, 225, 0.9)
    ),
    url(${getImage("images", "carriers-header.jpg")});
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
`;
const BannerContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 60px 30px;
`;
const BannerContentTitle = styled.h1`
  text-align: center;
  color: white;
`;
const BannerContentDescription = styled.h3`
  color: white;
  text-align: center;
  font-weight: 500;
`;
