import React, { useState } from "react";
import "./SignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { userSignUp } from "../../redux/action/actions";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const SignUp = () => {
    const { user, loading } = useSelector((state) => state);
    console.log(user);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [civility, setCivility] = useState("");
    const [birth, setBirth] = useState("");
    const [image, setImage] = useState("");

    const [governorate, setGovernorate] = useState("");

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            userSignUp({
                fullName,
                password,
                civility,
                email,
                birth,
                image,
                governorate,
            })
        );
        setFullName("");
        setBirth("");
        setCivility("");
        setEmail("");
        setImage("");

        setPassword("");
        setGovernorate("");
    };
    return (
        <div>
            <Header />{" "}
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
                                        <h3 className="mb-4">Register Now</h3>
                                        <form
                                            action="#"
                                            className="signup-form"
                                        >
                                            <div className="form-group">
                                                <label className="label">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your fullName please"
                                                    value={fullName}
                                                    onChange={(e) =>
                                                        setFullName(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
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

                                            <div className="form-group">
                                                <label className="label">
                                                    Gender
                                                </label>
                                                <input
                                                    id="sex-field"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="your sex"
                                                    value={civility}
                                                    onChange={(e) =>
                                                        setCivility(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label className="label">
                                                    Date of birth
                                                </label>
                                                <input
                                                    id="civility-field"
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="Enter your Birth"
                                                    value={birth}
                                                    onChange={(e) =>
                                                        setBirth(e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="label">
                                                    Image
                                                </label>
                                                <input
                                                    id="sex-field"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="your image"
                                                    value={image}
                                                    onChange={(e) =>
                                                        setImage(e.target.value)
                                                    }
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label className="label">
                                                    Governorate
                                                </label>

                                                <select
                                                    name="governorate"
                                                    id="pet-select"
                                                >
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        --Please choose your
                                                        governorate--
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Tunis
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Ben Arous
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Sfax
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Nabeul
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Sidi Bouzid
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Kairouan
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Kebili
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Monastir
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Tozeur
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Siliana
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Mednine
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Ariana
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Manouba
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Beja
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Zaghouan
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Kef
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Jandouba
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Gasrine
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Bizerte
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Sousse
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Mahdia
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Tatawine
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Gafsa
                                                    </option>
                                                    <option
                                                        value={governorate}
                                                        onChange={(e) =>
                                                            setGovernorate(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        Gebes
                                                    </option>
                                                </select>

                                                {/* <input
                                                    id="civility-field"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your Governorate"
                                                    value={governorate}
                                                    onChange={(e) =>
                                                        setGovernorate(
                                                            e.target.value
                                                        )
                                                    }
                                                /> */}
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
                                            Already have an account?{" "}
                                            <a href="login">Log In</a>
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

export default SignUp;
