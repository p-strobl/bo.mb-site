import { Col, Container, Row, Visible } from "react-awesome-styled-grid";
import styled from "styled-components";

import Logo from "./header/logo";
import BigNavigation from "./header/big-navigation";
import SmallNavigation from "./header/small-navigation";

const StyledStage = styled.div`
  background-color: var(--c-big-stone);
  height: 50vh;
  inset: 0;
  position: absolute;
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

function Stage() {
  return (
    <StyledStage>
      <ImageWrapper></ImageWrapper>
    </StyledStage>
  );
}

const NavContainer = styled(Container)`
  position: relative;
`;

export default function Header() {
  return (
    <header>
      <Container fluid>
        <Stage />
      </Container>
      <NavContainer>
        <Row>
          <Col xs={12} md={2}>
            <Logo />
          </Col>
          <Col xs={12} md={10}>
            <Visible xs sm>
              <SmallNavigation />
            </Visible>
            <Visible md lg xl>
              <BigNavigation />
            </Visible>
          </Col>
        </Row>
      </NavContainer>
    </header>
  );
}
