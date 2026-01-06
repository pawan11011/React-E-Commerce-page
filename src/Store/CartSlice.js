import { createSlice } from "@reduxjs/toolkit";
import { Filter } from "lucide-react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const ExistingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (ExistingItem) {
        ExistingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const ExistingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (ExistingItem.quantity > 1) {
        ExistingItem.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id != action.payload.id
      );
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
