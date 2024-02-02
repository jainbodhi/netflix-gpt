import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils/moviesSlice";

const useUpcoming = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const url =
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

        async function getMoviesFetchFunction() {
            try {
                const data = await fetch(url, API_OPTIONS);
                const json = await data.json(); // Corrected: Call the json() method
                dispatch(addUpcoming(json.results));
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        }
        getMoviesFetchFunction();
    }, []);
};

export default useUpcoming;
