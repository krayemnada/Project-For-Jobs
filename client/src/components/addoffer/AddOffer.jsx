import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addOffers } from "../../redux/action/OffresAction";

const AddOffer = () => {
    const { offer } = useSelector((state) => state.OfferReducer);

    // const [newOffer, setNewOffer] = useState({});
    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setNewOffer({ ...newOffer, [e.target.name]: e.target.value });
    // };
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

        // setTitle("");
        // setPlace("");
        // setDescription("");
        // setNiveau("");
        // setTypeEmploi("");

        handleClose();
    };

    return (
        <div>
            <Button className="btn3" onClick={handleShow}>
                Add New Offer
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>ADD new offer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="Title"
                                placeholder="Enter Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicdescription"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                cols="30"
                                placeholder="Enter Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicplace">
                            <Form.Label>Place</Form.Label>
                            <Form.Control
                                type="text"
                                name="place"
                                placeholder="Enter place"
                                value={place}
                                onChange={(e) => setPlace(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicniveau"
                        >
                            <Form.Label>Niveau</Form.Label>
                            <Form.Control
                                type="text"
                                name="niveau"
                                placeholder="Enter niveau"
                                value={niveau}
                                onChange={(e) => setNiveau(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasictype">
                            <Form.Label>type of employment </Form.Label>
                            <Form.Control
                                type="text"
                                name="type"
                                placeholder="Enter type of employment"
                                value={typeEmploi}
                                onChange={(e) => setTypeEmploi(e.target.value)}
                            />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicdate">
                            <Form.Label>Date </Form.Label>
                            <Form.Control
                                type="text"
                                name="date"
                                onChange={handleChange}
                            />
                        </Form.Group> */}

                        <Button variant="primary" onClick={handleSubmit}>
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddOffer;
