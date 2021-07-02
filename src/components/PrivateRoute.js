import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { UserContext } from "../contexts/userContext";
const PrivateRoute = ({ component: Component, ...rest }) => {
  // we know use dynamic data for validation from user context
  const context = useContext(UserContext);
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          context.state.isLogin ? (
            <Component {...props} />
          ) : (
            <Redirect to="/signin" />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
