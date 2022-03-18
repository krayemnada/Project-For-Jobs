import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./About.css";
const About = () => {
    return (
        <div>
            <Header />
            <div className="imag">
                <div class="cont">
                    <div className="content">
                        <h1 style={{ color: "blue" }}>Welcome to ForsaJobs</h1>

                        <h2
                            style={{
                                marginLeft: "500px",
                                color: "white",
                            }}
                        >
                            About Us
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="col-md-8 pb-40 header-text">
                    <h1
                        style={{
                            marginTop: "50px",
                            marginLeft: "400px",
                            color: "rgba(32, 124, 229, 1)",
                        }}
                    >
                        Why Choose Us
                    </h1>
                    <p style={{ marginLeft: "450px" }}>
                        Who are in extremely love with eco friendly system.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-service">
                            <h4>
                                <span>
                                    <i class="fa-solid fa-user"></i>
                                </span>
                                Expert Technicians
                            </h4>
                            <p>
                                Usage of the Internet is becoming more common
                                due to rapid advancement of technology and
                                power.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-service">
                            <h4>
                                <span>
                                    <i class="fa-solid fa-file-invoice-dollar"></i>
                                </span>
                                Professional Service
                            </h4>
                            <p>
                                Usage of the Internet is becoming more common
                                due to rapid advancement of technology and
                                power.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-service">
                            <h4>
                                <span>
                                    <i class="fa-solid fa-phone"></i>
                                </span>
                                Great Support
                            </h4>
                            <p>
                                Usage of the Internet is becoming more common
                                due to rapid advancement of technology and
                                power.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-service">
                            <h4>
                                <span>
                                    <i class="fa-solid fa-rocket"></i>
                                </span>
                                Technical Skills
                            </h4>
                            <p>
                                Usage of the Internet is becoming more common
                                due to rapid advancement of technology and
                                power.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-service">
                            <h4>
                                <span>
                                    <i class="fa-solid fa-gem"></i>
                                </span>
                                Highly Recomended
                            </h4>
                            <p>
                                Usage of the Internet is becoming more common
                                due to rapid advancement of technology and
                                power.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-service">
                            <h4>
                                <span>
                                    <i class="fa-solid fa-comment"></i>
                                </span>
                                Positive Reviews
                            </h4>
                            <p>
                                Usage of the Internet is becoming more common
                                due to rapid advancement of technology and
                                power.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
