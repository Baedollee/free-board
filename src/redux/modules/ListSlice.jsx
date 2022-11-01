// Package import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Shared import
import api from '../../shared/Api';

const initialState = {
  item: [],
  type: 'a',
  loading: false,
  followingItem: true,
  paging: 0,
};

export const a_contentList = createAsyncThunk(
  'getContentList',
  async (payload, thunkAPI) => {
    try {
      const { paging } = thunkAPI.getState().list;
      const response = await api.get(`/a-posts?page=${paging}`);
      if (response?.data && response?.data <= 0) {
        thunkAPI.dispatch(noFollowingItem());
      }
      return thunkAPI.fulfillWithValue(response.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const b_contentList = createAsyncThunk(
  'getContentList',
  async (payload, thunkAPI) => {
    try {
      const { paging } = thunkAPI.getState().list;
      const response = await api.get(`/b-posts?page=${paging}`);
      if (response?.data && response?.data <= 0) {
        thunkAPI.dispatch(noFollowingItem());
      }
      return thunkAPI.fulfillWithValue(response.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const listSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    noFollowingItem: (state, action) => {
      state.followingItem = false;
    },
    resetPaging: (state, action) => {
      state.paging = 0;
    },
    clearItem: (state, action) => {
      state.item = [];
    },
    selectType: (state, action) => {
      state.type = action.payload;
    },
  },
  extraReducers: {
    [a_contentList.fulfilled]: (state, action) => {
      state.item = [...state.item, ...action.payload];
      state.loading = false;
      state.paging = state.paging + 1;
    },
    [a_contentList.rejected]: (state, action) => {
      console.log(action);
    },
    [a_contentList.pending]: (state, action) => {
      state.loading = true;
    },
    [b_contentList.fulfilled]: (state, action) => {
      state.item = [...state.item, ...action.payload];
      state.loading = false;
      state.paging = state.paging + 1;
    },
    [b_contentList.rejected]: (state, action) => {
      console.log(action);
    },
    [b_contentList.pending]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { noFollowingItem, resetPaging, clearItem, selectType } =
  listSlice.actions;
export default listSlice.reducer;
