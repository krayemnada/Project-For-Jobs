import axios from "axios";
import {
    DELETE_USER_FAIL,
    EDIT_USER,
    EDIT_USER_FAIL,
    EDIT_USER_SUCCESS,
    GET_USER,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    USER_EDIT,
    USER_EDIT_FAIL,
    USER_EDIT_SUCCESS,
    USER_FILE,
    USER_FILE_FAIL,
    USER_FILE_SUCCESS,
} from "../actionTypes";

export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get("/user/getUser");
        dispatch({
            type: GET_USER_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: GET_USER_FAIL,
            payload: error.response.data,
        });
    }
};

export const deleteUser = (_id) => async (dispatch) => {
    try {
        axios.delete(`/user/deleteUser/${_id}`);

        dispatch(getUsers());
    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload: error.response.data,
        });
    }
};

export const editUser = (editedUser) => async (dispatch) => {
    dispatch({
        type: USER_EDIT,
    });
    try {
        const res = await axios.put(
            `/user/editUser/${editedUser._id}`,
            editedUser
        );
        dispatch({
            type: USER_EDIT_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: USER_EDIT_FAIL,
            payload: error.response.data,
        });
    }
};
// user file
export const UserFile = (newFile) => async (dispatch) => {
    dispatch({ type: USER_FILE });
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const res = await axios.post("/user/AddUser", newFile, config);
        // console.log(res.data);
        dispatch({ type: USER_FILE_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({
            type: USER_FILE_FAIL,
            payload: error.response.data,
        });
    }
};
