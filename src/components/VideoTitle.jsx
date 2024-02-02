import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="z-10 absolute w-screen aspect-video  opacity-100 ">
            <h1 className="mt-40 inline-block pl-10 m-6 mb-0 w-auto text-5xl font-bold backdrop-blur-sm opacity-90">{title}</h1>
            <p className="pl-10 m-6 mb-0 text-xl w-2/4 backdrop-blur-sm opacity-80">{overview}</p>
            <div className="pl-10">
                <button className=" m-6 bg-white hover:opacity-100 opacity-70 text-black text-2xl font-bold px-6 py-3 rounded-sm">
                    ▶️ Play
                </button>
                <button className="ml-0 m-6 inline-block bg-slate-500 text-white hover:bg-white hover:text-black text-2xl font-bold px-6 py-3 rounded-sm bg-opacity-70">
                    ⌽ More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
