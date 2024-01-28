import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import WarningClone from "./WarningClone";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";

const Header = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const user = useSelector((store) => store.user);
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
    return (
        <div>
            <WarningClone />
            <img
                className="z-50 absolute w-60 shadow-inner"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
                srcset=""
            />
            {user && (
                <>
                    <button
                        className="z-40 absolute m-2 p-2 top-0 right-0 transform translate-y-10 bg-red-600 rounded-lg text-3xl font-bold text-green-700"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                    <span className="z-50 absolute m-2 p-2 top-0 right-0 transform translate-y-20 rounded-lg text-1xl font-bold text-green-700">
                        {" "}
                        Hey! {auth.currentUser.displayName}
                    </span>
                </>
            )}
        </div>
    );
};

export default Header;
