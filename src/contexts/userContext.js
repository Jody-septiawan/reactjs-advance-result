import { createContext, useState } from "react";

export const UserContext = createContext();
const initialState = {
  isLogin: false,
  user: {
    id: null,
    email: "",
    password: "",
  },
};

export const UserContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const handleLogin = (payload) => {
    setState({ ...state, user: payload, isLogin: true });
  };

  const handleLogout = () => {
    setState({
      user: { id: null, email: "", password: "" },
      isLogin: false,
    });
  };

  return (
    <UserContext.Provider value={{ state, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
