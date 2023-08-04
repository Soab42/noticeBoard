import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Function to get the appropriate base URL based on the environment
const getBaseUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.NEXT_PUBLIC_API_BASE_URL_PROD;
  } else {
    return process.env.NEXT_PUBLIC_API_BASE_URL_DEV;
  }
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    prepareHeaders: (headers, { getState }) => {
      const user = getState().user; // Get the user data from the Redux store using getState()
      if (user) {
        headers.set("Authorization", `Bearer ${user.accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  keepUnusedDataFor: 10,
  refetchOnMountOrArgChange: true,

  endpoints: (builder) => ({}),
});
