import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/moviesSlice";

const useTopRated = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const url =
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

        async function getMoviesFetchFunction() {
            try {
                const data = await fetch(url, API_OPTIONS);
                const json = await data.json(); // Corrected: Call the json() method
                dispatch(addTopRated(json.results));
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        }
        getMoviesFetchFunction();
    }, []);
};

export default useTopRated;
