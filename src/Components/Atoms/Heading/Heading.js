import React from "react";
import { StyledH1, StyledH2, StyledH3 } from "./Heading.styled";

const Heading = (props) => {
  const { h1, h2, h3, children = null } = props;

  let HeadingType = StyledH3;
  if (h1) HeadingType = StyledH1;
  if (h2) HeadingType = StyledH2;
  if (h3) HeadingType = StyledH3;

  return <HeadingType {...props}>{children}</HeadingType>;
};

Heading.defaultProps = {
  isInline: false,
  opacity: 1,
  fontWeight: "",
  textTransform: "",
  h1: false,
  h2: false,
  h3: false,
};

export default Heading;
