import { useContext } from "react";
import { Col, Container, Row } from "react-awesome-styled-grid";
import { HackyActionContext, HackyActionContextType } from "~context/hacky-action-provider";

export default function Main() {
  const {
    hackyActionContext: { date, location },
  } = useContext(HackyActionContext) as HackyActionContextType;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const newDate = new Date(date);
  const localDate = newDate.toLocaleDateString("de-DE", options);
  return (
    <main>
      <Container>
        <Row>
          <Col>{localDate}</Col>
          <Col>{JSON.stringify(location)}</Col>
        </Row>
      </Container>
    </main>
  );
}
