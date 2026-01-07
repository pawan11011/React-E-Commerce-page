import React, { useState } from "react";
import { Package, MapPin, Zap } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Store/CartSlice";
import { Link } from "react-router-dom";
import OrderConfirmation from "./OrderConfirmation";
const Checkout = () => {
  const Data = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const total = Data.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const [isConfirmed, setIsConfirmed] = useState(false);

  const [details, setDetails] = useState({
    name: "your name",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    setIsConfirmed(true);
  };
  if (isConfirmed) return <OrderConfirmation />;
  return (
    <>
      {console.log(details)}
      <div className=" container mx-auto px-4  md:px-8 pt-8">
        <h2 className="text-4xl font-bold text-white mb-10 tracking-tight">
          Finalize Order
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800">
            <h3 className="text-3xl font-bold text-orange-400 mb-6 flex items-center space-x-3 border-b border-gray-700 pb-4">
              <MapPin className="w-7 h-7 text-orange-500" />
              <span>Shipping Information</span>
            </h3>
            <form action="" onSubmit={handleSubmit} className="space-y-6">
              {Object.keys(details).map((key) => (
                <div key={key}>
                  <label
                    className="text-gray-300 capitilize mb-1 block text-sm font-semibold "
                    htmlFor={key}
                  >
                    {key === "zip" ? "Pin Code" : key}
                  </label>
                  <input
                    onChange={handleChange}
                    id={key}
                    name={key}
                    value={details[key]}
                    required
                    type={key === "zip" ? "number" : "text"}
                    className="mt-1 block w-full px-5 py-3 border border-gray-700 shadow-inner rounded-xl bg-gray-800 text-white placeholder-gray-500"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="max-auto w-full p-15 py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer 
                        hover:bg-orangle-700 transition duration-300 flex items-center justify-center space-x-2 uppercase transform hover:ring-4  hove:ring-pink-400/30 tracking-wider"
              >
                <span>Pay and confirm order (₹ {total})</span>
              </button>
            </form>
          </div>
          <div className="lg:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl border-1-4 sticky top-20 h-fit border border-gray-800">
            <h3 className="text-2xl font-bold text-white border-y-gray-600 pb-3 flex items-center space-x-2">
              <div className="flex justify-between">
                <span className="w-6 h-6 text-orange-600">₹</span>
                <span>Order Summary</span>
              </div>
            </h3>
            <div className="space-y-1 text-gray-400">
              {Data.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4 mt-3 text-gray-400">
              <div className="flex justify-between text-xl">
                <span>SubTotal :</span>
                <span className="font-semibold text-white">₹ {total}</span>
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
                  ₹ {total}
                </span>
              </div>
            </div>
            <Link to={"/orderconfirmation"}>
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

export default Checkout;
