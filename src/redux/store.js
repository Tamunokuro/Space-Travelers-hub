import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions';
import rocketReducer from './rockets';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketReducer,
  },
});

export default store;
