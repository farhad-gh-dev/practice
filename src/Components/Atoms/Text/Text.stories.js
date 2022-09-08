import React from "react";

import Text from "./Text";

export default {
  title: "Atoms/Text",
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  children: "hello",
};

export const DifferentSizes = Template.bind({});
DifferentSizes.args = {
  children: "hello",
  size: "lg",
};
