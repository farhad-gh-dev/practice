import styled from "styled-components";
import { color, typography } from "../../../Styles/styles";

export const StyledButton = styled.button`
  width: 135px;
  height: 50px;
  padding: 0 20px;
  font-size: ${typography.size.text_18};
  font-weight: ${typography.weight.medium};
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  background-color: #f7f7f7;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(95%);
  }

  &:active {
    transition: 0.1s ease-in-out;
    transform: scale(0.96);
  }

  ${(props) =>
    props.disabled &&
    `
    background-color: #E8E8E8;
    color: ${color.text_disabled};
    cursor: not-allowed;
    pointer-event: none;
    `};
`;

export const StyledLink = StyledButton.withComponent("a");
