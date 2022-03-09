import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addOffers } from "../../redux/action/OffresAction";
import Footer from "../footer/Footer";
import Heads from "../heads/Heads";
import "./AddOffer.css";

const AddOffer = () => {
    const { offers } = useSelector((state) => state.OfferReducer);
    console.log(offers);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [place, setPlace] = useState("");
    const [niveau, setNiveau] = useState("");
    const [typeEmploi, setTypeEmploi] = useState("");

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newOffer = { title, place, description, niveau, typeEmploi };

        dispatch(addOffers(newOffer));

        setTitle("");
        setPlace("");
        setDescription("");
        setNiveau("");
        setTypeEmploi("");

        handleClose();
    };

    return (
        <div>
            <Heads />
            <div className="offr">
                <div className="form">
                    <h3 style={{ color: "#303f9f" }}>Add new offers</h3>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Title"
                        className="mb-3"
                    >
                        <Form.Control
                            className="inpt"
                            type="text"
                            placeholder="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Description"
                    >
                        <Form.Control
                            className="inpt"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            as="textarea"
                            placeholder="Leave a description here"
                            style={{ height: "100px" }}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Place">
                        <Form.Control
                            className="inpt"
                            type="text"
                            placeholder="Place"
                            value={place}
                            onChange={(e) => setPlace(e.target.value)}
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Niveau"
                        className="mb-3"
                    >
                        <Form.Control
                            className="inpt"
                            as="textarea"
                            placeholder="Leave a niveau here"
                            value={niveau}
                            onChange={(e) => setNiveau(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Type of Emploi"
                        className="mb-3"
                    >
                        <Form.Control
                            className="inpt"
                            as="textarea"
                            placeholder="Leave a type of emploi here"
                            value={typeEmploi}
                            onChange={(e) => setTypeEmploi(e.target.value)}
                            style={{ marginBottom: "10px" }}
                        />
                    </FloatingLabel>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddOffer;
