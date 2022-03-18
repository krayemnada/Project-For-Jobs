import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOffer, getOffer } from "../../redux/action/OffresAction";
import "./Offers.css";
import Heads from "../heads/Heads";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import Footer from "../footer/Footer";
const Offers = () => {
    const { loading, offers } = useSelector((state) => state.OfferReducer);
    console.log(offers);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOffer());
    }, []);
    return (
        <div>
            <Heads />
            <div className="backgroundPicture"> </div>
            {offers &&
                offers.map((elt, key) => (
                    <div>
                        <Card className="car">
                            <Form>
                                <Card.ImgOverlay>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginTop: "10px",
                                        }}
                                    >
                                        <Card.Title style={{ display: "flex" }}>
                                            <label htmlFor="">Title : </label>{" "}
                                            <h3
                                                className="a1"
                                                style={{
                                                    color: "white",
                                                    marginLeft: "230px",
                                                }}
                                            >
                                                {" "}
                                                {elt.title}
                                            </h3>
                                        </Card.Title>
                                        <Link to={`/detail/${elt._id}`}>
                                            <Button
                                                // style={{ marginLeft: "750px" }}
                                                className="edit"
                                            >
                                                <strong
                                                    style={{
                                                        fontSize: "20px",
                                                    }}
                                                >
                                                    {" "}
                                                    Go Edit
                                                </strong>
                                            </Button>
                                        </Link>
                                    </div>
                                    <Card.Text>
                                        <label htmlFor="">Nivau : </label>
                                        <h3 style={{ color: "white" }}>
                                            {elt.niveau}
                                        </h3>{" "}
                                    </Card.Text>
                                    <Card.Text>
                                        <label htmlFor="">Description : </label>
                                        <h3 style={{ color: "white" }}>
                                            {elt.description}
                                        </h3>
                                    </Card.Text>
                                    <Card.Text>
                                        <label htmlFor="">Place : </label>

                                        <h3 style={{ color: "white" }}>
                                            {" "}
                                            {elt.place} {elt.typeEmploi}
                                        </h3>
                                        <label htmlFor="">
                                            Type of Emploi :{" "}
                                        </label>
                                        <h3 style={{ color: "white" }}>
                                            {" "}
                                            {elt.typeEmploi}
                                        </h3>
                                    </Card.Text>
                                    <Card.Text>
                                        <label htmlFor="">Date : </label>
                                        <h3 style={{ color: "white" }}>
                                            {elt.date}
                                        </h3>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Form>
                        </Card>
                    </div>
                ))}

            <Footer />
        </div>
    );
};

export default Offers;
