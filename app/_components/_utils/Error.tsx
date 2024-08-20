import Colors from "@/app/_utils/Colors";
import React from "react";

// Styled
import styled from "styled-components";

// Utils

export default function Error({ children }: { children?: React.ReactNode }) {
  return <StyledComponent>{children}</StyledComponent>;
}

const StyledComponent = styled.p`
  color: ${Colors.red};
  margin: 10px 0 0 0;
`;
