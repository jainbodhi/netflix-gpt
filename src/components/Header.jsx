import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import WarningClone from "./WarningClone";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUANGES } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const user = useSelector((store) => store.user);
    const gptSearchView = useSelector((store) => store.gpt.showGptSearch);
    function handleSignOut() {
        dispatch(removeUser());

        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigator("/");
            })
            .catch((error) => {
                // An error happened.
                console.log(error);
            });
    }
    function handleGptSearch() {
        dispatch(toggleGptSearchView());
    }
    function handleLanguageChange(event) {
        dispatch(changeLanguage(event.target.value));
    }
    return (
        <div className="bg-gradient-to-b from-black to-white">
            <WarningClone />
            <img
                className="z-50 absolute w-48 shadow-inner"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
                srcset=""
            />
            {user && (
                <div className="absolute z-50 top-0 right-0 font-bold transform -translate-x-5 translate-y-10 flex justify-center items-center">
                    {gptSearchView && (
                        <select
                            className="m-2 p-2 text-white bg-black hover:bg-slate-600 rounded-md text-xl"
                            onChange={handleLanguageChange}
                        >
                            {SUPPORTED_LANGUANGES.map((lang) => (
                                <option
                                    key={lang.identifier}
                                    value={lang.identifier}
                                >
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    )}
                    <button
                        className="m-2 p-2 text-white bg-purple-600 hover:bg-purple-800 opacity-80 rounded-md text-xl"
                        onClick={handleGptSearch}
                    >
                        {gptSearchView === false ? "GPT Search" : "Homepage"}
                    </button>

                    <button
                        className="m-2 p-2 flex flex-col bg-red-500 hover:bg-red-600 text-white opacity-80 rounded-md text-xl"
                        onClick={handleSignOut}
                    >
                        <div>Want to Logout?</div>
                        <div>From {auth.currentUser.displayName}</div>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
