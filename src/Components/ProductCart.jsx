import React, { useEffect, useState } from "react";
import { InitialProducts } from "../Data/Product";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";

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
              to={`/ProductDetail/${product.id}`}
              className="relative cursor-pointer overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-90"
              />
              <div className="absolute bottom-0 left-0 bg-orange-500/80 text-white  px-5 py-4 font-bold shadow-lg rounded-tr-md">
                ₹ {product.price.toFixed(2)}
              </div>
            </Link>
            <div className="p-5 flex flex-col grow">
              <Link to={`/productDetail/${product.id}`}>
                <h3 className="text-xl font-bold text-white hover:text-orange-500/80">
                  {product.name}
                </h3>
              </Link>
              <p className="text-gray-400 text-sm mb-4 mt-auto">
                {product.description}
              </p>
              <div className="flex items-center justify-start pb-3">
                <span className="px-3  py-1 bg-gray-700 border border-gray-700 rounded-full font-semibold text-sm text-white/80">
                  {product.category}
                </span>
              </div>
              <button
                className="max-auto w-full py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center gap-2
              transform hover:ring-4 hover:ring-pink-600/80 uppercase"
              >
                <ShoppingCartIcon className="w-5 h-5" />
                <span> Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCart;
