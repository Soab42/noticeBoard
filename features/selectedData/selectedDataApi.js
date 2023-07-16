import { apiSlice } from "@features/api/apiSlice";

export const storeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSelectedData: builder.query({
      query: (name) => `database/${name}`,
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

export const { useGetSelectedDataQuery } = storeApi;
