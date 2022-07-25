import { Col, Container, Row, Visible } from "react-awesome-styled-grid";
import styled from "styled-components";

import Logo from "./header/logo";
import BigNavigation from "./header/big-navigation";
import SmallNavigation from "./header/small-navigation";

const StyledStage = styled.div`
  background-color: aqua;
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
      <ImageWrapper>Stage</ImageWrapper>
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
          <Col xs={12} sm={3}>
            <Logo />
          </Col>
          <Col xs={12} sm={9}>
            <Visible xs>
              <SmallNavigation />
            </Visible>
            <Visible sm md lg xl>
              <BigNavigation />
            </Visible>
          </Col>
        </Row>
      </NavContainer>
    </header>
  );
}
