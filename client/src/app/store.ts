import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../auth/authSlice";
import { apiSlice } from "../apis";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});
