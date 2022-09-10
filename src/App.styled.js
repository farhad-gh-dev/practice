import styled, { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.color.app_background};
  }
`;

export const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 1680px;

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }

  ${globalStyle}
`;
