import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./contacts-actions";

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  filter,
});

// import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";
// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
// } from "./contacts-operations";
// import { changeFilter } from "./contacts-actions";

// const items = createReducer([], {
//   [fetchContacts.fulfilled]: (_, { payload }) => payload,
//   [addContact.fulfilled]: (state, { payload }) => [...state, payload],
//   [deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
// });

// const filter = createReducer("", {
//   [changeFilter]: (_, { payload }) => payload,
// });

// const loading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,
//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContacts.pending]: () => null,
//   [fetchContacts.fulfilled]: () => null,
//   [fetchContacts.rejected]: (_, action) => action.payload,
//   [addContact.pending]: () => null,
//   [addContact.fulfilled]: () => null,
//   [addContact.rejected]: (_, action) => action.payload,
//   [deleteContact.pending]: () => null,
//   [deleteContact.fulfilled]: () => null,
//   [deleteContact.rejected]: (_, action) => action.payload,
// });

// export default combineReducers({
//   items,
//   filter,
//   loading,
//   error,
// });
