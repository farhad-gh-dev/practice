import styled from "styled-components";

export const StyledInput = styled.div`
  label {
    font-size: 1.2rem;
    display: block;
    margin-bottom: 10px;
  }

  input {
    padding: 10px 15px;
    border-radius: 10px;
    border: 2px solid rgba(0, 0, 0, 0.15);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
    font-size: 1rem;

    &:focus,
    &:active {
      border: 2px solid cornflowerblue;
      outline: none;
    }
  }
`;
