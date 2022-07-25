import { createGlobalStyle } from "styled-components";

import { Reset } from "~styles/reset";
import { Fonts } from "~styles/fonts";
import { Colors } from "~styles/variables/colors";

const GlobalStyle = createGlobalStyle`
html {
  display: block;
  width: 100%;
}

body {
  background: teal;
  font-family: "palanquin";
}

img {
  height: auto;
  max-width: 100%;
  overflow: hidden;
}

iframe {
  display: block;
  max-width: 100%;
  overflow: hidden;
}

a:hover {
  cursor: pointer;
}
`;

export default function GlobalStyles() {
  return (
    <>
      <Reset />
      <Fonts />
      <Colors />
      <GlobalStyle />
    </>
  );
}
