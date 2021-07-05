import { Container } from "react-bootstrap";
// import component
import DetailAbout from "../components/DetailAbout";

const About = () => {
  return (
    <Container className="text-center">
      <p className="h1">About Us</p>
      <p>
        Maecenas bibendum vel tortor non congue. Maecenas at sodales turpis, id
        maximus odio. Donec aliquet elementum mauris, vel semper tortor ultrices
        a.
      </p>
      <DetailAbout
        title="Success.ltd"
        summary="No. 1 Automobile company in USA"
        total="1300"
      />
    </Container>
  );
};

export default About;
