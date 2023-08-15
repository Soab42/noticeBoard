import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "@features/api/apiSlice";
import filterSearchReducer from "@features/filterSearch/filterSearchSlice";
import authSliceReducer from "@features/auth/authSlice";
import loanSliceReducer from "@features/loan/loanSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterSearchReducer,
    user: authSliceReducer,
    loan: loanSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
