import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.users.push(action.payload);
    },
  },
});
export const { increment, decrement, incrementByAmount } = slice.actions;

export default slice.reducer;
