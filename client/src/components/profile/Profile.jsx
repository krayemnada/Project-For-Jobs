import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../redux/action/actions";
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
            <HeadUser />
            <div className="bckg">
                <div className="prof">
                    <div>
                        <img src={`${user.image}`} alt="" className="picture" />
                        <h1 className="nom">{` ${user.fullName}`}</h1>
                        <p>
                            <span>
                                {" "}
                                <i class="fa-solid fa-envelope"></i>
                            </span>{" "}
                            {`${user.email}`}
                        </p>
                    </div>
                    <div className="div2">
                        <p>
                            <strong style={{ marginRight: "120px" }}>
                                Place :{" "}
                            </strong>
                            {`${user.governorate}`}
                        </p>
                        <p>
                            <strong style={{ marginRight: "40px" }}>
                                Civility :{" "}
                            </strong>
                            {`${user.civility}`}
                        </p>
                        <p>
                            <strong>Data Of Birth : </strong> {`${user.birth}`}
                        </p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <Button>Edit my profile</Button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
