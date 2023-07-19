import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "@features/api/apiSlice";
import filterSearchReducer from "@features/filterSearch/filterSearchSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterSearchReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
