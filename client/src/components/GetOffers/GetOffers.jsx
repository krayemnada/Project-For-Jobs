import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOffer } from "../../redux/action/OffresAction";
import Footer from "../footer/Footer";
import { BsSearch } from "react-icons/bs";
import HeadUser from "../headUser/HeadUser";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./GetOffers.css";
const GetOffers = () => {
    const { loading, UsersOffers } = useSelector((state) => state.OfferReducer);
    // console.log(UsersOffers);
    const [text, setText] = useState("");
    const [address, setAddress] = useState("");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOffer());
    }, []);
    return (
        <div className="all-back">
            {/* <HeadUser /> */}
            <div>
                <img
                    className="offers_img"
                    src="https://pbs.twimg.com/media/DlB7i4AXsAAFJjz.jpg"
                    alt="image_"
                />
            </div>
            <div className="container" style={{ marginTop: "100px" }}>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        aria-label="Search"
                    />
                    <FormControl
                        type="search"
                        placeholder="Emplacement (Address)"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                    />
                    <FormControl
                        type="search"
                        placeholder="key words"
                        className="me-2"
                        aria-label="Search"
                    />

                    <Button variant="outline-success">
                        <BsSearch />
                    </Button>
                </Form>
            </div>
            <div className="container">
                <div className="all_card">
                    {UsersOffers &&
                        UsersOffers.filter(
                            (elt) =>
                                elt.title
                                    .toUpperCase()
                                    .trim()
                                    .includes(text.toUpperCase().trim()) &&
                                elt.place
                                    .toUpperCase()
                                    .trim()
                                    .includes(text.toUpperCase().trim())
                        ).map((elt, index) => (
                            <div className="card-offers">
                                <div className="write_card">
                                    <div style={{ display: "flex" }}>
                                        {" "}
                                        <label htmlFor="">Title : </label>
                                        <h4> {elt.title}</h4>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <label htmlFor="">Description :</label>{" "}
                                        <p> {elt.description} </p>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <label htmlFor="">Place : </label>{" "}
                                        <p> {elt.place} </p>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <label htmlFor="">Niveau :</label>{" "}
                                        <p> {elt.niveau} </p>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <label htmlFor="">Type of job</label>{" "}
                                        <p> {elt.typeEmploi} </p>
                                    </div>
                                </div>
                                <Link to={`/detailOffer/${elt._id}`}>
                                    <Button
                                        className="but"
                                        style={{
                                            marginTop: "20px",
                                            width: "100%",
                                        }}
                                    >
                                        {" "}
                                        Details
                                    </Button>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GetOffers;
