import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add_post } from "../../redux/action/postAction";

const UploadFile = () => {
    const { posts } = useSelector((state) => state.postReducer);
    console.log(posts);

    const [title, setTitle] = useState("");
    const [postEmail, setPostEmail] = useState("");
    const [img, setImg] = useState("");
    const [postDescription, setPostDescription] = useState("");

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newFile = { title, postDescription, img, postEmail };

        dispatch(add_post(newFile));

        setTitle("");
        setPostEmail("");
        setImg("");
        setPostDescription("");
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="name"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={postEmail}
                                onChange={(e) => setPostEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Cover Letter</Form.Label>{" "}
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={postDescription}
                                onChange={(e) =>
                                    setPostDescription(e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Upload Your Cv</Form.Label>
                            <Form.Control
                                type="file"
                                name="img"
                                placeholder="Enter your Cv"
                                value={img}
                                onChange={(e) => setImg(e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            onSubmit={handleSubmit}
                            onClick={handleClose}
                        >
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UploadFile;
