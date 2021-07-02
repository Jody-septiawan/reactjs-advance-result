import { createContext, useReducer } from "react";

export const UserContext = createContext();
const initialState = {
  isLogin: false,
  user: {
    id: null,
    email: "",
    password: "",
  },
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: {
          id: null,
          email: "",
          password: "",
        },
        isLogin: false,
      };
    default:
      throw new Error("case unknown");
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
