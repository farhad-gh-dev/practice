import React from "react";
import { StyledDiscoverPanel, CardsContainer } from "./DiscoverPanel.styled";
import ItemCard from "../../Molecules/ItemCard/ItemCard";
import Heading from "../../Atoms/Heading/Heading";

const DiscoverPanel = ({ data = [] }) => {
  return (
    <StyledDiscoverPanel>
      <Heading h2 className="title">
        Discover
      </Heading>
      <CardsContainer>
        {data.map((item) => {
          const cardProps = {
            imageSrc: item.i.imageUrl,
            title: item.l,
            description: item.s,
          };
          return <ItemCard key={item.id} {...cardProps} />;
        })}
      </CardsContainer>
    </StyledDiscoverPanel>
  );
};

export default DiscoverPanel;
