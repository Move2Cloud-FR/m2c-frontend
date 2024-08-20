import { getImage } from "@/app/_utils/Media";
import { Card6 } from "@/app/lang/dictionaries/ILang";
import Image from "next/image";
import React from "react";

// Styled
import styled from "styled-components";

export default function DevOpPracticeCard({ data }: { data: Card6 }) {
  return (
    <StyledComponent>
      <Icon
        src={getImage("images/icons/practices", data.icon)}
        alt={data.title}
        width={50}
        height={50}
      />
      <Title>{data.title}</Title>
    </StyledComponent>
  );
}

const StyledComponent = styled.div`
  border: 1px solid white;
  padding: 30px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Icon = styled(Image)`
  max-width: 100%;
  display: block;
  margin: 0 auto;
  height: 50px;
  width: 50px;
  object-fit: contain;
  filter: invert(100%) sepia(0%) saturate(7465%) hue-rotate(127deg)
    brightness(109%) contrast(100%);
`;

const Title = styled.h3`
  margin: 20px 0 0 0;
  font-weight: 400;
  text-align: center;
  color: white;
`;
