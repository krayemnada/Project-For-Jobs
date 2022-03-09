import React from "react";
import "./Home.css";
import image from "../../img3.jpg";
import img from "../../img4.jpg";
import img5 from "../../img5.jpg";

// import { Card, Carousel } from "react-bootstrap";
import Header from "../header/Header";
import Footer from "../footer/Footer";

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
                <div className="single_event position-relative">
                    <div className="img">
                        <img
                            src={image}
                            alt=""
                            width={400}
                            height={350}
                            style={{ marginBottom: "40px" }}
                        />
                    </div>
                    <div className="event_details">
                        <h3 className="tit">
                            <strong>MARKETING</strong>
                        </h3>
                        <p>Some quick example text</p>
                    </div>
                </div>

                <div className="single_event position-relative">
                    <div className="img">
                        <img
                            src={img}
                            alt=""
                            width={400}
                            height={350}
                            style={{ marginBottom: "40px" }}
                        />
                    </div>
                    <div className="event_details">
                        <h3 className="tit">
                            <strong>SOFTWARE Database</strong>
                        </h3>
                        <p>Some quick example text</p>
                    </div>
                </div>

                <div className="single_event position-relative">
                    <div className="img">
                        <img
                            src={img5}
                            alt=""
                            width={400}
                            height={350}
                            style={{ marginBottom: "40px" }}
                        />
                    </div>
                    <div className="event_details">
                        <h3 className="tit">
                            <strong>COMMERCIAL</strong>
                        </h3>
                        <p>Some quick example text</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
