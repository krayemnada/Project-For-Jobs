import axios from "axios";
import {
    DELETE_USER_FAIL,
    EDIT_USER,
    EDIT_USER_FAIL,
    EDIT_USER_SUCCESS,
    GET_USER,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
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

// export const editUser = (editedUser) => async (dispatch) => {
//     dispatch({
//         type: EDIT_USER,
//     });
//     try {
//         const res = await axios.put(`/user/put/${editedUser._id}`, editedUser);
//         dispatch({
//             type: EDIT_USER_SUCCESS,
//             payload: res.data,
//         });
//     } catch (error) {
//         dispatch({
//             type: EDIT_USER_FAIL,
//             payload: error.response.data,
//         });
//     }
// };
