import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG_URL } from "../utils/constants";
const GptSearch = () => {
    return (
        <>
            <img
                className="absolute -z-10 w-screen h-screen"
                src={BG_IMG_URL}
                alt="bg_img"
            />
            <div className="bg-transparent text-black mt-40">
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </>
    );
};

export default GptSearch;
