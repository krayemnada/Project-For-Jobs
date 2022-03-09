import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HeadUser.css";
const HeadUser = () => {
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
                        <strong className="navbarbrand">
                            {" "}
                            <span
                                style={{
                                    marginTop: "20px",
                                    paddingTop: "50px",
                                }}
                            >
                                Forsa
                            </span>
                            Jobs
                        </strong>

                        <div className="collap">
                            <ul className="navbar-na ">
                                <li className="item  ">
                                    <Link to="/">
                                        {" "}
                                        <button
                                            onClick={deconnexion}
                                            className="btton"
                                            style={{ marginBottum: "5px" }}
                                        >
                                            Log Out
                                        </button>{" "}
                                    </Link>
                                </li>
                                <li className="item2">
                                    <a href="about" className="link">
                                        About
                                    </a>
                                </li>
                                <li className="item4">
                                    <a href="offersConsult" className="link">
                                        Offers
                                    </a>
                                </li>

                                <li className="item3">
                                    <a href="profile" className="link">
                                        Profile
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

export default HeadUser;
