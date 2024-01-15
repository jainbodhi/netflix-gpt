import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [isSignForm, setIsSignForm] = useState(1);
    function handleToggleSign() {
        setIsSignForm(isSignForm ^ 1);
    }
    return (
        <>
            <Header />
            <div className="flex flex-row absolute size-full ">
                <div className="z-10 opacity-40 absolute size-full bg-black"></div>
                <img
                    className="absolute bg-cover bg-no-repeat size-full"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                    alt="bg-image"
                    srcset=""
                />
                <form
                    className="text-white bg-black bg-opacity-75 flex flex-col z-40 reletive p-12 mx-auto my-auto size-[500px] h-auto "
                    action=""
                >
                    <spam className="text-white text-4xl ml-10 m-4 ">
                        {isSignForm == 1 ? "Sign In" : "Sign Up"}
                    </spam>
                    {isSignForm == 0 ? (
                        <input
                            className="m-4 p-4 w-80 mx-auto bg-[#333] rounded-sm"
                            type="full name"
                            placeholder="Full Name"
                        />
                    ) : null}
                    <input
                        className="m-4 p-4 w-80 mt-1 mx-auto bg-[#333] rounded-sm"
                        type="email"
                        placeholder="Email or phone number"
                    />
                    <input
                        className="m-4 p-4 mt-1 w-80 mx-auto bg-[#333] rounded-sm"
                        type="password"
                        placeholder="Password"
                    />
                    <submit className="mb-0 rounded-md w-80 mx-auto cursor-pointer text-center m-4 p-4 bg-red-700 text-white">
                        Sign In
                    </submit>
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
