import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart, removeFromCart } from "../Store/CartSlice";
import { X } from "lucide-react";

export const CartItems = () => {
  const Data = useSelector((state) => state.cart.cartItems);
  const dispach = useDispatch();
  return (
    <>
      {Data.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between gap-4 p-4 mb-4 
               bg-gray-900 rounded-xl border border-gray-800 shadow-2xl"
        >
          <div className="flex items-center gap-4 ">
            <img
              src={item.image}
              alt={item.name}
              className="h-24 w-24 object-cover rounded-lg border-2 border-gray-700"
            />

            <div className="flex-1 min-w-0">
              <h3 className="text-xl text-white line-clamp-1">{item.name}</h3>
              <p className="text-xl text-orange-500">
                ₹ {item.price.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="flex items-center border border-gray-700 rounded-full overflow-hidden shadow-lg">
            <button
              onClick={() => dispach(removeFromCart(item))}
              className="w-8 h-8 bg-gray-800 hover:bg-gray-700"
            >
              -
            </button>

            <span className="px-3 text-white font-bold">{item.quantity}</span>

            <button
              className="w-8 h-8 bg-gray-800 hover:bg-gray-700"
              onClick={() => dispach(addToCart(item))}
            >
              +
            </button>
          </div>
          <p className="font-extrabold text-lg text-orange-500 w-24 text-right hidden md:block">
            ₹{(item.price * item.quantity).toFixed(2)}
          </p>
          <button
            onClick={() => {
              dispach(deleteFromCart(item));
            }}
          >
            <X className="bg-red-500 rounded-full text-white text-xs p-1" />
          </button>
        </div>
      ))}
    </>
  );
};
