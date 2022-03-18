import { combineReducers } from "redux";
import OfferReducer from "./OfferReducer";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
export default combineReducers({ OfferReducer, userReducer, postReducer });
