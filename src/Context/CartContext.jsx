import { createContext, useContext } from "react";

const CartContext = createContext();
import { InitialProducts } from "../Data/Product";

export const CartProvider = ({ children }) => {
  const products = InitialProducts;

  return (
    <CartContext.Provider value={{ products }}>{children}</CartContext.Provider>
  );
};
