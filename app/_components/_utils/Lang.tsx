"use client";
import Colors from "@/app/_utils/Colors";
import { getImage } from "@/app/_utils/Media";
import { setLanguageCookie } from "@/app/actions";
import { ILang } from "@/app/lang/dictionaries/ILang";
import Image from "next/image";
import React, { MouseEventHandler, useEffect, useState } from "react";

// Styled
import styled from "styled-components";

interface LangProps {
  lang: ILang;
}

export default function Lang({ lang }: LangProps) {
  // States
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(lang.name);

  //Effects
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
      setLanguageCookie(storedLanguage);
    }
  }, [language]);

  // Methods
  const onToggle: MouseEventHandler = (event) => {
    setIsOpen(!isOpen);
  };

  const onChangeLang = (selectedLang: string) => {
    setLanguage(selectedLang);
    localStorage.setItem("language", selectedLang);
    window.location.reload(); // Reload to apply the new language
  };

  return (
    <StyledComponent onClick={onToggle}>
      <Icon
        src={getImage(
          "images/icons/langs",
          lang.name === "EN" ? `us_flag.png` : "french_flag.png"
        )}
        width={30}
        height={30}
        unoptimized
        alt={lang.name === "EN" ? "English" : "Français"}
      />
      <Langs open={isOpen}>
        {lang.name === "EN" && (
          <LangItem onClick={() => onChangeLang("fr")}>
            <LangItemIcon
              src={getImage("images/icons/langs", "french_flag.png")}
              alt="Français"
            />
          </LangItem>
        )}
        {lang.name === "FR" && (
          <LangItem onClick={() => onChangeLang("en")}>
            <LangItemIcon
              src={getImage("images/icons/langs", "us_flag.png")}
              alt="English"
            />
          </LangItem>
        )}
      </Langs>
    </StyledComponent>
  );
}

const StyledComponent = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  background-color: ${Colors.primary};
  border-radius: 100px;
  border: none;
  padding: 10px;
  box-shadow: 10px 10px 60px rgb(0 0 0 / 50%);
  display: flex;
  flex-direction: reverse-column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    transform: scale(1.05);
  }
`;

const Icon = styled(Image)`
  display: block;
  max-width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  object-fit: contain;
`;

interface LangsProps {
  open: boolean;
}

const Langs = styled.ul<LangsProps>`
  list-style: none;
  -webkit-transition: max-height 0.2s ease-in-out, opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  -moz-transition: max-height 0.2s ease-in-out, opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  -ms-transition: max-height 0.2s ease-in-out, opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  -o-transition: max-height 0.2s ease-in-out, opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  transition: max-height 0.2s ease-in-out, opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${Colors.primary};
  max-height: 0;
  overflow: hidden;
  border-radius: 20px;
  padding: 20px 10px;
  opacity: 0;
  visibility: hidden;
  z-index: -999;

  ${(props) => {
    if (props.open) {
      return `
        max-height: 100px;
        opacity: 1;
        visibility: visible;
      `;
    }
  }}
`;

const LangItem = styled.li`
  width: 30px;
  height: 30px;
`;
const LangItemIcon = styled.img`
  display: block;
  max-width: 100%;
`;
