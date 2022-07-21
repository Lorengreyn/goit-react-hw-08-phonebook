import { createSlice } from "@reduxjs/toolkit";
import { signup, login, logout, refresh } from "./userOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(signup.fulfilled, (state, action) => ({
        ...state,
        user: { ...action.payload.user },
        token: action.payload.token,
        isLoggedIn: true,
      }))
      .addCase(login.fulfilled, (state, action) => ({
        ...state,
        user: { ...action.payload.user },
        token: action.payload.token,
        isLoggedIn: true,
      }))
      .addCase(login.rejected, state => ({
        ...state,
        isLoggedIn: false,
      }))
      .addCase(signup.rejected, state => ({
        ...state,
        isLoggedIn: false,
      }))
      .addCase(logout.fulfilled, state => ({
        ...state,
        user: { ...initialState.user },
        token: initialState.token,
        isLoggedIn: initialState.isLoggedIn,
      }))
      .addCase(refresh.pending, state => ({
        ...state,
        isRefreshing: true,
      }))
      .addCase(refresh.fulfilled, (state, action) => ({
        ...state,
        user: { ...action.payload.user },
        isRefreshing: false,
        isLoggedIn: true,
      }))
      .addCase(refresh.rejected, state => ({
        ...state,
        isRefreshing: false,
        isLoggedIn: false,
      }));
  },
});

export default userSlice;
