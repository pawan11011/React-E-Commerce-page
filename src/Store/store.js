import cartSlice from "./CartSlice.js";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
