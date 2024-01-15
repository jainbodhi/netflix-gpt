import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const bodyRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/browse",
        element: <Browse />,
    },
]);
const Body = () => {
    return <RouterProvider router={bodyRouter} />;
};

export default Body;
