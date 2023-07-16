import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://pmkbd.netlify.app/api",
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: [],
  keepUnusedDataFor: 10,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({}),
});
