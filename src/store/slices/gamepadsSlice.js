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
      if (JSON.stringify(state.gamepads) !== JSON.stringify(payload)) {
        state.gamepads = payload;
        console.log('Gamepads Updated');
      }
    },
  },
});
// Export Actions
export const gamepadsActions = gamepadsSlice.actions;
// Export Reducers
export default gamepadsSlice.reducer;
