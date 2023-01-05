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
  reducers: {
    joinmission(state, action) {
      const updatedmissions = state.allMissions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, mission_member: !mission.mission_member };
        }
        return { ...mission };
      });
      return { ...state, allMissions: updatedmissions };
    },
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
          mission_member: true,
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
export const { joinmission } = missionsSlice.actions;
