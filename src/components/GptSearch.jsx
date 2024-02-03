import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG_URL } from "../utils/constants";
const GptSearch = () => {
    return (
        <>
            <div
                className="absolute -z-10 w-full h-full bg-no-repeat bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${BG_IMG_URL})` }}
                alt="bg_img"
            ></div>
            <div className="bg-transparent text-black mt-40">
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </>
    );
};

export default GptSearch;
