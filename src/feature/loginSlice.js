import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://localhost:3001/api/v1';


export const loginSlice = createSlice({
  name: "login",
  initialState: {
    firstName: "",
    lastName: "",
    data: [],
    token: "",
    isRemembered: false,
    isLoggedIn: false,
  },
  reducers: {
    getFirstName: (state, {payload}) => {
      state.firstName = payload;
    },
    getLastName: (state, {payload}) => {
      state.lastName = payload;
    },
    remember: (state, {payload}) => {
      state.isRemembered = payload;
    },
    addData: (state, {payload}) => {
      state.data.push(payload);
    },
    getToken: (state, {payload}) => {
      state.token = payload;
    },
    login: (state, {payload}) => {
      state.isLoggedIn = payload;
    }
  }
})

export const fetchToken = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/user/login`, {
      email,
      password
    });
    dispatch(getToken(res.data.body.token));
    return res.data.body;
  } catch (error) {
    throw new Error(error);
  }
}

export const fetchUserProfile = (token) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/user/profile`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch(getFirstName(res.data.body.firstName));
    dispatch(getLastName(res.data.body.lastName));
    dispatch(login(true));
    return res.data.body;
  } catch (error) {
    throw new Error(error);
  }
}

export const { getFirstName, getLastName, remember, getToken, login } = loginSlice.actions;
export default loginSlice.reducer;