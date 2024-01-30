import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const WarningClone = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const user = useSelector((store) => store.user);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                    })
                );
                navigator("/browse");
            } else {
                dispatch(removeUser());
                navigator("/");
            }
            return () => unsubscribe();
        });
    }, []);

    return (
        <div>
            <h1 className="text-3xl text-center">
                CloneProject - Practising Dev
            </h1>
        </div>
    );
};

export default WarningClone;
