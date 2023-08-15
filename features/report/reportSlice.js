import { apiSlice } from "@features/api/apiSlice";

export const reportApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRpReport: builder.query({
      query: (name) => `report`,
    }),
  }),
});

export const { useGetRpReportQuery } = reportApi;
