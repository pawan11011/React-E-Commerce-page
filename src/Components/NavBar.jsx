import React from "react";
import { Link } from "react-router-dom";
import { Home, ShoppingBag } from "lucide-react";
import Cart from "../Pages/Cart";
const NavBar = () => {
  return (
    <header className="sticky top-0 bg-gray-900/90 text-white backdrop-blur-md border border-b-orange-500 border-t-0 border-l-0 border-r-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to={"/"}>
          <div className="flex items-center space-x-3 cursor-pointer">
            <Home className="w-8 h-8 scale-150 text-orange-500 drop-shadow-lg" />
            <h1 className="text-4xl tracking-widest uppercase">
              PKV<span className="text-4xl text-orange-500 ">Store</span>
            </h1>
          </div>
        </Link>
        <nav>
          <Link to={Cart}>
            <ShoppingBag />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
