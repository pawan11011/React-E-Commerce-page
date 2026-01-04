import React from "react";
import NavBar from "../Components/NavBar";
import SearchFilter from "../Components/SearchFilter";
import CategoryFilter from "../Components/CategoryFilter";
import { InitialProducts } from "../Data/Product";

import ProductCart from "../Components/ProductCart";

const ProductList = () => {
  const allProduct = InitialProducts.length;
  return (
    <div className="min-h-screen bg-gray-900 font-sans ">
      <NavBar />

      <div className="container mx-auto px-4 md:px-8 pt-8">
        <SearchFilter />
        <CategoryFilter />
        <h2 className="text-2xl text-white font-bold mx-auto px-4 md:px-4 pt-3 pb-6">
          Featured Products ({allProduct} Items)
        </h2>
        <ProductCart />
      </div>
    </div>
  );
};

export default ProductList;
