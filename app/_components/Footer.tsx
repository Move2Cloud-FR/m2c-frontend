"use client";
import Colors from "@/app/_utils/Colors";
import { getImage } from "@/app/_utils/Media";
import { devices } from "@/app/_utils/Responsive";
import { AppRoutes } from "@/app/_utils/Router";
import { ILang, Social2 } from "@/app/lang/dictionaries/ILang";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

interface FooterProps {
  lang: ILang;
}
const appName: string = process.env.NEXT_PUBLIC_NAME || "";

export default function Footer({ lang }: FooterProps) {
  return (
    <StyledComponent>
      <Wrapper>
        <Society>
          <Link href={AppRoutes.Home}>
            <SocietyLogo
              src={getImage("images", lang.footer.logo)}
              width={180}
              height={115}
              unoptimized
              alt={appName}
            />
          </Link>
          <SocietyInfos>
            <SocietyInfosItem>
              <SocietyInfosItemIcon
                src={getImage("images/icons", "phone.svg")}
                alt="Phone"
                width={25}
                height={25}
              />
              <SocietyInfosItemValue>
                {lang.society.infos.phone}
              </SocietyInfosItemValue>
            </SocietyInfosItem>
            <SocietyInfosItem>
              <SocietyInfosItemIcon
                src={getImage("images/icons", "mail.svg")}
                alt="Mail"
                width={25}
                height={25}
              />
              <SocietyInfosItemValue style={{ textDecoration: "underline" }}>
                {lang.society.infos.email}
              </SocietyInfosItemValue>
            </SocietyInfosItem>
          </SocietyInfos>
        </Society>
        <Banner>
          <BannerTitle>{lang.footer.banner.title}</BannerTitle>
          <BannerDescription>
            {lang.footer.banner.description}
          </BannerDescription>
          <BannerButtonLink href={AppRoutes.Contact}>
            {lang.footer.banner.button}
          </BannerButtonLink>
        </Banner>
      </Wrapper>
      <WrapperFlex>
        <Copyright>
          {lang.footer.copyright
            .replace("%app_name%", appName)
            .replace("%date_year%", new Date().getFullYear().toString())}
        </Copyright>
        {lang.footer.socials.length ? (
          <Socials>
            {lang.footer.socials.map((social: Social2, index: number) => {
              return (
                <SocialsItem key={index}>
                  <SocialsItemIcon
                    src={getImage("images/icons/socials", social.icon)}
                    alt={social.name}
                    width={25}
                    height={25}
                  />
                  <SocialsItemLink href={social.link} target="_blank">
                    {social.name}
                  </SocialsItemLink>
                </SocialsItem>
              );
            })}
          </Socials>
        ) : null}
      </WrapperFlex>
    </StyledComponent>
  );
}

const StyledComponent = styled.footer`
  background-color: ${Colors.primary};
  padding: 30px 30px 0 30px;
`;
const Wrapper = styled.div`
  @media screen and (${devices.lg}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
`;
const WrapperFlex = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (${devices.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Society = styled.div`
  width: max-content;
`;
const SocietyLogo = styled(Image)`
  display: block;
  width: 180px;
`;
const SocietyInfos = styled.ul`
  padding: 0;
  list-style: none;
`;
const SocietyInfosItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
const SocietyInfosItemIcon = styled(Image)`
  display: block;
  width: 25px;
  height: 25px;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(5deg) brightness(102%)
    contrast(102%);
`;
const SocietyInfosItemValue = styled.p`
  margin: 0 0 0 10px;
  color: white;
  font-weight: 700;
`;

const Banner = styled.div`
  margin-top: 30px;
  max-width: 425px;

  @media screen and (${devices.md}) {
    margin-top: 0;
    max-width: initial;
  }
`;
const BannerTitle = styled.h2`
  color: white;
  font-weight: 700;

  @media screen and (${devices.md}) {
    margin: 0;
  }
`;
const BannerDescription = styled.p`
  color: white;
  font-weight: 500;
`;
const BannerButtonLink = styled(Link)`
  background-color: transparent;
  color: white;
  font-weight: 500;
  font-size: inherit;
  font-family: inherit;
  border: 1px solid white;
  padding: 10px 20px;
  display: block;
  margin-top: 20px;
  width: max-content;
`;

const Socials = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 30px;
`;
const SocialsItem = styled.li`
  display: flex;
  align-items: center;
`;
const SocialsItemIcon = styled(Image)`
  display: block;
  width: 25px;
  height: 25px;
`;

function LinkButton({
  children,
  target,
  className,
  ...props
}: LinkProps & {
  children: React.ReactNode;
  target?: string;
  className?: string;
}) {
  return (
    <Link {...props} target={target}>
      <button className={className}>{children}</button>
    </Link>
  );
}

const SocialsItemLink = styled(LinkButton)`
  border: none;
  background-color: transparent;
  color: white;
  font-weight: 500;
  font-size: inherit;
  font-family: inherit;
  margin-left: 5px;
  cursor: pointer;
`;

const Copyright = styled.p`
  margin: 30px 0 0 0;
  color: white;
  font-weight: 500;
`;
