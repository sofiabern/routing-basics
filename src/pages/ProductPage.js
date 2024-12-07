import { useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.id}</p>
    </>
  );
};

export default ProductPage;
