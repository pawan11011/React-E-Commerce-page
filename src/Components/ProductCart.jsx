import React, { useEffect, useState } from "react";
import { InitialProducts } from "../Data/Product";
import { Link } from "react-router-dom";

const ProductCart = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    setProducts(InitialProducts);
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
        {product.map((product) => (
          <div
            key={product.id}
            className=" bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transition duration-500 transform border border-gray-800 
          hover:scale-[1.1] hover:shadow-orange-900/40"
          >
            <Link
              to={"/ProductDetails"}
              className="relative cursor-pointer overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-90"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCart;
