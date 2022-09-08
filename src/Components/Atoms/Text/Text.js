import React from "react";
import { StyledParagraph, StyledSpan } from "./Text.styled";

const Text = ({ children, isSpan, ...props }) => {
  let StyledText = StyledParagraph;
  if (isSpan) {
    StyledText = StyledSpan;
  }
  return <StyledText {...props}>{children}</StyledText>;
};

Text.defaultProps = {
  isInline: false,
  isSpan: false,
  opacity: 1,
  size: "",
  fontWeight: "",
  textTransform: "",
  overflowEllipsis: false,
};

export default Text;
