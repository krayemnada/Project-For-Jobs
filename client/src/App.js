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
import Details from "./components/details/Details";
import GetOffers from "./components/GetOffers/GetOffers";
import Publisher from "./components/publisher/Publisher";
import Users from "./components/users/Users";
import AdminOffers from "./components/adminOffers/AdminOffers";
import HomeUser from "./components/homeUser/HomeUser";
import OfferDetails from "./components/offersDetails/OfferDetails";
import UploadFile from "./components/uploadFile/UploadFile";
import About from "./components/about/About";
import HeadUser from "./components/headUser/HeadUser";
import OfferConsult from "./components/offerConsult/OfferConsult";
import Upload from "./components/postUpload/Upload";

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
                                element={<Navigate replace to="/admin" />}
                            />
                            <Route path="/admin" element={<Dashboard />} />
                            <Route path="/pub" element={<Publisher />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/off" element={<AdminOffers />} />
                        </>
                    ) : user && user.userRole === "publisher" ? (
                        <>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/profile"
                                element={<GetProfilePublisher />}
                            />
                            <Route path="/myOffers" element={<Offers />} />
                            <Route path="/addOffer" element={<AddOffer />} />
                            <Route path="/detail/:id" element={<Details />} />
                            <Route path="/CVFile" element={<OfferConsult />} />
                        </>
                    ) : user && user.userRole === "User" ? (
                        <>
                            <Route
                                path="/login"
                                element={<Navigate replace to="/HomeUser" />}
                            />
                            <Route path="/upload" element={<Upload />} />
                            <Route
                                path="/detailOffer/:id"
                                element={<OfferDetails />}
                            />
                            <Route path="/HomeUser" element={<HomeUser />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route
                                path="/offersConsult"
                                element={<GetOffers />}
                            />
                            <Route
                                path="/detailOffer/:id"
                                element={<OfferDetails />}
                            />
                            <Route
                                path="/uploadFile"
                                element={<UploadFile />}
                            />
                            <Route path="/contact" element={<Contact />} />
                        </>
                    ) : (
                        <>
                            <Route path="/" element={<Home />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/about" element={<About />} />
                            <Route
                                path="/SignPublisher"
                                element={<SignPublisher />}
                            />

                            <Route path="/SignIn" element={<SignUp />} />
                            <Route path="/login" element={<Login />} />
                        </>
                    )}
                </Routes>
                {/* <Footer /> */}
            </Router>
        </div>
    );
}

export default App;
