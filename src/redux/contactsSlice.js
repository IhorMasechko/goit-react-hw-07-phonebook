import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  delContact,
  toggleCompleted,
} from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(addContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(addContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(addContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(delContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(delContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(delContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(toggleCompleted.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
