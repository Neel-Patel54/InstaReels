import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const handleReelsVideo = createAsyncThunk(
  'handleReelsVideo/get',
  async (params, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        'https://pixabay.com/api/videos/?key=32415825-5fa62ce69fc37f8d4760ede43',
      );
      const data = response.data;
      return data;
    } catch (err) {
      console.log({err});
      const error = err.response.data;
      return rejectWithValue(error);
    }
  },
);
