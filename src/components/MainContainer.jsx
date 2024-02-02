import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const mainMovies = useSelector((store) => store.movies.nowPlaying?.[0]);
    if (!mainMovies) return;
    // console.log(mainMovies);
    const { original_title, overview } = mainMovies;

    return (
        <div className="z-10">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={mainMovies.id} />
        </div>
    );
};

export default MainContainer;
