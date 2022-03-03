import {
    ADD,
    ADD_FAIL,
    ADD_SUCCESS,
    DELETE,
    EDIT,
    GET,
    GETBYID,
    GET_FAIL,
    GET_SUCCESS,
} from "../actionTypes";

const init = {
    offers: [],
    loading: false,
    offerFile: null,
    offerLoading: true,
    error: null,
};

export const OfferReducer = (state = init, { type, payload }) => {
    switch (type) {
        case GET:
        case ADD:
            return {
                ...state,
                loading: true,
            };
        case GET_FAIL:
        case ADD_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        // case DELETE:
        //     return {
        //         ...state,
        //         loading: false,
        //         offers: state.offers.filter((el) => el._id !== payload),
        //     };
        case GET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                offers: payload,
            };
        case ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                offers: [...state.offers, payload],
            };

        // case EDIT:
        //     return {
        //         ...state,
        //         loading: false,
        //         offers: state.offers.map((el) =>
        //             el._id === payload._id ? payload : el
        //         ),
        //     };
        default:
            return state;
    }
};
export default OfferReducer;
