import { combineReducers } from "redux";
import OfferReducer from "./OfferReducer";
import userReducer from "./userReducer";

export default combineReducers({ OfferReducer, userReducer });
