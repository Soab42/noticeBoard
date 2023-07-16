/* eslint-disable no-param-reassign */
/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const selectedDataSlice = createSlice({
  name: "selectedData",
  initialState,
  reducers: {
    addSelectedData: (state, action) => action.payload,
  },
});

export const { addSelectedData } = selectedDataSlice.actions;
export default selectedDataSlice.reducer;
