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
  error: false,
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
    [fetchContacts.pending](state, _) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.error = payload.error;
      state.isLoading = false;
    },
    [addContact.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [addContact.fulfilled](state, { payload }) {
      state.items.push(payload);
      state.isLoading = false;
      state.error = false;
    },
    [addContact.rejected](state, { payload }) {
      state.error = payload.error;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [deleteContact.pending](state, _) {
      state.isLoggedIn = true;
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.items = state.items.filter((contact) => contact.id !== payload);
      state.isLoading = false;
      state.error = false;
    },
    [deleteContact.rejected](state, { payload }) {
      state.error = payload.error;
      state.isLoading = false;
    },
  },
});

export default contactsSlice.reducer;
export const { changeFilter } = contactsSlice.actions;
