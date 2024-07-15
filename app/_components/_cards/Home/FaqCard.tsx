import Colors from "@/app/_utils/Colors";
import { getImage } from "@/app/_utils/Media";
import { devices } from "@/app/_utils/Responsive";
import { Content6 } from "@/app/lang/dictionaries/ILang";
import Image from "next/image";
import React, { useState } from "react";

// Styled
import { styled } from "styled-components";

// Utils

export default function FaqCard({ data }: { data: Content6 }) {
  // States
  const [isOpen, setIsOpen] = useState(false);

  // Methods
  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledComponent>
      <Header onClick={() => onToggle()}>
        <HeaderIcon
          src={getImage("images/icons", isOpen ? "add.svg" : "minus.svg")}
          alt="Toggle"
          width={20}
          height={20}
        />
        <HeaderQuestion>{data.question}</HeaderQuestion>
      </Header>
      <Content open={isOpen}>{data.answer}</Content>
    </StyledComponent>
  );
}

const StyledComponent = styled.div`
  border-bottom: 1px solid ${Colors.gray};
  padding: 15px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const HeaderIcon = styled(Image)`
  display: block;
  width: 20px;
  height: 20px;
`;
const HeaderQuestion = styled.h3`
  margin: 0 0 0 10px;
  color: ${Colors.extremeGray};
  transition: font-size ease-in-out 0.1s;
  font-weight: 600;

  @media screen and (${devices.md}) {
    transition: font-size ease-in-out 0.1s;
    font-size: 1.3em;
  }
`;

interface ContentProps {
  open: boolean;
}

const Content = styled.div<ContentProps>`
  -webkit-transition: max-height 0.5s ease, margin-top 0.5s ease;
  -moz-transition: max-height 0.5s ease, margin-top 0.5s ease;
  -ms-transition: max-height 0.5s ease, margin-top 0.5s ease;
  -o-transition: max-height 0.5s ease, margin-top 0.5s ease;
  transition: max-height 0.5s ease, margin-top 0.5s ease;
  overflow: hidden;
  max-height: 0;
  margin-top: 0px;

  ${(props) => {
    if (props.open) {
      return `
        max-height: 300px;
        margin-top: 20px;
        `;
    }
  }}
`;
