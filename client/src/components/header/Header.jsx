import React from "react";
import "./Header.css";
const Header = () => {
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
                                    <a href="/" className="nav-link">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/about" className="nav-link">
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
                                    <a href="login" className="nav-link">
                                        Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="signIn" className="nav-link">
                                        SignUp
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

export default Header;
