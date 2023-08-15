/* eslint-disable no-param-reassign */
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};

const loanSlice = createSlice({
  name: "loan",
  initialState,
  reducers: {
    addLoan: (state, action) => action.payload,
  },
});

export default loanSlice.reducer;
export const { addLoan } = loanSlice.actions;
