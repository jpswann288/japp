import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Set Axios base URL for all requests
axios.defaults.baseURL = "http://localhost:8000/api";

// Async thunk to handle Google login API call
export const fetchWeather = createAsyncThunk(
  "fetchWeather",
  async (accessToken, { rejectWithValue }) => {
    try {
      const response = await axios.post("/weather/getweather");
      return response.data;
    } catch (error) {
      // Return error message to be handled in Redux state
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    isLoading: false,
    data: null,
    isError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.isLoading = true;
      state.isError = null; // Reset error on new request
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = null;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload || "An error occurred";
    });
  },
});

export default weatherSlice.reducer;
