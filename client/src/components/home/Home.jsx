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
                    <div className="content">
                        <h1 style={{ color: "blue" }}>Welcome to ForsaJobs</h1>

                        <h2
                            style={{
                                marginLeft: "350px",
                                color: "white",
                            }}
                        >
                            1500+ Jobs posted last week
                        </h2>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <div>
                <div>
                    <div className="title_info">
                        <strong
                            style={{
                                marginLeft: "120px",
                                fontSize: "18px",
                                marginBottom: "20px",
                            }}
                        >
                            Start Searching Today
                        </strong>
                        <h2 className="mb-4">Browse Online Jobs Category</h2>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex" }} className="deco_div">
                <div className="dco_div">
                    <span style={{ marginLeft: "100px", fontSize: "20px" }}>
                        {" "}
                        <strong>Searching</strong>
                    </span>
                    <p
                        style={{
                            marginLeft: "50px",
                            fontSize: "18px",
                            marginTop: "30px",
                        }}
                    >
                        this a great website to find a jobs{" "}
                    </p>
                </div>
                <div className="dco_div">
                    <span
                        style={{
                            marginLeft: "100px",
                            fontSize: "20px",
                            marginTop: "50px",
                        }}
                    >
                        <strong>Applying</strong>
                    </span>
                    <p
                        style={{
                            marginLeft: "50px",
                            fontSize: "18px",
                            marginTop: "30px",
                        }}
                    >
                        {" "}
                        you can aplying for a job
                    </p>
                </div>
                <div className="dco_div">
                    <span style={{ marginLeft: "100px", fontSize: "20px" }}>
                        <strong>Security</strong>
                    </span>
                    <p
                        style={{
                            marginLeft: "50px",
                            fontSize: "18px",
                            marginTop: "30px",
                        }}
                    >
                        {" "}
                        heigh security of this website
                    </p>
                </div>
                <div className="dco_div">
                    <span style={{ marginLeft: "100px", fontSize: "20px" }}>
                        <strong>Notifications</strong>
                    </span>
                    <p
                        style={{
                            marginLeft: "50px",
                            fontSize: "18px",
                            marginTop: "30px",
                        }}
                    >
                        {" "}
                        you can receive notifications for any changes{" "}
                    </p>
                </div>
            </div>

            <div className="side_class">
                <div
                    style={{
                        marginLeft: "500px",
                    }}
                >
                    <h2 style={{ color: "white", marginLeft: "100px" }}>
                        Join us today without any hesitation
                    </h2>
                    <button className="butt">
                        <a href="/SignIn">
                            <h4
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Condidate
                            </h4>
                        </a>
                    </button>
                    <button className="butt">
                        <a href="/SignPublisher">
                            <h4
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                publisher
                            </h4>
                        </a>
                    </button>
                </div>
            </div>
            <div className="all">
                <div
                    className="single_event position-relative"
                    style={{
                        marginLeft: "200px",
                    }}
                >
                    <div className="img">
                        <img
                            src={image}
                            alt=""
                            width={400}
                            height={350}
                            style={{
                                marginBottom: "40px",
                            }}
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
