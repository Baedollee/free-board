// Redux import
import { configureStore } from '@reduxjs/toolkit';
import list from '../modules/ListSlice';

export default configureStore({
  reducer: { list },
});
