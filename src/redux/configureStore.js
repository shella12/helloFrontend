import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetings/greeting';

const store = configureStore({
  reducer: {
    greetingReducer: greetingSlice,
  },
});

export default store;
