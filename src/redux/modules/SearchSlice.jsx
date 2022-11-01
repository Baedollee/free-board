import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchList: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchAction: (state, action) => {
      state.searchList = action.payload;
    },
    clearSearch: (state, action) => {
      state.searchList = [];
    },
  },
});

export const { searchAction, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
