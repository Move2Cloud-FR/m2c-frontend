import Colors from "@/app/_utils/Colors";
import { getImage } from "@/app/_utils/Media";
import { Card3 } from "@/app/lang/dictionaries/ILang";
import Image from "next/image";
import React from "react";

// Styled
import styled from "styled-components";

export default function ToolCard({ data }: { data: Card3 }) {
  return (
    <StyledComponent>
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
      {data.icons.length ? (
        <Icons>
          {data.icons.map((icon, index) => {
            return (
              <Icon
                key={index}
                src={getImage("images/icons/tools", icon)}
                alt={`Tool ${index + 1}`}
                width={60}
                height={60}
              />
            );
          })}
        </Icons>
      ) : null}
    </StyledComponent>
  );
}

const StyledComponent = styled.div`
  background-color: white;
  padding: 30px;
  border: 1px solid ${Colors.gray};
`;
const Title = styled.h3`
  margin: 0;
  color: ${Colors.extremeGray};
  font-weight: 500;
`;
const Description = styled.p`
  color: ${Colors.darkGray};
  font-weight: 500;
  font-size: 0.9rem;
`;
const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 60px);
  grid-gap: 20px;
`;
const Icon = styled(Image)`
  display: block;
  width: 60px;
  height: 60px;
  object-fit: contain;
`;
