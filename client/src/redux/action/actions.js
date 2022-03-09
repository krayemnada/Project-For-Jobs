import {
    DELETE_PUBLISHER,
    DELETE_PUBLISHER_FAIL,
    DELETE_PUBLISHER_SUCCESS,
    GET,
    GET_PROFILE,
    GET_PROFILE_FAIL,
    GET_PROFILE_FAIL_PUBLISHER,
    GET_PROFILE_PUBLISHER,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_SUCCESS_PUBLISHER,
    GET_PUBLISHER,
    GET_PUBLISHER_FAIL,
    GET_PUBLISHER_SUCCESS,
    LOGIN,
    LOGIN_FAIL,
    LOGIN_FAIL_PUBLISHER,
    LOGIN_SUCCESS,
    LOGIN_SUCCESS_PUBLISHER,
    SIGN_UP,
    SIGN_UP_FAIL,
    SIGN_UP_FAIL_PUBLISHER,
    SIGN_UP_SUCCESS,
    SIGN_UP_SUCCESS_PUBLISHER,
} from "../actionTypes";
import axios from "axios";
//partie user

//user sign up

export const userSignUp = (newUser) => async (dispatch) => {
    dispatch({ type: SIGN_UP });
    try {
        const res = await axios.post("/user/signUp", newUser);
        localStorage.setItem("token", res.data.token);
        dispatch({
            type: SIGN_UP_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: SIGN_UP_FAIL,
            payload: error.response.data,
        });
    }
};

//user log in

export const userLogin = (loginUser, navigate) => async (dispatch) => {
    dispatch({ type: LOGIN });
    try {
        const res = await axios.post("/user/login", loginUser);
        localStorage.setItem("token", res.data.token);

        if (res.status === 203) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
            navigate("/profile");
            window.location.reload(false);
        }
    } catch (error) {
        alert(error.response.data.msg);
        // dispatch({
        //     type: LOGIN_FAIL,
        //     payload: error.response.data,
        // });
    }
};

// get user profile

export const getUserProfile = () => async (dispatch) => {
    dispatch({
        type: GET_PROFILE,
    });
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        },
    };
    try {
        const res = await axios.get("/user/get", config);

        dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: GET_PROFILE_FAIL,
            // payload: error.response.data,
        });
    }
};

//partie publisher

//publisher sign up

export const PublisherSignUp = (newpublisher) => async (dispatch) => {
    dispatch({ type: SIGN_UP });
    try {
        const res = await axios.post("/publisher/signup", newpublisher);
        localStorage.setItem("token", res.data.token);
        dispatch({
            type: SIGN_UP_SUCCESS_PUBLISHER,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: SIGN_UP_FAIL_PUBLISHER,
            payload: error.response.data,
        });
    }
};

//publisher log in

export const PublisherLogin = (publisher) => async (dispatch) => {
    dispatch({ type: LOGIN });
    try {
        const res = await axios.post("/publisher/login", publisher);
        localStorage.setItem("token", res.data.token);
        dispatch({
            type: LOGIN_SUCCESS_PUBLISHER,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL_PUBLISHER,
            payload: error.response.data,
        });
    }
};

// get publisher profile

export const getPublisherProfile = () => async (dispatch) => {
    dispatch({
        type: GET_PROFILE_PUBLISHER,
    });
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    try {
        const res = await axios.get("/publisher/get", config);

        dispatch({
            type: GET_PROFILE_SUCCESS_PUBLISHER,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: GET_PROFILE_FAIL_PUBLISHER,
            payload: error.response.data,
        });
    }
};
//get all publishers
export const getPublishers = () => async (dispatch) => {
    dispatch({
        type: GET_PUBLISHER,
    });

    try {
        const res = await axios.get("/publisher/getAll");

        dispatch({
            type: GET_PUBLISHER_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: GET_PUBLISHER_FAIL,
            payload: error.response.data,
        });
    }
};
//delete publisher
export const deletePublisher = (_id) => async (dispatch) => {
    dispatch({ type: DELETE_PUBLISHER });
    try {
        const res = await axios.delete(`/publisher/deletePublisher/${_id}`);
        // dispatch({
        //     type: DELETE_PUBLISHER_SUCCESS,
        //     payload: _id,
        // });
        dispatch(getPublishers());
    } catch (error) {
        dispatch({
            type: DELETE_PUBLISHER_FAIL,
            payload: error.response.data,
        });
    }
};
