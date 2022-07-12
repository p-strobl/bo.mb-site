import styled from "styled-components";
import { Col, Container, Row } from "react-awesome-styled-grid";

const StyledH1 = styled.h1`
  font-size: "12rem";
  font-weight: bold;
  position: absolute;
`;

export default function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </header>
  );
}
