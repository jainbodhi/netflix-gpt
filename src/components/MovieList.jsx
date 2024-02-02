import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {


    return (
        <div>
            <div className="my-4">
                <h1 className="text-4xl font-bold px-4 py-1">{title}</h1>
                <div className="flex overflow-x-scroll px-4">
                    {movies?.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
