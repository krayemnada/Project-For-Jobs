import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Contact.css";

const Contact = () => {
    return (
        <div>
            <Header />
            <div>
                <div className="imag">
                    <div class="cont">
                        <div className="content">
                            <h1 style={{ color: "blue" }}>
                                <strong>Contact Us</strong>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper">
                                <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                                    <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                                        <div>
                                            <h4 style={{ marginTop: "30px" }}>
                                                {" "}
                                                Let's get in touch
                                            </h4>
                                            <p>
                                                We're open for any suggestion or
                                                just to have a chat
                                            </p>

                                            <div className="tit">
                                                {" "}
                                                <span className="icon">
                                                    <i class="fa-solid fa-location-dot"></i>
                                                </span>
                                                <h5>Address :</h5>
                                                <p className="parag">
                                                    Sfax Elamra , 3036
                                                </p>
                                            </div>

                                            <div className="tit">
                                                {" "}
                                                <span className="icon">
                                                    <i class="fa-solid fa-phone"></i>
                                                </span>
                                                <h5>Phone :</h5>
                                                <p className="parag">
                                                    +21628105262
                                                </p>
                                            </div>

                                            <div className="tit">
                                                {" "}
                                                <span className="icon">
                                                    <i class="fa-solid fa-envelope"></i>
                                                </span>{" "}
                                                <h5>Email :</h5>
                                                <p className="parag">
                                                    nadakrayem41@gmail.com
                                                </p>
                                            </div>

                                            <div className="tit">
                                                {" "}
                                                <span className="icon">
                                                    <i class="fa-solid fa-earth-africa"></i>
                                                </span>
                                                <h5>Website :</h5>
                                                <p className="parag">
                                                    www.nadakraiem.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                        <div className="contact-wrap ">
                                            <h3 className="mb">Get in touch</h3>
                                            <form
                                                method="POST"
                                                name="contactForm"
                                                className="contactForm"
                                            >
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label
                                                                className="label"
                                                                for="name"
                                                            >
                                                                Full Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="name"
                                                                id="name"
                                                                placeholder="Name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label
                                                                className="label"
                                                                for="email"
                                                            >
                                                                Email Address
                                                            </label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                name="email"
                                                                id="email"
                                                                placeholder="Email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label
                                                                className="label"
                                                                for="subject"
                                                            >
                                                                Subject
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="subject"
                                                                id="subject"
                                                                placeholder="Subject"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label
                                                                className="label"
                                                                for="#"
                                                            >
                                                                Message
                                                            </label>
                                                            <textarea
                                                                name="message"
                                                                className="form-control"
                                                                id="message"
                                                                cols="30"
                                                                rows="4"
                                                                placeholder="Message"
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="submit"
                                                                value="Send Message"
                                                                className="btn btn-primary"
                                                            />
                                                            <div className="submitting"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="col-md-12 mt-5">
                    <h2 style={{ color: "#4986fc" }}>
                        Our localisation{" "}
                        <span>
                            <i class="fa-solid fa-location-dot "></i>
                        </span>
                    </h2>
                    <br />
                    <img
                        src="https://www.google.com/maps/vt/data=9T-QW0MGOSsPn5DomsxSvWwekDFQ0hoVtgkGnWVZ8wkc7m1bsOvUSwfHpjtotJo_5tsOqJGmiEZtWRyXiYt66akbip7YepOmmybHJ6ssdozXo18qI5MubQFSbqt9HVwGHdUOwVrzZmMJ_c9GnlaQyI0SU9eCzwMw3krN5KfKy6zvAJzjPR2clO9NjYKTsztY4hm6CavIqeg2rV0jlpzpAqx1AFgye5ToP5lmucTsO9waIC9g1CMEuhc1GXjW-A"
                        alt=""
                        width="1100px"
                        height="400px"
                    />
                </div>
                <br />
                <div>
                    <h2 style={{ color: "#4986fc" }}>
                        Or you can touch with us with :{" "}
                    </h2>{" "}
                    <br />
                    <br />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
        // </div>
    );
};

export default Contact;
