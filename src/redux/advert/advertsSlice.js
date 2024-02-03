import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const initialState = {
  data: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const advertSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload];
        state.isLoading = false;
      })
      .addCase(fetchAdverts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

const advertReducer = advertSlice.reducer;
export default advertReducer;
