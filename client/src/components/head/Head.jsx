import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Head.css";
const Head = () => {
    const navigate = useNavigate();
    const deconnexion = () => {
        localStorage.clear();
        navigate("/");
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <section>
                <nav
                    className="nav1"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <div className="container" style={{ display: "flex" }}>
                        <div className="collap">
                            <span className="titl">Dashboard</span>
                            <ul className="navbar-na ">
                                <li className="item3">Dashboard</li>
                                <li className="item2">
                                    <a href="about" className="link">
                                        Statistics
                                    </a>
                                </li>

                                <li className="item1">
                                    <a href="hh" className="link">
                                        Settings
                                    </a>
                                </li>
                                <li className="item  ">
                                    <Link to="/">
                                        {" "}
                                        <button
                                            onClick={deconnexion}
                                            className="btt"
                                        >
                                            Log Out
                                        </button>{" "}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    );
};

export default Head;
