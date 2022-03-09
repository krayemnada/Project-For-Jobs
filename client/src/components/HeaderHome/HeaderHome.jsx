import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderHome = () => {
    const navigate = useNavigate();
    const deconnexion = () => {
        localStorage.clear();
        navigate("/");
    };
    return (
        <div>
            <section>
                <nav className="navbar navbar-expand-lg   ">
                    <div className="container">
                        <strong className="navbar-brand">
                            {" "}
                            <span>Forsa</span>Jobs
                        </strong>

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav list ml-auto">
                                <li className="nav-item  active">
                                    <a href="/HomeUser" className="nav-link">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="about" className="nav-link">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/offrs" className="nav-link">
                                        Offers
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a href="contact" className="nav-link">
                                        Contact
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="profile" className="nav-link">
                                        Profile
                                    </a>
                                </li>
                                <li className="nav-item">
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

export default HeaderHome;
