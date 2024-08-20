import Colors from "@/app/_utils/Colors";
import { getImage } from "@/app/_utils/Media";
import { devices } from "@/app/_utils/Responsive";
import { Card7 } from "@/app/lang/dictionaries/ILang";
import React from "react";

// Styled
import styled from "styled-components";

export default function ServiceCard({ data }: { data: Card7 }) {
  return (
    <StyledComponent>
      <Image src={getImage("images/services", data.image)} alt={data.title} />
      <Infos>
        <InfoTitle>{data.title}</InfoTitle>
        {data.description.length ? (
          <InfoDescriptions>
            {data.description.map((description, index) => {
              return (
                <InfoDescription key={index}>{description}</InfoDescription>
              );
            })}
          </InfoDescriptions>
        ) : null}
      </Infos>
    </StyledComponent>
  );
}

const StyledComponent = styled.div`
  @media screen and (${devices.lg}) {
    display: flex;
    margin-bottom: 30px;

    &:nth-child(2n) {
      flex-direction: row-reverse;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
  border-radius: 10px;

  @media screen and (${devices.lg}) {
    max-width: 50%;
  }
`;

const Infos = styled.div`
  @media screen and (${devices.lg}) {
    width: 50%;
    margin-left: 30px;

    ${StyledComponent}:nth-child(2n) & {
      margin-right: 30px;
      margin-left: 0px;
    }
  }
`;
const InfoTitle = styled.h2`
  color: ${Colors.extremeGray};

  @media screen and (${devices.lg}) {
    margin: 0;

    ${StyledComponent}:nth-child(2n) & {
      text-align: right;
    }
  }
`;
const InfoDescriptions = styled.div``;
const InfoDescription = styled.p`
  color: ${Colors.extremeGray};

  @media screen and (${devices.lg}) {
    ${StyledComponent}:nth-child(2n) & {
      text-align: right;
    }
  }
`;
