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
            <div>
                {offers &&
                    offers.map((elt, key) => (
                        <div>
                            <Card className="car">
                                <Form>
                                    <Card.ImgOverlay>
                                        {/* <label htmlFor="">Title : </label>{" "} */}
                                        <Card.Title className="a1">
                                            {elt.title}
                                        </Card.Title>
                                        <Card.Text>{elt.niveau} </Card.Text>
                                        <Card.Text>{elt.description}</Card.Text>
                                        <Card.Text>
                                            {elt.place} {elt.typeEmploi}
                                        </Card.Text>
                                        <Card.Text>{elt.date}</Card.Text>
                                    </Card.ImgOverlay>
                                </Form>
                                {/* <Link to={`/detail/${offers._id}`}>
                                <Button style={{ marginTop: "180px" }}>
                                    Go Edit{" "}
                                </Button>
                            </Link> */}
                            </Card>
                        </div>
                    ))}
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Offers;
