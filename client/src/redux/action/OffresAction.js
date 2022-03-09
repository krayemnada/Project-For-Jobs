// partie offers

import axios from "axios";

import {
    ADD,
    ADD_FAIL,
    ADD_SUCCESS,
    DELETE,
    DELETE_FAIL,
    DELETE_SUCCESS,
    EDIT,
    EDIT_FAIL,
    EDIT_SUCCESS,
    GET,
    GET_BY_ID,
    GET_BY_ID_FAIL,
    GET_BY_ID_SUCCESS,
    GET_FAIL,
    GET_SUCCESS,
} from "../actionTypes";

//get offers

export const getOffer = () => async (dispatch) => {
    // dispatch({ type: GET });
    try {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: token,
            },
        };
        const res = await axios.get("/offers/getoffers", config);

        dispatch({
            type: GET_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: GET_FAIL,
            payload: error.response.data,
        });
    }
};

// ADD offers

export const addOffers = (newoffer) => async (dispatch) => {
    dispatch({ type: ADD });
    try {
        const res = await axios.post("/offers/PubOffers", newoffer);
        // console.log(res.data);
        dispatch({
            type: ADD_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: ADD_FAIL,
            payload: error.response.data,
        });
    }
};

// delete one offer

export const deleteOffer = (_id) => async (dispatch) => {
    dispatch({ type: DELETE });
    try {
        const res = await axios.delete(`/offers/delete/${_id}`);

        dispatch({
            type: DELETE_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: DELETE_FAIL,
            payload: error.response.data,
        });
    }
};
//edit one offer
export const editOffer = (editedOffer) => async (dispatch) => {
    dispatch({
        type: EDIT,
    });
    try {
        const res = await axios.put(
            `/Offers/editone/${editedOffer._id}`,
            editedOffer
        );
        dispatch({
            type: EDIT_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: EDIT_FAIL,
            payload: error.response.data,
        });
    }
};
// get one offer
export const getById = (_id) => async (dispatch) => {
    dispatch({
        type: GET_BY_ID,
    });
    try {
        const res = await axios.get(`/Offers/getOne/${_id}`);
        dispatch({
            type: GET_BY_ID_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: GET_BY_ID_FAIL,
            payload: error.response.data,
        });
    }
};
