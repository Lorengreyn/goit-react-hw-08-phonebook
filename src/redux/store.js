import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/userSlice';
import { contactSlice } from './contacts/contactsSlice';
import { filterSlice } from './contacts/filterSlice';
import { contactsApi } from '../services/contactsApiService';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
  key: 'tokenUser',
  storage,
  whitelist: ['token', 'currentPath'],
};

export const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userReducer),
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [contactSlice.name]: contactSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
});
export const persistor = persistStore(store);