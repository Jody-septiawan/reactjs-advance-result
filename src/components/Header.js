import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";

import { UserContext } from "../contexts/userContext";
const Header = () => {
  // we can use useHistory hook to get history object
  // doc: https://github.com/ReactTraining/history
  const router = useHistory();

  const { state, dispatch } = useContext(UserContext);
  const handlePushToSignUp = () => {
    router.push("/signin");
  };

  const handleSignout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/" className="nav-link">
        <Navbar.Brand>Home</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
        <Link to="/product/2" className="nav-link">
          Detail product
        </Link>
      </Nav>
      {state.isLogin && (
        <>
          <Navbar.Text className="mr-3">Hello {state.user.email}</Navbar.Text>
          <Button variant="danger" onClick={handleSignout}>
            Sign out
          </Button>
        </>
      )}
      {!state.isLogin && (
        <Button variant="info" onClick={handlePushToSignUp}>
          Sign in
        </Button>
      )}
    </Navbar>
  );
};

export default Header;
