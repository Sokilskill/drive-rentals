import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdverts } from '../../serviceApi/advertsApi';

export const fetchAdverts = createAsyncThunk(
  'advent/fetchAll',
  async (params, thunkAPI) => {
    try {
      return await getAdverts(params);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
