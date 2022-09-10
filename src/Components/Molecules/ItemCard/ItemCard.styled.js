import styled from "styled-components";

export const StyledItemCard = styled.div`
  background-color: ${({ theme }) => theme.color.app_background};
  border-radius: 20px;
  padding: 10px;
  padding-bottom: 24px;
`;

export const CardImage = styled.a`
  display: block;
  width: 100%;
  height: 220px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.default_background};
  margin-bottom: 32px;

  ${(props) =>
    props.backgroundImageSrc &&
    `
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(${props.backgroundImageSrc});
    `};
`;

export const TextArea = styled.div`
  padding: 0 12px;

  .title {
    margin-bottom: 8px;
  }

  .description {
    margin-bottom: 24px;
  }

  .related {
    margin-left: 8px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;
