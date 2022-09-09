import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

const { usersSuccess } = slice.actions;

export const fetchUsers = () => async (dispatch) => {
  try {
    await api.get("/users").then((response) => dispatch(usersSuccess(response.data)));
  } catch (e) {
    return console.error(e.message);
  }
};
export default slice.reducer;
