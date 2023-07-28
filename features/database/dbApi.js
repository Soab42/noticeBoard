import { apiSlice } from "@features/api/apiSlice";

export const dbApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDatabaseAll: builder.query({
      query: (name) => "database",
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
                const dataArray = draft[singleData.data.category];
                if (!dataArray) {
                  // If the category array doesn't exist, create a new array for the category
                  draft[singleData.data.category] = [singleData.data];
                  return draft;
                } else {
                  // If the category array exists, push the new object into it
                  dataArray.push(arg);
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
  }),
});

export const { useGetDatabaseAllQuery, useAddDataMutation } = dbApi;
