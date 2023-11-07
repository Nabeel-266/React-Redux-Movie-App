import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const OMDB_API_URL = `https://www.omdbapi.com/?apikey=f5b2957d`;

// Fetched Movies
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const searchedMovieText = "harry";
    const response = await axios.get(
      `${OMDB_API_URL}&s=${searchedMovieText}&type=movie`
    );
    return response.data;
  }
);

// Fetched Series
export const fetchAsyncSeries = createAsyncThunk(
  "series/fetchAsyncSeries",
  async () => {
    const searchedSeriesText = "friends";
    const response = await axios.get(
      `${OMDB_API_URL}&s=${searchedSeriesText}&type=series`
    );
    return response.data;
  }
);

// Fetched Selected Movie or Series Details
export const fetchAsyncSelectedMovieOrSeriesDetails = createAsyncThunk(
  "series/fetchAsyncSelectedMovieOrSeriesDetails",
  async (imdbID) => {
    const response = await axios.get(`${OMDB_API_URL}&i=${imdbID}&plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  series: {},
  selectedMovieOrSeriesDetails: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrSeries: (state) => {
      state.selectedMovieOrSeriesDetails = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, series: payload };
    },
    [fetchAsyncSelectedMovieOrSeriesDetails.fulfilled]: (
      state,
      { payload }
    ) => {
      console.log("Fetched Successfully!");
      return { ...state, selectedMovieOrSeriesDetails: payload };
    },
  },
});

export const { removeSelectedMovieOrSeries } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getMovieOrSeriesDetails = (state) =>
  state.movies.selectedMovieOrSeriesDetails;
export default movieSlice.reducer;
