// Package import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Shared import
import api from '../../shared/Api';

const initialState = {
  itemList: [],
  searchWord: '',
  type: 'a',
  loading: false,
  followingItem: true,
  paging: 0,
};

export const a_contentList = createAsyncThunk(
  'getAContentList',
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
  'getBContentList',
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
export const a_searchDataList = createAsyncThunk(
  'getASearchList',
  async (payload, thunkAPI) => {
    try {
      const { paging } = thunkAPI.getState().list;
      const response = await api.get(
        `/a-posts?page=${paging}&search=${payload}`
      );
      if (response?.data && response?.data <= 0) {
        thunkAPI.dispatch(noFollowingItem());
      }
      return thunkAPI.fulfillWithValue(response.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const b_searchDataList = createAsyncThunk(
  'getBSearchList',
  async (payload, thunkAPI) => {
    try {
      const { paging } = thunkAPI.getState().list;
      const response = await api.get(
        `/b-posts?page=${paging}&search=${payload}`
      );
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
    selectType: (state, action) => {
      state.type = action.payload;
    },
    searchAction: (state, action) => {
      state.searchWord = action.payload;
    },
    clearItem: (state, action) => {
      state.itemList = [];
      state.followingItem = true;
    },
    clearSearch: (state, action) => {
      state.searchWord = [];
    },
  },
  extraReducers: {
    [a_contentList.fulfilled]: (state, action) => {
      state.itemList = [...state.itemList, ...action.payload];
      state.paging = state.paging + 1;
      state.loading = false;
    },
    [a_contentList.rejected]: (state, action) => {
      console.log(action);
    },
    [a_contentList.pending]: (state, action) => {
      state.loading = true;
    },
    [b_contentList.fulfilled]: (state, action) => {
      state.itemList = [...state.itemList, ...action.payload];
      state.paging = state.paging + 1;
      state.loading = false;
    },
    [b_contentList.rejected]: (state, action) => {
      console.log(action);
    },
    [b_contentList.pending]: (state, action) => {
      state.loading = true;
    },
    [a_searchDataList.fulfilled]: (state, action) => {
      state.itemList = [...state.itemList, ...action.payload];
      state.paging = state.paging + 1;
      state.loading = false;
    },
    [a_searchDataList.rejected]: (state, action) => {
      console.log(action);
    },
    [a_searchDataList.pending]: (state, action) => {
      state.loading = true;
    },
    [b_searchDataList.fulfilled]: (state, action) => {
      state.itemList = [...state.itemList, ...action.payload];
      state.paging = state.paging + 1;
      state.loading = false;
    },
    [b_searchDataList.rejected]: (state, action) => {
      console.log(action);
    },
    [a_searchDataList.pending]: (state, action) => {
      state.loading = true;
    },
  },
});

export const {
  noFollowingItem,
  resetPaging,
  clearItem,
  selectType,
  searchAction,
  clearSearch,
} = listSlice.actions;
export default listSlice.reducer;
