import { createContext, useReducer } from "react";

const GlobalContext = createContext();

function GlobalReducer(state, action) {
  switch (action.type) {
    case "setTheme":
      return { ...state, theme: action.payload };
    case "setAuth":
      return { ...state, auth: action.payload };
  }
  
}
const initialState = {
    theme: "light",
    auth: "register",
  };

  export function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    return (
      <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContext.Provider>
    );
  }


export default GlobalContext;
