import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const DetailProduct = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    return () => {
      setData(null);
    };
  }, []);
  return (
    <Container>
      <h1>Data with parameter {params.id} is</h1>
      <p className="h2">{data?.title}</p>
      <p>{data?.body}</p>
    </Container>
  );
};

export default DetailProduct;
