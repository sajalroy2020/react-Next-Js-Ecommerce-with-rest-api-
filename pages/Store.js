import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/AuthSlice";
import productsReducer from "../features/Auth/ProductsSlice";
import CartReducer from "../features/Auth/CartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: CartReducer,
  }
});

export default store;
