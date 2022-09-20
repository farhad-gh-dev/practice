import styled from "styled-components";

export const StyledTodoCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 15px;
  margin-bottom: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const DeleteButton = styled.button`
  font-weight: bold;
  color: red;
  background-color: none;
  border: none;
`;
