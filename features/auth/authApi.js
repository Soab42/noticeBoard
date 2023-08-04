import { apiSlice } from "@features/api/apiSlice";

export const storeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addLogin: builder.mutation({
      query: (data) => ({
        url: "auth",
        method: "POST",
        body: data,
      }),
    }),
    removeLogin: builder.mutation({
      query: (data) => ({ url: "auth", method: "POST", body: data }),
    }),
  }),
});

export const { useAddLoginMutation, useRemoveLoginMutation } = storeApi;
