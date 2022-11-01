import { configureStore } from '@reduxjs/toolkit';
import list from '../modules/ListSlice';
import search from '../modules/SearchSlice';

export default configureStore({
  reducer: { list, search },
});
