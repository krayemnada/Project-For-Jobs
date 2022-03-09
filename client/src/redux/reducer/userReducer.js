import {
    DELETE_PUBLISHER,
    DELETE_PUBLISHER_SUCCESS,
    DELETE_USER_FAIL,
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
    GET_USER,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    LOGIN,
    LOGIN_FAIL,
    LOGIN_FAIL_PUBLISHER,
    LOGIN_PUBLISHER,
    LOGIN_SUCCESS,
    LOGIN_SUCCESS_PUBLISHER,
    SIGN_UP,
    SIGN_UP_FAIL,
    SIGN_UP_FAIL_PUBLISHER,
    SIGN_UP_PUBLISHER,
    SIGN_UP_SUCCESS,
    SIGN_UP_SUCCESS_PUBLISHER,
} from "../actionTypes";

const init = {
    user: [],
    ListUsers: [],
    publisher: [],
    error: null,
    loading: false,
    token: localStorage.getItem("token"),
    isAuth: false,
};

export const userReducer = (state = init, { type, payload }) => {
    switch (type) {
        case GET_USER:
        case DELETE_PUBLISHER:
        case GET_PUBLISHER:
        case SIGN_UP:
        case LOGIN:
        case GET_PROFILE:
        case SIGN_UP_PUBLISHER:
        case LOGIN_PUBLISHER:
        case GET_PROFILE_PUBLISHER:
            return {
                ...state,
                // loading: true,
            };
        case GET_USER_FAIL:
        case DELETE_USER_FAIL:
        case GET_PUBLISHER_FAIL:
        case SIGN_UP_FAIL:
        case LOGIN_FAIL:
        case GET_PROFILE_FAIL:
        case LOGIN_FAIL_PUBLISHER:
        case SIGN_UP_FAIL_PUBLISHER:
        case GET_PROFILE_FAIL_PUBLISHER:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        case SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload,
                error: null,
            };
        case SIGN_UP_SUCCESS_PUBLISHER:
            return {
                ...state,
                loading: false,
                publisher: payload,
                error: null,
            };
        case GET_PROFILE_SUCCESS_PUBLISHER:
            return {
                ...state,
                loading: false,
                error: null,
                publisher: payload,
            };
        case GET_PUBLISHER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                publisher: payload,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                ListUsers: payload,
            };
        case LOGIN_SUCCESS_PUBLISHER:
            return {
                ...state,
                loading: false,
                error: null,
                publisher: payload.publisher,
                token: payload.token,
                isAuth: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: payload.user,
                token: payload.token,
                isAuth: true,
            };
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: payload,
            };
        case DELETE_PUBLISHER_SUCCESS:
            return {
                ...state,
                loading: false,
                publisher: state.publisher.filter((el) => el._id !== payload),
                error: null,
            };

        default:
            return state;
    }
};
export default userReducer;
