import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const fetchMovieTrailer = async () => {
        const url = "https://api.themoviedb.org/3/movie/" + movieId + "/videos";
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        const filterData = json?.results?.filter(
            (item) => item?.type == "Trailer"
        );
        const Trailer =
            filterData?.length ? filterData?.[0] : json?.results?.[0];
        dispatch(addTrailer(Trailer));
    };

    useEffect(() => {
        fetchMovieTrailer();
    }, []);
};

export default useMovieTrailer;
