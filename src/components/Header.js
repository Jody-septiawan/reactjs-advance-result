import { Link, useHistory } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";
const Header = () => {
  // we can use useHistory hook to get history object
  // doc: https://github.com/ReactTraining/history
  const router = useHistory();
  const handlePushToSignUp = () => {
    router.push("/signup");
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
      </Nav>
      <Button variant="info" onClick={handlePushToSignUp}>
        Sign in
      </Button>
    </Navbar>
  );
};

export default Header;
