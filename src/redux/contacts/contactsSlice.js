import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selector: '',
  contactId: null,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    selector: (state, action) => {
      state.selector = action.payload;
    },
    contactId: (state, action) => {
      state.contactId = action.payload;
    },
  },
});

export const { selector, contactId } = contactSlice.actions;

export const ContactReducer = contactSlice.reducer;
