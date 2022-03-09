import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/action/actions";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Login.css";

const Login = () => {
    const { user, loading } = useSelector((state) => state);
    // console.log(user);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginUser = { email, password };
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userLogin(loginUser, navigate));
    };

    return (
        <div>
            <Header />
            {loading ? (
                <h1>Loading ...</h1>
            ) : (
                <div className="image">
                    <section
                        className="ftco-section ftco-no-pb ftco-no-pt"
                        style={{ position: "absolute", top: "170px" }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7"></div>
                                <div className="col-md-5 order-md-last">
                                    <div className="login-wrap p-4 p-md-5">
                                        <h3 className="mb-4">Login Now</h3>
                                        <form className="signup-form">
                                            <div className="form-group">
                                                <label className="label">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your email please"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="label">
                                                    Password
                                                </label>
                                                <input
                                                    id="password-field"
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter your password"
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="form-group d-flex justify-content-end mt-4">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary submit"
                                                    onClick={handleSubmit}
                                                >
                                                    <span className="fa fa-paper-plane"></span>
                                                </button>
                                            </div>
                                        </form>

                                        <p className="text-center">
                                            Don't have an account?{" "}
                                            <a href="SignIn">Sign Up</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Login;
