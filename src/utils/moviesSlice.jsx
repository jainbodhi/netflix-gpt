import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesList: null,
        moviesTrailer: null,
    },
    reducers: {
        addMoviesList: (state, action) => {
            state.moviesList = action.payload;
        },
        addTrailer: (state, action) => {
            state.moviesTrailer = action.payload;
        },
    },
});

export const { addMoviesList, addTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;
