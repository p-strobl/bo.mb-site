import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-awesome-styled-grid";
import styled from "styled-components";

declare global {
  interface Window {
    addGrid: any;
  }
}

interface StyledGridOverlayProps {
  show: boolean;
}

const StyledGridOverlay = styled.div<StyledGridOverlayProps>`
  display: ${(props) => (props.show ? "block" : "none")};
  inset: 0;
  position: fixed;
  z-index: 1000;
`;

const StyledCol = styled(Col)`
  position: relative;
`;

const Strip = styled.div`
  background-color: var(--red);
  height: 100vh;
  opacity: 0.1;
  transition: opacity 0.25s;
`;

const Index = styled.span`
  bottom: 0;
  position: absolute;
`;

export function GridOverlay() {
  const gridRef = useRef<HTMLInputElement | null>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  function addGrid() {
    setShowOverlay(true);
  }

  function toggleShowOverlay() {
    setShowOverlay(!showOverlay);
  }

  function initWindowListener() {
    window.addGrid = window.addGrid || {};
    window.addGrid = addGrid;
  }

  useEffect(() => {
    initWindowListener();
  }, []);

  return (
    <StyledGridOverlay
      onClick={toggleShowOverlay}
      show={showOverlay}
      role="presentation"
      ref={gridRef}
    >
      <Container>
        <Row>
          {[...Array(12)].map((_, index) => (
            <StyledCol xs={1} key={index}>
              <Strip />
              <Index>{index + 1}</Index>
            </StyledCol>
          ))}
        </Row>
      </Container>
    </StyledGridOverlay>
  );
}
