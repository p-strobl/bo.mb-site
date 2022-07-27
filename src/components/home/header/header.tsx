import { Col, Container, Row, Visible } from "react-awesome-styled-grid";
import styled from "styled-components";

import Logo from "~components/shared/logo";
import Navigation from "~components/shared/navigation";

import Stage from "~components/home/header/stage";

const NavContainer = styled(Container)`
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export function Header() {
  return (
    <header>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Stage />
          </Col>
        </Row>
      </Container>

      <NavContainer>
        <Row>
          <Col xs={12} md={2}>
            <Logo />
          </Col>
          <Col xs={12} md={10}>
            <Visible xs sm>
              <Navigation.Small />
            </Visible>
            <Visible md lg xl>
              <Navigation.Big />
            </Visible>
          </Col>
        </Row>
      </NavContainer>
    </header>
  );
}
