import {
    GET,
    GET_PROFILE,
    GET_PROFILE_FAIL,
    GET_PROFILE_FAIL_PUBLISHER,
    GET_PROFILE_PUBLISHER,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_SUCCESS_PUBLISHER,
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
            payload: error.response.data,
        });
    }
};

//partie publisher

//publisher sign up

export const PublisherSignUp = (newpublisher) => async (dispatch) => {
    dispatch({ type: SIGN_UP });
    try {
        const res = await axios.post("/publisher/signup", newpublisher);
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
