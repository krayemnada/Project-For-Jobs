import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <div>
            <footer className="ftco-footer ftco-no-pt">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md pt-5">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">About</h2>
                                <p style={{ color: "white" }}>
                                    Far far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia,
                                    there live the blind texts.
                                </p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                                    <li className="ftco-animate">
                                        <a href="#">
                                            <span>
                                                <i className="fa fa-twitter"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="ftco-animate">
                                        <a href="#">
                                            <span>
                                                <i className="fa fa-facebook"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="ftco-animate">
                                        <a href="#">
                                            <span>
                                                {" "}
                                                <i className="fa fa-instagram"></i>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5">
                            <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">Help Desk</h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Customer Care
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Legal Help
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Privacy and Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Refund Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Call Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">
                                    Recent Offers
                                </h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#nad" className="py-2 d-block">
                                            Computer Engineering
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Web Design
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Business{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Civil Engineering
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Computer Technician
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="py-2 d-block">
                                            Web Developer
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">
                                    Have a Questions?
                                </h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li>
                                            <span
                                                style={{
                                                    color: "white",
                                                    textDecoration: "none",
                                                }}
                                                className="icon fa fa-map-marker"
                                            ></span>
                                            <span className="text">
                                                Elamra , 3036 , sfax , tunisie
                                            </span>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span
                                                    style={{ color: "white" }}
                                                    className="icon fa fa-phone"
                                                ></span>
                                                <span className="text">
                                                    +21628105262
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span
                                                    style={{ color: "white" }}
                                                    className="icon fa fa-paper-plane"
                                                ></span>
                                                <span className="text">
                                                    info@yourdomain.com
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p style={{ color: "white" }}>
                                Copyright @ All rights reserved | This website
                                is made with{" "}
                                <i
                                    className="fa fa-heart"
                                    aria-hidden="true"
                                ></i>{" "}
                                by Nada
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
