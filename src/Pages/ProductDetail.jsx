import React, { useEffect, useState } from "react";
import { InitialProducts } from "../Data/Product";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Tag } from "lucide-react";
import { Zap } from "lucide-react";
import { ShoppingCart } from "lucide-react";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    setProduct(InitialProducts.find((product) => product.id == Number(id)));
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-400">
        Loading product...
      </div>
    );
  }
  return (
    <>
      <div className="min-h-full bg-gray-900 min-w-full">
        <div className="container mx-auto px-4 bg-gray-900 min-h-screen rounded-2xl shadow-2xl my-8 md:p-12 border border-gray-800">
          <Link to={"/"}>
            <button className="cursor-pointer flex items-center gap-3 text-xl text-gray-600 hover:text-orange-500 transition duration-500 mb-8 mt-0 ">
              <ChevronLeft />
              <span>Back to Products </span>
            </button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <div className="w-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-[400px] h-[500px] object-cover rounded-2xl shadow-gray-950/90 border-4 border-gray-800"
              />
            </div>
            <div className="flex flex-col justify-between ">
              <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight tracking-tighter">
                {product.name}
              </h1>
              <p className="text-2xl font-extrabold text-orange-600 mb-4">
                {product.price.toFixed(2)}
              </p>
              <h2 className="text-xl font-bold text-gray-700 mb-2 border-b border-b-orange-600 flex items-center pb-2 space-x-2">
                <Tag className="text-orange-500 w5 h-5" />
                <span>Product OverView</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-3">
                {product.description}
              </p>
              <ul className="space-y-3 text-gray-300 p-4 bg-gray-600 rounded-xl border border-gray-600 ">
                <li className="flex items-center space-x-3 text-lg">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span>High-Quality, Professional Grade Materials</span>
                </li>
                <li className="flex items-center space-x-3 text-lg">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span>1 Year manifaturing warranty</span>
                </li>
                <li className="flex items-center space-x-3 text-lg">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span>Immediate shipping is Available</span>
                </li>
              </ul>
              <div className="flex flex-col gap-4 pt-4 pb-8">
                <button
                  className="max-auto w-full py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer 
            hover:bg-orangle-700 transition duration-300 flex items-center justify-center space-x-2  transofrm hover:ring-4  hove:ring-pink-400/30 uppercase tracking-wider"
                >
                  <ShoppingCart className="h-6 w-6" />
                  <span>Add to cart</span>
                </button>

                <Link
                  to={"/"}
                  className="w-full border-2 border-orange-500 py-3  text-white font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer
              hover:bg-orange-500/80 transition duration-300 flex items-center justify-center uppercase"
                >
                  Keep Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
