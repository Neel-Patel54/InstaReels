import {createSlice} from '@reduxjs/toolkit';
import {handleReelsVideo} from './index';

const initialState = {
  reelsVideoInfo: [],
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  extraReducers: builder => {
    builder.addCase(handleReelsVideo.pending, state => {
      state.error = null;
    });
    builder.addCase(handleReelsVideo.fulfilled, (state, {payload}) => {
      state.reelsVideoInfo = payload;
    });
    builder.addCase(handleReelsVideo.rejected, (state, {payload}) => {
      state.error = payload.error;
    });
  },
});

export default videoSlice.reducer;
