import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch market odds
export const fetchMarketOdds = createAsyncThunk(
  "marketOdds/fetchMarketOdds",
  async ({ eventType, competitionId, eventId, marketId }, thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.asianexchange.club/api/v1/fetch-market-odds/${eventType}/${competitionId}/${eventId}/${marketId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const marketOddsSlice = createSlice({
  name: "marketOdds",
  initialState: {
    data: null,
    loading: false,
    error: null,
    runningData: null, // Added to store runningData
  },
  reducers: {
    setRunningData: (state, action) => {
      state.runningData = action.payload; // Store runningData in state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMarketOdds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMarketOdds.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMarketOdds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setRunningData } = marketOddsSlice.actions; // Export the reducer action to update runningData
export default marketOddsSlice.reducer;