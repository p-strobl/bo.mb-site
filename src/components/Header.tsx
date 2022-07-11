import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: "12rem";
  font-weight: bold;
  position: absolute;
`;

export default function Header() {
  return <StyledH1>Next + Contentful Starter</StyledH1>;
}
