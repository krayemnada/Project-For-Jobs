import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editOffer } from "../../redux/action/OffresAction";

const EditOffer = () => {
    const { offerFile } = useSelector((state) => state.OfferReducer);
    const [title, setTitle] = useState(offerFile.title);
    const [description, setDescription] = useState(offerFile.description);
    const [place, setPlace] = useState(offerFile.place);
    const [niveau, setNiveau] = useState(offerFile.niveau);
    const [typeEmploi, setTypeEmploi] = useState(offerFile.typeEmploi);

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newOne = {
            title,
            description,
            place,
            niveau,
            typeEmploi,
            _id: offerFile._id,
        };

        dispatch(editOffer(newOne));
        handleClose();
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button className="btn4" onClick={handleShow}>
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
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Place</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                placeholder="Enter your Place number"
                                value={place}
                                onChange={(e) => setPlace(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Type Of Emploi</Form.Label>
                            <Form.Control
                                type="text"
                                name="type"
                                placeholder="Enter your type"
                                value={typeEmploi}
                                onChange={(e) => setTypeEmploi(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Niveau</Form.Label>
                            <Form.Control
                                type="text"
                                name="niveu"
                                placeholder="Enter your Niveau"
                                value={niveau}
                                onChange={(e) => setNiveau(e.target.value)}
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
