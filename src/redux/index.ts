import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

export const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
