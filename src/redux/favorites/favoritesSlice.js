import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, { payload }) {
      const findIndex = state.data.findIndex((item) => item.id === payload.id);
      if (findIndex === -1) {
        state.data.push(payload);
      } else {
        state.data.splice(findIndex, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
