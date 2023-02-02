import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    authenticated: false,
};

const authSlice = createSlice({
    name: 'user',

    initialState,

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        authenticatedTrue: (state) => {
            state.authenticated = true;
        },
        authenticatedFalse: (state) => {
            state.authenticated = false;
        }
    },
});

export const { setUser, authenticatedTrue, authenticatedFalse } = authSlice.actions;
export default authSlice.reducer;