import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import loadmissions from '../../services/missionsData';

const LOAD_MISSIONS = 'spacetravelhub/missions/LOAD_MISSIONS';

export const getmissions = createAsyncThunk(LOAD_MISSIONS, async () => {
  const response = await loadmissions();
  return response.data;
});

const missionsslice = createSlice({
  name: 'missions',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(loadmissions.fulfilled, (_, action) => action.payload.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      member: false,
    })));
  },
});

export default missionsslice.reducer;
