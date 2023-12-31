import { createReducer } from "@reduxjs/toolkit";
export const userReducer = createReducer({}, {

    registerRequest: (state) => {
        state.loading = true;
    },
    registerSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message
    },
    registerFail: (state, action) => {

        state.loading = false;
        state.isAuthenticated = false;
        state.user = action.payload.user;
        state.error = action.payload
    },
    loginRequest: (state) => {
        state.loading = true;
    },
    loginSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message
    },
    loginFail: (state, action) => {

        state.loading = false;
        state.isAuthenticated = false;
        state.user = action.payload.user;
        state.error = action.payload
    },

});

