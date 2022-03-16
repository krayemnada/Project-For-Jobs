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
    GET_OFFERS,
    GET_OFFERS_SUCCESS,
    GET_OFFERS_FAIL,
    GET_SUCCESS,
    GET_USER_FAIL,
    GET_DETAIL_OFFERS,
    GET_DETAIL_OFFERS_SUCCESS,
    GET_DETAIL_OFFERS_FAIL,
} from "../actionTypes";

const init = {
    offers: [],
    UserLoading: false,
    loading: false,
    offerFile: [],
    detailOffers: [],
    detailLoading: false,
    UsersOffers: [],
    offerLoading: true,
    error: null,
};

export const OfferReducer = (state = init, { type, payload }) => {
    switch (type) {
        case GET:
        case DELETE:
        case ADD:
        case EDIT:
            return {
                ...state,
                loading: true,
            };
        case GET_OFFERS:
            return {
                ...state,
                UserLoading: true,
            };
        case GET_FAIL:
        case ADD_FAIL:
        case DELETE_FAIL:
        case EDIT_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case GET_DETAIL_OFFERS_FAIL:
            return {
                ...state,
                detailLoading: false,
                error: payload,
            };
        case GET_DETAIL_OFFERS:
            return {
                ...state,
                detailLoading: true,
            };
        case GET_OFFERS_FAIL:
            return {
                ...state,
                UserLoading: false,
                error: payload,
            };
        case GET_BY_ID_FAIL:
            return {
                ...state,
                offerLoading: true,
                error: payload,
            };
        case GET_BY_ID:
            return {
                ...state,
                offerLoading: false,
            };
        case GET_BY_ID_SUCCESS:
            return {
                ...state,
                offerLoading: false,
                offerFile: payload,
                error: null,
            };
        case DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                offers: state.offers.filter((el) => el._id !== payload),
                error: null,
            };
        case GET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                offers: payload,
            };
        case GET_OFFERS_SUCCESS:
            return {
                ...state,
                UserLoading: false,
                error: null,
                UsersOffers: payload,
            };
        case GET_DETAIL_OFFERS_SUCCESS:
            return {
                ...state,
                detailLoading: false,
                error: null,
                detailOffers: payload,
            };
        case ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                offers: [...state.offers, payload],
            };

        case EDIT_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                offers: state.offers.map((el) =>
                    el._id === payload._id ? payload : el
                ),
            };
        default:
            return state;
    }
};
export default OfferReducer;
