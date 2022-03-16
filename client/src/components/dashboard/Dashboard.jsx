import React from "react";
import { ProgressBar } from "react-bootstrap";
import Head from "../head/Head";
import pic1 from "../../pic1.png";
import "./Dachboard.css";
import { Button } from "react-bootstrap";
import nada from "../../nada.jpg";
const Dashboard = () => {
    return (
        <div>
            <Head />

            {/* <div style={{ display: "flex" }}>
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
                <div className="dash">
                    <div className="conten">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-header border-0">
                                            <div className="d-flex justify-content-between">
                                                <h3 className="card-title">
                                                    Online Store Visitors
                                                </h3>
                                                <a href="javascript:void(0);">
                                                    View Report
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <p className="d-flex flex-column">
                                                    <span class="text-bold text-lg">
                                                        820
                                                    </span>
                                                    <span>
                                                        Visitors Over Time
                                                    </span>
                                                </p>
                                                <p className="ml-auto d-flex flex-column text-right">
                                                    <span className="text-success">
                                                        <i className="fas fa-arrow-up"></i>{" "}
                                                        12.5%
                                                    </span>
                                                    <span className="text-muted">
                                                        Since last week
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="position-relative mb-4">
                                                <canvas
                                                    id="visitors-chart"
                                                    height="200"
                                                ></canvas>
                                            </div>
                                            <img
                                                src={pic1}
                                                alt=""
                                                style={{
                                                    marginTop: "4px",
                                                    heigh: "1000",
                                                    width: "300",
                                                }}
                                            />
                                            <div className="d-flex flex-row justify-content-end">
                                                <span className="mr-2">
                                                    <i className="fas fa-square text-primary"></i>{" "}
                                                    This Week
                                                </span>

                                                <span>
                                                    <i className="fas fa-square text-gray"></i>{" "}
                                                    Last Week
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header border-0">
                                            <h3 className="card-title">
                                                Products
                                            </h3>
                                            <div className="card-tools">
                                                <a
                                                    href="#"
                                                    className="btn btn-tool btn-sm"
                                                >
                                                    <i class="fas fa-download"></i>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="btn btn-tool btn-sm"
                                                >
                                                    <i className="fas fa-bars"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-body table-responsive p-0">
                                            <table className="table table-striped table-valign-middle">
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Sales</th>
                                                        <th>More</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <img
                                                                src="dist/img/default-150x150.png"
                                                                alt="Product 1"
                                                                className="img-circle img-size-32 mr-2"
                                                            />
                                                            Some Product
                                                        </td>
                                                        <td>$13 USD</td>
                                                        <td>
                                                            <small className="text-success mr-1">
                                                                <i className="fas fa-arrow-up"></i>
                                                                12%
                                                            </small>
                                                            12,000 Sold
                                                        </td>
                                                        <td>
                                                            <a
                                                                href="#"
                                                                className="text-muted"
                                                            >
                                                                <i className="fas fa-search"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img
                                                                src="dist/img/default-150x150.png"
                                                                alt="Product 1"
                                                                className="img-circle img-size-32 mr-2"
                                                            />
                                                            Another Product
                                                        </td>
                                                        <td>$29 USD</td>
                                                        <td>
                                                            <small className="text-warning mr-1">
                                                                <i className="fas fa-arrow-down"></i>
                                                                0.5%
                                                            </small>
                                                            123,234 Sold
                                                        </td>
                                                        <td>
                                                            <a
                                                                href="#"
                                                                className="text-muted"
                                                            >
                                                                <i className="fas fa-search"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img
                                                                src="dist/img/default-150x150.png"
                                                                alt="Product 1"
                                                                className="img-circle img-size-32 mr-2"
                                                            />
                                                            Amazing Product
                                                        </td>
                                                        <td>$1,230 USD</td>
                                                        <td>
                                                            <small className="text-danger mr-1">
                                                                <i className="fas fa-arrow-down"></i>
                                                                3%
                                                            </small>
                                                            198 Sold
                                                        </td>
                                                        <td>
                                                            <a
                                                                href="#"
                                                                className="text-muted"
                                                            >
                                                                <i class="fas fa-search"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img
                                                                src="dist/img/default-150x150.png"
                                                                alt="Product 1"
                                                                class="img-circle img-size-32 mr-2"
                                                            />
                                                            Perfect Item
                                                            <span class="badge bg-danger">
                                                                NEW
                                                            </span>
                                                        </td>
                                                        <td>$199 USD</td>
                                                        <td>
                                                            <small class="text-success mr-1">
                                                                <i class="fas fa-arrow-up"></i>
                                                                63%
                                                            </small>
                                                            87 Sold
                                                        </td>
                                                        <td>
                                                            <a
                                                                href="#"
                                                                class="text-muted"
                                                            >
                                                                <i class="fas fa-search"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-header border-0">
                                            <div className="d-flex justify-content-between">
                                                <h3 className="card-title">
                                                    Sales
                                                </h3>
                                                <a href="javascript:void(0);">
                                                    View Report
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <p className="d-flex flex-column">
                                                    <span className="text-bold text-lg">
                                                        $18,230.00
                                                    </span>
                                                    <span>Sales Over Time</span>
                                                </p>
                                                <p className="ml-auto d-flex flex-column text-right">
                                                    <span className="text-success">
                                                        <i className="fas fa-arrow-up"></i>{" "}
                                                        33.1%
                                                    </span>
                                                    <span className="text-muted">
                                                        Since last month
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="position-relative mb-4">
                                                <canvas
                                                    id="sales-chart"
                                                    height="200"
                                                ></canvas>
                                            </div>

                                            <div className="d-flex flex-row justify-content-end">
                                                <span className="mr-2">
                                                    <i className="fas fa-square text-primary"></i>{" "}
                                                    This year
                                                </span>

                                                <span>
                                                    <i class="fas fa-square text-gray"></i>{" "}
                                                    Last year
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header border-0">
                                            <h3 className="card-title">
                                                Online Store Overview
                                            </h3>
                                            <div className="card-tools">
                                                <a
                                                    href="#"
                                                    class="btn btn-sm btn-tool"
                                                >
                                                    <i class="fas fa-download"></i>
                                                </a>
                                                <a
                                                    href="#"
                                                    class="btn btn-sm btn-tool"
                                                >
                                                    <i class="fas fa-bars"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                                                <p className="text-success text-xl">
                                                    <i className="ion ion-ios-refresh-empty"></i>
                                                </p>
                                                <p className="d-flex flex-column text-right">
                                                    <span className="font-weight-bold">
                                                        <i class="ion ion-android-arrow-up text-success"></i>{" "}
                                                        12%
                                                    </span>
                                                    <span className="text-muted">
                                                        CONVERSION RATE
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                                                <p className="text-warning text-xl">
                                                    <i className="ion ion-ios-cart-outline"></i>
                                                </p>
                                                <p className="d-flex flex-column text-right">
                                                    <span className="font-weight-bold">
                                                        <i className="ion ion-android-arrow-up text-warning"></i>{" "}
                                                        0.8%
                                                    </span>
                                                    <span className="text-muted">
                                                        SALES RATE
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-0">
                                                <p className="text-danger text-xl">
                                                    <i className="ion ion-ios-people-outline"></i>
                                                </p>
                                                <p className="d-flex flex-column text-right">
                                                    <span className="font-weight-bold">
                                                        <i className="ion ion-android-arrow-down text-danger"></i>{" "}
                                                        1%
                                                    </span>
                                                    <span className="text-muted">
                                                        REGISTRATION RATE
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Dashboard;
