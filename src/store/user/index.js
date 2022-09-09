import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "users",
  initialState: {
    user: [],
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.user.push(action.payload);
    },
    clear: (state) => {
      state.user = [];
    },
  },
});
export const { clear, incrementByAmount } = slice.actions;

export default slice.reducer;
