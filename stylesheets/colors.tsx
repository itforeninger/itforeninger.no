import { createGlobalStyle } from 'styled-components';

/**
 * Colors are defined as CSS variables for use to be able to change them in runtime.
 * That also makes them work with media queries, like those for 'prefers-colors-scheme'.
 */

export const ColorStyleSheet = createGlobalStyle`
  :root {
    /* Colors */
    --darkGreen: #246C5E;
    --lightGray: #E7E7F0;
    --gray: #4D4D4D;
    --beige: #FFF4EE;
    --pink: #D7A1AC;
    --orange: #FB7E4C;
    --black: #050505;
    --lightBlue: #ACCAFC;
    --offBlack: #191F29;
    --white: #FFFFFF;
    --lightBlack: #282923;
    --darkGray: #40403A;
    --dullGreen: #ADC398;

    /* Color uses */
    --backgroundColor: var(--white);
    --backgroundColor2: var(--beige);
    --paragraphColor: var(--black);
    --accentColor1: var(--orange);
    --accentColor2: var(--darkGreen);

    /* Dark mode overrides */
    @media (prefers-color-scheme: dark) {
      --backgroundColor: var(--lightBlack);
      --backgroundColor2: var(--darkGray);
      --paragraphColor: var(--beige);
      --accentColor1: var(--dullGreen);
      --accentColor2: var(--beige);
    }
  }
`;

/* TypeScript color definitions */
export const colors = {
  gray: 'var(--gray)',
  darkGreen: 'var(--darkGreen)',
  lightGray: 'var(--lightGray)',
  beige: 'var(--beige)',
  pink: 'var(--pink)',
  orange: 'var(--orange)',
  black: 'var(--black)',
  lightBlue: 'var(--lightBlue)',
  offBlack: 'var(--offBlack)',
  white: 'var(--white)',
  lightBlack: 'var(--lightBlack)',
  darkGray: 'var(--darkGray)',
  dullGreen: 'var(--dullGreen)',
  backgroundColor: 'var(--backgroundColor)',
  backgroundColor2: 'var(--backgroundColor2)',
  paragraphColor: 'var(--paragraphColor)',
  accentColor1: 'var(--accentColor1)',
  accentColor2: 'var(--accentColor2)',
};
