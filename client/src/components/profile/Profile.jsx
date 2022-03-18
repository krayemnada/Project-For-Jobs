import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../redux/action/actions";
import EditUser from "../edituser/EditUser";
import Footer from "../footer/Footer";
import HeadUser from "../headUser/HeadUser";
import "./Profile.css";
const Profile = () => {
    const { user } = useSelector((state) => state.userReducer);
    console.log(user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserProfile());
    }, []);
    return (
        <div>
            <HeadUser user={user} />
            <div className="bckg">
                <div className="prof">
                    <div>
                        <img src={`${user.image}`} alt="" className="picture" />
                        <h1 className="nom">{` ${user.fullName}`}</h1>
                        <p>
                            <span style={{ marginLeft: "100px" }}>
                                {" "}
                                <i class="fa-solid fa-envelope"></i>
                            </span>{" "}
                            {`${user.email}`}
                        </p>
                    </div>
                    <div className="div2">
                        <p style={{ marginLeft: "100px" }}>
                            <strong>governorate : </strong>
                            {`${user.governorate}`}
                        </p>
                        <p style={{ marginLeft: "100px" }}>
                            <strong>Civility : </strong>
                            {`${user.civility}`}
                        </p>
                        <p style={{ marginLeft: "100px" }}>
                            <strong>Data Of Birth : </strong> {`${user.birth}`}
                        </p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div style={{ marginLeft: "300px" }}>
                        {" "}
                        <EditUser />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
