import { createGlobalStyle } from "styled-components";

/**
 * Colors are defined as CSS variables for use to be able to change them in runtime.
 * That also makes them work with media queries, like those for 'prefers-colors-scheme'.
 */

export const ColorStyleSheet = createGlobalStyle`
  :root {
    /* Colors */
    --darkGreen: #246C5E;
    --lightGray: #E7E7F0;
    --beige: #FFF4EE;
    --pink: #D7A1AC;
    --orange: #FB7E4C;
    --black: #050505;
    --lightBlue: #ACCAFC;
    --offBlack: #191F29;

    /* Color uses */
    --backgroundColor: var(--white);
    --backgroundColor2: var(--beige);

    /* Dark mode overrides */
    @media (prefers-color-scheme: dark) {
      --backgroundColor: var(--black);
      --backgroundColor2: var(--offBlack);
    }
  }
`;

/* TypeScript color definitions */
export const colors = {
  darkGreen: "var(--darkGreen)",
  lightGray: "var(--lightGray)",
  beige: "var(--beige)",
  pink: "var(--pink)",
  orange: "var(--orange)",
  black: "var(--black)",
  lightBlue: "var(--lightBlue)",
  offBlack: "var(--offBlack)"
};
