import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  limit: 12,
  prevDataListLength: 12,
  page: 1,
  selectedMake: '',
};

const advertSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    incrementPage(state) {
      state.page = state.page + 1;
    },

    setSelectedMake(state, action) {
      state.selectedMake = action.payload;
    },
    clearDataList(state) {
      (state.data = []), (state.prevDataListLength = 12), (state.page = 1);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload];
        state.prevDataListLength = action.payload.length;
        state.isLoading = false;
      })
      .addCase(fetchAdverts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

export const { clearDataList, setSelectedMake, incrementPage } =
  advertSlice.actions;

const advertReducer = advertSlice.reducer;
export default advertReducer;
