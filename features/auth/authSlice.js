/* eslint-disable no-param-reassign */
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  email: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => action.payload,
    removeUser: (state, action) => initialState,
  },
});

export default authSlice.reducer;
export const { addUser, removeUser } = authSlice.actions;
