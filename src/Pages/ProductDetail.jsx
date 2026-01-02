import React, { useEffect, useState } from "react";
import { InitialProducts } from "../Data/Product";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    setProduct(InitialProducts.find((product) => product.id == id));
  }, [id]);
  return (
    <>
      <div className="container">
        <Link to={"/Home"}></Link>
      </div>
    </>
  );
};

export default ProductDetail;
