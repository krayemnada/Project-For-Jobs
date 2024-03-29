import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../redux/action/UserActions";
import Head from "../head/Head";
import { Button } from "react-bootstrap";
import nada from "../../nada.jpg";

import "./Users.css";
const Users = () => {
    const { ListUsers } = useSelector((state) => state.userReducer);
    console.log(ListUsers);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, []);
    return (
        <div>
            <Head />
            <div style={{ display: "flex" }}>
                <div className="sidebar">
                    <div>
                        <Button className="btt1">
                            <i class="fa-solid fa-bars fa-xl"></i>
                        </Button>
                    </div>
                    <div>
                        <img src={nada} alt="nada" className="nada" />
                        <h6 className="nad">Nada Krayem</h6>
                    </div>

                    <br />
                    <hr style={{ border: "1px", color: "white" }} />
                    <br />
                    <div>
                        <a href="#" className="dash">
                            <h5> Dashboard</h5>
                        </a>
                        <div className="side">
                            <a href="#">
                                <i class="fa fa-fw fa-home"></i>{" "}
                                <span className="cc">Home</span>
                            </a>
                            <a href="#">
                                <i class="fa-solid fa-table"></i>{" "}
                                <span className="cc">Tables</span>
                            </a>
                            <a href="#">
                                <i class="fa-solid fa-table-cells"></i>{" "}
                                <span className="cc">Forms</span>
                            </a>
                            <hr style={{ border: "1px", color: "white" }} />
                            <a href="#">
                                <i class="fa fa-fw fa-wrench"></i>{" "}
                                <span className="cc">Services</span>
                            </a>
                            <a href="/pub">
                                <i class="fa-solid fa-building"></i>{" "}
                                <span className="cc">Publisher</span>
                            </a>
                            <a href="/users">
                                <i class="fa-solid fa-user"></i>{" "}
                                <span className="cc">Users</span>
                            </a>
                            <a href="/off">
                                <i class="fa-solid fa-building"></i>{" "}
                                <span className="cc">Offers</span>
                            </a>
                            <hr style={{ border: "1px", color: "white" }} />
                            <a href="#">
                                <i class=" far fa-calendar-alt"></i>
                                <span className="cc"> Calendar</span>
                            </a>{" "}
                            <a href="#">
                                <i class="nav-icon far fa-envelope"></i>{" "}
                                <span className="cc">Mailbox</span>
                            </a>{" "}
                            <a href="#">
                                <i class="nav-icon fas fa-book"></i>{" "}
                                <span className="cc">Pages</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: "400px" }}>
                    <div>
                        <div style={{ display: "flex" }}>
                            {ListUsers &&
                                ListUsers.map((elt, key) => (
                                    <div className="card-publisher ">
                                        {/* <img src={elt.image} alt="" /> */}
                                        <h1>{elt.fullName}</h1>
                                        <h3 style={{ marginLeft: "150px" }}>
                                            {elt.email}
                                        </h3>
                                        {/* <p>{elt.website}</p> */}
                                        <p>{elt.phone}</p>
                                        <p>{elt.governorate}</p>
                                        <Button
                                            onClick={() =>
                                                dispatch(deleteUser(elt._id))
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
