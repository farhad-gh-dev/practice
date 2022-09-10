import styled from "styled-components";
import { color, typography } from "../../../Styles/styles";

export const StyledParagraph = styled.p`
  display: block;
  background-color: ${({ theme }) => theme.color.default_background};
  color: ${({ theme }) => theme.color.text};
  font-size: ${typography.size.text_16};

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
    props.size === "md" &&
    `
    font-size: ${typography.size.text_16};
    `};

  ${(props) =>
    props.size === "lg" &&
    `
    font-size: ${typography.size.text_18};
    `};

  ${(props) =>
    props.size === "xl" &&
    `
    font-size: ${typography.size.text_20};
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

export const StyledSpan = StyledParagraph.withComponent("span");
