import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",

    initialState: {
        cart: [],
    },

    reducers: {
        getCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },
        removeItem: (state, action) => {
            const removeCartItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeCartItem;
        }
    }
});

export const { getCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

