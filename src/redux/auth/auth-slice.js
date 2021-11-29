import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./auth-operations";

const initialState = {
  user: { name: "", email: "" },
  token: "",
  isLoggedIn: false,
  isLoading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.pending](state, _) {
      state.isLoading = true;
    },
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected](state, { payload }) {
      state.error = payload.error;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logIn.pending](state, _) {
      state.isLoading = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.rejected](state, { payload }) {
      state.error = payload.error;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.pending](state, _) {
      state.isLoggedIn = true;
      state.isLoading = true;
    },
    [logOut.fulfilled](state, _) {
      state.user = { name: "", email: "" };
      state.token = "";
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.rejected](state, _) {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;

// hgjgjg@mail.com
// 8654565
