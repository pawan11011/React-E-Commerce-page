import React, { useState } from "react";
import { Package, MapPin } from "lucide-react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const Data = useSelector((state) => state.cart.cartItems);
  const total = Data.reduce(
    (total = 0, item) => total + item.price * item.quantity,
    0
  );
  const [details, setDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
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
            <form action="" className="space-y-6">
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
        </div>
      </div>
    </>
  );
};

export default Checkout;
