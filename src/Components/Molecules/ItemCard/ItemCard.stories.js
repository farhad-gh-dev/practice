import React from "react";

import ItemCard from "./ItemCard";

export default {
  title: "Molecules/ItemCard",
  component: ItemCard,
};

const Container = (props) => (
  <div style={{ width: "400px" }}>
    <ItemCard {...props} />
  </div>
);

const Template = (args) => <Container {...args} />;

export const Standard = Template.bind({});
