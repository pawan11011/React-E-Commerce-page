import React from "react";
import { useSelector } from "react-redux";
import { data } from "react-router-dom";
import { ShoppingCart, Zap, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const Data = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <div className="flex items-center mb-10">
          <Link
            to={"/"}
            className="flex text-gray-500/50 hover:text-orange-400 text-2xl"
          >
            <ChevronLeft className="h-9 w-8" />
            <span>Back to Store</span>
          </Link>
        </div>
        <div className="">
          <span className="text-3xl text-white font-bold tracking-tight">
            Shoping Cart({Data.length})
          </span>
        </div>
        <div className="grip col-span-1 lg:col-span-3 gap-10">
          <div className="lg:col-span-2 space-y-4"></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
