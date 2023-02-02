import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",

    initialState: {
        products: [],
        isLodding: false,
        isError: null,
    },

    reducers: {
        getProductStart: (state) => {
            state.isLodding = true;
        },
        getProductSuccess: (state, action) => {
            state.isLodding = false;
            state.products = action.payload;
        },
        getProductError: (state, action) => {
            state.isError = action.payload;
            state.isLodding = false;
        }
    }
});

export const { getProductStart, getProductSuccess, getProductError } = productsSlice.actions;
export default productsSlice.reducer;