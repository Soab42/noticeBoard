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
  }),
});

export const { useGetDatabaseAllQuery, useAddDataMutation } = dbApi;
