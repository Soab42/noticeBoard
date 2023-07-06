import { apiSlice } from "@features/api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (name) => "db",
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

export const { useGetProductsQuery, useAddProductsMutation } = productsApi;
