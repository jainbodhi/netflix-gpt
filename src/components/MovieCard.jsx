import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
    // console.log(movie);
    return (
        <div className="flex-none w-52 mr-6">
            <img
                className="w-full h-auto"
                src={IMG_CDN_URL + movie.poster_path}
                alt="movie"
            />
            <h1 className="text-xl font-bold text-center">{movie.title}</h1>
        </div>
    );
};

export default MovieCard;
