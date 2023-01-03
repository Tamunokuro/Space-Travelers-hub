import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const MISSIONS_API = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', () => axios
  .get(MISSIONS_API)
  .then((response) => response.data));

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    loading: false,
    allMissions: [],
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchMissions.fulfilled, (state, actions) => ({
      ...state,
      loading: false,
      allMissions: [
        ...actions.payload.map((mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
          info: mission.wikipedia,
          reserved: false,
        })),
      ],
    }));
    builder.addCase(fetchMissions.rejected, (state, action) => ({
      ...state,
      loading: false,
      allMissions: [],
      error: action.error.message,
    }));
  },
});

export default missionsSlice.reducer;
