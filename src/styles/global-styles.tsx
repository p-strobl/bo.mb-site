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
  font-family: "palanquin";
  margin: 0 auto;
  max-width: 1980px;
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
