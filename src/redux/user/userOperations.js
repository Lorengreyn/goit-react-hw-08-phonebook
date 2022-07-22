import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const signup = createAsyncThunk('user/signup', async userData => {
  try {
    const { data } = await axios.post('/users/signup', userData);
    token.set(data.token);
    return data;
    } catch (error) {
      Notify.error("We already have a user with such email!");
      return (error.message);
    }
  },
);

export const login = createAsyncThunk('user/login', async userData => {
  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.token);
    return data;
    } catch (error) {
      Notify.error("Login or password were rejected!");
      return (error.message);
    }
  },
);

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
    } catch (error) {
      return (error);
    }
  },
);

export const refresh = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
