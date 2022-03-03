import React from "react";
import "./Home.css";
import image from "../../img3.jpg";
import img from "../../img4.jpg";
import img5 from "../../img5.jpg";

import { Card, Carousel } from "react-bootstrap";
import Header from "../header/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="imag">
                <div class="cont">
                    {/* <img
                src={image}
                alt="img"
                style={{ width: "100%", height: "600px" }}
            /> */}
                    <div className="content">
                        <h1 style={{ color: "blue" }}>Welcome to ForsaJobs</h1>
                        <h3 style={{ color: "blue", marginLeft: "260px" }}>
                            {" "}
                            If you Search about jobs you on the right way
                        </h3>
                    </div>
                </div>
            </div>
            <br />
            <br />

            <div className="container">
                <div className="row justify-content-center pb-4">
                    <div className="col-md-12 heading-section text-center ftco-animate">
                        <span className="subheading">
                            Start Searching Today
                        </span>
                        <h2 className="mb-4">Browse Online Jobs Category</h2>
                    </div>
                </div>
            </div>

            <div>
                <h2 style={{ color: "blue" }}>Join Us</h2>
                <button className="butt">
                    <a href="/SignIn">
                        <h4 style={{ color: "white", textDecoration: "none" }}>
                            Condidate
                        </h4>
                    </a>
                </button>
                <button className="butt">
                    <a href="/SignPublisher">
                        <h4 style={{ color: "white", textDecoration: "none" }}>
                            publisher
                        </h4>
                    </a>
                </button>
            </div>

            <div className="all">
                <div className="block">
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>MARKETING</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>SOFTWARE Database</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>COMMERCIAL</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <br />
            </div>
            <div>{/* <Footer /> */}</div>
        </div>
    );
};

export default Home;
