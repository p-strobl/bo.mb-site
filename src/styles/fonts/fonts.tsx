import { createGlobalStyle } from "styled-components";

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: "palanquin";
    font-style: normal;
    font-weight: 100;
    src: url("/fonts/palanquin-light.ttf") format("truetype");
  }
    
  @font-face {
    font-family: "palanquin";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/palanquin-regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "palanquin";
    font-style: normal;
    font-weight: 600;
    src: url("/fonts/palanquin-bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "palanquin";
    font-style: normal;
    font-weight: 900;
    src: url("/fonts/palanquindark-bold.ttf") format("truetype");
  }
`;
