import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOffer } from "../../redux/action/OffresAction";
import Footer from "../footer/Footer";
import { BsSearch } from "react-icons/bs";
import HeadUser from "../headUser/HeadUser";
import { Button, Form, FormControl } from "react-bootstrap";

import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import {
    Avatar,
    Box,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Tooltip,
} from "@mui/material";

import { Link, useNavigate, useParams } from "react-router-dom";
import "./GetOffers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const GetOffers = () => {
    const { loading, UsersOffers } = useSelector((state) => state.OfferReducer);
    // console.log(UsersOffers);
    const [text, setText] = useState("");
    const [address, setAddress] = useState("");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOffer());
    }, []);

    const { user } = useSelector((state) => state.userReducer);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();
    const deconnexion = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="all-back">
            <section>
                <nav
                    className="nav_user  "
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <div className="container" style={{ display: "flex" }}>
                        <div
                            className="nav-collap-user"
                            style={{ display: "flex" }}
                        >
                            <strong className="navbar_title">
                                {" "}
                                <span>Forsa</span>
                                Jobs
                            </strong>

                            <div>
                                <ul className="navbar-user ">
                                    <li className="item3">
                                        <a href="/HomeUser" className="link">
                                            home
                                        </a>
                                    </li>
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
                                    <li className="item4">
                                        <a
                                            href="/offersConsult"
                                            className="link"
                                        >
                                            Offers
                                        </a>
                                    </li>

                                    <li className="item  ">
                                        <React.Fragment>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    textAlign: "center",
                                                }}
                                            >
                                                <Tooltip title="Account settings">
                                                    <IconButton
                                                        onClick={handleClick}
                                                        size="small"
                                                        sx={{ ml: 2 }}
                                                        aria-controls={
                                                            open
                                                                ? "account-menu"
                                                                : undefined
                                                        }
                                                        aria-haspopup="true"
                                                        aria-expanded={
                                                            open
                                                                ? "true"
                                                                : undefined
                                                        }
                                                    >
                                                        <Avatar
                                                            alt="user_image"
                                                            src={user.image}
                                                            sx={{
                                                                width: 40,
                                                                height: 40,
                                                            }}
                                                        ></Avatar>
                                                    </IconButton>
                                                </Tooltip>
                                            </Box>
                                            <Menu
                                                anchorEl={anchorEl}
                                                id="account-menu"
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                PaperProps={{
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: "visible",
                                                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                                        mt: 1.5,
                                                        "& .MuiAvatar-root": {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                        },
                                                        "&:before": {
                                                            content: '""',
                                                            display: "block",
                                                            position:
                                                                "absolute",
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor:
                                                                "background.paper",
                                                            transform:
                                                                "translateY(-50%) rotate(45deg)",
                                                            zIndex: 0,
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{
                                                    horizontal: "right",
                                                    vertical: "top",
                                                }}
                                                anchorOrigin={{
                                                    horizontal: "right",
                                                    vertical: "bottom",
                                                }}
                                            >
                                                <MenuItem>
                                                    <Avatar /> Profile
                                                </MenuItem>
                                                <MenuItem>
                                                    <Avatar /> My account
                                                </MenuItem>
                                                <Divider />
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <PersonAdd fontSize="small" />
                                                    </ListItemIcon>
                                                    Add another account
                                                </MenuItem>
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <Settings fontSize="small" />
                                                    </ListItemIcon>
                                                    Settings
                                                </MenuItem>
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <Logout fontSize="small" />
                                                    </ListItemIcon>
                                                    <Link to="/">
                                                        {" "}
                                                        <button
                                                            onClick={
                                                                deconnexion
                                                            }
                                                            className="btton"
                                                        >
                                                            Log Out
                                                        </button>{" "}
                                                    </Link>
                                                </MenuItem>
                                            </Menu>
                                        </React.Fragment>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>

            {/* <HeadUser /> */}
            <div>
                <img
                    className="offers_img"
                    src="https://pbs.twimg.com/media/DlB7i4AXsAAFJjz.jpg"
                    alt="image_"
                />
            </div>
            <div className="container" style={{ marginTop: "100px" }}>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        aria-label="Search"
                    />
                    <FormControl
                        type="search"
                        placeholder="Emplacement (Address)"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                    />
                    <FormControl
                        type="search"
                        placeholder="key words"
                        className="me-2"
                        aria-label="Search"
                    />

                    <Button variant="outline-success" className="button-search">
                        <BsSearch />
                    </Button>
                </Form>
            </div>
            <div className="container">
                <h1
                    style={{
                        marginTop: "50px",
                        color: "rgba(32, 124, 229, 1)",
                    }}
                >
                    Latest Jobs
                </h1>
                <div className="all_card">
                    {UsersOffers &&
                        UsersOffers.filter(
                            (elt) =>
                                elt.title
                                    .toUpperCase()
                                    .trim()
                                    .includes(text.toUpperCase().trim()) &&
                                elt.place
                                    .toUpperCase()
                                    .trim()
                                    .includes(text.toUpperCase().trim())
                        ).map((elt, index) => (
                            <div className="card-offers">
                                <div className="write_card">
                                    <div
                                        style={{
                                            display: "flex",
                                            marginTop: "20px",
                                        }}
                                    >
                                        {" "}
                                        <h2
                                            style={{
                                                color: "rgba(32, 124, 229, 1)",
                                            }}
                                        >
                                            {" "}
                                            {elt.title}
                                        </h2>
                                    </div>
                                    {/* <div style={{ display: "flex" }}>
                                        <label htmlFor="">Description :</label>{" "}
                                        <p> {elt.description} </p>
                                    </div> */}
                                    <div
                                        style={{
                                            display: "flex",
                                            marginTop: "20px",
                                        }}
                                    >
                                        <i class="fa-solid fa-location-dot fa-xl"></i>

                                        <h4 style={{ marginRight: "10px" }}>
                                            {" "}
                                            {elt.place}{" "}
                                        </h4>
                                    </div>
                                    {/* <div style={{ display: "flex" }}>
                                        <label htmlFor="">Niveau :</label>{" "}
                                        <p> {elt.niveau} </p>
                                    </div> */}
                                    {/* <div style={{ display: "flex" }}>
                                        <label htmlFor="">Type of job</label>{" "}
                                        <p> {elt.typeEmploi} </p>
                                    </div> */}
                                </div>
                                <div>
                                    <div
                                        style={{
                                            marginTop: "-50px",
                                            marginLeft: "800px",
                                        }}
                                    >
                                        <p> {elt.date} </p>
                                    </div>

                                    <Link to={`/detailOffer/${elt._id}`}>
                                        <Button
                                            className="but"
                                            style={{
                                                marginTop: "-250px",
                                                marginLeft: "800px",
                                                // width: "100%",
                                            }}
                                        >
                                            {" "}
                                            Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GetOffers;
