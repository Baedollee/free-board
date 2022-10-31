import list from '../modules/ListSlice';

import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: { list },
});
