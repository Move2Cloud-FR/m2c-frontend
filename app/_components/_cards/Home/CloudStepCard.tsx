import Colors from "@/app/_utils/Colors";
import { getImage } from "@/app/_utils/Media";
import { Card2 } from "@/app/lang/dictionaries/ILang";
import Image from "next/image";
import React from "react";

// Styled
import styled from "styled-components";

export default function CloudStepCard({
  step,
  data,
}: {
  step: number;
  data: Card2;
}) {
  return (
    <StyledComponent>
      <Step>{step}</Step>
      <Icon
        src={getImage("images/icons", data.icon)}
        alt="Step"
        width={50}
        height={50}
      />
      <Text>{data.text}</Text>
    </StyledComponent>
  );
}

const StyledComponent = styled.div`
  position: relative;
  padding: 10px;
  border: 1px solid ${Colors.gray};
  border-radius: 10px;
`;
const Step = styled.div`
  border-radius: 100px;
  color: white;
  font-weight: 600;
  background-color: ${Colors.primary};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled(Image)`
  display: block;
  width: 50px;
  height: 50px;
  margin: 0 auto;
`;
const Text = styled.h3`
  font-weight: 400;
  text-align: center;
  color: ${Colors.extremeGray};
`;
