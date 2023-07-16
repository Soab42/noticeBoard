import { apiSlice } from "@features/api/apiSlice";

export const dbApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDatabaseAll: builder.query({
      query: (name) => "database",
    }),
    addData: builder.mutation({
      query: (body) => ({
        url: "database",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetDatabaseAllQuery, useAddDataMutation } = dbApi;
