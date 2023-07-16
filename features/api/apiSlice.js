import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
<<<<<<< HEAD
    baseUrl: "http://pmkbd.netlify.app/api",
    // baseUrl: "http://localhost:3000/api",
=======
    baseUrl: "https://pmkbd.netlify.app/api",
>>>>>>> 56a345d52367874cd26ebc6ead9e507a200082fb
  }),
  tagTypes: [],
  keepUnusedDataFor: 10,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({}),
});
