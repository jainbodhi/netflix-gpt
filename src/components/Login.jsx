import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import { auth } from "../utils/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isSignForm, setIsSignForm] = useState(1);
    const [formError, setFormError] = useState(null);
    const fullname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigator = useNavigate();

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);

                setFormError(error);
                // ...
            });
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        console.log("Submit");
        const validResult = checkValidateData(
            email.current.value,
            password.current.value
        );
        setFormError(validResult);
        if (validResult) return;

        // Sign UP / Sign IN
        if (!isSignForm) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: fullname.current.value,
                    })
                        .then(() => {
                            // Profile updated!
                            // ...
                        })
                        .catch((error) => {
                            // An error occurred
                            console.error(error);
                            // ...
                        });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setFormError(errorCode, "-", errorMessage);
                    // ..
                });
        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setFormError(errorCode, "-", errorMessage);
                });
        }
    }
    function handleToggleSign() {
        console.log("Toggle");
        setIsSignForm(isSignForm ^ 1);
    }
    return (
        <>
            <Header />
            <div className="flex flex-row absolute size-full ">
                <div className="z-10 opacity-40 absolute size-full bg-black"></div>
                <img
                    className="absolute bg-center bg-fixed bg-cover bg-no-repeat h-full w-full"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                    alt="bg-image"
                />
                <form
                    className="text-white bg-black bg-opacity-75 flex flex-col z-40 reletive p-12 mx-auto my-auto size-[500px] h-auto "
                    action=""
                >
                    <span className="text-white text-4xl ml-10 m-4 ">
                        {isSignForm == 1 ? "Sign In" : "Sign Up"}
                    </span>
                    {isSignForm == 0 ? (
                        <input
                            ref={fullname}
                            className="m-4 p-4 w-80 mx-auto bg-[#333] rounded-sm"
                            type="full name"
                            placeholder="Full Name"
                            required
                        />
                    ) : null}
                    <input
                        ref={email}
                        className="m-4 p-4 w-80 mt-1 mx-auto bg-[#333] rounded-sm"
                        type="email"
                        placeholder="Email or phone number"
                    />
                    <input
                        ref={password}
                        className="m-4 p-4 mt-1 w-80 mx-auto bg-[#333] rounded-sm"
                        type="password"
                        placeholder="Password"
                    />
                    <p className="text-lg text-red-500 font-bold mx-10">
                        {formError}
                    </p>
                    <button
                        type="submit"
                        className=" mb-1 rounded-md w-80 mx-auto cursor-pointer text-center m-4 p-4 bg-red-700 text-white"
                        onClick={handleFormSubmit}
                    >
                        Sign In
                    </button>
                    <div className="text-center text-1xl"> OR </div>
                    <button
                        type="submit"
                        className="mb-0 mt-1 rounded-md w-80 mx-auto cursor-pointer text-center m-4 p-4 bg-slate-300 text-black"
                        onClick={handleGoogleSignIn}
                    >
                        Sign in With Google
                    </button>

                    <div className="Below Button flex justify-between mx-10  mt-1">
                        <label className="flex items-center  text-white">
                            <input type="checkbox" />
                            <span className="ml-2">Remember Me</span>
                        </label>
                        <div className="text-white">
                            <a href="#">Need help?</a>
                        </div>
                    </div>
                    <div className="mt-6 sign_up mx-10 text-xl flex">
                        <h1 className="text-gray-500 mr-2">
                            {isSignForm == 1
                                ? "New to Netflix?"
                                : "Alredy Registered"}
                        </h1>
                        <button
                            className="text-white rounded-sm"
                            onClick={handleToggleSign}
                        >
                            {isSignForm == 1 ? "Sign up now" : "Sign in now"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
