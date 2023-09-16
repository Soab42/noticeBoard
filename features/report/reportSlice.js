import { apiSlice } from "@features/api/apiSlice";

export const reportApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRpReport: builder.query({
      query: (date) => `report?date=${date}`,
    }),
    addReportData: builder.mutation({
      query: (data) => ({
        url: "report",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetRpReportQuery, useAddReportDataMutation } = reportApi;
