import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/Product/productSlice.js";
import authReducer from "../components/auth/authSlice.js";
import cartReducer from "../components/cart/cartSlice.js";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
