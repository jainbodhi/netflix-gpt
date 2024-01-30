import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute w-screen aspect-video text-white bg-gradient-to-r from-black ">
            <h1 className="pt-[20%] pl-10 m-6 text-5xl font-bold ">{title}</h1>
            <p className="pl-10 m-6 mb-0 text-xl w-2/4">{overview}</p>
            <div className="pl-10">
                <button className=" m-6 bg-white hover:opacity-50 text-black text-2xl font-bold px-6 py-3 rounded-sm">
                    ▶️ Play
                </button>
                <button className="ml-0 m-6 bg-slate-500 text-white hover:bg-white hover:text-black text-2xl font-bold px-6 py-3 rounded-sm bg-opacity-70">
                    ⌽ More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
