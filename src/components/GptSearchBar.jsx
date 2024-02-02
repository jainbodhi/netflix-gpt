import React from "react";
import { UseSelector, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";

const GptSearchBar = () => {
    const currLang = useSelector((store) => store.config.lang);
    function fun(event) {
        event.preventDefault();
    }
    return (
        <div>
            <form className="flex justify-center">
                <input
                    type="text"
                    placeholder={lang[currLang].gptSearchPlaceholder}
                    className="border-2 rounded-sm p-4 text-2xl w-[40%]"
                />
                <button
                    className="text-2xl rounded-md p-2 px-8 mx-8 bg-red-500 text-white  hover:bg-red-700 font-bold"
                    onClick={fun}
                >
                    {lang[currLang].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
