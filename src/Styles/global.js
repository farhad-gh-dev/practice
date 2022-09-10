import { createGlobalStyle, css } from "styled-components";
import { color, typography, breakpoint } from "./styles";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.text_14};
  color: ${color.darkest};
  margin: 0;
  padding: 0;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    font-size: ${typography.size.text_18};
  }

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.bold};
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: ${typography.size.text_22};
  }
  h3 {
    font-size: ${typography.size.text_18};
  }

  @media (min-width: ${breakpoint.laptopScreen}px) {
    h2 {
      font-size: ${typography.size.text_28};
    }
    h3 {
      font-size: ${typography.size.text_22};
    }
  }

  button,
  input,
  textarea,
  select {
    border: none;
    font-family: ${typography.type.primary};
  }

  button {
    padding: 0;
    background-color: transparent;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  &.ReactModal__Body--open {
    overflow: hidden;
    &.hide-intercom #intercom-container {
      display: none;
    }
  }

  .ReactModalPortal > div {
    opacity: 0;
  }

  .ReactModalPortal .ReactModal__Overlay {
    transition: all 200ms ease-in;

    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`

  body {
    ${bodyStyles}
  }
`;
