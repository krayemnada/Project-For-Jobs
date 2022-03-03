import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublisherProfile } from "../../redux/action/actions";
import AddOffer from "../addoffer/AddOffer";
import Heads from "../heads/Heads";

const GetProfilePublisher = () => {
    const { publisher } = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPublisherProfile());
    }, []);

    return (
        <div>
            <Heads />
            <div className="container">
                {/* <img src={`${publisher.image}`} alt="im" /> */}

                {publisher && publisher ? (
                    <h1>{`${publisher.fullName}`}</h1>
                ) : (
                    <h1>Loading ...</h1>
                )}
                <h3>{`${publisher.email}`}</h3>
                <AddOffer />
                <br />
            </div>
        </div>
    );
};

export default GetProfilePublisher;
