import axios from 'axios';
import { DictionaryResponseData } from '../../types/interface.d';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export interface DictionaryState {
  loading: boolean;
  data: DictionaryResponseData[] | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: DictionaryState = {
  loading: false,
  data: null,
  status: 'idle',
};

export const searchAsync = createAsyncThunk(
  'word',
  async (word: string) => {
    const url = API_URL + word;
    const response = await axios(url);

    return response.data;
  }
);

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchAsync.pending, (state) => {
        state.status = 'loading';
        state.data = null;
        state.loading = true;
      })
      .addCase(searchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(searchAsync.rejected, (state) => {
        state.status = 'failed';
        state.loading = false;
      });
  },
});

export const selectDictionaryData = (state: RootState) => state.dictionary.data;
export const selectDictionaryLoading = (state: RootState) => state.dictionary.loading;

export default dictionarySlice.reducer;
