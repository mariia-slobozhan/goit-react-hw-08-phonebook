import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./contacts-operations";

const initialState = {
  items: [],
  filter: "",
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [addContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled](state, { payload }) {
      state.items.push(payload);
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected](state, action) {
      state.error = action.error.message;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [deleteContact.pending](state) {
      state.isLoggedIn = true;
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.items = state.items.filter((contact) => contact.id !== payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.rejected](state, action) {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default contactsSlice.reducer;
export const { changeFilter } = contactsSlice.actions;
