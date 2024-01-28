import React, { useState } from "react";
import Header from "./Header";
const Browse = () => {
    const [phoneNumber, setPhoneNumber] = useState();
    // console.log("hello");
    function handleChange(e) {
        console.log(e.target.value);
        setPhoneNumber(e.target.value);
    }
    // console.log("Bye");
    return (
        <>
            <Header />
            <div className="bg-slate-300 size-auto p-10 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2">
                <span className="text-2xl  m-2 text-center block font-bold">
                    LogIn with Phone
                </span>
                <input
                    className="mx-auto m-2 block text-center"
                    type="text"
                    placeholder="Enter Your Number"
                    value={phoneNumber}
                    onChange={handleChange}
                />
                <button
                    className="bg-slate-400 rounded-lg p-1 mx-auto block"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </>
    );
};

export default Browse;
