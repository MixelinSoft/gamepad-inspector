// Import Redux
import { createSlice } from '@reduxjs/toolkit';
// Create Initial State
const initialState = {
  gamepads: [],
};

// Create Slice
const gamepadsSlice = createSlice({
  name: 'gamepads',
  initialState,
  reducers: {
    setGamepads: (state, { payload }) => {
      state.gamepads = payload;
    },
  },
});
// Export Actions
export const gamepadsActions = gamepadsSlice.actions;
// Export Reducers
export default gamepadsSlice.reducer;
