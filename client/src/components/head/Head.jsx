import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Head.css";
const Head = () => {
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

                                <li className="item1">
                                    <a href="offers" className="link">
                                        Offers
                                    </a>
                                </li>
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

export default Head;
