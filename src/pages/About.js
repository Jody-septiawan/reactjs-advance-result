import { Container, Button } from "react-bootstrap";
import DetailProfile from "../components/DetailProfile";
function About() {
  return (
    <Container className="text-center">
      <p className="h1">About Us</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Button>Touch me!</Button>
      <DetailProfile
        title="Dumbways"
        description="lorem ipsum dolor sit amet lorem lorem lorem"
        summary="Just our company about"
        total={125}
      />
    </Container>
  );
}

export default About;
