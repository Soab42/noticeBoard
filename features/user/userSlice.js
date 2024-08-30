/* eslint-disable no-param-reassign */
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    email: "",
    name: "",
    code: "",
    day: "",
};

const userSlice = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            // Correctly update the state properties using the action payload
            return { ...state, ...action.payload };
        },
    },
});

export default userSlice.reducer;
export const { updateUser } = userSlice.actions;
