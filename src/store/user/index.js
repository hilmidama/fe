import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "users",
  initialState: {
    user: [],
  },
  reducers: {
    incrementByAmount: (state, action) => {
      console.log(action);
      state.user.push(action.payload);
    },
  },
});
export const { increment, decrement, incrementByAmount } = slice.actions;

export default slice.reducer;
