import { createSelector } from "@reduxjs/toolkit";

export const filterValue = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;

export const getVisiableContacts = createSelector(
  [getContacts, filterValue],
  (items, filter) =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
