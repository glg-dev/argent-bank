import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    // user: null,
    // isLoggedIn: false,
    // isLoading: false,
    // error: null,
    // password: null,
    // token: null,
    isRemembered: false
  },
  reducers: {
    remember: (state, {payload}) => {
      state.isRemembered = payload;
    }
  }
})

export const { remember } = loginSlice.actions;
export default loginSlice.reducer;