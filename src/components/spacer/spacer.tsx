import styled from "styled-components";

interface ISpacer {
  size: number;
}

const StyledSpacer = styled.span<ISpacer>`
  display: block;
  margin-top: ${(props) => `${props.size}px`};
`;

export function Spacer({ size }: ISpacer) {
  return <StyledSpacer size={size} />;
}
