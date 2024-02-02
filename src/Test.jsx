import React, { useState } from "react";
import { API_OPTIONS } from "./utils/constants";

const Test = () => {
    const [count, setCount] = useState(5);
    async function main() {
        const data = await fetch("https://fakeresponder.com?sleep=500");
        console.log(data);
        setCount((count) => count + 1);
    }
    return (
        <>
            <div>Count :: {count}</div>
            <button onClick={main}> + </button>
        </>
    );
};

export default Test;
