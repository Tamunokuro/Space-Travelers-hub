import { configureStore } from '@reduxjs/toolkit';
import missionsreducer from './missions/missions';

const store = configureStore({
  reducer: {
    missions: missionsreducer,
  },
});

export default store;
