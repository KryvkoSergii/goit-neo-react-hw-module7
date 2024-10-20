import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) => {
    contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())
    );
  }
);
