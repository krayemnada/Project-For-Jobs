import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteOffer, getById } from "../../redux/action/OffresAction";
import EditOffer from "../editOffer/EditOffer";
import Heads from "../heads/Heads";

const Details = () => {
    let { _id } = useParams();
    const { offerFile, offerLoading } = useSelector(
        (state) => state.OfferReducer
    );
    console.log(offerFile);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getById(_id));
    }, []);
    return (
        <div>
            <Heads />

            {offerLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <div className="file">
                    <h1 style={{ color: "red" }}>Offer Details</h1>
                    <h5>{offerFile.Title}</h5>
                    <p>{offerFile.description}</p>
                    <p> {offerFile.place}</p>
                    <div>
                        <EditOffer />
                        <button
                            className="btn2"
                            onClick={() => dispatch(deleteOffer(offerFile._id))}
                        >
                            {" "}
                            <i class="fa-solid fa-trash-can fa-xl"></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
