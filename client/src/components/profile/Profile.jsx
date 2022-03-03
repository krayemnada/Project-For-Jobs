import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../redux/action/actions";
import Head from "../head/Head";

const Profile = () => {
    const { user, loading } = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserProfile());
    }, []);
    return (
        <div>
            <Head />
            {user && user ? (
                <h1
                    style={{ marginTop: "300px" }}
                >{`Hello ${user.fullName}`}</h1>
            ) : (
                <h1>Loading ....</h1>
            )}
        </div>
    );
};

export default Profile;
