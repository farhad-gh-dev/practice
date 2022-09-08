import React from "react";
import { StyledButton, StyledLink } from "./Button.styled";

const Button = (props) => {
  const { isLink = false, children = null } = props;

  let ButtonRender = StyledButton;
  if (isLink) {
    ButtonRender = StyledLink;
  }

  return <ButtonRender {...props}>{children}</ButtonRender>;
};

Button.defaultProps = {
  variant: "",
  isLink: false,
  onClick: () => {},
};

export default Button;
