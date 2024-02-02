import React, { useEffect, useState } from "react";
import Header from "./Header";
import GptSearch from "./GptSearch";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Test from "../Test.jsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopular from "../hooks/usePopular";
import useUpcoming from "../hooks/useUpcoming";
import useTopRated from "../hooks/useTopRated";
import { useSelector } from "react-redux";
const Browse = () => {
    const select = useSelector((store) => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopular();
    useUpcoming();
    useTopRated();
    return (
        <div className="">
            <Header />
            {select == true ? (
                <GptSearch />
            ) : (
                <div className="bg-black text-white">
                    <MainContainer />
                    <SecondaryContainer />
                </div>
            )}
            {/* <Test /> */}
        </div>
    );
};

export default Browse;
