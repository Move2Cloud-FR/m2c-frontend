import { ConsultantEntity } from "@/app/_types";
import Colors from "@/app/_utils/Colors";
import { getImage } from "@/app/_utils/Media";
import { AppRoutes } from "@/app/_utils/Router";
import { ILang } from "@/app/lang/dictionaries/ILang";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
interface ConsultantCardProps {
  data: ConsultantEntity;
  lang: ILang;
}
export default function ConsultantsCard({ data, lang }: ConsultantCardProps) {
  const language = lang.name;

  return (
    <StyledComponent href={`${AppRoutes.ConsultantDetails}/${data.id}`}>
      <Header>
        <Avatar
          src={data?.avatar || getImage("images/avatars", "unknown.jpeg")}
          alt={data.name[`${language}`]}
          width={160}
          height={160}
        />
        <HeaderTitle>{data.name[`${language}`]}</HeaderTitle>
        <HeaderLocation>{data.shortTitle[`${language}`]}</HeaderLocation>
      </Header>
      <Content>
        {data.shortDescription && (
          <ContentDescription>
            {data.shortDescription[`${language}`]}
          </ContentDescription>
        )}
      </Content>
      <Footer>
        <FooterButton>
          {lang.consultants.consultants.content.discover}
          <FooterButtonIcon
            src={getImage("images/icons", "right-arrow.svg")}
            alt={lang.consultants.consultants.content.discover}
            width={22}
            height={22}
          />
        </FooterButton>
      </Footer>
    </StyledComponent>
  );
}

const StyledComponent = styled(Link)`
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 30px rgb(0 0 0 / 7%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    box-shadow: 10px 10px 30px rgb(0 0 0 / 15%);
  }
`;

const Header = styled.div`
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const HeaderTitle = styled.h3`
  margin: 0;
  color: ${Colors.extremeGray};
`;
const HeaderLocation = styled.p`
  color: gray;
  margin: 0;
`;

const Content = styled.div`
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ContentDescription = styled.p`
  color: ${Colors.extremeGray};
`;
const Avatar = styled(Image)`
  max-width: 100%;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  object-fit: cover;
`;

const Footer = styled.div``;
const FooterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-weight: 600;
  font-size: inherit;
  font-family: inherit;
  width: 100%;
  background-color: ${Colors.primary};
  padding: 10px 20px;
  border: none;
  border-radius: 0 0 10px 10px;
  transition: 0.2s;
  cursor: pointer;

  ${StyledComponent}:hover &, 
&:hover {
    transition: 0.2s;
    -moz-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.07);
    -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.07);
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.07);
  }
`;
const FooterButtonIcon = styled(Image)`
  width: 22px;
  height: 22px;
  display: block;
`;
