import styled from "styled-components";
import { typography } from "../../../Styles/styles";

export const StyledToggleButton = styled.button`
  position: relative;
  width: 100px;
  height: 45px;
  background-color: ${({ theme }) => theme.color.default_background};
  border: 2px solid ${({ theme }) => theme.color.inverse_background};
  border-radius: 50px;
  text-align: ${(props) => (props.isActive ? "right" : "left")};
  padding: 0 13px;
  transition: 0.2s ease-in-out;

  div {
    font-size: ${typography.size.text_16};
    font-weight: ${typography.weight.bold};
    text-transform: capitalize;
    color: ${({ theme }) => theme.color.text};
  }

  &::after {
    content: "";
    position: absolute;
    left: ${(props) => (props.isActive ? "5px" : "57px")};
    top: 50%;
    transform: translateY(-50%);
    height: 30px;
    width: 35px;
    background-color: ${({ theme }) => theme.color.inverse_background};
    border-radius: 35px;
    transition: 0.2s ease-in-out;
  }
`;
