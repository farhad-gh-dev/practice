import { createGlobalStyle, css } from "styled-components";

const styles = css`
  *,
  input {
    box-sizing: border-box;
  }

  body {
    font-family: arial;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
    ${styles}
`;
