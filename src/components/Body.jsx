import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { addUser, removeUser } from "../utils/userSlice";

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
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                    })
                );
            } 
        });
    }, []);
    return <RouterProvider router={bodyRouter} />;
};

export default Body;
