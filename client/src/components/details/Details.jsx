import { margin } from "@mui/system";
import React, { useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteOffer, getById } from "../../redux/action/OffresAction";
import EditOffer from "../editOffer/EditOffer";
import Footer from "../footer/Footer";
import Heads from "../heads/Heads";
import "./Details.css";

const Details = () => {
    let { id } = useParams();
    const { offerFile, offerLoading } = useSelector(
        (state) => state.OfferReducer
    );
    console.log(offerFile);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getById(id));
    }, []);
    return (
        <div>
            <Heads />
            <div className="all-back2 ">
                {offerLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <div>
                        <div className="offerDetail">
                            <h1>Edit Your Offer</h1>
                            <div className="write_Detail">
                                <div
                                    style={{
                                        display: "flex",
                                        paddingTop: "50px",
                                    }}
                                >
                                    {" "}
                                    <label
                                        htmlFor=""
                                        style={{ fontSize: "25px" }}
                                    >
                                        Title :{" "}
                                    </label>{" "}
                                    <p>{offerFile.title}</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    {" "}
                                    <label
                                        htmlFor=""
                                        style={{ fontSize: "25px" }}
                                    >
                                        Description :
                                    </label>{" "}
                                    <p>{offerFile.description}</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    {" "}
                                    <label
                                        htmlFor=""
                                        style={{ fontSize: "25px" }}
                                    >
                                        {" "}
                                        Place :{" "}
                                    </label>{" "}
                                    <p> {offerFile.place}</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    {" "}
                                    <label
                                        htmlFor=""
                                        style={{ fontSize: "25px" }}
                                    >
                                        {" "}
                                        Niveau :{" "}
                                    </label>{" "}
                                    <p>{offerFile.niveau}</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    {" "}
                                    <label
                                        htmlFor=""
                                        style={{ fontSize: "25px" }}
                                    >
                                        {" "}
                                        Type of job :
                                    </label>{" "}
                                    <p>{offerFile.typeEmploi}</p>
                                </div>
                            </div>

                            <div style={{ display: "flex", margin: "20px" }}>
                                <EditOffer />
                                <Link to="/myOffers">
                                    <button
                                        className="btn4"
                                        onClick={() =>
                                            dispatch(deleteOffer(offerFile._id))
                                        }
                                    >
                                        {" "}
                                        <i class="fa-solid fa-trash-can fa-xl"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                <div className="">
                    <Link to="/myOffers">
                        <Button className="btn5">Go Back To Offers</Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Details;
