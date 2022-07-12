import Image from "next/image";
import { Col, Container, Row } from "react-awesome-styled-grid";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <Image src="/netliheart.svg" alt="Netlify Logo" className="logo" layout="fill" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
