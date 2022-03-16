import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailOffer } from "../../redux/action/OffresAction";
import { UserFile } from "../../redux/action/UserActions";
import HeadUser from "../headUser/HeadUser";
import UploadFile from "../uploadFile/UploadFile";

import "./OfferDetails.css";

function MyVerticallyCenteredModal(props) {
    const { userFiles } = useSelector((state) => state.userReducer);
    console.log(userFiles);

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userFile, setUserFile] = useState("");
    const [phone, setPhone] = useState("");

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newFile = { userName, userEmail, userFile, phone };

        dispatch(UserFile(newFile));

        setUserName("");
        setUserEmail("");
        setUserFile("");
        setPhone("");
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Apply for this job
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasic">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Cover Letter</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>
                            {/* <UploadFile
                                value={userFile}
                                onChange={(e) => setUserFile(e.target.value)}
                            /> */}
                        </Form.Label>
                        <Form.Control
                            type="file"
                            placeholder="Enter your Cv"
                            value={userFile}
                            onChange={(e) => setUserFile(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={handleSubmit}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

const OfferDetails = () => {
    let { id } = useParams();
    const { detailOffers, detailLoading } = useSelector(
        (state) => state.OfferReducer
    );
    console.log(detailOffers);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailOffer(id));
    }, []);

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <HeadUser />
            {detailLoading ? (
                <Spinner
                    animation="border"
                    role="status"
                    style={{
                        marginLeft: "500px",
                        marginTop: "500px",
                    }}
                >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <div className="container">
                    <div className="offerDetail">
                        {/* <h1 style={{ marginRight: "1000px" }}>
                            {detailOffers.publisher.fullName}
                        </h1> */}
                        {/* <h1 style={{ color: "red" }}>Offer Details</h1> */}
                        <ul>
                            <label htmlFor="">
                                <strong>Title : </strong>
                            </label>{" "}
                            <p className="parag-detail">{detailOffers.title}</p>
                            <label htmlFor="">
                                <strong>Description :</strong>{" "}
                            </label>{" "}
                            <p className="parag-detail">
                                {detailOffers.description}
                            </p>
                            <label htmlFor="">
                                <strong>Place :</strong>{" "}
                            </label>{" "}
                            <p className="parag-detail">
                                {" "}
                                {detailOffers.place}
                            </p>
                            <label htmlFor="">
                                <strong> Niveau :</strong>{" "}
                            </label>{" "}
                            <p className="parag-detail">
                                {detailOffers.niveau}
                            </p>
                            <label htmlFor="">
                                <strong> Type of Emploi : </strong>
                            </label>{" "}
                            <p className="parag-detail">
                                {detailOffers.typeEmploi}
                            </p>
                        </ul>
                        <div
                            style={{ marginLeft: "500px", marginTop: "100px" }}
                        >
                            <Button
                                variant="primary"
                                onClick={() => setModalShow(true)}
                            >
                                Apply for this job
                            </Button>

                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OfferDetails;
