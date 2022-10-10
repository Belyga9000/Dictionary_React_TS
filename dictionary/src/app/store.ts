import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from '../features/dictionary/dictionarySlice';

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
