import React, { useEffect, useState } from "react";
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

import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { detailOffer } from "../../redux/action/OffresAction";

import Footer from "../footer/Footer";

import "./Upload.css";
import { add_post } from "../../redux/action/postAction";
const Upload = () => {
    const { posts } = useSelector((state) => state.postReducer);
    console.log(posts);

    const [title, setTitle] = useState("");
    const [postEmail, setPostEmail] = useState("");
    const [img, setImg] = useState("");
    const [postDescription, setPostDescription] = useState("");

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newFile = { title, postDescription, img, postEmail };

        dispatch(add_post(newFile));

        setTitle("");
        setPostEmail("");
        setImg("");
        setPostDescription("");
    };

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
        <div>
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
            <div className="upload-all">
                <div className="form-cards">
                    <h1 style={{ color: "rgba(32, 124, 229, 1)" }}>
                        Enter your personal information
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="name"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={postEmail}
                                onChange={(e) => setPostEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Cover Letter</Form.Label>{" "}
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={postDescription}
                                onChange={(e) =>
                                    setPostDescription(e.target.value)
                                }
                            />
                        </Form.Group>

                        <h1 style={{ color: "rgba(32, 124, 229, 1)" }}>
                            Upload Your Cv
                        </h1>
                        <form
                            style={{ marginTop: "100px" }}
                            method="POST"
                            action="/upload"
                            enctype="multipart/form-data"
                        >
                            <input type="file" name="image" />
                            <input type="submit" />
                        </form>
                        <Button variant="primary" onClick={handleSubmit}>
                            Save Changes
                        </Button>
                    </Form>
                </div>

                {/* <div className="Upload-card"></div> */}
            </div>
            <Footer />
        </div>
    );
};

export default Upload;
