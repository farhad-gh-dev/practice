import { createContext, useReducer } from "react";
import { fetchQuery } from "../Api";

const AppContext = createContext();

const initialState = {
  data: fetchQuery("batman"),
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return initialState;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
