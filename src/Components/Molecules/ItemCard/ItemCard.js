import React from "react";
import { StyledItemCard, CardImage, TextArea, Footer } from "./ItemCard.styled";
import Text from "../../Atoms/Text/Text";
import Heading from "../../Atoms/Heading/Heading";
import Button from "../../Atoms/Button/Button";

const ItemCard = ({ imageSrc, title, description, related, link }) => {
  return (
    <StyledItemCard>
      <CardImage
        href="https://wwww.google.com"
        target="_blank"
        rel="noopener noreferrer"
        backgroundImageSrc={imageSrc}
      />
      <TextArea>
        <Heading className="title" textTransform="capitalize" overflowEllipsis>
          {title ? title : "No Title"}
        </Heading>
        <Text
          size="xl"
          fontWeight="600"
          textTransform="capitalize"
          overflowEllipsis
          className="description"
        >
          {description ? description : "No Description"}
        </Text>
        <Footer>
          <div>
            <Text>Related</Text>
            <Text size="xl" fontWeight="600" className="related">
              {related ? related : "."}
            </Text>
          </div>
          <Button isLink href={link} target="_blank" rel="noopener noreferrer">
            Read
          </Button>
        </Footer>
      </TextArea>
    </StyledItemCard>
  );
};

Text.defaultProps = {
  imageSrc: "",
  title: "",
  description: "",
  related: "",
  link: "",
};

export default ItemCard;
