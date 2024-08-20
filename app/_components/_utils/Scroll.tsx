"use client";

import Colors from "@/app/_utils/Colors";
import { getImage } from "@/app/_utils/Media";
import { devices } from "@/app/_utils/Responsive";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

// Styled
import styled from "styled-components";

export default function Scroll() {
  // States
  const [visible, setVisible] = useState(false);

  // Router
  const location = usePathname();

  // Effects
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Methods
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (
      scrollY > windowHeight / 2 &&
      scrollY + windowHeight < documentHeight - 300
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <StyledComponent
      visible={visible.toString()}
      onClick={scrollToTop}
      onScroll={onScroll}
    >
      <Icon
        src={getImage("images/icons", "up-arrow.svg")}
        width={20}
        height={20}
        alt="Scroll to top"
      />
    </StyledComponent>
  );
}

interface StyledComponentProps {
  visible: string;
}

const StyledComponent = styled.button<StyledComponentProps>`
  display: none;
  z-index: 1000;

  @media screen and (${devices.lg}) {
    ${(props) => {
      if (props.visible === "true") {
        return `
            display: block;
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            background-color: ${Colors.primary};
            border-radius: 100px;
            border: none;
            padding: 10px;
            box-shadow: 10px 10px 60px rgb(0 0 0 / 50%);
            transition: .2s;
            cursor: pointer;
            
            &:hover {
                transition: .2s;
                transform: scale(1.05);
            }
            `;
      }
    }}
  }
`;

const Icon = styled(Image)`
  display: block;
  max-width: 100%;
`;
