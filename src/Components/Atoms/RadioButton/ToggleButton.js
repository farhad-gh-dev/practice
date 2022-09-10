import React from "react";
import { StyledToggleButton } from "./ToggleButton.styled";

const ToggleButton = (props) => {
  const { onTitle = "On", offTitle = "Off", isActive = false, onClick } = props;
  const title = isActive ? onTitle : offTitle;

  return (
    <StyledToggleButton isActive={isActive} onClick={onClick}>
      <div>{title}</div>
    </StyledToggleButton>
  );
};

ToggleButton.defaultProps = {
  isActive: false,
  onTitle: "On",
  offTitle: "Off",
  onClick: () => {},
};

export default ToggleButton;
