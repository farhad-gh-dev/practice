import styled from "styled-components";

export const StyledDiscoverPanel = styled.div`
  padding: 70px 0;
  .title {
    margin-bottom: 50px;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  column-gap: 25px;
  row-gap: 30px;
`;
