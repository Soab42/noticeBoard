import { apiSlice } from "@features/api/apiSlice";

export const storeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStorageAll: builder.query({
      query: (name) => "storage",
    }),
    addProducts: builder.mutation({
      query: (body) => ({
        url: "products",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetStorageAllQuery } = storeApi;
