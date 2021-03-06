import { createSelector } from "@reduxjs/toolkit";

export const filterValue = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;
export const getIsLoading = (state) => state.contacts.isLoading;
export const getError = (state) => state.contacts.error;

export const getVisiableContacts = createSelector(
  [getContacts, filterValue],
  (items, filter) =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
