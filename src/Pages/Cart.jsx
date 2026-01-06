import React from "react";
import { useSelector } from "react-redux";
import { data } from "react-router-dom";
import { ShoppingCart, Zap, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CartItems } from "../Components/CartItems.jsx";

const Cart = () => {
  const Data = useSelector((state) => state.cart.cartItems);
  const totalAmount = Data.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8 ">
        <div className="flex items-center mb-10">
          <Link
            to={"/"}
            className="flex text-gray-500/50 hover:text-orange-400 text-xl"
          >
            <ChevronLeft className=" pt-1 h-7 w-6" />
            <span>Back to Store</span>
          </Link>
        </div>
        <div className="mb-4">
          <span className="text-3xl text-white font-bold tracking-tight">
            Shoping Cart({Data.length})
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          <div className="lg:col-span-2 space-y-4">
            <CartItems />
          </div>
          <div className="lg:col-span-1 p-8 bg-gray-800 rounded-2xl shadow-2xl border-1-4 sticky top-20 h-fit border border-gray-800">
            <h3 className="text-2xl font-bold text-white border-y-gray-600 pb-3 flex items-center space-x-2">
              <div className="flex justify-between">
                <span className="w-6 h-6 text-orange-600">₹</span>
                <span>Order Total</span>
              </div>
            </h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex justify-between text-xl">
                <span>SubTotal :</span>
                <span className="font-semibold text-white">
                  ₹ {totalAmount}
                </span>
              </div>
            </div>
            <div className="space-y-4 text-gray-400 pb-3">
              <div className="flex justify-between text-xl">
                <span>Shipping (Express):</span>
                <span className="font-semibold text-green-600/60">Free</span>
              </div>
            </div>
            <div className="space-y-4 text-gray-400">
              <div className="flex justify-between pb-4 pt-6 border-t border-gray-700 text-xl">
                <span className="text-2xl font-semibold text-white">
                  Estimated Total :
                </span>
                <span className=" text-2xl font-semibold text-white">
                  ₹ {totalAmount}
                </span>
              </div>
            </div>
            <Link to={"/checkout"}>
              <button
                className="max-auto w-full p-4 py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer 
                        hover:bg-orangle-700 transition duration-300 flex items-center justify-center space-x-2 uppercase transform hover:ring-4  hove:ring-pink-400/30 tracking-wider"
              >
                <Zap className="h-7 w-6" />
                <span>Proceed Securely</span>
              </button>
            </Link>
            <p className="text-sm text-center mt-4 text-gray-600">
              All Transactions are Encrypted and Secure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
