import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    // user: null,
    // isLoggedIn: false,
    // isLoading: false,
    // error: null,
    // password: null,
    // token: null,
    isRemembered: false
  }
})