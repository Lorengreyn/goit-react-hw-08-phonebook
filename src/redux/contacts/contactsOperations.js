import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} from "../../services/contactsApiService";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async () => {
    const contacts = await useGetContactsQuery();
    return contacts;
  },
);
export const createContacts = createAsyncThunk(
  "contacts/createContacts",
  async contact => {
    const contactCreate = await useCreateContactMutation(contact);
    return contactCreate;
  },
);


export const deleteContacts = createAsyncThunk(
  "contacts/removeContact",
  async ({ id }, { rejectWithValue }) => {
    try {
      await useDeleteContactMutation(id);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

