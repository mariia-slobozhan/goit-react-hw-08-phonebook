import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUser } from "./auth-operations";

const initialState = {
  user: { name: "", email: "" },
  token: "",
  isLoggedIn: false,
  isLoading: false,
  isFetchingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [register.rejected](state, action) {
      state.error = action.error.message;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logIn.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [logIn.rejected](state, action) {
      state.error = action.error.message;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.pending](state, _) {
      state.isLoggedIn = true;
      state.isLoading = true;
      state.error = null;
    },
    [logOut.fulfilled](state) {
      state.user = { name: "", email: "" };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    [logOut.rejected](state, action) {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = action.error.message;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
      state.isLoggedIn = true;
      state.isLoading = true;
      state.error = null;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.isFetchingCurrentUser = false;
      state.user = { ...payload };
      state.isLoggedIn = true;
      state.error = null;
    },
    [fetchCurrentUser.rejected](state, action) {
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default authSlice.reducer;

// hgjgjg@mail.com
// 8654565

// slobozhan.mi@gmail.com
// maryjas123
