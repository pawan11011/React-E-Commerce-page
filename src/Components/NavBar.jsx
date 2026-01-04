import React from "react";
import { Link } from "react-router-dom";
import { Home, ShoppingBag } from "lucide-react";
import Cart from "../Pages/Cart";
import { useSelector } from "react-redux";
const NavBar = () => {
  const count = useSelector((state) => state.cart.cartItems.length);
  return (
    <header
      className="sticky top-0 z-50 bg-gray-900/90 text-white backdrop-blur-md
                   border-b border-orange-500"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to={"/"}>
          <div className="flex items-center space-x-3 cursor-pointer">
            <Home className="w-7 h-7 scale-150 text-orange-500 drop-shadow-lg" />
            <h1 className="text-4xl tracking-widest uppercase">
              PKV<span className="text-4xl text-orange-500 ">Store</span>
            </h1>
          </div>
        </Link>
        <nav>
          <Link
            to="/cart"
            className="relative flex items-center justify-center w-12 h-10 rounded-full 
               bg-gray-800 hover:bg-gray-700 transition duration-300
               shadow-lg hover:shadow-orange-500/40"
          >
            <ShoppingBag className="h-6 w-6 text-orange-500" />

            {count > 0 && (
              <span
                className="absolute -top-1 -right-1 bg-orange-500 text-white 
                   text-xs font-bold w-5 h-4 rounded-full 
                   flex items-center justify-center"
              >
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
      {console.log(count)}
    </header>
  );
};

export default NavBar;
