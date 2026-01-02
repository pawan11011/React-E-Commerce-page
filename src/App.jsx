import React from "react";
import NavBar from "./Components/NavBar";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import ProductDetail from "./Pages/ProductDetail";
import { Footer } from "./Components/Footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList />,
    },
    {},
  ]);
  return <RouterProvider router={router} />;
};

export default App;
