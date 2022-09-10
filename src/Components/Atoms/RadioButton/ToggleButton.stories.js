import React from "react";

import ToggleButton from "./ToggleButton";

export default {
  title: "Atoms/ToggleButton",
  component: ToggleButton,
};

const Template = (args) => <ToggleButton {...args} />;

export const Standard = Template.bind({});

export const Active = Template.bind({});
Active.args = {
  isActive: true,
};
