import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Heads.css";
const Heads = () => {
    const navigate = useNavigate();
    const deconnexion = () => {
        localStorage.clear();
        navigate("/");
    };
    return (
        <div>
            <section>
                <nav className="nav   ">
                    <div className="container">
                        <strong className="tite">
                            {" "}
                            <span>Forsa</span>Jobs
                        </strong>

                        <div className="collap">
                            <ul className="navbar-na ">
                                <li className="item  ">
                                    <Link to="/">
                                        {" "}
                                        <button onClick={deconnexion}>
                                            Log Out
                                        </button>{" "}
                                    </Link>
                                </li>

                                {/* <li className="item1"> */}
                                <a href="course" className="link">
                                    <NavDropdown
                                        title="My offers"
                                        id="basic-nav-dropdown"
                                        className="one"
                                    >
                                        <NavDropdown.Item href="myOffers">
                                            my offers
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#">
                                            Add offer
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">
                                            consult my offers
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </a>
                                {/* </li> */}
                                <li className="item2">
                                    <a href="about" className="link">
                                        About
                                    </a>
                                </li>

                                <li className="item3">
                                    <a href="contact" className="link">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    );
};

export default Heads;
