import { createGlobalStyle } from "styled-components";

export const Colors = createGlobalStyle`
  :root {
    --black: #000000;
    --almost-black: #333333;
    --dark-gray: #4F4F4F;
    --gray: #90939D;
    --gray-500: #718096;
    --light-gray: #E5E5E5;
    --very-light-gray: #F9F9F9;

    --white: #FFFFFF;

    --green: #10ac84;
    --light-green: #BFF2E6;

    --red: #e55039;
    --light-red: #FACEC7;

    --yellow: #F1C84B;
    --light-yellow: #FCEAB6;

    --jokati-blue: #287FB8;
    --jokati-dark-blue: #2B3D4F;
    --jokati-light-blue: #BED8F1;
    --jokati-white-blue: #C0DAF2;
    --jokati-gradient: linear-gradient(90deg, var(--jokati-blue), var(--jokati-dark-blue));
  }
`;
