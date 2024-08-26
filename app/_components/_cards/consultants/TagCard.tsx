import { TagEntity } from "@/app/_types";
import { ILang } from "@/app/lang/dictionaries/ILang";
import React from "react";
import styled from "styled-components";
interface TagCardProps {
  data: TagEntity;
  lang: ILang;
  selected: boolean;
  onClick: (tag: TagEntity) => void;
}
export default function TagCard({
  data,
  lang,
  selected,
  onClick,
}: TagCardProps) {
  const language = lang.name;

  return (
    <StyledComponent selected={selected} onClick={() => onClick(data)}>
      {data.tagName[`${language}`]}
    </StyledComponent>
  );
}

interface StyledComponentProps {
  selected: boolean;
}

const StyledComponent = styled.div<StyledComponentProps>`
  width: fit-content;
  padding: 10px 20px;
  border-radius: 10px;
  //   box-shadow: 10px 10px 30px rgb(0 0 0 / 7%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    box-shadow: 10px 10px 30px rgb(0 0 0 / 15%);
  }
  background-color: ${(props) => (props.selected ? "#1E51E3" : "white")};
  color: ${(props) => (props.selected ? "white" : "#333249")};
  border: 1px solid ${(props) => (props.selected ? "white" : "#333249")};
`;
