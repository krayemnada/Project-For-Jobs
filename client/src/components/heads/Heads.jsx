import React from "react";
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
                    <div>
                        <div className="titl-Navbar">
                            <strong className="tite2">
                                {" "}
                                <span>Forsa</span>Jobs
                            </strong>
                        </div>
                        <div className="collap1">
                            <ul className="navbar-na ">
                                <li className="item3">
                                    <a href="profile" className="link">
                                        Profile
                                    </a>
                                </li>

                                <li className="item2">
                                    <a href="about" className="link">
                                        About
                                    </a>
                                </li>
                                <li>
                                    {/* <NavDropdown
                                        title="My offers"
                                        id="basic-nav-dropdown"
                                        className="one"
                                    >
                                        <Dropdown.Item href="#/action-1">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            Something else
                                        </Dropdown.Item>
                                    </NavDropdown> */}
                                    <div className="dropdown">
                                        <a href="#" className="dropbtn">
                                            {" "}
                                            My offers
                                        </a>
                                        {/* <span style={{ color: "white" }}>
                                            My offers
                                        </span> */}
                                        <div className="dropdown-content">
                                            <a href="/myOffers">My Offers</a>
                                            <a href="/addOffer">Add Offers</a>
                                            <a href="/myOffersConsult">
                                                Consult my offers
                                            </a>
                                        </div>
                                    </div>

                                    {/* <a href="course" className="link">
                                        <NavDropdown
                                            title="My offers"
                                            id="basic-nav-dropdown"
                                            className="one"
                                        >
                                            <NavDropdown.Item href="myOffers">
                                                my offers
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="addOffer">
                                                Add offer
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">
                                                consult my offers
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </a> */}
                                </li>

                                <li className="item  ">
                                    <Link to="/">
                                        {" "}
                                        <button
                                            onClick={deconnexion}
                                            className="btton"
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

export default Heads;
