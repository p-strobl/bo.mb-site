import { Col, Container, Row, Visible } from "react-awesome-styled-grid";

import Logo from "./Header/Logo";
import BigNavigation from "./Header/BigNavigation";
import SmallNavigation from "./Header/SmallNavigation";

export default function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col debug xs={4} md={3}>
            <Logo />
          </Col>
          <Col debug xs={4} md={9}>
            <Visible xs sm>
              <SmallNavigation />
            </Visible>
            <Visible md lg xl>
              <BigNavigation />
            </Visible>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
