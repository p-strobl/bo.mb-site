import styled from "styled-components";

import ClipPathCurve from "~components/clip-path-curve";

const StyledStage = styled.div`
  filter: drop-shadow(0px 6px 6px rgba(var(--c-big-stone--rgb), 0.6));
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  background-color: var(--c-big-stone);
  clip-path: url(#clip-path-curve);
  height: 50vh;
`;

export function Stage() {
  return (
    <StyledStage>
      <Wrapper>
        <ImageWrapper></ImageWrapper>
        <ClipPathCurve />
      </Wrapper>
    </StyledStage>
  );
}
