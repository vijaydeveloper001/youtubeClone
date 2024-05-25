import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VideoState {
  data: any[]; 
}
const initialState: VideoState = {
  data: [],
}

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    videoAdded: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload);
    },
  },
});

export const { videoAdded } = videoSlice.actions;
export default videoSlice.reducer;