import { Link, useHistory } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";
const Header = () => {
  // we can use useHistory hook to get history object
  // doc: https://github.com/ReactTraining/history
  const router = useHistory();
  const handlePushToSignUp = () => {
    router.push("/signin");
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
          Detail product with params example
        </Link>
      </Nav>
      <Button variant="info" onClick={handlePushToSignUp}>
        Sign in
      </Button>
    </Navbar>
  );
};

export default Header;
