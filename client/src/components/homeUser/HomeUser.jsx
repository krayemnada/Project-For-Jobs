import React from "react";
import "./HomeUser.css";
import image from "../../img3.jpg";
import image2 from "../../image_4.jpg";
import image3 from "../../work-3.jpg";
import image7 from "../../work-6.jpg";

import img from "../../img4.jpg";
import img5 from "../../img5.jpg";
import Footer from "../footer/Footer";
import HeaderHome from "../HeaderHome/HeaderHome";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
const HomeUser = () => {
    var items = [
        {
            image: image2,
            name: "Team Leader",
            description: "Probably the most random thing you have ever seen!",
        },
        {
            image: image3,
            name: "HR Office",
            description: "Hello World!",
        },
        {
            image: image,
            name: "Marketing",
            description: "Hello World!",
        },
        {
            image: image7,
            name: "Full Stack Developpment",
            description: "Hello World!",
        },
        {
            image: img,
            name: "software engineer",
            description: "Hello World!",
        },
        {
            image: img5,
            name: "Commercial",
            description: "Hello World!",
        },
    ];
    return (
        <div>
            <HeaderHome />
            <div className="imag">
                <div class="cont">
                    {/* <img
                src={image}
                alt="img"
                style={{ width: "100%", height: "600px" }}
            /> */}
                    <div className="content">
                        <h1 style={{ color: "blue" }}>Welcome to ForsaJobs</h1>
                        <h3 style={{ color: "blue", marginLeft: "260px" }}>
                            {" "}
                            If you Search about jobs you on the right way
                        </h3>
                    </div>
                </div>
            </div>
            <br />
            <br />

            <div>
                <div>
                    <div className="title_info">
                        <span>
                            <strong
                                style={{
                                    marginLeft: "120px",
                                    fontSize: "18px",
                                }}
                            >
                                Start Searching Today
                            </strong>
                        </span>
                        <h2>Browse Online Jobs Category</h2>
                    </div>
                </div>
            </div>

            <div>
                <Carousel>
                    {items.map((elt) => (
                        <Paper
                            style={{
                                marginLeft: "200px",
                                marginRight: "200px",
                            }}
                        >
                            <img
                                style={{
                                    marginLeft: "200px",
                                    marginBottom: "20px",
                                }}
                                src={elt.image}
                                alt="carousel_image"
                                width={900}
                                height={500}
                            />
                            <div className="carousel_words">
                                <h2>{elt.name}</h2>
                                <p>{elt.description}</p>

                                <Link to="/offersConsult">
                                    <Button
                                        className="CheckButton"
                                        style={{
                                            background: "blue",
                                            color: "white",
                                        }}
                                    >
                                        Check it out!
                                    </Button>
                                </Link>
                            </div>
                        </Paper>
                    ))}
                </Carousel>
                )
            </div>

            <div className="all">
                <div
                    className="single_event position-relative"
                    style={{ marginLeft: "150px" }}
                >
                    <div className="img">
                        <img
                            src={image}
                            alt=""
                            width={400}
                            height={350}
                            style={{ marginBottom: "40px" }}
                        />
                    </div>
                    <div className="event_details">
                        <h3 className="tit">
                            <strong>MARKETING</strong>
                        </h3>
                        <p>Some quick example text</p>
                    </div>
                </div>

                <div className="single_event position-relative">
                    <div className="img">
                        <img
                            src={img}
                            alt=""
                            width={400}
                            height={350}
                            style={{ marginBottom: "40px" }}
                        />
                    </div>
                    <div className="event_details">
                        <h3 className="tit">
                            <strong>SOFTWARE Database</strong>
                        </h3>
                        <p>Some quick example text</p>
                    </div>
                </div>

                <div className="single_event position-relative">
                    <div className="img">
                        <img
                            src={img5}
                            alt=""
                            width={400}
                            height={350}
                            style={{ marginBottom: "40px" }}
                        />
                    </div>
                    <div className="event_details">
                        <h3 className="tit">
                            <strong>COMMERCIAL</strong>
                        </h3>
                        <p>Some quick example text</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomeUser;
