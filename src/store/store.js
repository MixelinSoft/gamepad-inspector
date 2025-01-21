// Import Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import Slices
import gamepadSlice from './slices/gamepadsSlice';
// import uiSlice from './slices/uiSlice';

const store = configureStore({
  reducer: {
    gamepads: gamepadSlice,
  },
});

export default store;
