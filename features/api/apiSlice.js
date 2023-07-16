import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pmkbd.netlify.app/api",
  }),
  tagTypes: [],
  keepUnusedDataFor: 10,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({}),
});
