import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesTrailer: null,
        nowPlaying: null,
        popular: null,
        upcoming: null,
        topRated: null,
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addTrailer: (state, action) => {
            state.moviesTrailer = action.payload;
        },
        addPopular: (state, action) => {
            state.popular = action.payload;
        },
        addUpcoming: (state, action) => {
            state.upcoming = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        },
    },
});

export const {
    addNowPlaying,
    addTrailer,
    addPopular,
    addUpcoming,
    addTopRated,
} = moviesSlice.actions;
export default moviesSlice.reducer;
