import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    allUsers: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { allUsers } = userSlice.actions;
export default userSlice.reducer;
