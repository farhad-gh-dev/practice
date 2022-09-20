import React from "react";
import TodoList from "./features/TodoList/TodoList";
import { StyledApp } from "./Styles/App.styled";
import { GlobalStyle } from "./Styles/global";

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <TodoList />
    </StyledApp>
  );
}

export default App;
