import { getImage } from "@/app/_utils/Media";
import { devices } from "@/app/_utils/Responsive";
import { Card } from "@/app/lang/dictionaries/ILang";
import Image from "next/image";
import React from "react";

// Styled
import { styled } from "styled-components";

export default function BenefitCard({ data }: { data: Card }) {
  return (
    <StyledComponent>
      <Title>{data.title}</Title>
      <IconContainer>
        <Icon
          src={getImage("images/icons/benefits", data.icon)}
          alt={data.title}
          width={50}
          height={50}
        />
      </IconContainer>
    </StyledComponent>
  );
}

const StyledComponent = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  @media screen and (${devices.md}) {
    flex-direction: initial;
    align-items: initial;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    margin: -100px -50px;

    &:after {
      content: "";
      background-color: white;
      width: 1px;
      position: absolute;
    }

    &:nth-child(1) {
      transform: translate(251px);

      &:after {
        top: 55px;
        left: -48px;
        height: 93px;
        transform: rotate(90deg);
      }
    }
    &:nth-child(2) {
      transform: rotate(46deg) translate(251px) rotate(-46deg);

      &:after {
        top: -28px;
        left: 0px;
        height: 67px;
        transform: rotate(130deg);
      }
    }
    &:nth-child(3) {
      transform: rotate(91deg) translate(251px) rotate(-91deg);

      &:after {
        top: -74px;
        left: 50px;
        height: 95px;
        transform: rotate(0deg);
      }
    }
    &:nth-child(4) {
      transform: rotate(136deg) translate(251px) rotate(-136deg);

      &:after {
        top: -25px;
        left: 104px;
        height: 65px;
        transform: rotate(-130deg);
      }
    }
    &:nth-child(5) {
      transform: rotate(181deg) translate(251px) rotate(-181deg);

      &:after {
        top: 63px;
        left: 146px;
        height: 90px;
        transform: rotate(90deg);
      }
    }
    &:nth-child(6) {
      transform: rotate(226deg) translate(251px) rotate(-226deg);

      &:after {
        top: 124px;
        left: 115px;
        height: 135px;
        transform: rotate(130deg);
      }
    }
    &:nth-child(7) {
      transform: rotate(271deg) translate(251px) rotate(-271deg);

      &:after {
        top: 147px;
        left: 45px;
        height: 130px;
        transform: rotate(0deg);
      }
    }
    &:nth-child(8) {
      transform: rotate(316deg) translate(251px) rotate(-316deg);

      &:after {
        top: 120px;
        left: -20px;
        height: 125px;
        transform: rotate(-130deg);
      }
    }
  }
`;
const Title = styled.h4`
  margin: 0;
  color: white;
  font-weight: 400;
  text-align: center;

  @media screen and (${devices.md}) {
    ${StyledComponent}:nth-child(2) &,
    ${StyledComponent}:nth-child(4) & {
      position: absolute;
      bottom: -40px;
    }
    ${StyledComponent}:nth-child(3) & {
      position: absolute;
      bottom: -60px;
    }
  }
`;
const IconContainer = styled.div`
  border: 2px solid white;
  border-radius: 100px;
  padding: 20px;
  width: 102px;
  height: 102px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Icon = styled(Image)`
  display: block;
  width: 50px;
  height: 50px;
`;
