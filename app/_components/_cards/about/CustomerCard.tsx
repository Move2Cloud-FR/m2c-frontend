import { ClientEntity } from "@/app/_types";
import { getImage } from "@/app/_utils/Media";
import React from "react";

// Styled
import styled from "styled-components";

// Utils

export default function CustomerCard({ data }: { data: ClientEntity }) {
  return (
    <StyledComponent>
      <Logo
        src={data?.logo || getImage("images/avatars", "unknown.jpeg")}
        alt={data?.name || "Logo"}
      />
    </StyledComponent>
  );
}

const StyledComponent = styled.div`
  width: 150px;
  height: 150px;
  box-shadow: 0 0 60px rgb(0 0 0/7%);
  border-radius: 100px;
`;
const Logo = styled.img`
  display: block;
  width: inherit;
  height: inherit;
  object-fit: cover;
  border-radius: 100px;
`;
