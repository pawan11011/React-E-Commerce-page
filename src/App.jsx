import React from "react";
import NavBar from "./Components/NavBar";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/CheckOut";
import ProductDetail from "./Pages/ProductDetail";
import { Footer } from "./Components/Footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderConfirmation from "./Pages/OrderConfirmation";
export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList />,
    },
    {
      path: "/productDetail/:id",
      element: (
        <>
          <NavBar />
          <ProductDetail />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <NavBar />
          <Cart />
        </>
      ),
    },
    {
      path: "/checkout",
      element: (
        <>
          <NavBar />
          <Checkout />
        </>
      ),
    },
    {
      path: "/orderconfirmation",
      element: (
        <>
          <NavBar />
          <OrderConfirmation />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
