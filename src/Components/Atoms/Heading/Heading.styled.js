import styled from "styled-components";
import { color } from "../../../Styles/styles";

export const StyledH1 = styled.h1`
  background-color: ${({ theme }) => theme.color.default_background};
  color: ${({ theme }) => theme.color.text};
  font-size: 60px;

  ${(props) =>
    props.isInline &&
    `
    display: inline-block;
    `};

  ${(props) =>
    props.opacity &&
    `
    opacity: ${props.opacity};
    `};

  ${(props) =>
    props.fontWeight &&
    `
    font-weight: ${props.fontWeight};
    `};

  ${(props) =>
    props.textTransform &&
    `
    text-transform: ${props.textTransform};
    `};

  ${(props) =>
    props.overflowEllipsis &&
    `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
`;

export const StyledH2 = styled(StyledH1).attrs({ as: "h2" })`
  font-size: 50px;
`;

export const StyledH3 = styled(StyledH1).attrs({ as: "h3" })`
  font-size: 24px;
`;
