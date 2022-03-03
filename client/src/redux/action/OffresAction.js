// partie offers

import axios from "axios";

import {
    ADD,
    ADD_FAIL,
    ADD_SUCCESS,
    DELETE,
    DELETE_FAIL,
    DELETE_SUCCESS,
    GET,
    GET_FAIL,
    GET_SUCCESS,
} from "../actionTypes";

//get offers

export const getOffer = () => async (dispatch) => {
    dispatch({ type: GET });
    try {
        const res = await axios.get("/offers/getoffers");
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

export const deleteUser = (_id) => async (dispatch) => {
    dispatch({ type: DELETE });
    try {
        const res = axios.delete(`/offers/delete/${_id}`);

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
