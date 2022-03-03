import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/signUp/SignUp";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "./redux/action/actions";
import SignPublisher from "./components/signPublisher/SignPublisher";
import GetProfilePublisher from "./components/getprofilePublisher/GetProfilePublisher";
import Dashboard from "./components/dashboard/Dashboard";
import AddOffer from "./components/addoffer/AddOffer";
import Offers from "./components/offers/Offers";

function App() {
    const { user, loading } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserProfile());
    }, []);
    return (
        <div className="App">
            <Router>
                {/* <Header /> */}

                <Routes>
                    {user && user.userRole === "admin" ? (
                        <>
                            <Route
                                path="/login"
                                element={<Navigate replace to="/" />}
                            />
                            <Route path="/admin" element={<Dashboard />} />
                        </>
                    ) : user && user.userRole === "publisher" ? (
                        <>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/profile"
                                element={<GetProfilePublisher />}
                            />
                            <Route path="/myOffers" element={<Offers />} />
                            {/* <Route path="/addOffer" element={<AddOffer />} /> */}
                        </>
                    ) : user && user.userRole === "User" ? (
                        <>
                            <Route path="/" element={<Home />} />
                            <Route path="/profile" element={<Profile />} />
                            {/* <Route path="/contact" element={<Contact />} /> */}
                        </>
                    ) : (
                        <>
                            <Route path="/" element={<Home />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route
                                path="/SignPublisher"
                                element={<SignPublisher />}
                            />
                            <Route path="/offrs" element={<Offers />} />
                            <Route path="/SignIn" element={<SignUp />} />
                            <Route path="/login" element={<Login />} />
                        </>
                    )}
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
