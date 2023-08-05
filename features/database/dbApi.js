import { apiSlice } from "@features/api/apiSlice";

export const dbApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDatabaseAll: builder.query({
      query: (name) => ({ url: "database" }),
    }),
    addData: builder.mutation({
      query: (data) => ({
        url: "upload",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const singleData = await queryFulfilled;

          // all quiz pessimistic cache update start
          dispatch(
            apiSlice.util.updateQueryData(
              "getDatabaseAll",
              undefined,
              (draft) => {
                draft.push(singleData.data);
              }
            )
          );
          // pessimistic cache update end
        } catch (err) {
          console.log(err);
        }
      },
    }),
    editData: builder.mutation({
      query: (data) => ({
        url: `upload/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const updatedData = await queryFulfilled;

          // all quiz pessimistic cache update start
          dispatch(
            apiSlice.util.updateQueryData(
              "getDatabaseAll",
              undefined,
              (draft) => {
                //write code for edit only tag and date data
                // Find the data to be updated in the cache based on its ID
                const dataToUpdate = draft.find(
                  (data) => data.id === updatedData.id
                );
                if (dataToUpdate) {
                  // Update only the "tag" and "date" fields of the data in the cache
                  dataToUpdate.tag = updatedData.tag;
                  dataToUpdate.date = updatedData.date;
                }
              }
            )
          );
          // pessimistic cache update end
        } catch (err) {
          console.log(err);
        }
      },
    }),
    deleteData: builder.mutation({
      query: (data) => ({
        url: "delete",
        method: "DELETE",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const deletedData = await queryFulfilled;
          // console.log(deletedData);
          // all quiz pessimistic cache update start
          dispatch(
            apiSlice.util.updateQueryData(
              "getDatabaseAll",
              undefined,
              (draft) => {
                //write code for delete data
                // Filter out the deleted data from the cache
                draft = draft.filter((data) => data.id !== arg.id);
                // Return the updated draft to apply the changes
                return draft;
              }
            )
          );
          // pessimistic cache update end
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const {
  useGetDatabaseAllQuery,
  useAddDataMutation,
  useDeleteDataMutation,
  useEditDataMutation,
} = dbApi;
