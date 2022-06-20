import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://localhost:3001/api/v1';


export const loginSlice = createSlice({
  name: "login",
  initialState: {
    firstName: "",
    lastName: "",
    token: "",
    email: "",
    password: "",
    remember: false,
    isLoggedIn: false,
  },
  reducers: {
    getFirstName: (state, {payload}) => {
      state.firstName = payload;
    },
    getLastName: (state, {payload}) => {
      state.lastName = payload;
    },
    rememberEmail: (state, {payload}) => {
      state.email = payload;
    },
    rememberPassword: (state, {payload}) => {
      state.password = payload;
    },
    rememberCheckbox: (state, {payload}) => {
      state.remember = payload;
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

export const userEdit = (firstName, lastName, token) => async (dispatch) => {
  try {
    console.log(firstName, lastName, token);
    const res = await axios.put(`${BASE_URL}/user/profile`, {
      firstName,
      lastName
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(res.data.body);
    dispatch(getFirstName(res.data.body.firstName));
    dispatch(getLastName(res.data.body.lastName));
    return res.data.body;
  } catch(error) {
    throw new Error(error)
  }
}

export const { getFirstName, getLastName, rememberEmail, rememberPassword, rememberCheckbox, getToken, login } = loginSlice.actions;
export default loginSlice.reducer;