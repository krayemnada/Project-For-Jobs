import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { PublisherLogin } from "../../redux/actions";
import Footer from "../footer/Footer";
import Header from "../header/Header";
// import "./Login.css";

const LoginPublisher = () => {
    const { publisher, loading } = useSelector((state) => state);
    console.log(publisher);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            PublisherLogin({
                password,
                email,
            })
        );
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
                                        <form
                                            action="#"
                                            className="signup-form"
                                        >
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

export default LoginPublisher;
