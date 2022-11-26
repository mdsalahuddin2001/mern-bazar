import { configureStore } from '@reduxjs/toolkit';
import utilsReducer from '../features/utils/utilsSlice';
const store = configureStore({
  reducer: {
    utils: utilsReducer,
  },
});

export default store;
