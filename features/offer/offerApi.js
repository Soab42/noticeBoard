import { apiSlice } from "@features/api/apiSlice";

export const offerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOffers: builder.query({
      query: (name) => "offer",
    }),
  }),
});

export const { useGetOffersQuery } = offerApi;
