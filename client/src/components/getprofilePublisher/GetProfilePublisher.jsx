import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublisherProfile } from "../../redux/action/actions";
import Heads from "../heads/Heads";
import "./GetProfilePublisher.css";
const GetProfilePublisher = () => {
    const { publisher } = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPublisherProfile());
    }, []);

    return (
        <div>
            <Heads />
            <div className="bckg">
                <div className="alls">
                    <img src={`${publisher.image}`} alt="im" className="pic" />
                    <div className="info">
                        <label htmlFor="">Full Name : </label>
                        <h2 className="name"> {`${publisher.fullName}`}</h2>
                        <span>
                            <i class="fa-solid fa-envelope"></i>
                        </span>{" "}
                        <label htmlFor="">Email : </label>{" "}
                        <h3 className="eml">{`${publisher.email}`}</h3>
                        <span>
                            <i class="fa-solid fa-globe"></i>
                        </span>{" "}
                        <label htmlFor="">Website : </label>{" "}
                        <p>{`${publisher.website}`}</p>
                        <p>
                            <span>
                                <i class="fa-solid fa-phone"></i>
                            </span>{" "}
                            <label htmlFor="">Phone: </label>{" "}
                            {`${publisher.phone}`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetProfilePublisher;
