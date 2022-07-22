import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  logout,
  refresh,
  signup,
} from './userOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  pendingUserData: false,
  currentPath: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setPath: (state, action) => {
      state.currentPath = action.payload;
    },
  },
  extraReducers: {
    [signup.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.currentPath = null;
    },
    [refresh.pending]: (state, _) => {
      state.pendingUserData = true;
    },
    [refresh.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.pendingUserData = false;
    },
    [refresh.rejected]: state => {
      state.pendingUserData = false;
    },
  },
});
export const { setPath } = userSlice.actions;

export const userReducer = userSlice.reducer;