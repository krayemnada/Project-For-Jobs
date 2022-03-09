import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editOffer } from "../../redux/action/OffresAction";

const EditOffer = () => {
    const { loading, offers } = useSelector((state) => state.OfferReducer);
    const [title, setTitle] = useState(offers.title);
    const [description, setDescription] = useState(offers.description);
    const [place, setPlace] = useState(offers.place);
    const [niveau, setNiveau] = useState(offers.niveau);
    const [typeEmploi, setTypeEmploi] = useState(offers.typeEmploi);

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newOne = {
            title,
            description,
            place,
            niveau,
            typeEmploi,
            _id: offers._id,
        };

        dispatch(editOffer(newOne));
        handleClose();
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button className="btn2" onClick={handleShow}>
                <i class="fa-solid fa-pen-to-square fa-xl"></i>
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Offer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                // value={name}
                                // onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Email"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                placeholder="Enter your Phone number"
                                // value={phone}
                                // onChange={(e) => setPhone(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                placeholder="Enter your image"
                                // value={image}
                                // onChange={(e) => setImage(e.target.value)}
                            />
                        </Form.Group>
                        <Button onClick={handleSubmit} type="submit">
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

export default EditOffer;
