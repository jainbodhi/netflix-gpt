import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return (
        <div className="-mt-[18%] relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
            <MovieList title={"Top Rated"} movies={movies.topRated} />
            <MovieList title={"Popular"} movies={movies.popular} />
            <MovieList title={"Upcoming"} movies={movies.upcoming} />
            <MovieList title={"Horror"} movies={movies.horror} />
        </div>
    );
};

export default SecondaryContainer;
