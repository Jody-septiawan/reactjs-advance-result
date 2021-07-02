import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const params = useParams();
  return (
    <div>
      <h1>Detail product page with parameter: {params.id}</h1>
    </div>
  );
};

export default DetailProduct;
