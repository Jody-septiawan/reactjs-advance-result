import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { UserContext } from "../contexts/userContext";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  // consume context value with hooks useContext()
  const context = useContext(UserContext);
  console.log(context.state);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // this is func that we passed from UserContextProvider
    context.dispatch({
      type: "LOGIN",
      payload: data,
    });
    history.push("/");
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Control
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Signin;
