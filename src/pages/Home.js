import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const handlePushToSignIn = () => {
    history.push("/signin");
  };
  return (
    <Container className="text-center">
      <p className="h1">Home</p>
      <p>
        Cras sit amet mauris ac urna pellentesque rhoncus sed nec felis. Sed
        augue tortor, pretium euismod massa eu, fringilla viverra ante. Proin ut
        nisl neque.
      </p>
      <Button onClick={handlePushToSignIn}>Click to Signin</Button>
    </Container>
  );
}

export default Home;
