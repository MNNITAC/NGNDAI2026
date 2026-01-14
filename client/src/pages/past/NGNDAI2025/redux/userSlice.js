import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
    },
    loginFailed: (state, action) => {
      state.user = null;
    },
    logoutSuccess: (state) => {
      state.user = null;
    },
    clearAll: (state) => {
      state.user = null;
    },
  },
});

export const {
  logoutSuccess,
  loginFailed,
  loginSuccess,
  clearAll,
} = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
