import starReducer from "./StarReducer";
import { combineReducers } from "redux";

export default combineReducers({
    Star: starReducer,
 })