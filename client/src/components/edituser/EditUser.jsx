import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../redux/action/UserActions";

const EditUser = () => {
    const { user } = useSelector((state) => state.userReducer);
    const [fullName, setFullName] = useState(user.fullName);
    const [email, setEmail] = useState(user.email);
    const [governorate, setGovernorate] = useState(user.governorate);
    const [image, setImage] = useState(user.image);
    const [civility, setCivility] = useState(user.civility);
    const [birth, setBirth] = useState(user.birth);

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newOne = {
            fullName,
            email,
            governorate,
            image,
            birth,
            civility,
            _id: user._id,
        };

        dispatch(editUser(newOne));
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
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label> governorate</Form.Label>
                            <Form.Control
                                type="text"
                                name=" governorate"
                                placeholder="Enter your  governorate"
                                value={governorate}
                                onChange={(e) => setGovernorate(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                placeholder="Enter your image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicImage">
                            <Form.Label>Birth</Form.Label>
                            <Form.Control
                                type="date"
                                name="birth"
                                placeholder="Enter your image"
                                value={birth}
                                onChange={(e) => setBirth(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicImage">
                            <Form.Label>Civility</Form.Label>
                            <Form.Control
                                type="text"
                                name="civility"
                                placeholder="Enter your civility"
                                value={civility}
                                onChange={(e) => setCivility(e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={handleSubmit}
                        >
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

export default EditUser;
