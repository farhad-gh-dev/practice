import React from "react";

import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  children: "Action",
};

export const Clickable = Template.bind({});
Clickable.args = {
  children: "Click Me",
  onClick: () => alert("Clicked"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  disabled: true,
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  children: "Button With Long Label",
};

export const Link = Template.bind({});
Link.args = {
  children: "Link",
  isLink: true,
  href: "https://google.com",
};

export const LinkNewTab = Template.bind({});
LinkNewTab.args = {
  children: "Link",
  isLink: true,
  href: "https://google.com",
  target: "_blank",
};
