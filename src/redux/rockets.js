import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ROCKET_API = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rocket/fetchRockets', () => axios
  .get(ROCKET_API)
  .then((response) => response.data));

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: {
    allRockets: [],
    loading: false,
    error: '',
  },
  reducers: {
    reserveRocket: (state, actions) => {
      const newRockets = state.allRockets.map((rocket) => {
        if (rocket.id === actions.payload) {
          return {
            ...rocket,
            reserved: !rocket.reserved,
          };
        }
        return { ...rocket };
      });
      return {
        ...state,
        allRockets: newRockets,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchRockets.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      allRockets: [
        ...action.payload.map((rocket) => ({
          id: rocket.id,
          rocket_name: rocket.rocket_name,
          description: rocket.description,
          flickr_images: rocket.flickr_images[1],
          reserved: false,
        })),
      ],
    }));
    builder.addCase(fetchRockets.rejected, (state, action) => ({
      ...state,
      loading: false,
      allRockets: [],
      error: action.error.message,
    }));
  },
});

export default rocketSlice.reducer;
export const { reserveRocket } = rocketSlice.actions;
