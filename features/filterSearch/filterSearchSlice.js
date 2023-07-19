/* eslint-disable no-param-reassign */
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  filter: "ALL",
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },

    addSearch: (state, action) => {
      state.search = action.payload.toLowerCase();
    },
  },
});

export default filterSlice.reducer;
export const { addFilter, addSearch } = filterSlice.actions;
