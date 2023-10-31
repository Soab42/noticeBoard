import { apiSlice } from "@features/api/apiSlice";

export const guideApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGuideAll: builder.query({
      query: () => `guide`,
      providesTags: ["allGuides"],
    }),
    getGuideSingle: builder.query({
      query: (id) => `guide/${id}`,
    }),
    addData: builder.mutation({
      query: ({ data, category }) => ({
        url: `guide/${category}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["allGuides"],
    }),
    editData: builder.mutation({
      query: (data) => ({
        url: "guide/update",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["allGuides"],
    }),
    deleteData: builder.mutation({
      query: (data) => ({
        url: "guide",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["allGuides"],
    }),
  }),
});

export const {
  useGetGuideAllQuery,
  useGetGuideSingleQuery,
  useAddDataMutation,
  useDeleteDataMutation,
  useEditDataMutation,
} = guideApi;
