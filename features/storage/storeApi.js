import { apiSlice } from "@features/api/apiSlice";

export const storeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStorageAll: builder.query({
      query: (name) => "storage",
    }),
    addFile: builder.mutation({
      query: (body) => ({
        url: "upload",
        method: "POST",
        body: body,
      }),
      onQueryStarted() {
        console.log(arguments);
      },
    }),
  }),
});

export const { useGetStorageAllQuery, useAddFileMutation } = storeApi;
