// Package import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Shared import
import api from '../../shared/Api';

const initialState = {
  item: [],
};

export const a_contentList = createAsyncThunk(
  'getContentList',
  async (payload, thunkAPI) => {
    try {
      const response = await api.get('/a-posts');
      return thunkAPI.fulfillWithValue(response.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const listSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: {
    [a_contentList.fulfilled]: (state, action) => {
      state.item = action.item;
    },
    [a_contentList.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export default listSlice.reducer;
