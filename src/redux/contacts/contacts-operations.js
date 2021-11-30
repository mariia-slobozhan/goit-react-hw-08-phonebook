import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsAPI from "services/contacts-api";
import { toast } from "react-toastify";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      toast.error("Can not find your contacts");
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const items = await contactsAPI.addContact(contact);
      toast.success(`${contact.name} is added to your contacts list!`);
      return items;
    } catch (error) {
      toast.error(`Can not add ${contact.name} to your contacts list!`);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await contactsAPI.deleteContact(id);
      toast.success(`Contact is deleted`);
      return id;
    } catch (error) {
      toast.error(`Can not delete contact. Try again later`);
      return rejectWithValue(error.message);
    }
  }
);
