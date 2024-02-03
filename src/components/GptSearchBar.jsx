import React, { useRef } from "react";
import { UseSelector, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import openai from "../utils/openai";

const GptSearchBar = () => {
    const currLang = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    function handleGptSearch(event) {
        event.preventDefault();
        // console.log(searchText.current.value);
        async function main() {
            const getResults = await openai.chat.completions.create({
                messages: [{ role: "user", content: "Say this is a test" }],
                model: "gpt-3.5-turbo",
            });
            console.log(getResults.choices)
        }
        main();
    }
    return (
        <div>
            <form className="flex justify-center">
                <input
                    ref={searchText}
                    type="text"
                    placeholder={lang[currLang].gptSearchPlaceholder}
                    className="border-2 rounded-sm p-4 text-2xl w-[40%]"
                />
                <button
                    className="text-2xl rounded-md p-2 px-8 mx-8 bg-red-500 text-white  hover:bg-red-700 font-bold"
                    onClick={handleGptSearch}
                >
                    {lang[currLang].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
